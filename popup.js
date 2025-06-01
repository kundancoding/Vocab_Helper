let correctCount = 0;
let incorrectCount = 0;
var currentQuestion = 0;
var questions = data;
loadQuestion(currentQuestion);


document.getElementById('checkBtn').addEventListener('click', () => {
		var cur_ques = questions[currentQuestion];
		  const selected = document.querySelector('input[name="answer"]:checked');
		  if (!selected) return;

		  const selectedValue = selected.value; // ✅ define selectedValue

		  const labels = document.querySelectorAll('label');
		  labels.forEach(label => label.style.color = ''); // Reset colors
		  const correctOption = cur_ques["correct"];
		  if (selectedValue === correctOption) {
			correctCount++;
			selected.parentElement.style.color = 'green';
		  } else {
			incorrectCount++;
			selected.parentElement.style.color = 'red';
			const correctSelector = "input[value="+correctOption+"]";
			const correctInput = document.querySelector(correctSelector);
			correctInput.parentElement.style.color = 'green';
		  }

		  updateScore();
		  document.getElementById('checkBtn').disabled = true;
		  document.getElementById('nextBtn').disabled = false;
		});



    document.getElementById('nextBtn').addEventListener('click', () => {
      // Reset logic for demo
      document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.checked = false;
        input.parentElement.style.color = '';
      });
	  
      document.getElementById('checkBtn').disabled = false;
      document.getElementById('nextBtn').disabled = true;
	  nextQuestion();
      //document.getElementById('question').innerText = 'Next question here...';
	  
	});
	
	function updateScore() {
  document.getElementById('scoreBox').innerText = `✔️ ${correctCount} | ❌ ${incorrectCount}`;
}

function loadQuestion(index) {
  const questionObj = questions[index];
  document.getElementById('question').innerText = questionObj.question;

  const form = document.getElementById('answersForm');
  form.innerHTML = ""; // Clear previous answers

  for (const key in questionObj.options) {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${key}"> ${questionObj.options[key]}`;
    form.appendChild(label);
  }

  document.getElementById('checkBtn').disabled = false;
  document.getElementById('nextBtn').disabled = true;
}

function nextQuestion(){
	currentQuestion = currentQuestion + 1 ;
	loadQuestion(currentQuestion);
}
