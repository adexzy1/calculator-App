//varaibles
const lightMode = document.querySelector('#light_mode');
const darkMode = document.querySelector('#dark_mode');
const mainContainer = document.querySelector('main');
const modeSwitch = document.querySelector('.switch_container');
const keysContainer = document.querySelector('.keys');
const keys = document.querySelectorAll('.keys span');

//event listeners
lightMode.addEventListener('click', LightMode);

//function

//change mode to light mode
function LightMode() {
  mainContainer.classList.add('background_light-mode');
  modeSwitch.classList.add('container_bacground');
  keysContainer.classList.add('container_bacground');

  keys.forEach((key) => {
    key.classList.add('keys-light_mode');
    console.log(key);
  });
}
