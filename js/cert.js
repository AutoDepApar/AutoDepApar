var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
  }else {
    window.location.replace("../index.html");
  }
});
    function logOut(){
        firebase.auth().signOut();
        // window.location.replace("../index.html");
    }
    mainApp.logOut = logOut;
})()