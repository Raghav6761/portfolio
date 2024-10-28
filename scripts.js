// Custom JS for scroll effects and animations
$(document).ready(function() {
  // Smooth scrolling
  $('a.nav-link').on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});