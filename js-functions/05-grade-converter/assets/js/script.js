console.log("Script loaded correctly");

// Main JavaScript file for Exercise 1
console.log('Exercise initialized!');

let vote = prompt("Enter student's grade: ");

vote = Number(vote);
const commentVote = judgment(vote);

console.log(commentVote);

function judgment(v) {
    if (v < 6) {
        return 'insufficient';
    } else if (v <= 8) {
        return 'good';
    } else {
        return 'great';
    }
}