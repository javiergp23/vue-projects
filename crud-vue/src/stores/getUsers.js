import { defineStore } from 'pinia'
import axios from 'axios'

export const useGetUsers = defineStore('getUsers', () => {
    
    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users')
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(error, {message: 'Error al obtener los datos de los usuarios'})
        }
    }

    const addUser = async (nuevoUsuario) => {
         await axios.post(`http://localhost:3000/users`, nuevoUsuario)
         getUsers();
    }

    const deleteUser = async (id) => {
        const confirmDelete = window.confirm('Estas seguro que deseas eliminar este usuario?')
        if(confirmDelete){
            try {
                await axios.delete(`http://localhost:3000/users/${id}`)
                alert('Usuario eliminado exitosamente!')
                getUsers();
            } catch (error) {
                console.log(error, {message: 'Error al eliminar el usuario'})
            }
        }
}

    return { getUsers, deleteUser, addUser }
})