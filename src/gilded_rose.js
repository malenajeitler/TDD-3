class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      this.updateSingleItem(item);
    }
    return this.items;
  }

  updateSingleItem(item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return;
    }

    item.sellIn -= 1;

    if (item.name === 'Aged Brie') {
      this.handleBrie(item);
    } else if (item.name.startsWith('Backstage passes')) {
      this.handleBackstagePasses(item);
    } else if (item.name.startsWith('Conjured')) {
      this.handleConjured(item);
    } else {
      this.handleNormalItem(item);
    }

    if (item.quality < 0) {
      item.quality = 0;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  handleNormalItem(item) {
    const degradation = item.sellIn < 0 ? 2 : 1;
    item.quality -= degradation;
  }

  handleConjured(item) {
    const degradation = item.sellIn < 0 ? 4 : 2;
    item.quality -= degradation;
  }

  handleBrie(item) {
    const improvement = item.sellIn < 0 ? 2 : 1;
    item.quality += improvement;
  }

  handleBackstagePasses(item) {
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }
    
    item.quality += 1;
    if (item.sellIn < 10) {
      item.quality += 1;
    }
    if (item.sellIn < 5) {
      item.quality += 1;
    }
  }
}
module.exports = {
  Item,
  Shop
}
