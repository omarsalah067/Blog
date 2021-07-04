export const takeFormData = e => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });

  return data;
};

export const changePage = pathname => {
  try {
    console.log('window.history: ', window.history);
    console.log('window.location: ', window.location);
    window.history.pushState({}, pathname, window.location.origin + pathname);
    location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
