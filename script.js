const button = document.querySelector('.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

const orderList = document.querySelector('.order-list')
const order = document.querySelector('.order');
const title = document.querySelector('#name');
const detail = document.querySelector('.details');
const served = document.querySelector('.served');
const btn = document.querySelector('.submitOrder');
const select = document.querySelector('.select-form');
const form = document.querySelector('form');

const openModal = event => {
    outerModal.classList.add('open');
};

const closeModal = event => {
    const isOutside = !event.target.closest('inner-modal');
    if(isOutside) {
        outerModal.classList.remove('open');
    }
};

  const escapeModal = event => {
     if (event.key === 'Escape') {
        outerModal.classList.remove('open');    
     }
  };

window.addEventListener('keydown', escapeModal);
// outerModal.addEventListener('click', closeModal);
button.addEventListener('click', openModal);

btn.addEventListener('click', ($event) => {
    $event.preventDefault();
    // outerModal.classList.remove('outer-modal');
    outerModal.style.display = 'none';
    const myNewHtml = `
        <div class="new-order">
            <span class="title">
                ${title.value}
            </span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
    orderList.insertAdjacentHTML('afterbegin', myNewHtml);
});

detail.addEventListener('click', ($event) => {
    $event.preventDefault();
    const myHtml = `
        <div class="order-detail">
            <h3>${title.value}</h3>
            <h5>Order<br>
        </div>
    `;  
    innerModal.innerHTML = myHtml; 
});



