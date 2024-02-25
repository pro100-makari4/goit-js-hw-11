import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import errorIcon from '/img/error-icon.png';

const startButton = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let futureDateDifference = {};
let futureDateMs = null;

startButton.addEventListener('click', startTimer);
startButton.disabled = true;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDate) {
    if (selectedDate[0] < Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        iconUrl: errorIcon,
        position: 'topRight',
        timeout: 3000,
        progressBar: false,
        close: false,
        titleColor: '#FFF',
        messageColor: '#FFF',
        backgroundColor: '#FF544B',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      futureDateMs = selectedDate[0].getTime();
      futureDateDifference = convertMs(new Date(futureDateMs - Date.now()));
    }
  },
};

flatpickr('#datetime-picker', options);

function startTimer() {
  startButton.disabled = true;
  input.disabled = true;

  const timerInterval = setInterval(() => {
    futureDateDifference = convertMs(new Date(futureDateMs - Date.now()));

    if (futureDateMs - Date.now() < 0) {
      clearInterval(timerInterval);
      flatpickr('#datetime-picker', options);
      input.disabled = false;
    }

    if (Date.now() < futureDateMs) {
      daysElement.textContent = addLeadingZero(futureDateDifference.days);
      hoursElement.textContent = addLeadingZero(futureDateDifference.hours);
      minutesElement.textContent = addLeadingZero(futureDateDifference.minutes);
      secondsElement.textContent = addLeadingZero(futureDateDifference.seconds);
    }
  }, 1000);

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
}
