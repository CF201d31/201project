var questionForm = document.getElementById('question-form');

function handleQuestion(event) {
  event.preventDefault();
  console.log(event.target);
}

questionForm.addEventListener('submit', handleQuestion);
