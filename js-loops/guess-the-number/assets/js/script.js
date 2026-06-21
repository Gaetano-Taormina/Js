const target = Math.floor(Math.random() * 100) + 1;
let guess = null;
while (guess !== target) {
    let input = prompt('Guess a number between 1 and 100');
    if (input === null) break; // handle cancel
    guess = parseInt(input);
    if (isNaN(guess)) continue;
    if (guess < target) alert('Too low!');
    else if (guess > target) alert('Too high!');
    else alert('You guessed it!');
}