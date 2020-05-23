// deno run --allow-net city-weather.ts

import { getWeather } from "https://deno.land/x/deno_weather/mod.ts";

// function getWeather(cityName: string, mode?: string="xml"|"json")

const weather = await getWeather("copenhagen, denmark");
console.log(weather);
