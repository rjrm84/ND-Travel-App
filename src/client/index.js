import { generateCoords } from './js/app';
import { getWeather } from './js/app';
import { postData } from './js/app';
import  style from './styles/style.scss'
import  media from './styles/media.scss'

// Loading weather icons
function importAll(r) {
    return r.keys().map(r);
}
importAll(require.context('./media/icons', false, /\.(png)$/));

export { generateCoords, getWeather, postData };
