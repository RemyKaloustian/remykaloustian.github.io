
$(document).ready(function(){
  const aboutImages = [
    { id:"statue" },
    { id:"code" },
    { id:"school" },
    { id:"work-harder" },
    { id:"code2" },
    { id:"miami2" },
    { id:"books" },
  ];

  let hasLoadedImages = false;

  $("#about-button").click((e) => {
    if(!hasLoadedImages){
      hasLoadedImages = true;
      aboutImages.forEach(element => {
        $(`#about-img-${element.id}`).append(`<img src="${getAboutImageURL(element.id)}.jpg"/>`);
      });
    }
  });
  
});
