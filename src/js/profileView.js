export function renderProfile(userData, userRepos, container) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `

    <a href="${repo.html_url}" target="_blank">

        <div class="repository-card">    

            <h3>${repo.name}</h3>

            <div class="repository-stats">

                <span>⭐Stars: ${repo.stargazers_count}</span>
                <span>🍴 Forks: ${repo.forks_count}</span>
                <span>👀 Watchers: ${repo.watchers_count}</span>
                <span>💻 Language: ${repo.language || 'Não informada'}</span>

            </div>

        </div>

    </a>

    `).join('') : `<p>Repositories not found.</p>`;

    container.innerHTML = `

    <div class="profile-card">

      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">

      <div class="profile-info">

        <h2>${userData.name || "No name available 😓."}</h2>

        <p>${userData.bio || "No bio available 😓."}</p>

      </div>

    </div>

    <div class="profile-counters">

        <div class="followers">

            <h4>👥 Followers</h4>

            <span>${userData.followers}</span>

        </div>

        <div class="following">

            <h4>👥 Following</h4>

            <span>${userData.following}</span>

        </div>

    </div>

    <div class="profile-repositories">

        <h2>Repositories</h2>

        <div class="repositories">

            ${repositoriesHTML}

        </div>

    </div>
  `;
}