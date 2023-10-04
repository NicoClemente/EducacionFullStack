console.log(
    "Escribe en la pantalla un color y apreta enter para agregarlo al array"
  );
  let colores = ["red", "green", "blue", "black"];
  let colorInput = "";

  const mainElement = document.querySelector("main");
  const h2Element = document.querySelector("main h2");
  var buttons = document.getElementsByTagName('button');
    const colorPrevButton = buttons[0];
    const colorNextButton = buttons[1];
  let colorIndex = 0;

  const cambiarColorFondo = () => {
    mainElement.style.backgroundColor = colores[colorIndex];
    h2Element.textContent =
      colores[colorIndex].charAt(0).toUpperCase() +
      colores[colorIndex].slice(1);
  };

  colorPrevButton.addEventListener("click", () => {
    colorIndex = (colorIndex - 1 + colores.length) % colores.length;
    cambiarColorFondo();
  });

  colorNextButton.addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colores.length;
    cambiarColorFondo();
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (event.key !== "Enter") colorInput += key;
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const nuevosColores = colorInput.split(",");
      console.log(nuevosColores);

      colores = [...colores, ...nuevosColores];
      colorInput = "";

      cambiarColorFondo();
    }
    const h2Element = document.querySelector("main h2");

    h2Element.style.color = 'white';
  });