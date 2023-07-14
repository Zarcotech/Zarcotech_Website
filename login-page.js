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
      username === accounts['accounts']['1']['ZarcoMail'] && password === accounts['accounts']['1']['Password']) {
      window.location.href = 'home.html';
    } else {
      loginErrorMsg.style.opacity = 1;
    }
  } catch (error) {
    console.error('Error fetching accounts:', error);
  }
});

