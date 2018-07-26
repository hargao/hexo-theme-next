$(document).ready(function() {
        if ($('.mindmap').length > 0){
          var markdownText = $('.mindmap').text().trim();
          $('.mindmap').text('')
          var minder = new kityminder.Minder({
              renderTo: '.mindmap'
          });
          minder.useTemplate('right');

          minder.importData('markdown', markdownText);
          minder.execCommand('Zoom', 90);

          minder.disable();
          minder.execCommand('hand');

          setTimeout(function() {
                  minder.useTemplate('right');
                  minder._viewDragger.move(new kity.Point(-minder._lastClientSize.width / 2.2, 0), 200);
              },
              1000
          )
        }
    }
)
