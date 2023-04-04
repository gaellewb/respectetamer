// console.log('Connecté');


const iconsCondition = {
    "Rain" : "fa-solid fa-cloud-rain",
    "Clouds" : "fa-light fa-cloud-rain fa-lg",
    "Clear sky" : "wi wi--day-sunny",
};

// Appel à l'API OpenWeather avec ville en paramètre de fonction 

const APIKEY = 'b44f1ce0427867e8cee955037baa466f';

let apiCall = function (city) {
    // let url = `https://api.meteo-concept.com/api/forecast/daily?token=7e10862d2e798c7388705e69f6299dc04dda7e12fd0f3b6b75f2b4fafd79fede`;   
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    
    // let url = `https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235`;

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
            const icon = data.weather[0].icon;

            document.querySelector('#city').innerHTML = name;
            document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + Math.round(temperature) + '°';
            document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + humidite + ' %';
            document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + Math.round(vent) + ' km/h';
            document.querySelector('.description').innerHTML = capitalize(description);
            // document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            // document.querySelector('.descripion,i').className = iconsCondition[condition];
            // document.querySelector('.description').innerHTML = "<i class='fas fa-wind'></i>" + capitalize(description) ;
            document.querySelector('.monAppli').className = condition.toLowerCase();
            })
        )
            .catch((err) => console.log('Erreur : ' + err));
};

// Ecouteur d'évènement sur la sousmission du formulaire
    document.querySelector('.bgMeteo').addEventListener('submit', function (e) {
        e.preventDefault();
        let ville = document.querySelector('#inputCity').value;

        apiCall(ville);
    });

// Appel par défaut au chargement de la page
apiCall('Marseille');