function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert('You Don\'t have Access. To get access, Kindly Contact\nMaheyan Mridul \nEmail : developer@aparsclassroom.com');
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
    });
  }
  document.getElementById('quickstart-sign-in').disabled = true;
}
function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  window.location.replace("certificate/index.html");
    } 
  });
  document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
}

window.onload = function() {
  initApp();
};