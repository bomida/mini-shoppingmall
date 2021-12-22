class Clothes {
  constructor(color, gender, size) {
    this.color = color;
    this.gender = gender;
    this.size = size;
  }
  getType() {
    return this.constructor.name.toLocaleLowerCase();
  }
}
class Tshirt extends Clothes {}
class Pants extends Clothes {}
class Skirt extends Clothes {}

class Shop {
  constructor() {
    this.item = [
      new Pants('blue', 'female', 'large'),
      new Pants('pink', 'male', 'small'),
      new Pants('yellow', 'female', 'large'),
      new Tshirt('blue', 'female', 'small'),
      new Tshirt('pink', 'male', 'large'),
      new Tshirt('yellow', 'female', 'small'),
      new Skirt('blue', 'male', 'large'),
      new Skirt('pink', 'female', 'large'),
      new Skirt('yellow', 'female', 'small'),
      new Pants('blue', 'female', 'large'),
      new Tshirt('pink', 'male', 'large'),
      new Tshirt('pink', 'male', 'large'),
      new Tshirt('yellow', 'female', 'small'),
      new Skirt('blue', 'male', 'large'),
      new Pants('pink', 'male', 'small'),
      new Skirt('pink', 'female', 'large'),
    ];
    this.container = document.querySelector('# items');
  }

  render(kind = null, filter = null) {
    console.log(`kind: ${kind}, filter: ${filter}`);
    document.getElementById('items').innerHTML = '';

    for(const item of this.items) {
      const type = item. getType();
      const color = item.color;

      if(kind === 'byType' && type != filter) continue;
      if(kind === 'byColor' && color != filter) continue;
      const article = craeteItemElement(item);
      this.container.appendChild(article);
    }
  }
}

function craeteItemElement(item) {
  const article = document.createElement('article');
  article.setAttribute('class', 'item');
  article.setAttribute('type', type);
  article.setAttribute('color', color);

  const img = document.craeteItemElement('img');
  const imgName = item.color + '_' + type.substr(0, 1);
  img.alt = imgName;
  img.src = 'imgs/' + imgName + '.png';
  article.appendChild(img);

  const span = document.craeteItemElement('span');
  span.innerHTML = item.gender + ', ' + item.size + ' size';
}

const shop = new Shop();
shop.render();