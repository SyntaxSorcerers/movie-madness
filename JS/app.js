'use strict';
//helper array and var to hold questions used.
let pocketArray = [];
// state
const state = {
  questions: [],
  score: 0,
};
//DOM ref
let answerResults = document.getElementById('resultsOfAnswer');
let question = document.getElementById('question');
let submitButton = document.getElementById('submit');
let hintButton = document.getElementById('hint');
let restartButton = document.getElementById('restart');
restartButton.style.display = 'none';

//creates Unordered List
let ulElem = document.createElement('ul');
hintButton.appendChild(ulElem);
let userInputEvent = document.getElementById('current-question');
let score = document.getElementById('scores');
let congratsAlert = document.getElementById('right');

// helper function for generating a random question from the state index.
function getRandomQuestion() {
  return Math.floor(Math.random() * state.questions.length);
}

//Hint helper constructor for question.
class Hints {
  constructor(hint1, hint2, hint3) {
    this.hints = [hint1, hint2, hint3];
  }
}

// question constructor function.
class Question {
  constructor(question, answer, hint) {
    this.question = question;
    this.answer = answer;
    this.hint = hint;
    this.attempts = 3;
    state.questions.push(this);
  }
}

// creates the questions using the constructors.
function createQuestions() {
  // eslint-disable-next-line no-unused-vars
  const myQuestionOne = new Question(

    'Who is the high school wise guy in Ferris Bueller\'s Day Off?',
    'Ferris Bueller',
    new Hints('Day Off', 'Matthew Broderick', 'John Hughes Film')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestionTwo = new Question(
    'What year did Ferris Bueller\'s Day off came out?',
    '1986',
    new Hints('1984', '1986', '1985')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestionThree = new Question(
    'Ferris sister\'s name was Jeanie, but according to her, her friends called her what?',
    'Shaunna',
    new Hints('Sandy', 'Sarah', 'Shaunna')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestionFour = new Question(
    'Where did Ferris, Cameron, and Sloane take the day off to?',
    'Chicago',
    new Hints('Seattle', 'Chicago', 'New York City')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestionFive = new Question(
    'What kind of car do the boys take out for the day in Ferris Bueller\'s Day Off?',
    'Ferrari',
    new Hints('Mustang', 'Camaro', 'Ferrari')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion6 = new Question(
    'A Boy\'s Life was the original working title for what 1983 movie?',
    'E.T.',
    new Hints('Highest grossing movie of the decade', 'Intergalactic', 'Elliot')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion7 = new Question(
    'What City did Ren move from in Footloose?',
    'Chicago',
    new Hints('New York', 'Detroit', 'Chicago')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion8 = new Question(
    'What did Samantha give to The Geek so that he could win a bet in Sixteen Candles?',
    'her underwear',
    new Hints('a kiss', 'her underwear', '$100 bill')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion9 = new Question(
    'After and unfortunate incident the family from A Christmas Story ate their Christmas dinner at what kind of restaurant?',
    'Chinese',
    new Hints('Chinese', 'Italian', 'Mexican')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion10 = new Question(
    'In The Karate Kid what sport did Danny Larusso play in high school?',
    'soccer',
    new Hints('basketball', 'football', 'soccer')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion11 = new Question(
    'What year was Forest Gump released?',
    '1994',
    new Hints('1990', '1992', '1994')
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion12 = new Question(
    'Which 90\'s movie featured Looney Tunes on it\'s soundtrack?',
    'Space Jam',
    new Hints(
      'Also featured Michael Jordan',
      'best NBA movie of all time',
      'animated aliens'
    )
  );

  // eslint-disable-next-line no-unused-vars
  const myQuestion13 = new Question(
    'Johnny Depp cuts the hedges in this 1990 Tim Burton film',
    'Edward Scissorhands',
    new Hints(
      'Mad scientist creation with scissors for hands',
      'fantasy romance film',
      'co-stars young Winona Ryder'
    )
  );

  // eslint-disable-next-line no-unused-vars
  const questionElement14 = new Question(
    'Brendan Fraiser plays caveman turned cool guy in what 1992 film?',
    'Encino Man',
    new Hints(
      'co-stars Pauly Shore',
      'Sean Austin\'s first movie since The Goonies',
      'Weezin\' on the juice'
    )
  );

  // eslint-disable-next-line no-unused-vars
  const questionElement15 = new Question(
    'What 1991 film stars Patrick Swayze as a bank robbing surfer?',
    'Point Break',
    new Hints(
      'Co-stars Keanu Reeves',
      'The film was originally titled "Johnny Utah',
      'A remake of the film was released in 2015'
    )
  );

  // eslint-disable-next-line no-unused-vars
  const question16 = new Question(
    'Wesley Snipes plays a vampire hunter in what 90\'s action movie?',
    'Blade',
    new Hints(
      'It\'s a Marvel movie',
      'It\'s the first black marvel super hero movie.',
      'He\'s a half vampire'
    )
  );

  // eslint-disable-next-line no-unused-vars
  const question17 = new Question('What was the first animated feature film to be nominated for a Best Picture Oscar?',
    'Beauty and the Beast',
    new Hints(
      'Disney',
      'A Princess',
      'There\'s a talking tea cup')
  );

  // eslint-disable-next-line no-unused-vars
  const question18 = new Question(
    'What 1997 action film stars John Malkovich, Nicolas Cage, and John Cusack?',
    'Con Air',
    new Hints(
      'It was nominated for two Oscars',
      'Directed by Simon West',
      'It\'s about a prison transfer gone wrong'
    )
  );

  // eslint-disable-next-line no-unused-vars
  const question19 = new Question(
    'What actor starred in two of the top 10 highest grossing films of the 1990s?',
    'Will Smith',
    new Hints(
      'Men In Black',
      'In West Philadelphia born and Raised',
      'He slapped Chris Rock'
    )
  );

  // eslint-disable-next-line no-unused-vars
  const question20 = new Question(
    'What movie did Harland Williams love buttered stuff in this 1998 comedy?',
    'Half Baked',
    new Hints(
      'Directed by Tamra Davis',
      'It\'s about Mary Jane',
      'Dave Chappelle Was in it.'
    )
  );
}

//removes list items.
//Renders question and pushes the currentQuestion into a pocketArray
//then it will remove the question from the state.questions so it will not
//render again.
function renderQuestion() {
  let currentQuestion = getRandomQuestion();
  score.textContent = `Score: ${state.score}`;
  congratsAlert.textContent = 'Take a chill pill and try out your trivia skills';
  answerResults.textContent = 'You have 3 more attempt(s)';
  question.innerText = state.questions[currentQuestion].question;
  pocketArray.push(state.questions[currentQuestion]);
  state.questions.splice(currentQuestion, 1);
}


function removeLi() {
  let oldList = document.querySelector('ul');
  while (oldList.firstChild) {
    oldList.removeChild(oldList.firstChild);
  }
}

//removes questions form.
function removeForm() {
  let restartButton = document.getElementById('current-question');
  while (restartButton.firstChild) {
    restartButton.removeChild(restartButton.firstChild);
  }
}

//removes questions form.
function removeHints() {
  let restartButton = document.querySelector('.scores-and-hints');
  while (restartButton.firstChild) {
    restartButton.removeChild(restartButton.firstChild);
  }
}

// renders play again button
function playAgainButton() {
  if (state.questions.length === 0) {
    removeForm();
    removeHints();
    console.log('congrats!');
    hintButton.style.display = 'none';
    answerResults.textContent = 'Dude! Your a trivia skills are choice! You\'re all that and a bag of chips!';
    restartButton.style.display = 'block';
  }
}

//function test answer
function userAnswer() {
  let currentQuestionInParr = pocketArray[pocketArray.length - 1];
  let userInput = event.target.form.userInput.value.toLowerCase();
  console.log(userInput);
  if (userInput !== currentQuestionInParr.answer.toLowerCase() && currentQuestionInParr.attempts > 0) {
    console.log('you got it wrong');
    --currentQuestionInParr.attempts;
    console.log(currentQuestionInParr.attempts);
    answerResults.textContent = `Talk to the hand! ${currentQuestionInParr.attempts} more attempt(s) left`;
    removeLi();
    userInputEvent.reset();
    if (currentQuestionInParr.attempts === 0) {
      alert('out of attempts');
      removeLi();
      renderQuestion();
      congratsAlert.textContent = 'Gag me with a spoon you\'re such a Airhead!';
      userInputEvent.reset();
      console.log(state, pocketArray);
    } else if (state.questions.length === 0) {
      playAgainButton();
      let storedScore = localStorage.getItem('score');
      state.score = JSON.parse(storedScore);
      localStorage.setItem('score', JSON.stringify(state.score));
    }
  } else if (userInput === currentQuestionInParr.answer.toLowerCase() && currentQuestionInParr.attempts > 0) {
    console.log(currentQuestionInParr.attempts);
    console.log('You got it right', state);
    state.score += 100;
    localStorage.setItem('score', JSON.stringify(state.score));
    removeLi();
    renderQuestion();
    congratsAlert.textContent = 'Radical you got the last question right';
    userInputEvent.reset();
  }
}

// creates hints and displays them when 'I need a hint' button is clicked.
function handleHints() {
  console.log('proof of life');

  let currentQuestionInParr = pocketArray[pocketArray.length - 1];

  console.log(currentQuestionInParr.attempts, '***');


  function createListElem1() {
    let liElem = document.createElement('li');
    liElem.textContent = currentQuestionInParr.hint.hints[0];
    console.log(currentQuestionInParr.hint.hints[0]);
    ulElem.appendChild(liElem);
  }

  function createListElem2() {
    let liElem2 = document.createElement('li');
    liElem2.textContent = currentQuestionInParr.hint.hints[1];
    ulElem.appendChild(liElem2);
  }

  function createListElem3() {
    let liElem3 = document.createElement('li');
    liElem3.textContent = currentQuestionInParr.hint.hints[2];
    ulElem.appendChild(liElem3);
  }

  if (currentQuestionInParr.attempts === 3) {
    createListElem1();
    hintButton.removeEventListener('click', handleHints);
  } else if (currentQuestionInParr.attempts === 2) {
    createListElem1();
    createListElem2();
    hintButton.removeEventListener('click', handleHints);
  } else if (currentQuestionInParr.attempts === 1) {
    createListElem1();
    createListElem2();
    createListElem3();
    hintButton.removeEventListener('click', handleHints);
  }
}
// handles and compares Answers to question object from pocket arr and decrements attempts.
function handleSubmit(event) {
  event.preventDefault();
  hintButton.addEventListener('click', handleHints);
  userAnswer();
}

// function calls to create questions and renders the questions.
createQuestions();
renderQuestion();

// Listeners.

submitButton.addEventListener('click', handleSubmit);
hintButton.addEventListener('click', handleHints);

localStorage.setItem('score', JSON.stringify(state.score));

const storedObj = JSON.parse(localStorage.getItem('score'));
console.log(storedObj); // O

