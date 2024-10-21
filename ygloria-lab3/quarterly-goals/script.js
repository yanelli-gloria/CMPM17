document.getElementById('add-goal-btn').onclick = function() {
    const goal = prompt("Enter a new quarter goal:");
    const hashtag = prompt("Enter a good hashtag:");
    const completionStatus = prompt("Enter a goal-completion status:");

    if (goal && hashtag && completionStatus) {
        const goalList = document.getElementById('goal-list');
        goalList.insertAdjacentHTML('beforeend', `
            <li>
                <input type="checkbox"> ${goal} 
                <span class="tag new">${hashtag}</span> 
                <span>(${completionStatus})</span>
            </li>`);
    }
};
