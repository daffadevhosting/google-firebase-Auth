// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Add login event
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

// Add register event
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
