const form = document.querySelector('#guess-form');
const btn = document.querySelector('#submit-guess');

async function onSubmit() {
  // get guess value
  const input = document.querySelector('input[name="guess"]');
  const res = await axios.post('/submit-word', data={guess: input.value});
  input.value = "";
}

btn.addEventListener("click", onSubmit);

form.addEventListener("submit", (evt) => {
  //prevent refresh
  evt.preventDefault();
})


