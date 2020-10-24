function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var x = document.getElementById("dark");
 if (x.style.display === "block") {
    x.style.display = "block";
    x.innerHTML = "Dark Mode";
  } else {
    x.style.display = "block";
    x.innerHTML = "Normal Mode";
  }
  }