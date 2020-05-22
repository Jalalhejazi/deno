// deno run --allow-net weather.ts
// deno run --allow-net https://dev.azure.com/superusers-kursus/_git/deno?path=%2Fweather.ts&version=GBmaster

const url = 'http://www.henrikdemant.com/weather/realtime.txt'
const result = await fetch(url);
const data = await result.text()

const temperaturArray  = data.split(/(\s+)/)
const temperaturObject = {
    Dato    			: temperaturArray[0],
    Tid     			: temperaturArray[2],
    temperatur 		: temperaturArray[4]
}


console.log(temperaturObject)
