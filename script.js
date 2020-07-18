const button = document.querySelector('.add-order');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

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
outerModal.addEventListener('click', closeModal);
button.addEventListener('click', openModal);