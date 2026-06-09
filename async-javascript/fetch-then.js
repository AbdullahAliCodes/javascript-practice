// fetch API

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    console.log("resolved:", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected:", err);
  });
