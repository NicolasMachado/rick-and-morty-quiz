'use strict';
var questions = [
	{
		'question': "What was the original short of Rick & Morty a parody of?",
		'correctAnswer': "Back to the Future",
		'answer2': "Twilight",
		'answer3': "Terminator",
		'answer4': "Alien",
		'explanation': "The series has its origins in an animated parody of Back to the Future created by Roiland for film festival Channel 101." + 
		"Adult Swim approached Harmon for television show ideas, and he and Roiland developed the program based on the short's two characters.",
		'image': "question1.jpg"
	},
	{
		'question': "How long did it take Justin and Dan to break down the show's story, sell the pilot and write its first draft?",
		'correctAnswer': "One day",
		'answer2': "One week",
		'answer3': "One month",
		'answer4': "Ten years",
		'explanation': "The first draft was completed in six hours on the Paramount Pictures lot in Dan Harmon's unfurnished Community office."+
		" The duo had broken the story that day, sold the pilot, and then sat down to write. Roiland, while acknowledging a tendency for procrastination,"+
		" encouraged Harmon to stay and write the entire first draft."	
	},
	{
		'question': "What does the giant head in the sky want?",
		'correctAnswer': "The best song",
		'answer2': "A pancake",
		'answer3': "World peace",
		'answer4': "A facelift",
		'explanation': "In \"Get Schwifty\", the fifth episode of season two, a massive alien head appears over the Earth,"+
		" interfering with Earth's gravity and spawning several global disasters in the process. When the head exclaims"+
		", \"Show me what you got,\" Rick travels to The Pentagon to inform the President of the United States that the alien head is a Cromulon"+
		", and it seeks a live performance of a catchy new song."
	},
	{
		'question': "What kind of war starts when Unity loses control?",
		'correctAnswer': "A race war",
		'answer2': "A gang war",
		'answer3': "A religion war",
		'answer4': "An intergalactic war",
		'explanation': "In the third episode of season two, Unity has so much fun partying with Rick and performing crazy stunts that it loses"+
		" control of some of the citizens. The citizens start a race war, and chase after Morty and Summer."
	},
	{
		'question': "What kind of creatures Rick fights alongside his grand-children when he is tiny Rick?",
		'correctAnswer': "Vampires",
		'answer2': "Sirens",
		'answer3': "Witches",
		'answer4': "Werewolves",
		'explanation': "In \"Big Trouble In Little Sanchez\", the seventh episode of the second season, the school's lunch lady is found dead, her"+
		" body drained of blood and marked by two holes in her neck. Rick then nonchalently reveals that vampires are real and that humanity has"+
		" known of their existence for hundreds of years."
	},
	{
		'question': "In the same episode, what is the name of the gym teacher?",
		'correctAnswer': "Coach Feratu",
		'answer2': "Coach Dracule",
		'answer3': "Coach Vampiro",
		'answer4': "Steve",
		'explanation': "Coach Feratu is an unseen character that was mentioned in the episode Big Trouble In Little Sanchez. He was a Vampire who" +
		" was employed as a gym teacher at Harry Herpson High School. The name Coach Feratu was an alias he used while being around humans. His "+
		"real vampire name is Balik Alistane."
	},
	{
		'question': "In \"Rixty Minutes\", Rick and Morty watch the trailer of a movie called \"Two brothers\". Who wrote this trailer?",
		'correctAnswer': "It was improvised",
		'answer2': "Justin Roiland's daughter",
		'answer3': "Dan Harmon's super-intelligent dog",
		'answer4': "Dan Harmon",
		'explanation': "<a href=\"https://www.youtube.com/watch?v=9ziXpIPAhD4\" target=\"_blank\">Watch the video<a/> - " +
		"\"With Justin in the voice-over booth, we had to acquire a disciplined lack of discipline to look at the script and throw it away."+
		" You can hear him stumble on words, which gives an organic, infectious feel to it.\" -Dan Harmon"
	},
	{
		'question': "What dimension are Rick and Morty originally from?",
		'correctAnswer': "Dimension C-137",
		'answer2': "Dimension J-19-Zeta-7",
		'answer3': "Dimension C-132",
		'answer4': "Dimension 35-C",
		'explanation': "Dimension C-137 is the universe where the mainstream Rick and Morty are often identified as coming from. Given that" +
		" Rick does not list his current Jerry as originating in the same dimension as him, it is implied that this Dimension C-137 is the reality"+
		" that was overrun by Cronenbergs in \"Rick Potion #9.\""
	},
	{
		'question': "Originally, how long were Rick and Morty episodes supposed to be?",
		'correctAnswer': "11 minutes",
		'answer2': "34 minutes",
		'answer3': "57 minutes",
		'answer4': "5 minutes",
		'explanation': "Justin Roiland originally wanted Rick & Morty to consist of 11 min episode, but Adult Swim pushed for longer episodes."
	},
	{
		'question': "What does \"Wubaluba dub dub\" mean?",
		'correctAnswer': "I'm in great pain",
		'answer2': "I will kill you",
		'answer3': "Can you pass the salt?",
		'answer4': "Let's party!",
		'explanation': "In the episode Ricksy Business, Rick used the catchphrase multiple times, and Birdperson explains to Morty that it in his"+
		" language it means \"I am in great pain, please help me.\""
	}
];

var state = {
	currentQuestion: 0,
	score: 0,
	answered: false
}

$(function() {
	displayQuestion(0);	
	// Next
	$(".start-game").click(function(){
		startGame();
	});
	// when correct answer
	$("#answer1").click(function(){
		if (!state.answered) {
			correctAnswer();
		}
	});
	// when incorrect answer
	$("#answer2, #answer3, #answer4").click(function(){
		if (!state.answered) {
		incorrectAnswer($(this));
		}
	});
	// Next
	$(".next").click(function(){
		if (state.currentQuestion+1 === questions.length) {
			finalScreen();
		} else {
			next();
		}
	});
});

function displayQuestion(questionnumber) {
	$(".question").text(questions[questionnumber].question);
	$(".questionnumber > h2").text("Question " + (questionnumber+1) + " / " + questions.length);
	// randomize questions order
	var randorder = _.shuffle([1, 2, 3, 4]);
	$("#answer1").text(questions[questionnumber].correctAnswer); // #answer1 is always the correct answer
	$("#answer1").css("order", randorder[0]);
	$("#answer2").text(questions[questionnumber].answer2);
	$("#answer2").css("order", randorder[1]);
	$("#answer3").text(questions[questionnumber].answer3);
	$("#answer3").css("order", randorder[2]);
	$("#answer4").text(questions[questionnumber].answer4);
	$("#answer4").css("order", randorder[3]);
	$(".explanationtext").html(questions[questionnumber].explanation);
	$(".scorespan").text("Score: " + state.score);
	$(".explanationbox").addClass("hidden");
}

function correctAnswer() {
	$(".explanation").removeClass("expla-incorrect");
	$(".explanation").addClass("expla-correct");
	$(".correctincorrect").text("Correct -").css("color", "green");
	state.score++;
	$(".scorespan").text("Score: " + state.score);
	$(".explanationbox").removeClass("hidden");
	state.answered = true;
	$("#answer2, #answer3, #answer4").addClass("answers-else").removeClass("clickable");
	$("#answer1").addClass("answers-correct").removeClass("clickable");
}

function incorrectAnswer(answer) {
	$(".explanation").removeClass("expla-correct");
	$(".explanation").addClass("expla-incorrect");
	$(".explanationbox").removeClass("hidden");
	$(".correctincorrect").text("Incorrect -").css("color", "red");
	state.answered = true;
	$("#answer2, #answer3, #answer4").addClass("answers-else").removeClass("clickable");
	$("#answer1").addClass("answers-correct").removeClass("clickable");
	answer.addClass("answers-incorrect").removeClass("answers-else");
}

function next() {
	state.currentQuestion++;
	displayQuestion(state.currentQuestion);	
	state.answered = false;
	// reset classes
	$("#answer1, #answer2, #answer3, #answer4").removeClass("answers-else").addClass("clickable").removeClass("answers-correct").removeClass("answers-incorrect");
}

function startGame() {
	displayQuestion(0);	
	state.currentQuestion = 0;
	state.score = 0;
	state.answered = false;
	$(".quizbox").removeClass("hidden");
	$(".intro").addClass("hidden");
	$(".outro").addClass("hidden");
}

function finalScreen() {
	$("#answer1, #answer2, #answer3, #answer4").removeClass("answers-else").addClass("clickable").removeClass("answers-correct").removeClass("answers-incorrect");
	$(".quizbox").addClass("hidden");
	$(".outro").removeClass("hidden");
	$(".intro").addClass("hidden");
	$(".final-score").text("You have answered " + state.score + " questions correctly out of " + questions.length);
}