const usuarios = [];
let usuariosFiltrados= [];

const getUsers = async () => {
    try {
        const response = await fetch(`http://localhost:3000/users`);
        const data = await response.json();
        usuarios.push(...data);
    } catch (error) {
        console.error(error, {message: 'Error al obtener usuarios'});
    }
}

const printData = () => {
    const users = document.querySelector('#app');
    const paginated = getPaginatedUsers();

    users.innerHTML = `
        <ul>
            ${paginated.map(user => `<li>${user.username}</li>`).join('')}
        </ul>
        <div id="paginationControls"></div>
    `
    printPaginationsControls();
}

getUsers();