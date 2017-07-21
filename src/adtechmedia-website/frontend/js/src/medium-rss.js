jQuery(function($) {
  'use strict';

  var $content = $('#mediumPosts');
  var data = {
    rss_url: 'https://blog.adtechmedia.io/feed/'
  };

  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status === 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {
        var maxLength = 95;
        var dots = '...';
        var description = $(item.description);
        var mainCont = description[0].innerText;
        var trimmedString = mainCont ? mainCont : item.description.replace(/<[^>]+>/g, '');

        if(trimmedString.length > maxLength) {
          trimmedString = trimmedString.substr(0, maxLength) + dots;
        }

        var url = '<a href="https://blog.adtechmedia.io/@MitocGroup" target="_blank">' + item.author + '</a>';

        output += '<div class="blog-post">';
        output += '<h3 class="blog-title"><a href="'+ item.link + '" target="_blank">' + item.title + '</a></h3>';
        output += '<p class="post-description">' + trimmedString + '</p>';
        output += '<div class="post-meta"><span class="post-author">' + url + '</span>';
        output += '<span class="post-date">' + $.format.date(item.pubDate, 'MMM dd') + '</span></div>';
        output += '</div>';
        return k < 2;
      });
      $content.html(output);
    }
  });
});
