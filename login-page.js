const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  try {
    const response = await fetch('./accounts.json');
    const accounts = await response.json();

    if (
      (username === accounts['accounts']['1']['ZarcoMail'] || accounts['accounts']['2']['ZarcoMail'] || accounts['accounts']['3']['ZarcoMail'] || accounts['accounts']['4']['ZarcoMail'] || accounts['accounts']['5']['ZarcoMail'] || accounts['accounts']['6']['ZarcoMail'] || accounts['accounts']['7']['ZarcoMail'] || accounts['accounts']['8']['ZarcoMail'] || accounts['accounts']['9']['ZarcoMail'] || accounts['accounts']['10']['ZarcoMail'] || accounts['accounts']['11']['ZarcoMail'] || accounts['accounts']['12']['ZarcoMail'] || accounts['accounts']['13']['ZarcoMail'] || accounts['accounts']['14']['ZarcoMail'] || accounts['accounts']['15']['ZarcoMail'] || accounts['accounts']['16']['ZarcoMail'] || accounts['accounts']['17']['ZarcoMail'] || accounts['accounts']['18']['ZarcoMail'] || accounts['accounts']['19']['ZarcoMail'] || accounts['accounts']['20']['ZarcoMail'] || accounts['accounts']['21']['ZarcoMail'] || accounts['accounts']['22']['ZarcoMail'] || accounts['accounts']['23']['ZarcoMail']) && (password === accounts['accounts']['1']['Password'] || accounts['accounts']['2']['Password'] || accounts['accounts']['3']['Password'] || accounts['accounts']['4']['Password'] || accounts['accounts']['5']['Password'] || accounts['accounts']['6']['Password'] || accounts['accounts']['7']['Password'] || accounts['accounts']['8']['Password'] || accounts['accounts']['9']['Password'] || accounts['accounts']['10']['Password'] || accounts['accounts']['11']['Password'] || accounts['accounts']['12']['Password'] || accounts['accounts']['13']['Password'] || accounts['accounts']['14']['Password'] || accounts['accounts']['15']['Password'] || accounts['accounts']['16']['Password'] || accounts['accounts']['17']['Password'] || accounts['accounts']['18']['Password'] || accounts['accounts']['19']['Password'] || accounts['accounts']['20']['Password'] || accounts['accounts']['21']['Password'] || accounts['accounts']['22']['Password'] || accounts['accounts']['23']['Password'])) {
      window.location.href = 'home.html';
    } else {
      loginErrorMsg.style.opacity = 1;
    }
  }
});

