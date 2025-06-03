<script setup>
    const consultarEmpleados = ascyn () = {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
            
        } catch (error) {
            console.error(error, {message: 'Error al consultar empleados'})
        }


    }
</script>

<template>
    <div>
        Hola Develoteca
    </div>
</template>