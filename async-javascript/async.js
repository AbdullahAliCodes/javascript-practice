// Async & Await

const getTodos = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");

  if (response.status !== 200) {
    throw new Error("cannot fetch teh data");
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
