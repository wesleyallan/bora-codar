const start = () => {
  const getData = async () => {
    try {
      const response = await fetch("src/data/data.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const createCards = async (name, location) => {
    const cards = [];
    const data = await getData();
    if (name !== "") {
      data.blocos = data.blocos.filter((bloco) =>
        bloco.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (location !== "all") {
      data.blocos = data.blocos.filter((bloco) => bloco.location === location);
    }
    data.blocos.forEach((bloco) => {
      const card = document.createElement("article");
      card.classList.add("card");
      card.classList.add("border-gray-200");
      card.innerHTML = `
        <div class="container-img">
          <img src="${bloco.img}" alt="Imagem do bloco de carnaval" />
        </div>
        <h3>${bloco.name}</h3>
        <p>${bloco.description}</p>
        <footer class="container-location">
        <img
          src="./src/assets/svg/locate.svg"
          alt="Ícone de localização"
        />
        <p>${bloco.location}</p>
        </div>
      `;
      cards.push(card);
    });
    return cards;
  };

  const render = async (name = "", location = "all") => {
    const cards = await createCards(name, location);
    const containerCards = document.getElementById("cards");
    containerCards.innerHTML = "";
    cards.forEach((card) => containerCards.appendChild(card));
  };

  window.onload = () => {
    const query = new URLSearchParams(window.location.search);

    // const queryObject = {};
    // for (let [key, value] of query.entries()) {
    //   queryObject[key] = value;
    // }

    // if (Object.keys(queryObject).length === 0) {
    //   render();
    //   return;
    // }
    // render(queryObject.name, queryObject.location);

    render(query.get("name") ?? "", query.get("location") ?? "all");
  };
};

start();
