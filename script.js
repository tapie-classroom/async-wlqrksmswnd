fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.53609444&lon=126.9675222&appid=1678d5fbe5655c5df4baca85f98cc3ed')
    .then(json => {
        const temp = json.main.temp;
        const wind = json.main.wind;
    })