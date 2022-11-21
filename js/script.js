let points = 0;

function australia(userAnswer) {
  // what is the capital of australia?
  // 100 pts
  const isCorrect = userAnswer.toUpperCase() === 'CANBERRA';
  
  if (isCorrect) {
    points += 100; 
  }
  return isCorrect;
}

function canada(userAnswer) {
  // what is the capital of canada?
    const isCorrect = userAnswer.toUpperCase() === 'OTTAWA';
  // 100 pts
    if (isCorrect) {
    points += 100; 
  }
  return isCorrect;
}

function uppercase(userAnswer, word) {
  // what is <word> in all capital letters?
  const isCorrect = userAnswer === word.toUpperCase();
  
  // 200 pts
  if (isCorrect) {
    points += 200; 
  }
  return isCorrect;  
}

function firstThreeLetters(userAnswer, word) {
  // what are the first three letters of <word>?
  const isCorrect = userAnswer === word.substring(0, 3);
  // 200 pts
  if (isCorrect) {
    points += 200; 
  }
  return isCorrect;  
}

function squared(userAnswer, number) {
  // what is <number> squared?
  const isCorrect = userAnswer == number * number;
  // 200 pts
  if (isCorrect) {
    points += 200; 
  }
  return isCorrect;  
}

function multiplication(userAnswer, num1, num2) {
  // what is <num1> multiplied by <num2>?
  const isCorrect = userAnswer == num1 * num2;
  // 300 pts
  if (isCorrect) {
    points += 300
  }
  return isCorrect
}

function age(userAnswer, currentYear, birthYear) {
  // if someone was born in <birthYear> and already has had their birthday this year, how old are they?
  const isCorrect = userAnswer === currentYear - birthYear;
  // 300 pts
  if (isCorrect) {
    points += 300
  }
  return isCorrect
}

function larger(userAnswer, num1, num2) {
  // which of ${number4} and ${number5} is larger (if they're the same then pick that number)?
  // 300 pts
  let isCorrect;
  if (num1 > num2) {
    isCorrect = userAnswer == num1
  } else {
    isCorrect = userAnswer == num2;
  }
  
  if (isCorrect) {
    points += 300; 
  }
  return isCorrect;
  
}
function getScore() {
  // returns the current user's quiz score score
  return points;

}

// DO NOT MODIFY CODE UNDER THIS COMMENT

// Do not worry about what is underneath here: it's the rest
// of what makes this page works. You'l learn about how these
// things work as you work through the workshop

(function() {
  const words = [
    "squeeze",
    "suspend",
    "cloudy",
    "parallel",
    "scrape",
    "puppy",
    "horses",
    "sedate",
    "guarded",
    "part",
    "name",
    "solid",
    "queue",
    "alike",
    "home",
    "overwrought",
    "talented",
    "concerned",
    "increase",
    "silky",
    "rude",
    "hypnotic",
    "moaning",
    "rabbit",
    "oily",
    "intelligent",
    "delicious",
    "snow",
    "sticky",
    "view"
  ];
  let currentQuestion = 0;
  const text = document.getElementById("text")
  
  function validate(userResponse) {
    const answer = process[currentQuestion].validator.apply(window, [userResponse, ...(process[currentQuestion].meta ? process[currentQuestion].meta : [])]);
    let response = "";

    if (answer === true) {
      response = "correct!";
    } else if (answer === false) {
      response = "incorrect :(";
    } else {
      response = "got a response other than true or false";
    }

    alert(response);
    currentQuestion++;
    
    if (currentQuestion >= process.length) {
      document.getElementById("container").innerHTML = `<h1>Congrats! You finished. You got ${getScore()} points!</h1>`;
      return;
    }
    
    text.innerText = process[currentQuestion].question;
  }

  const randomNumber = max => Math.floor(Math.random() * max);
  const randomWord = () => words[randomNumber(words.length)];
  const word1 = randomWord();
  const word2 = randomWord();
  const number1 = randomNumber(25);
  const number2 = randomNumber(25);
  const number3 = randomNumber(25);
  const number4 = randomNumber(25);
  const number5 = randomNumber(25);
  const birthYear = randomNumber(40) + 1970;
  const currentYear = new Date().getFullYear();

  const process = [
    {
      question: "what is the capital of australia?",
      validator: australia,
      points: 100
    },
    {
      question: "what is the capital of canada?",
      validator: canada,
      points: 100
    },
    {
      question: `what is "${word1}" in all capital letters?`,
      meta: [word1],
      validator: uppercase,
      points: 200
    },
    {
      question: `what are the first three letters of "${word2}"?`,
      meta: [word2],
      validator: firstThreeLetters,
      points: 200
    },
    {
      question: `what is ${number1} squared?`,
      meta: [number1],
      validator: squared,
      points: 200
    },
    {
      question: `what is ${number2} multiplied by ${number3}?`,
      meta: [number2, number3],
      validator: multiplication,
      points: 300
    },
    {
      question: `if someone was born in ${birthYear} and already has had their birthday this year, how old are they (assuming it's ${currentYear})?`,
      meta: [currentYear, birthYear],
      validator: age,
      points: 300
    },
    {
      question: `which of ${number4} and ${number5} is larger (if they're the same then pick that number)?`,
      meta: [number4, number5],
      validator: larger,
      points: 300
    }
  ];

  const input = document.getElementById("input");
  document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    validate(input.value);
    input.value = "";
  });
})();
