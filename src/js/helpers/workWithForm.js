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
  window.history.pushState({}, pathname, window.location.origin + pathname);
  location.reload();
};
