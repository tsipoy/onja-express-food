//grabbing elements
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
const AllForm = document.querySelector('form');
const inputForm = document.querySelector('input-form'); 

// Add inner and outer modal  
const openModal = event => {
    outerModal.classList.add('open');
	const orderHtml = `
    <form>
		<p>Your name :</p>
		<input class="input-form" type="text" id="name" name="name" placeholder="Enter your name here"
			required />
		<p>Please select your dish :</p>
		<select name="dish" class="select-form" required>
			<option value="romazava">Romazava</option>
			<option value="koba">Koba</option>
			<option value="ravitoto">Ravitoto</option>
			<option value="mokary">Mokary</option>
			<option value="achard">Achard</option>
			<option value="masikita">Masikita</option>
			<option value="sambos">Sambos</option>
			<option value="mofo-baolina">Mofo baolina</option>
			<option value="ranonapango">Ranonapango</option>
		</select>
		<p>Please select the size of your plate :</p>
			<input type="radio" id="small" name="size" value="small" required />
			<label for="small">Small</label><br />
			<input type="radio" id="medium" name="size" value="medium" />
			<label for="medium">Medium</label><br />
			<input type="radio" id="large" name="size" value="large" />
			<label for="large">Large</label><br />
			<p>How many pieces do you want to order?</p>
			<input class="input-form" type="number" id="quantity" name="amount"
				placeholder="Enter a number here" required />
			<button class="submitOrder" type="submit">Add this order</button>
	</form>
	`;
	innerModal.innerHTML = orderHtml; 
};

//
const closeModal = event => {
    const isOutside = !event.target.closest('.inner-modal');
    if (isOutside) {
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

// function 

const handleSubmit = event => {
	event.preventDefault();
	if (event.target.matches('form')) {
		const form = event.target;
		const {name, dish, size, amount} = form;
		console.log(name.value, dish.value, size.value, amount.value)
		const myNewHtml = `
         <div class="new-order" data-dish="${dish.value} data-size="${size.value} data-amount="${amount.value} >
			 <span class="title">
			 	${name.value}
             </span>
              <button class="details">Details</button>
              <button class="served">Delete order</button>
          </div>
	   `;
	    order.innerHTML = myNewHtml;
	    form.reset();
	}
};

const myDetail = `
    <div class="order-detail">
        <h2>${title}</h2>
		<h3>Order:</h3>
		<p></p>
        <img src="https://picsum.photos/200">
    </div>
`;
innerModal.innerHTML = myDetail;

// Event delegation

button.addEventListener('submit', handleSubmit);
window.addEventListener ('click', (event) => {
    // Show detail
    if (event.target.matches('.details')) {
		outerModal.classList.add('open');
		outerModal.classList.add('order-detail');
    };

    // delete detail
    if(event.target.matches('button.served')) {
        order.style.display = "none";
    };
});
