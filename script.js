fetch("https://61fb968587801d0017a2c5e1.mockapi.io/coffee")
  .then((data) => data.json())
  // upload the data to html

  // there is no images for some data in api
  .then((coffee) =>
  coffee.forEach((data) => {
      const flags = document.querySelector(".row");
      flags.innerHTML += ` 
       <img src="${data.avatar}" alt="coffee"> `;
    })
  );
