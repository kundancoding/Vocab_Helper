document.getElementById("startTestBtn").addEventListener("click", () => {
  alert("starting test");  
});

document.getElementById("Checkanswer").addEventListener("click", (event) => {
  checkAnswer(event);
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
                .catch(error => console.error('Failed to fetch data:', error)); 
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
var currentQuestion = {};
function checkAnswer(event){
	//console.log(currentQuestion["Answer"]);
	var answerSelected = "";
	if(document.getElementById("option1").checked) {
		answerSelected = currentQuestion["Options"][0];
	}
	else if(document.getElementById("option2").checked) {
		answerSelected = currentQuestion["Options"][1];
	}
	else if(document.getElementById("option3").checked) {
		answerSelected = currentQuestion["Options"][2];
	}
	else if(document.getElementById("option4").checked) {
		answerSelected = currentQuestion["Options"][3];
	}
	else {
		debugger;
	}
	if(answerSelected === currentQuestion["Answer"]){ 
	alert("Good job");
	}
	else {alert("Try again");}
	
}
function loadFirstQuestion(){
	var questions = fetchJSONData();
	//console.log("Total questions = " , questions.length);
	var question1 = questions[1];
	currentQuestion = question1;
	//console.log(question1["Question"]);
	document.getElementById("question").innerHTML=question1["Question"];
	//console.log(question1["Options"][0]);
	document.getElementById("lb1").innerHTML=question1["Options"][0];
	document.getElementById("lb2").innerHTML=question1["Options"][1];
	document.getElementById("lb3").innerHTML=question1["Options"][2];
	document.getElementById("lb4").innerHTML=question1["Options"][3];
	
	//alert(questions);
}
