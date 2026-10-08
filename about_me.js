fetch("./components/publicidad.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("publicidad").innerHTML = data;
  });