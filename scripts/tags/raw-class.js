'use strict';

/**
* rawClass tag
*
* Syntax:
*   {% rawclass [class] %}
*   Quote string
*   {% endrawclass %}
*/

function rawClass (args, content) {
  return '<blockquote class="raw-class ' + args.join(' ') + '">' + content + '</blockquote>';
}

hexo.extend.tag.register('rawclass', rawClass, {ends: true});
