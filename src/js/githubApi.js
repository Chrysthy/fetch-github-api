const BASE_URL = 'https://api.github.com';

export async function fetchGithubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('User not found.');
    }
    return await response.json();
}

export async function fetchGithubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repositories not found.');
    }
    return await response.json();
}