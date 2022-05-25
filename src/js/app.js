import * as flsFunctions from './modules/functions.js';
import { burger } from './modules/burger.js';
import { openModalEntry, openModalParticipation, openModalPrice } from './modules/modals.js';
import { stockSlider, doctorsSlider, reviewsSlider, licensesSlider, aboutSlider } from './modules/sliders.js';

flsFunctions.isWebp();
openModalEntry();
openModalParticipation();
openModalPrice();
stockSlider();
doctorsSlider();
reviewsSlider();
licensesSlider();
aboutSlider();
burger();
