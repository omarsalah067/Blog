// import registrationForm from '../partials/registration-form.html';
// import loginForm from '../partials/login-form.html';

// const routes = {
//   '/': 'Home Page',
//   '/login': loginForm,
//   '/registration': registrationForm,
// };

// const rootDiv = document.getElementById('root');
// rootDiv.innerHTML = routes[window.location.pathname];

// const routingPathes = document.querySelectorAll('.routing-path');
// routingPathes.forEach(path => path.addEventListener('pointerdown', handleNavigation));

// function handleNavigation(e) {
//   let pathname;
//   switch (e.target.innerText) {
//     case 'Registration':
//       pathname = '/registration';
//       break;
//     case 'Log In':
//       pathname = '/login';
//       break;

//     default:
//       pathname = '/';
//       break;
//   }

//   try {
//     window.history.pushState({}, pathname, window.location.origin + pathname);
//     rootDiv.innerHTML = routes[pathname];
//   } catch (error) {
//     console.log(error);
//   }
// }

// window.onpopstate = () => {
//   rootDiv.innerHTML = routes[window.location.pathname];
// };

// const paragraph = elem.querySelector(".hidden");
