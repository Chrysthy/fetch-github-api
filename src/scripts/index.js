//*buscando clicando no botão
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    getUserProfile(userName)
})

//*buscando com a tecla enter
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserProfile(userName)
    }
})

async function user(userName) {

    const response = await fetch(`https://api.github.com/users/${userName}`)

    return await response.json()

}

async function repos(userName) {

    const response = await fetch(`https://api.github.com/users/${userName}/repos`)

    return await response.json()

}

function getUserProfile(userName) {

    user(userName).then(userData => {

        console.log(userData);


        let userInfo = `
        
        <img src="${userData.avatar_url}" alt="Foto do Perfil">

        <div class="data">
        
            <h1>${userData.name ?? 'Não possui nome cadastrado 😓'}</h1>

            <p>${userData.bio ?? 'Não possui bio cadastrada 😓'}</p>

        </div>
        
        `

        document.querySelector('.profile-data').innerHTML = userInfo

    })

}

function getUserRepositories(userName) {

    repos(userName).then(reposData => {

        let repositoriesItens = ""

        reposData.forEach(repo => {

            repositoriesItens += `
            
            <li>
            
            <a href="${repo.html_url}"> ${repo.name}</a> 
            
            </li>
            
            `
        });

        console.log(repositoriesItens);


    })
}

getUserRepositories('chrysthy')