// ==UserScript==
// @name       Link to current Hackage page
// @namespace  http://github.com/benjaminfjones
// @version    0.1
// @description When viewing Haskell package documentation on http://hackage.haskell.org, add link to current package version
// @match      http://hackage.haskell.org/package/*/docs/*
// @copyright  2014, Benjamin Jones
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function replacer(match, p1, p2, p3, offset, string){
  // p1 is url prefix, p2 is package name plus dash w/o version number, p3 is url suffix
  return p1 + p2.substring(0, p2.length-2) + p3;
}

$(document).ready(function() {
  
  var url = window.location.href;
  var newURL = url.replace(/^(http:\/\/hackage\.haskell\.org\/package\/)([-\w]+)[\d.]+(\/docs\/.*)/, replacer);
  //console.log("URL of current docs: " + newURL);
  
  var newLink = $('<li>').append(
     $('<a>', {
         title: 'Current Docs',
         text:  'Current Docs',
         href:  newURL
     }).css('color', 'rgb(244, 113, 45)')
  );

  $('#page-menu').prepend(newLink);

});
