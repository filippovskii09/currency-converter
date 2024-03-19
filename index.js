window.addEventListener('DOMContentLoaded', () => {

	const usdToUah = 39,
			uahToUsd = 0.03;

	const firstValue = document.querySelector('#first-value'),
			secondValue = document.querySelector('#second-value'),
			changeValueButton = document.querySelector('.view__button'),
			firstInputValue = document.querySelector('#input-first'),
			secondInputValue = document.querySelector('#input-second'),
			submitButton = document.querySelector('#submit');
	
	firstValue.textContent = 'usd'.toUpperCase();
	secondValue.textContent = 'uah'.toUpperCase();

	function changeValue() {
		const firstContent = firstValue.textContent,
				secondContent = secondValue.textContent; 
		
		firstValue.textContent = secondContent;
		secondValue.textContent = firstContent;

		if(firstInputValue.value.length > 0 || secondInputValue.value.length) {
			onSubmit()
		}

		changeValueButton.classList.toggle('rotated');
	}

	const onSubmit = () => {

		if(firstValue.textContent.toLowerCase() == 'usd') {
			secondInputValue.value = firstInputValue.value * usdToUah
		} else if (firstValue.textContent.toLowerCase() == 'uah') {
			secondInputValue.value = firstInputValue.value * uahToUsd
		} 

	}
	
	submitButton.addEventListener('click', onSubmit)
	
	changeValueButton.addEventListener('click', changeValue)

})