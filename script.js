function submitForm(e){
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  alert('Gracias, ' + data.name + '! Hemos recibido tu mensaje.\\nTe contactaremos al ' + data.email + '.');
  form.reset();
  return false;
}
