const initializeProjects = () => {
  return [
    {
      title: "Bakery",
      img: "bakery.jpg",
      type:"Personal project",
      content:"Amazon, but just for bakeries!",
      tech:"ReactJS, Redux, HTML, CSS",
    },
    {
      title: "Aero",
      img: "aero.jpg",
      type:"Done as a software engineer at Codelitt company",
      content:"Real estate app to create presentations",
      tech:"ReactJS, Redux, HTML, CSS",
    },
    {
      title: "Fletcher",
      img: "fletcher.png",
      type:"Done as a software engineer at Codelitt company",
      content:"TripAdvisor but for tech/software/games/teams/companies",
      tech:"Ruby on Rails, ReactJS, HTML, CSS, Alt.js",
    },
    {
      title: "TableGame",
      img: "tablegame.jpg",
      type:"School project",
      content:"Touch table mini games",
      tech:"ES6, JavaScript, TUIO, HTML, CSS",
    },
    {
      title: "Charismatic Widgets",
      img: "widgets.png",
      type:"School project",
      content:"Interactive widgets library for touch table",
      tech:"ES6, JavaScript, TUIO, HTML, CSS",
    },
    {
      title: "Firefighter",
      img: "firefighter.jpg",
      type:"School project",
      content:"Firefighter guiding and assisting app",
      tech:"ES6, jQuery, HTML, CSS",
    },
    {
      title: "Virtual Visit",
      img: "virtual.png",
      type:"2 months internship in Sogeti company",
      content:"Virtual reality building visits",
      tech:"C#, Unity",
    },
    {
      title: "EZStorage",
      img: "ezstorage.png",
      type:"School project",
      content:"Online storage app with multiple sources",
      tech:"Python, PyQt",
    },
    {
      title: "BroomRoom",
      img: "broomroom.png",
      type:"Personal project",
      content:"A chatroom, but a very cool chatroom",
      tech:"jQuery, HTML, CSS, SQL, Ajax",
    },
    {
      title: "Unreal Shooter",
      img: "unrealshooter.png",
      type:"Personal project",
      content:"Arcade 2D shooting game (space invaders-like)",
      tech:"Unreal Engine 4, Blueprint",
    },
    {
      title: "Epic Projects",
      img: "epicprojects.png",
      type:"Personal project",
      content:"Agile project management app",
      tech:"C#, XAML",
    },
    {
      title: "Nawtes",
      img: "nawtes.png",
      type:"Personal project",
      content:"Note taking app, with super stylish animations",
      tech:"Unreal Engine 4, Blueprint",
    },
    {
      title: "Jump of the Death",
      img: "jumpofthedeath.png",
      type:"Personal project",
      content:"Platform game, jump and don't die!",
      tech:"Unreal Engine 4, Blueprint",
    },
    {
      title: "Web Tools",
      img: "tools.png",
      type:"Personal project",
      content:"Tools for web dev(fonts and color picker)",
      tech:"jQuery, HTML, CSS",
    },
    {
      title: "Swing Shooter",
      img: "swing.png",
      type:"School project",
      content:"2D arcade video game for visually impaired children.",
      tech:"Java, Swing",
    },
    {
      title: "Web Chronicles",
      img: "chronicles.png",
      type:"School project",
      content:"Choose-your-story browser game",
      tech:"AngularJS, HTML, CSS",
    },
    {
      title: "QGL",
      img: "qgl.png",
      type:"School project",
      content:"Resources management and exploration app",
      tech:"Java, JUnit, Jira",
    },
    {
      title: "Todo",
      img: "todoscreen.png",
      type:"Personal project",
      content:"A very nice todo on Windows Phone",
      tech:"C#, XAML",
    },
    {
      title: "Infinite Creatures",
      img: "infinitecreatures.png",
      type:"2 months Internship in Winsiders company",
      content:"A video game wher you control a lil creature.",
      tech:"C#, Unity",
    },
    {
      title: "Space shooter",
      img: "spaceshooter.png",
      type:"Personal project",
      content:"A video game in space",
      tech:"C#, Unity",
    },
    {
      title: "Parking",
      img: "parking.jpeg",
      type:"School project",
      content:"A parking management app",
      tech:"Java",
    },
    {
      title: "Le Critikator",
      img: "lecritikator.png",
      type:"School project",
      content:"A movie review website",
      tech:"jQuery, HTML, CSS, Ajax, SQL",
    },
    {
      title: "AFK",
      img: "afk.png",
      type:"School project",
      content:"A social network web app",
      tech:"PHP, HTML, CSS",
    },
    {
      title: "List",
      img: "list.png",
      type:"School project",
      content:"Recreating the std lib list class in C++",
      tech:"C++",
    },
    {
      title: "Webcovoiturage",
      img: "webco.png",
      type:"School project",
      content:"A carpooling website",
      tech:"JavaScript, HTML, CSS",
    },
    {
      title: "Catch me",
      img: "catch.png",
      type:"School project",
      content:"Console video game",
      tech:"C++",
    },
    {
      title: "Rover",
      img: "rover.jpg",
      type:"School project",
      content:"Program a rover to make it exit a maze.",
      tech:"I used the rover software for visual coding (UML-like)",
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

const getProjectImageURL = (imageName) => {
  return `${getBaseURL(window.location.href)}/images/projects/${imageName}`;
}

const setProjectDetails = (projectDetailsId, img, title, content, type, tech ) => {
  $(`${projectDetailsId}-img`).attr("src", getProjectImageURL(img));
  $(`${projectDetailsId}-title`).text(title);
  $(`${projectDetailsId}-content`).text(content);
  $(`${projectDetailsId}-type`).text(type);
  $(`${projectDetailsId}-tech`).text(tech);
}

const  toggleProjectDetails = (projectsSection, projectDetailsId, isProjectDetailsVisible) => {
  let sectionDisplay = "";
  let detailsDisplay = "";

  if(isProjectDetailsVisible) {
    sectionDisplay =  "flex";
    detailsDisplay = "none";
  }
  else {
    sectionDisplay = "none";
    detailsDisplay = "flex";
  }

  $(projectsSection).css("display", sectionDisplay);
  $(projectDetailsId).css("display", detailsDisplay);
}

const displayProjects = (projects) => {
  projects.forEach(element => {
    $("#work-projects").append(`
      <div class="work-project" data-title=${formatTitle(element.title)}>
        <p>${element.title}</p>
        <div id='${formatTitle(element.title)}' class='work-project-img'>
        </div>
      </div>`);

    let backgroundImg = getProjectImageURL(element.img);
    $(`#${formatTitle(element.title)}`).css("background-image", `url(${backgroundImg})`);
  });
}


const addHandlerShowProjectDetails = (projectsSection, projectDetailsId, projects) => {
  $(".work-project").click((e) => {
    toggleProjectDetails(projectsSection, projectDetailsId, false);
    const clickedProject = projects.find(x => formatTitle(x.title) === $(e.currentTarget).data('title'));
    setProjectDetails(projectDetailsId, clickedProject.img, clickedProject.title, clickedProject.content, clickedProject.type, clickedProject.tech);
  });
}

const addHandlerShowProjects = (projectsSection, projectDetailsId) => {
  $("#work-button").click((e) => {
    toggleProjectDetails(projectsSection, projectDetailsId, true);
  });
}

const addHandlerBackToProjects = (projectsSection, projectDetailsId) => {
  $(`${projectDetailsId}-back`).click((e) => {
    toggleProjectDetails(projectsSection, projectDetailsId, true);
  });
}

const addClickHandlersForProjects = (projects) => {
  const projectsSection = "#work-projects";
  const projectDetailsId = "#work-project-details";
  addHandlerShowProjects(projectsSection, projectDetailsId);
  addHandlerShowProjectDetails(projectsSection, projectDetailsId, projects);
  addHandlerBackToProjects(projectsSection, projectDetailsId);
}


$(document).ready(function(){
  let projects = initializeProjects();
  displayProjects(projects);
  addClickHandlersForProjects(projects);
});


