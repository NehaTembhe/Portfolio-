// Sample project data
const projects = [
    {
        title: "Project 1: Voting System",
        description: "A blockchain-based voting system.",
        link: "#"
    },
    {
        title: "Project 2: E-Commerce Recommendation",
        description: "A machine learning-based product recommendation system.",
        link: "#"
    },
    {
        title: "Project 3: College Website",
        description: "A website for my college.",
        link: "#"
    }
];

// Function to display projects dynamically
function displayProjects() {
    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'View Project';

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        projectList.appendChild(projectDiv);
    });
}

// Form validation and submit handler
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});

// Call the function to display projects when the page loads
window.onload = displayProjects;
