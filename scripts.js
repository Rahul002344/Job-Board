// Example: Display a message when a job is applied for
function applyForJob(jobTitle) {
    alert(`You have successfully applied for the position: ${jobTitle}`);
}
function searchJobs() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const jobs = document.querySelectorAll(".job-card");

    jobs.forEach((job) => {
        const title = job.querySelector("h3").innerText.toLowerCase();
        job.style.display = title.includes(query) ? "block" : "none";
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.querySelector('.btn-apply');

    applyButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Thank you for applying! We will review your application and get back to you shortly.');
    });
});
