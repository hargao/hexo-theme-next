$(document).ready(function() {
        if ($('.mindmap').length > 0){
        var markdownText = $('.mindmap').text().trim();
        $('.mindmap').text('')
        var minder = new kityminder.Minder({
            renderTo: '.mindmap'
        });
        minder.importData('markdown', markdownText);
        minder.disable();
        minder.execCommand('hand');}
    }
)
