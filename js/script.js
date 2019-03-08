var iPhone6S = new Phone("Apple", 2250, "silver","32G", 2016);
var SamsungGalaxyS6 = new Phone("Samsung", 1550, "black", "8G", 2017);
var OnePlusOne = new Phone("OnePlus", 2250, "white", "32G", 2017);

function Phone(brand, price, color, storage, premiere) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    this.storage = storage;
    this.premiere = premiere;
    this.getWarrantyCost = this.price * 0.1

}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", the warranty cost is " + this.getWarrantyCost + ", storage is " + this.storage + " and the premiere was in " + this.premiere + ".");
}

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
