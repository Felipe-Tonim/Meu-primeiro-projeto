function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png") (img.alt = "foto de Maik brito sorrindo de oculos escuro e fundo azul");
  } else  img.setAttribute("src", "./assets/avatar.png", "alt, foto b") (img.alt = "foto de maik brito sorrindo com fundo amarelo");
  }
