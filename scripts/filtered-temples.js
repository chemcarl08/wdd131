const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2001, February, 3",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg"
    },
    {
        templeName: "Baton Rouge Louisiana",
        location: "Baton Rouge, Louisiana",
        dedicated: "2000, July, 16",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/3-a75beca22300a3263bd47fba03b5b0d1b5ca0753.jpeg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg"
    },
    {
        templeName: "Billings Montana",
        location: "Billings, Montana",
        dedicated: "1999, November, 20",
        area: 33800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/02-Billings-Montana-Temple-1572044.jpg"
    },
    {
        templeName: "Brisbane Australia",
        location: "Brisbane, Australia",
        dedicated: "2003, June, 15",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/400x250/brisbane-australia-temple-lds-745088-wallpaper.jpg"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const homeBtn = document.getElementById("home");
    const oldBtn = document.getElementById("old");
    const newBtn = document.getElementById("new");
    const largeBtn = document.getElementById("large");
    const smallBtn = document.getElementById("small");

    const renderTemples = (templesToRender) => {
        main.innerHTML = '';
        templesToRender.forEach(temple => {
            const figure = document.createElement("figure");

            const figcaption = document.createElement("figcaption");
            figcaption.innerHTML = `
                <strong>${temple.templeName}</strong><br>
                <em>Location: ${temple.location}</em><br>
                Dedicated: ${temple.dedicated}<br>
                Area: ${temple.area.toLocaleString()} sq ft
            `;
            figure.appendChild(figcaption);

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";
            figure.appendChild(img);

            main.appendChild(figure);
        });
    };

    renderTemples(temples);

    homeBtn.addEventListener("click", () => renderTemples(temples));
    oldBtn.addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        renderTemples(filteredTemples);
    });
    newBtn.addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        renderTemples(filteredTemples);
    });
    largeBtn.addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => temple.area > 90000);
        renderTemples(filteredTemples);
    });
    smallBtn.addEventListener("click", () => {
        const filteredTemples = temples.filter(temple => temple.area < 10000);
        renderTemples(filteredTemples);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    const menuToggle = document.querySelector('#menuToggle');
    const menuLinks = document.querySelector('#menuLinks');

    menuToggle.addEventListener('click', function () {
        menuLinks.classList.toggle('active');
        menuToggle.textContent = menuLinks.classList.contains('active') ? '✖' : '≡';
    });
});