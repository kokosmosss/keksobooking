import { getNewAdvertisements } from './data.js';
import { renderPopup } from './popup.js';
import { deactivatePage, activatePage } from './form.js';

const similarCards = getNewAdvertisements();
const mapCanvas = document.querySelector('.map__canvas');
const card = renderPopup(similarCards[0]);
mapCanvas.appendChild(card);
deactivatePage();
activatePage();
