$( document ).ready(function() {

  $(".royalslider").royalSlider({
    keyboardNavEnabled: true,
    imageScaleMode : 'fill',
    imageScalePadding: 0,
    transitionType: 'fade',
    autoHeight: true,
    block: {
      delay: 400
    }
  });

  $('.accordion').accordion(); 

  // Quick Look Modal

  $('.quicklook').magnificPopup({
    type: 'ajax',
    ajax: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    callbacks: {
      parseAjax: function(mfpResponse) {
        mfpResponse.data = $(mfpResponse.data).find('#product-info');
        console.log('Ajax content loaded:', mfpResponse);
      },
      ajaxContentAdded: function() {
        console.log(this.content);
      },
    }
  });

  // Formstone Stuffs
  $(".selector-wrapper select").selecter();

});