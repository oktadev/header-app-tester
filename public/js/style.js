jQuery(function($) {
    //restores the base template on initial load
    if (supports_storage) {
        var theme = localStorage.theme;
        if (theme) {
            set_theme(theme);
        }
    } else {
        $('#theme-dropdown').hide();
    }

    //changes template if needed
    $('body').on('click', '.change-style-menu-item', function() {
      var theme_name = $(this).attr('rel');
      var theme = "/css/" + theme_name + ".css";
      set_theme(theme);
    });
});

function set_theme(theme) {
    $('link[title="main"]').attr('href', theme);
    if (supports_storage) {
      localStorage.theme = theme;
    }
}

function supports_html5_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }
  
  var supports_storage = supports_html5_storage();