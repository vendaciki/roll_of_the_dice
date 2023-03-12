// tady je místo pro náš program

function hodKostkou() {
	let kostka = document.querySelector('#kostka');
	let zprava = document.querySelector('#zprava');

	let hod = Math.floor(Math.random() * 6 + 1);

	kostka.src = 'obrazky/' + hod + '.png';

	if (hod === 6) {
		zprava.textContent = 'Šestka!!! Vyhrála jsi.'
	} else {
		zprava.textContent = 'Hodila jsi ' + hod + '. Zkus to znovu.';
	}
}