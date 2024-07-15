const predictions = [
    {
        id: 1,
        text: "Spring 2025: Neon colors will dominate streetwear.",
        votes: 42,
    },
    // Add more predictions
];
const predictionList = document.getElementById("prediction-list");


predictions.forEach((prediction) => {
    const li = document.createElement("li");
    li.textContent = prediction.text;
    predictionList.appendChild(li);
});
const upvoteButtons = document.querySelectorAll(".upvote-button");
const downvoteButtons = document.querySelectorAll(".downvote-button");

upvoteButtons.forEach((button) => {
    button.addEventListener("click", handleVote);
});

downvoteButtons.forEach((button) => {
    button.addEventListener("click", handleVote);
});

function handleVote(event) {
    const predictionId = event.target.dataset.id;
   
}
