var url = 'https://restcountries.eu/rest/v1/name/';
var countries = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            document.querySelector('table').classList.add('show');
            return resp.json();
        })
        .then(showCountriesList);
};

function showCountriesList(resp) {
    countries.innerHTML = '';
    resp.forEach(function(item) {
            var newRow = document.createElement('tr');
            var countryName = document.createElement('td');
            var countryCapital = document.createElement('td');
            var countryRegion = document.createElement('td');
            var countryPopulation = document.createElement('td');
            
            countryName.innerText = item.name;
            countryCapital.innerText = item.capital;
            countryRegion.innerText = item.region;
            countryPopulation.innerText = item.population;
            
            countries.appendChild(newRow);
            newRow.appendChild(countryName);
            newRow.appendChild(countryCapital);
            newRow.appendChild(countryRegion);
            newRow.appendChild(countryPopulation);
        });
}