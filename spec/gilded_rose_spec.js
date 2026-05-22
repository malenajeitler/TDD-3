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

});
