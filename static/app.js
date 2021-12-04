const form = document.querySelector('#guess-form');
const btn = document.querySelector('#submit-guess');
const msg_section = document.querySelector('#messages')

form.addEventListener("submit", async function(evt) {
  //prevent refresh
  evt.preventDefault();

  // clear previous messages
  msg_section.innerHTML = "";

  // make request to flask server 
  const input = document.querySelector('#inputword');
  let res;

  // if guess is null, do not send a request
  if (input.value) {
    res = await axios.get('/submit-word', {params: {guess: input.value}});
  } else {
    alert('guess cannot be blank');
    return
  }

  // create an alert
  const msg = document.createElement("p");
  
  if (res.data.result === 'ok') {
    msg.textContent = `${input.value} is valid!`;
    msg.classList.add('alert', 'alert-primary', 'center');
  } else if (res.data.result === 'not-on-board') {
    msg.textContent = `${input.value} is not on the board`;
    msg.classList.add('alert', 'alert-danger', 'center');
  } else if (res.data.result === 'not-word') {
    msg.textContent = `${input.value} is not a valid word!`;
    msg.classList.add('alert', 'alert-danger', 'center');
  }
  
  msg_section.append(msg);
  
})
