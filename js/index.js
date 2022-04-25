const submitBtn = document.querySelector('#btn');

const radioBtn = document.getElementsByName('payment-mthd');

const check = () => {
  for (let i = 0; i < 2; i++) {
    let rChecked = radioBtn[i].checked;

    if (rChecked) {
      console.log(radioBtn[i].value);

      switch (radioBtn[i].value) {
        case 'momo':
          window.location.href = './static/momo.html';
          break;
        case 'cc':
          window.location.href = './static/cc.html';
          break;
        default:
          alert('Please select a payment method');
          break;
      }
    }
  }
};

const confirm = () => {};

submitBtn.addEventListener('click', check);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // window.location.href = './static/confirm.html';
//   console.log('submit');
// });
