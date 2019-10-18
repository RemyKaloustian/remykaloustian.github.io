const getBaseURL = (URL) => {
  let splitURL = URL.split('/');
  splitURL.pop();
  splitURL = splitURL.join('/').replace(/,/g, "/");
  return splitURL;
}

const getImageURL = (imageName) => {
  return `${getBaseURL(window.location.href)}/images/${imageName}`;
}

const getProjectImageURL = (imageName) => {
  return `${getBaseURL(window.location.href)}/images/projects/${imageName}`;
}