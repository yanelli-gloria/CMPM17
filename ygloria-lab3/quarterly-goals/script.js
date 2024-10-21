document.getElementById('add-goal-btn').onclick = function() {
    const goal = prompt("Enter a new quarter goal:");
    const hashtag = prompt("Enter a good hashtag:");
    if (goal && hashtag) {
        const goalList = document.getElementById('goal-list');
        const newGoal = `
            <li>
                <input type="checkbox"> ${goal} 
                <span class="tag new">${hashtag}</span>
            </li>`;
        goalList.insertAdjacentHTML('beforeend', newGoal);
    }
};
