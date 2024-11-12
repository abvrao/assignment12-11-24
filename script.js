function handleSubmit(event, formId) {
  event.preventDefault();

  const form = document.getElementById(formId);
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    localStorage.setItem(`${formId}_${key}`, value);
  });

  alert(formId === 'loginForm' ? 'Login Successful!' : 'Sign Up Successful!');
}

window.addEventListener('load', () => {
  ['loginForm', 'signupForm'].forEach((formId) => {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const savedValue = localStorage.getItem(`${formId}_${input.name}`);
      if (savedValue) {
        input.value = savedValue;
      }
    });
  });
});
