const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFilter = document.querySelector('.map__filters');
const mapFilters = mapFilter.querySelectorAll('fieldset, select');

const toggleElements = (elements, state) => {
  elements.forEach((element) => { element.disabled = state; });
};

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  toggleElements(adFormElements, true);
  toggleElements(mapFilters, false);
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  toggleElements(adFormElements, true);
  toggleElements(mapFilters, false);
};

export { deactivatePage, activatePage };
