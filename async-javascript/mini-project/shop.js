const productContainer = document.getElementById("products-container");
const loadContainer = document.getElementById("load-container");

const loadProducts = async () => {
  loadContainer.textContent = "Loading products...";
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};

loadProducts()
  .then((products) => {
    loadContainer.textContent = "";
    console.log(products);
    products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = product.title;
      productContainer.append(li);
    });
  })
  .catch((err) => {
    loadContainer.textContent = "Sorry, we cannot display the products now.";
    console.log(err);
  });
