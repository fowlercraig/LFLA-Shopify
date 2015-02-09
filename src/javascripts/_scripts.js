$( document ).ready(function() {

  function scripts(){

    $(".royalslider").royalSlider({
      keyboardNavEnabled: true,
      imageScaleMode : 'fill',
      imageScalePadding: 0,
      transitionType: 'fade',
      controlNavigation: 'bullets',
      autoHeight: true,
      block: {
        delay: 400
      }
    });

    $('#accordion ul').accordion(); 

  }

  scripts();

  // Quick Look Modal

  $('.quicklook').magnificPopup({
    type: 'ajax',
    mainClass: 'quicklook-modal gridlock-fluid',
    ajax: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    callbacks: {
      parseAjax: function(mfpResponse) {
        mfpResponse.data = $(mfpResponse.data).find('#product');
        console.log('Ajax content loaded:', mfpResponse);
      },
      ajaxContentAdded: function() {
        console.log(this.content);
        scripts();
      },
    }
  });

  // Formstone Stuffs
  $(".selector-wrapper select").selecter();

});