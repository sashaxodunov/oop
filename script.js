class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  createElement() {
    let elem;

    if (this.selector.startsWith(".")) {
      elem = document.createElement("div");
      elem.classList.add(this.selector.slice(1));
    } else if (this.selector.startsWith("#")) {
      elem = document.createElement("p");
      elem.id = this.selector.slice(1);
    }

    elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;
      position: absolute;
      top: 50px;
      left: 50px;
    `;

    elem.textContent = "Квадрат";
    document.body.appendChild(elem);

    return elem; // важно вернуть элемент
  }
}

// обработчик с callback
function handleMovement(callback) {
  document.addEventListener("keydown", (e) => {
    callback(e);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const square = new DomElement(".square", 100, 100, "blue", 16);
  const elem = square.createElement();

  let topPos = 50;
  let leftPos = 50;

  handleMovement((e) => {
    switch (e.key) {
      case "ArrowUp":
        topPos -= 10;
        break;
      case "ArrowDown":
        topPos += 10;
        break;
      case "ArrowLeft":
        leftPos -= 10;
        break;
      case "ArrowRight":
        leftPos += 10;
        break;
    }

    elem.style.top = topPos + "px";
    elem.style.left = leftPos + "px";
  });
});
