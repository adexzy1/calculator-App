//varaibles
const lightMode = document.querySelector('#light_mode');
const darkMode = document.querySelector('#dark_mode');
const mainContainer = document.querySelector('main');
const modeSwitch = document.querySelector('.switch_container');
const keysContainer = document.querySelector('.keys');
const keys = document.querySelectorAll('.keys button');
const textScreen = document.querySelector('.text_screen p');
const result_container = document.querySelector('.result_container');

//event listeners
lightMode.addEventListener('click', LightMode);
darkMode.addEventListener('click', DarkMode);
modeSwitch.addEventListener('click', ModeSwitch);
//function

//change mode to light mode
function LightMode() {
  mainContainer.classList.add('background_light-mode');
  modeSwitch.classList.add('mode_switch-bgColor');
  keysContainer.classList.add('container_bacground');

  keys.forEach((key) => {
    key.classList.add('keys-light_mode');
  });
  mainContainer.style.color = 'black';
}

//change mode to light mode
function DarkMode() {
  mainContainer.classList.remove('background_light-mode');
  modeSwitch.classList.remove('mode_switch-bgColor');
  keysContainer.classList.remove('container_bacground');

  keys.forEach((key) => {
    key.classList.remove('keys-light_mode');
  });
  mainContainer.style.color = '#fff';
}
//change mode to  mode
function ModeSwitch(e) {
  const dark_Mode = document.getElementById('dark_mode');
  const light_Mode = document.getElementById('light_mode');
  if (e.target.classList.contains('light_mode')) {
    e.target.style.color = 'black';
    dark_Mode.style.color = ' #E1E1E1';
  } else if (e.target.classList.contains('dark_mode')) {
    e.target.style.color = '#fff';
    light_Mode.style.color = ' #777a81';
  }
}

//get the values of each number
keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    switch (e.target.getAttribute('id')) {
      case 'AC':
        textScreen.textContent = '';
        result_container.textContent = '';
        break;
      case 'erase':
        textScreen.textContent = textScreen.textContent.slice(0, -1);
        break;
      case '=':
        result_container.textContent = eval(textScreen.textContent);
        textScreen.textContent = '';
        break;
      case '%':
        const percent = textScreen.textContent / 100;
        result_container.textContent += percent;
        break;
      case 'π':
        const pie = textScreen.textContent * 3.1415925536;
        result_container.textContent += pie;
        break;
      case '÷':
        textScreen.textContent += '/';
        break;
      default:
        textScreen.textContent += e.target.textContent;
    }
  });
});
