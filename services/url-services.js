const URL_RICK_AND_MORTY = 'https://rickandmortyapi.com/api/character'
const URL_USERS = 'https://jsonplaceholder.typicode.com/users'

const listCharacters = ()=> fetch(URL_RICK_AND_MORTY).then((respuesta)=> respuesta.json())

const listUsers = ()=> fetch(URL_USERS).then((respuesta)=> respuesta.json())

export const urlService = {
    listCharacters,
    listUsers
}