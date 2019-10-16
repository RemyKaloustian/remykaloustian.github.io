
$(document).ready(function(){
  const getBaseURL = (URL) => {
    let splitURL = URL.split('/');
    splitURL.pop();
    splitURL = splitURL.join('/').replace(/,/g, "/");
    return splitURL;
  }
 $("#cv-button").attr("href", `${getBaseURL(window.location.href)}/docs/Remy-Kaloustian-Resume-V7.1.pdf`)
});

