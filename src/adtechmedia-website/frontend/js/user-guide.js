jQuery(function($) {
  'use strict';

  var runner = new Flatdoc.runner({
    // fetcher: Flatdoc.github('ddimitrioglo/turbo-tribble')
    fetcher: Flatdoc.file('/adtechmedia-website/files/readme.md')
  });

  runner.run();

});
