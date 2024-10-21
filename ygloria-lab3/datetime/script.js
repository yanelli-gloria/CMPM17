function updateDateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    const timeString = `${hours}:${minutes} ${amPm}`;
    const dateString = now.toLocaleDateString();

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateDateTime, 1000);
updateDateTime();
