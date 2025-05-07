fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.53609444&lon=126.9675222&appid=1678d5fbe5655c5df4baca85f98cc3ed&units=metric')
    .then(response => {
        return response.json()})
    .then(data => {
        let temp = data["main"]["temp"];
        let humidity = data["main"]["humidity"];
        let wind = data["wind"]["speed"];
        let icon = data["weather"][0]['icon']
        console.log("https://openweathermap.org/img/wn/" + icon + "@2x.png");
        let tempurature = document.getElementById("temp");
        tempurature.textContent = "날씨 검색 중..";
        setTimeout( ()=> {
            let water = document.getElementById("water");
            let win = document.getElementById("win");
            tempurature.textContent = "온도 : " + temp + "°C";
            water.textContent = "습도 : " + humidity + "%";   
            win.textContent = "바람 : " + wind + "m/s";
            const weathericon = document.getElementById("weathericon");
            weathericon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        },3000);
    })
    
