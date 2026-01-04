import { fetchGithubUser, fetchGithubUserRepos } from './githubApi.js';
import { renderProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function getUserProfile() {

    const userName = inputSearch.value;

    if (!userName) {
        alert('Please enter a GitHub username.');
        profileResults.innerHTML = "";

        return;
    }

    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

    try {

        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        renderProfile(userData, userRepos, profileResults);

    } catch (error) {

        console.error('Error fetching user profile:', error);

        alert('User not found. Please check the username and try again.');

        profileResults.innerHTML = "";
    }
}

btnSearch.addEventListener('click', getUserProfile);

inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getUserProfile();
    }
});