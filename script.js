function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png") (img.alt = "foto de Felipe Tonim com fundo roxo");
  } else  img.setAttribute("src", "./assets/avatar.png") (img.alt = "foto de Felipe Tonim com fundo branco");
  }
