const initializeProjects = () => {
  return [
    {
      title: "Bakery",
      img: "bakery.jpg",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Aero",
      img: "aero.jpg",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Fletcher",
      img: "fletcher.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "TableGame",
      img: "tablegame.jpg",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Charismatic Widgets",
      img: "widgets.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Firefighter",
      img: "firefighter.jpg",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Virtual Visit",
      img: "virtual.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "EZStorage",
      img: "ezstorage.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "BroomRoom",
      img: "broomroom.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Unreal Shooter",
      img: "unrealshooter.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Epic Projects",
      img: "epicprojects.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Nawtes",
      img: "nawtes.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Jump of the Death",
      img: "jumpofthedeath.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Web Tools",
      img: "tools.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Swing Shooter",
      img: "swing.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Web Chronicles",
      img: "chronicles.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "QGL",
      img: "qgl.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Todo",
      img: "todoscreen.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Infinite Creatures",
      img: "infinitecreatures.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Space shooter",
      img: "spaceshooter.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Parking",
      img: "parking.jpeg",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Le Critikator",
      img: "lecritikator.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "AFK",
      img: "afk.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "List",
      img: "list.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Webcovoiturage",
      img: "webco.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Catch me",
      img: "catch.png",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
    {
      title: "Rover",
      img: "rover.jpg",
      type:"nice type",
      content:"Lol das the content",
      tech:"dem techs",
    },
  ];
}

const formatTitle = (title) => {
  return title.split(' ').join('-');
}

const unformatTitle = (title) => {
  return title.split('-').join(' ');
}

const getBaseURL = (URL) => {
  let splitURL = URL.split('/');
  splitURL.pop();
  splitURL = splitURL.join('/').replace(/,/g, "/");
  return splitURL;
}

const displayProjects = (projects) => {
  projects.forEach(element => {
    $("#work-projects").append(`
      <div class="work-project" data-title=${formatTitle(element.title)}>
        <p>${element.title}</p>
        <div id='${formatTitle(element.title)}' class='work-project-img'>
        </div>
      </div>`);
      //TODO: improve the url replacement
    let backgroundImg = `${getBaseURL(window.location.href)}/images/projects/${element.img}`;
    $(`#${formatTitle(element.title)}`).css("background-image", `url(${backgroundImg})`);
  });
}

const addClickHandler = (projects) => {
  const projectDetails = "#work-project-details";
  const projectsSection = "#work-projects";

  $(".work-project").click((e) => {
    $(projectDetails).css("visibility", "visible");
    $(projectsSection).css("display", "none");

    let correspondingProject = projects.find(x => formatTitle(x.title) === $(e.currentTarget).data('title'));
    $("#work-project-details-content").append(correspondingProject.content);
    $("#work-project-details-type").append(correspondingProject.type);
    $("#work-project-details-tech").append(correspondingProject.tech);
  });
}


$(document).ready(function(){
  let projects = initializeProjects();
  displayProjects(projects);
  addClickHandler(projects);
});



