$(function () {
  var $content = $('#mediumPosts');
  var data = {
    rss_url: 'https://blog.adtechmedia.io/feed/'
  };
  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status == 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {
        var description = $(item.description);
        var trimmedString = description[0].innerText;
        if(!trimmedString) {
          var innerText = item.description.replace(/<[^>]+>/g,"");
          var maxLength = 100;
          trimmedString = innerText.substr(0, maxLength) + '...';
        }

        output += '<div class="blog-post">';
        output += '<h3 class="blog-title"><a href="'+ item.link + '" target="_blank">' + item.title + '</a></h3>';
        output += '<p class="post-description">' + trimmedString + '</p>';
        output += '<div class="post-meta"><span class="post-author"><a href="https://blog.adtechmedia.io/@MitocGroup" target="_blank">' + item.author + '</a></span>';
        output += '<span class="post-date">' + $.format.date(item.pubDate, "MMM dd") + "</span></div>";
        output += '</div>';
        return k < 2;
      });
      $content.html(output);
    }
  });
});
