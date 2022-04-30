const countries = document.getElementById('countries');

$.ajax({
    type: "GET",
    url: "https://restcountries.com/v3.1/all",
    dataType: "json",
    success: function (response) {
        console.log(response);
        showCountries(response);
    }
});

let showCountries = (response) => {
    let fragment = document.createDocumentFragment();
    response.forEach(element => {
        const article = document.createElement('article');
        article.classList.add('card');
        fragment.appendChild(article);
        const flag = document.createElement('img');
        flag.classList.add('img-fluid');
        flag.src = element.flags.svg;
        flag.alt = element.name.common;
        article.appendChild(flag);
        const div = document.createElement('div');
        div.classList.add('card-body');
        article.appendChild(div);
        const title = document.createElement('h3');
        title.textContent = element.name.common;
        div.appendChild(title);
        const population = document.createElement('p');
        population.textContent = `Population: ${element.population} hab.`;
        div.appendChild(population);
        const region = document.createElement('p');
        region.textContent = `Region: ${element.region}`;
        div.appendChild(region);
        const capital = document.createElement('p');
        capital.textContent = `Capital: ${element.capital}`;
        div.appendChild(capital);
    });
    countries.appendChild(fragment);
}