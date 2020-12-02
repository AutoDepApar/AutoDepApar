
var app_firebase = {};
(function () { 
    var firebaseConfig = {
        apiKey: "AIzaSyB93HESocPC1vGx4YaNW3AIsc4am8yZwOc",
        authDomain: "certificate-generator-auth.firebaseapp.com",
        databaseURL: "https://certificate-generator-auth.firebaseio.com",
        projectId: "certificate-generator-auth",
        storageBucket: "certificate-generator-auth.appspot.com",
        messagingSenderId: "818689700970",
        appId: "1:818689700970:web:cf8d02f14bb1a66e4fc613"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_firebase = firebase;
})()
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});