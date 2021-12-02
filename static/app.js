const form = document.querySelector('#guess-form');
const btn = document.querySelector('#submit-guess');


form.addEventListener("submit", async function(evt) {
  //prevent refresh
  evt.preventDefault();
  const input = document.querySelector('#inputword');
  const res = await axios.get('/submit-word', {params: {guess: input.value}});
  alert(res.data.result);
})


