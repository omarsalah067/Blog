import Dropzone from 'dropzone';
const imageBox = document.querySelector('.dropzone');

Dropzone.autoDiscover = false;

let myDropzone = new Dropzone(imageBox, {
  url: '#',
  paramName: 'image',
  maxFilesize: 2,
  maxFiles: 1,
});

myDropzone.on('addedfile', file => {
  console.log(`File added: ${file.name}`);
});
