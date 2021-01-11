  // listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    db.collection('guides').get().then(snapshot => {
      setupGuides(snapshot.docs);
    });    
  } else {
    console.log('user logged out');
    setupGuides([]);
  }
})

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});




// DOM elements
const guideList = document.getElementById('guides');

// setup guides
const setupGuides = (data) => {

  let html = '';
  data.forEach(doc => {
    const guide = doc.data();
    const div = `
    <div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="${guide.image}" alt="Card image">
    
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
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//   auth.signOut();
//   window.location.replace("../index.html");
// });