import iziToast from 'izitoast';
import errorIcon from '/img/error-icon.png';
import successIcon from '/img/success-icon.png';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const fulfilledRadio = document.querySelector('input[value="fulfilled"]');
const rejectedRadio = document.querySelector('input[value="rejected"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = inputDelay.value;

  const showMessage = () => {
    return fulfilledRadio.checked
      ? Promise.resolve(`Fulfilled promise in ${delay}ms`)
      : rejectedRadio.checked
      ? Promise.reject(`Rejected promise in ${delay}ms`)
      : '';
  };

  showMessage()
    .then(result => {
      setTimeout(() => {
        iziToast.show({
          message: result,
          title: 'Ok',
          iconUrl: successIcon,
          position: 'topRight',
          timeout: 3000,
          progressBar: false,
          close: false,
          titleColor: '#FFF',
          messageColor: '#FFF',
          backgroundColor: '#59a10d',
        });
      }, delay);
    })
    .catch(error => {
      setTimeout(() => {
        iziToast.error({
          title: 'Error',
          message: error,
          iconUrl: errorIcon,
          position: 'topRight',
          timeout: 3000,
          progressBar: false,
          close: false,
          titleColor: '#FFF',
          messageColor: '#FFF',
          backgroundColor: '#FF544B',
        });
      }, delay);
    });

  form.reset();
});
