
$(document).ready(function(){
  var x = $('*').filter(function() {
    return $(this).css('z-index') === '9999999';
  });
  if(x != undefined){
    $(x).hide();
  }
});

