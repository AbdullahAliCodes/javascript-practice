// Amazon Wishlist

const isAuthenticated = true;

let user = {
    wishList: []
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.addToWishlist = this.addToWishlist.bind(this);
    }

    handleAddToWishlist() {
        if(isAuthenticated) {
            setTimeout(this.addToWishlist, 1000);
        }
        else {
            console.log("Please sign in to add items to wishlist")
        }
    }

    addToWishlist() {
        user.wishList.push(this.name);
        console.log(`${this.name} has been added to the wishlist!`)
    }
} 

const product1 = new Product ("bat", 20);
product1.handleAddToWishlist();
console.log(user.wishList);