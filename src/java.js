// const header = document.querySelector('h1');
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '500px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 1000,
  messageMaxLength: 110,
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: true,
  clickToClose: false,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  success: {
    background: '#32c682',
    textColor: '#fff',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },
  failure: {
    background: '#ff5549',
    textColor: '#fff',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
  warning: {
    background: '#eebf31',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  info: {
    background: '#26c0d3',
    textColor: '#fff',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});

const button = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div');

function makeRandomChoice() {
  const random = Math.round(Math.random());
  return random;
}

let yesTimer = 0;
let noTimer = 0;

function makeHeaders(value) {
  if (div.hasChildNodes()) {
    div.innerHTML = '';
    yesTimer = 0;
    noTimer = 0;
  }
  for (let i = 0; i < value; i++) {
    const h2 = document.createElement('h2');
    if (makeRandomChoice() === 1) {
      yesTimer += 1;
    } else {
      noTimer += 1;
    }
    div.append(h2);
  }
}

button.addEventListener('click', () => {
  makeHeaders(100);
  if (yesTimer > noTimer && yesTimer - noTimer >= 14) {
    Notiflix.Notify.success(`Однозначно ТАК`);
  } else if (yesTimer < noTimer && noTimer - yesTimer >= 14) {
    Notiflix.Notify.failure(`Однозначно НІ`);
  } else if (yesTimer > noTimer && yesTimer - noTimer < 14) {
    Notiflix.Notify.success(`Скоріше ТАК ніж НІ`);
  } else if (yesTimer < noTimer && noTimer - yesTimer < 14) {
    Notiflix.Notify.failure(`Скоріше НІ ніж ТАК`);
  } else {
    Notiflix.Notify.info('Не знаю, не знаю, треба подумати ');
  }
});
