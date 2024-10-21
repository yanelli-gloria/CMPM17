document.getElementById('add-goal-btn').onclick = function() {
    const goal = prompt("Enter a new quarter goal:");
    const hashtag = prompt("Enter a good hashtag:");
    if (goal && hashtag) {
        const goalList = document.getElementById('goal-list');
        const newGoal = document.createElement('li');
        newGoal.className = 'goal';
        newGoal.innerHTML = `<input type="checkbox" /> ${goal} <span class="tag">${hashtag}</span>`;
        goalList.appendChild(newGoal);
    }
};
