import dayClearSky from "../lotties/day-clear-sky.json";
import nightClearSky from "../lotties/night-clear-sky.json";

import dayFewClouds from "../lotties/day-few-clouds.json";
import nightFewClouds from "../lotties/night-few-clouds.json";

import dayScatteredClouds from "../lotties/day-scattered-clouds.json";
import nightScatteredClouds from "../lotties/night-scattered-clouds.json";

import dayBrokenClouds from "../lotties/day-broken-clouds.json";
import nightBrokenClouds from "../lotties/night-broken-clouds.json";

import dayShowerRain from "../lotties/day-shower-rain.json";
import nightShowerRain from "../lotties/night-shower-rain.json";

import dayRain from "../lotties/day-rain.json";
import nightRain from "../lotties/night-rain.json";

import dayThunderstorm from "../lotties/day-thunderstorm.json";
import nightThunderstorm from "../lotties/night-thunderstorm.json";

import daySnow from "../lotties/day-snow.json";
import nightSnow from "../lotties/night-snow.json";

import dayMist from "../lotties/day-mist.json";
import nightMist from "../lotties/night-mist.json";

export const getWeatherLottie = (icon) => {
    const lottieMap = {
        "01d": dayClearSky,
        "01n": nightClearSky,
        "02d": dayFewClouds,
        "02n": nightFewClouds,
        "03d": dayScatteredClouds,
        "03n": nightScatteredClouds,
        "04d": dayBrokenClouds,
        "04n": nightBrokenClouds,
        "09d": dayShowerRain,
        "09n": nightShowerRain,
        "10d": dayRain,
        "10n": nightRain,
        "11d": dayThunderstorm,
        "11n": nightThunderstorm,
        "13d": daySnow,
        "13n": nightSnow,
        "50d": dayMist,
        "50n": nightMist,
    };

    return lottieMap[icon] || null;  // Return the matching animation or null if no match found
};