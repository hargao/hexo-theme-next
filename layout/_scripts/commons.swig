{%
  set js_commons = [
    'src/utils.js',
    'src/motion.js',
    'src/kity.min.js',
    'src/kityminder.core.min.js',
    'src/mindmap.js'
  ]
%}

{% for common in js_commons %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ common }}?v={{ version }}"></script>
{% endfor %}
