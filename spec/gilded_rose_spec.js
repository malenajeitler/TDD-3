var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  // TC_1
  it("should decrease sellIn and quality by 1 for normal items", function() {
    const gildedRose = new Shop([ new Item("Normal Item", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  // TC_2
  it("should degrade quality twice as fast once the sell by date has passed", function() {
    const gildedRose = new Shop([ new Item("Normal Item", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(18);
  });

  // TC_3
  it("should never allow quality to be negative", function() {
    const gildedRose = new Shop([ new Item("Normal Item", 10, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(0);
  });

  // TC_4
  it("should increase quality for Aged Brie the older it gets", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(21);
  });

  // TC_5
  it("should never let quality increase above 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(50);
  });

  // TC_6
  it("should not decrease quality or sellIn for Sulfuras", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
    expect(items[0].quality).toEqual(80);
  });

  // TC_7
  it("should increase quality by 1 when more than 10 days remain", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(19);
      expect(items[0].quality).toEqual(21);
    });

  // TC_8
  it("should increase quality by 2 when 10 days or less remain", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(22);
    });

});
