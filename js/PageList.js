const API_KEY = 'fa24d83993014fdaa6c363aecbca5f28';

const PageList = (argument = '') => {

  const addHoverEffect = () => {
    const cards = document.querySelectorAll(articles);

    cards.forEach((article) => {
      article.addEventListener('mouseover', () => {
        article.classList.add('hovered');
      });

      card.addEventListener('mouseout', () => {
        card.classList.remove('hovered');
      });
    });
  };

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');
    console.log("cleanedArgument", cleanedArgument);

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <h1>${article.name}</h1>
          <h2>${article.released}</h2>
          <img src="${article.background_image}" alt="${article.name}" class="game-image">
          <a href="#pagedetail/${article.id}">${article.id}</a>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
      console.log("displayResults", displayResults);
      addHoverEffect();
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
          console.log("responseData", responseData);
        });
        console.log("fetchList", fetchList);
    };

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;
    console.log("render", render);
    preparePage();
  };

  render();
  
};