var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
    window.location.replace("index.html");
  }else {
    //   window.location.replace("login.html");
  }
});
    function logOut(){
        firebase.auth().signOut();
    }
    mainApp.logOut = logOut;
})()