const form = document.querySelector('#guess-form');

document.addEventListener("DOMContentLoaded", function(event){
    form.addEventListener("submit", (evt) => {evt.preventDefault();})
  });