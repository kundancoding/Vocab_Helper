document.getElementById("startTestBtn").addEventListener("click", () => {
  alert("starting test");  
});

document.getElementById("Checkanswer").addEventListener("click", (event) => {
  checkAnswer(event);
});

document.getElementById("Nextquestion").addEventListener("click", (event) => {
  nextQuestion(event);
});

function fetchJSONData() {
            /*fetch('./question_list.json'
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();  
                })
                .then(data => console.log(data))  
                .catch(error => 3vconsole.error('Failed to fetch data:', error)); 
        }*/
		
	var data = [
		{
			"Question":"Abase",
			"Options":["Humiliate","Anger","Defy","Spend"],
			"Answer":"Humiliate"
		},
		{
			"Question":"Abjure",
			"Options":["Sanctify","Pitiful","Renounce","Abolish"],
			"Answer":"Renounce"
		},
		
	];

return data;

}
var currentQuestion = 0;
var questions = {};
function checkAnswer(event){
	//console.log(currentQuestion["Answer"]);
	var answerSelected = "";
	var cur_ques = questions[currentQuestion];
	if(document.getElementById("option1").checked) {
		answerSelected = cur_ques["Options"][0];
	}
	else if(document.getElementById("option2").checked) {
		answerSelected = cur_ques["Options"][1];
	}
	else if(document.getElementById("option3").checked) {
		answerSelected = cur_ques["Options"][2];
	}
	else if(document.getElementById("option4").checked) {
		answerSelected = cur_ques["Options"][3];
	}
	else {
		debugger;
	}
	if(answerSelected === cur_ques["Answer"]){ 
	alert("Good job");
	}
	else {alert("Try again");}
	
}
function loadFirstQuestion(){
	var questions_list = fetchJSONData();
	//console.log("Total questions = " , questions.length);
	currentQuestion = 0;
	questions = questions_list ;
	loadQuestion(currentQuestion);
	
	
	//alert(questions);
}
function loadQuestion(index){
	console.log("Loading index" , index);
	var question1 = questions[currentQuestion];
	//console.log(question1["Question"]);
	document.getElementById("question").innerHTML=question1["Question"];
	//console.log(question1["Options"][0]);
	document.getElementById("lb1").innerHTML=question1["Options"][0];
	document.getElementById("lb2").innerHTML=question1["Options"][1];
	document.getElementById("lb3").innerHTML=question1["Options"][2];
	document.getElementById("lb4").innerHTML=question1["Options"][3];
}

function nextQuestion(event){
	currentQuestion = currentQuestion + 1 ;
	loadQuestion(currentQuestion);
}

