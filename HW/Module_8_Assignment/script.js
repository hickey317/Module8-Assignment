// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'Fictionland',
        capital: 'Imaginaria',
        largestCity: 'Fabletown',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Taleland',
                capital: 'Narrative City',
                largestCity: 'Mythos',
                area: 12345,
            },
            {
                name: 'Plot Peninsula',
                capital: 'Storyville',
                largestCity: 'Draftsburg',
                area: 67890,
            },
        ],
    },
    {
        country: 'Mythica',
        capital: 'Legend City',
        largestCity: 'Epicville',
        subdivisionName: 'district',
        subdivisions: [
            {
                name: 'Folklore Forest',
                capital: 'Lore Lake',
                largestCity: 'Saga Stream',
                area: 54321,
            },
            {
                name: 'Parable Plains',
                capital: 'Allegory Alley',
                largestCity: 'Fable Field',
                area: 98765,
            },
        ],
    },

]

// Your code goes below
document.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.querySelector('main');

    GEOGRAPHY_LIST.forEach(country => {
        let countryElement = document.createElement('div');
        countryElement.innerHTML = `<h2>${country.country}</h2>
                                    <p>Capital: ${country.capital}</p>
                                    <p>Largest City: ${country.largestCity}</p>
                                    <h3>${country.subdivisionName[0].toUpperCase() + country.subdivisionName.slice(1)}s</h3>`;
        let list = document.createElement('ul');
        country.subdivisions.forEach(subdivision => {
            let item = document.createElement('li');
            item.innerHTML = `<strong>${subdivision.name}</strong> (Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}, Area: ${subdivision.area} km²)`;
            list.appendChild(item);
        });
        countryElement.appendChild(list);
        mainElement.appendChild(countryElement);
    });
});
