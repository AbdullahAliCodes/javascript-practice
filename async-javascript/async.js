// Async & Await

const getTodos = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
