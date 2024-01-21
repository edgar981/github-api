const axios = require('axios');

exports.getGoogleTopRepos = async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/users/google/repos?sort=stars');
    
        const topRepos = response.data.slice(0, 10);

        const repoListHTML = `
            <h1>Los 10 repositorios más populares de Google en GitHub</h1>
                <ol>
                    ${topRepos.map((repo, index) => `<li>${repo.name}</li>`).join('')}
                </ol>
        `;

        res.status(200).send(repoListHTML);
      } catch (error) {
        console.error('Error al obtener los repositorios:', error.message);
        res.status(500).send('Error interno del servidor');
      }
}