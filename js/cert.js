var config = {
    apiKey: "AIzaSyB93HESocPC1vGx4YaNW3AIsc4am8yZwOc",
    authDomain: "certificate-generator-auth.firebaseapp.com",
    databaseURL: "https://certificate-generator-auth.firebaseio.com",
    projectId: "certificate-generator-auth",
    storageBucket: "certificate-generator-auth.appspot.com",
    messagingSenderId: "818689700970",
    appId: "1:818689700970:web:cf8d02f14bb1a66e4fc613"
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('guides').get().then(snapshot => {
            setupGuides(snapshot.docs);
        });
    } else {
        setupGuides([]);
        window.location.replace("../index.html");
    }
})

const logout = document.getElementById('logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location.replace("../index.html");
});
const guideList = document.getElementById('guides');
const setupGuides = (data) => {

    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        const div = `
<div class="card-deck">
<div class="card">
  <img class="card-img-bottom" src="${guide.image}" alt="Card image">

  <div class="card-img-overlay">
      <h4 class="card-title-danger">${guide.title}</h4>
      <a href="${guide.content}" target="_blank" class="btn btn-outline-danger">Click Here</a>
  
</div>
</div>
</div>
`;
        html += div;
    });
    guideList.innerHTML = html
};
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});