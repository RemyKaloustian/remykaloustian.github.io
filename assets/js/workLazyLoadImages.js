
$(document).ready(function(){
  const workImages = [
    { id: "bakery" },
    { id: "aero" },
    { id: "fletcher" },
    { id: "party-table" },
    { id: "charismatic-widgets" },
    { id: "firefighter" },
    { id: "virtual-visit" },
    { id: "ez-storage" },
    { id: "broom-room" },
    { id: "unreal-shooter" },
    { id: "epic-projects" },
    { id: "nawtes" },
    { id: "jump-of-the-death" },
    { id: "web-tools" },
    { id: "swing-shooter" },
    { id: "browser-chronicles" },
    { id: "q-g-l" },
    { id: "todo" },
    { id: "infinite-creatures" },
    { id: "space-shooter" },
    { id: "parking" },
    { id: "le-critikator" },
    { id: "a-f-k" },
    { id: "list" },
    { id: "webcovoiturage" },
    { id: "catch-me" },
    { id: "rover" },
];

  let hasLoadedImages = false;

  $("#work-button").click((e) => {
    if(!hasLoadedImages){
      hasLoadedImages = true;
      workImages.forEach(element => {
        $(`#${element.id}`).css(`<img src="${getProjectImageURL(element.id)}.jpg"/>`);
      });
    }
  });
  
});
