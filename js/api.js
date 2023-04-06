// console.log('Connecté');

// Appel à l'API OpenWeather avec ville en paramètre de fonction 
const APIKEY = 'b44f1ce0427867e8cee955037baa466f';

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
    .then((response) => 
    response.json()
    .then((data) => {
        console.log(data);
            const name = data.name;
            const temperature = data.main.temp ;
            const humidite = data.main.humidity ;
            const vent = data.wind.speed ;
            const condition = data.weather[0].main;
            const description = data.weather[0].description;

            document.querySelector('#city').textContent = name;
            document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + Math.round(temperature) + '°';
            document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + humidite + ' %';
            document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + Math.round(vent) + ' km/h';
            document.querySelector('.description').innerHTML = capitalize(description);
            document.querySelector('.monFond').classList.remove('clear', 'rain', 'clouds', 'snow', 'mist', 'thunderstorm');
            document.querySelector('.monFond').classList.add(condition.toLowerCase());
            })
        )
            .catch((err) => console.log('Erreur : ' + err));
};

// Ecouteur d'évènement sur la sousmission du formulaire
    document.querySelector('.apiMeteo').addEventListener('submit', function (e) {
        e.preventDefault();
        let ville = document.querySelector('#inputCity').value;
        apiCall(ville);
    });

// Appel par défaut au chargement de la page
apiCall('toulon');