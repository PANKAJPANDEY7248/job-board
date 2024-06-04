// script.js
const jobForm = document.getElementById('job-form');
const jobTitleInput = document.getElementById('job-title');
const jobDescriptionInput = document.getElementById('job-description');
const companyNameInput = document.getElementById('company-name');
const contactEmailInput = document.getElementById('contact-email');
const jobList = document.getElementById('job-list');
const searchInput = document.getElementById('search-input');

jobForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const jobTitle = jobTitleInput.value;
  const jobDescription = jobDescriptionInput.value;
  const companyName = companyNameInput.value;
  const contactEmail = contactEmailInput.value;

  const job = {
    title: jobTitle,
    description: jobDescription,
    company: companyName,
    email: contactEmail
  };

  postJob(job);
  jobForm.reset();
});

function postJob(job) {
  const jobItem = document.createElement('li');
  jobItem.classList.add('job-item');
  jobItem.innerHTML = `
    <h3 class="job-title">${job.title}</h3>
    <p class="job-description">${job.description}</p>
    <p class="job-company">Company: ${job.company}</p>
    <p class="job-email">Contact Email: ${job.email}</p>
  `;

  jobList.appendChild(jobItem);
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  jobList.innerHTML = '';

  const jobs = document.querySelectorAll('#job-list .job-item');

  jobs.forEach((job) => {
    const jobTitle = job.querySelector('.job-title').textContent.toLowerCase();
    const jobDescription = job.querySelector('.job-description').textContent.toLowerCase();

    if (jobTitle.includes(searchTerm) || jobDescription.includes(searchTerm)) {
      jobList.appendChild(job);
    }
  });
});