var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('certData').get().then(snapshot => {
      setData(snapshot.docs);
    });    
  } else {
    window.location.replace("../index.html");
  }
})
function logOut(){
  firebase.auth().signOut();
}
mainApp.logOut = logOut;
})()


// DOM elements
const certList = document.getElementById('certData');

// setup guides
const setData = (data) => {

  let html = '';
  data.forEach(doc => {
    const crtdata = doc.data();
    const div = `
    <div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="${crtdata.image}" alt="Card image">
    
      <div class="card-img-overlay">
          <h4 class="card-title-danger">${crtdata.title}</h4>
          <a href="${crtdata.content}" target="_blank" class="btn btn-outline-danger">Click Here</a>
      
    </div>
  </div>
</div>
    `;
    html += div;
  });
  certList.innerHTML = html

};