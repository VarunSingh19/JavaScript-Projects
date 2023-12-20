
function getData() {
    const city = search.value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a6f14eedcamsh99e017d18556dc0p1c438djsn63bf207e4bdc',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            temp.innerHTML = res.temp;
            ws.innerHTML = res.wind_speed;
            hmdt.innerHTML = res.humidity;
        })
        .catch(err => console.log(err));
}