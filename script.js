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
    `;

    elem.textContent = "Новый элемент";
    document.body.appendChild(elem);
  }
}

const element = new DomElement(".block", 150, 300, "green", 18);

// Вызов метода
element.createElement();
