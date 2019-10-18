const getBaseURL = (URL) => {
  let splitURL = URL.split('/');
  splitURL.pop();
  splitURL = splitURL.join('/').replace(/,/g, "/");
  return splitURL;
}

const getAboutImageURL = (imageName) => {
  return `${getBaseURL(window.location.href)}/images/about/${imageName}`;
}

const getProjectImageURL = (imageName) => {
  return `${getBaseURL(window.location.href)}/images/projects/${imageName}`;
}