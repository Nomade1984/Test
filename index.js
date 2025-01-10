
const modal = document.getElementById("modal");

const btn = document.getElementById("btn");

function closeModal() {
	modal.style.display = "none";
	cookies.style.display = "flex";
}

btn.onclick = closeModal;

const cookiesBtnYes = document.getElementById("cookiesBtnYes");

const btnCookiesYes = document.getElementById("cookiesBtnYes");

const cookiesBtnNo = document.getElementById("cookiesBtnNo");

const btnCookiesNo = document.getElementById("cookiesBtnNo");

function closeCookies() {
	cookies.style.display = "none";
}


btnCookiesYes.onclick = closeCookies;

btnCookiesNo.onclick = closeCookies;
