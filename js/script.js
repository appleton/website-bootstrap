/*

Author:     Andrew Appleton
Author URL: http://floatleft.com/

Contents:

1. Global Scripts
2. Modules
3. Pages

*/

/************************ 1. Global Scripts  ************************************/
/* Global object - all modules live under this */
window.App = window.App || {};

/* Scope scripts to an individual page by <html> element id */
App.htmlID = function(id, fn){
  $(function(){
    var htmlID = App.htmlID;
    if(htmlID.value !== undefined){ htmlID.value = $('html').attr('id'); }
    if(htmlID.value === id){ fn(); }
  });
};

/************************ 2. Modules  *******************************************/

/************************ 3. Pages  *********************************************/