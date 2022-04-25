const payBtn = document.querySelector('#pay-btn');

const form = document.querySelector('form');

let currentLocation = window.location.pathname;

let otherPay = document.querySelector('#other-pay');

if (currentLocation === '/static/momo.html') {
  console.log(currentLocation);
  otherPay.addEventListener('click', () => {
    window.location.pathname = '/static/cc.html';
  });
} else if (currentLocation === '/static/cc.html') {
  console.log(currentLocation);
  otherPay.addEventListener('click', () => {
    window.location.pathname = '/static/momo.html';
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    window.location.href = '../static/confirm.html';
  }
});

// payBtn.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log('clicked');
// });
