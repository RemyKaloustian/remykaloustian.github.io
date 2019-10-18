
$(document).ready(function(){
  const aboutImages = [
    {id:"statue", src:""},
    {id:"code", src:""},
    {id:"school", src:""},
    {id:"work-harder", src:""},
    {id:"code2", src:""},
    {id:"miami2", src:""},
    {id:"books", src:""},
  ];

  let hasLoadedImages = false;

  $("#about-button").click((e) => {
    if(!hasLoadedImages){
      hasLoadedImages = true;
      aboutImages.forEach(element => {
        $(`#about-img-${element.id}`).append(`<img src="${getImageURL(element.id)}.jpg"/>`);
      });
    }
  });
  
});
