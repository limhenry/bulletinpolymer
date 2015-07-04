/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  $(function(){ 
   $.ajax({
      url: '//mmu-api.appspot.com/secure',
      dataType: "jsonp",
      jsonpCallback: "bulletin",
      cache: true,
      success: function(data) {
          datas = data;
          console.log("not bad");
          parsejson();
          },
      error: function (err){
        if(navigator.onLine === true){
          window.location.replace("//mmu-api.appspot.com/loginbeta");
        }
      }
   });
});



  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  app.showMap = function() {
    if (app.hasMap) {
      return;
    }

    var map = document.createElement('img');
    map.classList.add('map');
    map.src = 'images/map.jpg';
    map.alt = 'A map of our location';
    this.$.contactCard.appendChild(map);
    app.hasMap = true;
  };

})(document);
