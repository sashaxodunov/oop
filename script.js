// function DomElement(selector, height, width, bg, fontSize) {
//   this.selector = selector;
//   this.height = height;
//   this.width = width;
//   this.bg = bg;
//   this.fontSize = fontSize;

//   this.createElement = function () {
//     let elem;

//     if (this.selector.startsWith(".")) {
//       elem = document.createElement("div");
//       elem.classList.add(this.selector.slice(1));
//     } else if (this.selector.startsWith("#")) {
//       elem = document.createElement("p");
//       elem.id = this.selector.slice(1);
//     }

//     elem.style.cssText = `
//       height: ${this.height}px;
//       width: ${this.width}px;
//       background: ${this.bg};
//       font-size: ${this.fontSize}px;
//     `;

//     elem.textContent = "Это созданный элемент";

//     document.body.appendChild(elem);
//   };
// }

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
    `;

    elem.textContent = "Квадрат 100х100";
    document.body.appendChild(elem);
  }
}

// создаём квадрат 100x100
const square = new DomElement(".square", 100, 100, "blue", 16);

// Вызов метода
square.createElement();
