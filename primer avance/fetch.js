/**
 * para el fetch es para obtener una API 
 * pasas una url, el metodo, el cuerpo y los datos que quieren obtener
 */
// var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"

// var responseData = fetch(url).then(response => response.json());
// responseData.then(({items, has_more, quota_max, quota_remaining}) => {
//     for ({title, owner, is_answered} of items) {
//         console.log("Q: " + title + "-- is answered: " + is_answered)
//     }
// })

//API de resources 

var url = "https://jsonplaceholder.typicode.com/posts"

// esta es la forma de descomprimir un json obteniendo el title del json
//fetch(url).then(response => response.json())
// .then(response =>{
//     response.forEach(element => {
//         console.log(element.title)
//     });
// })

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         userId: 1,
//         title: "lore ipsum etc etc"
//     })

// }).then (response => response.json())
//     .then (response => console.log(response))

//ejercicio usar el API user: lectura de los datos: username, compañia, direccion, etc
//y agregar otro 

var url = "https://jsonplaceholder.typicode.com/users"
fetch (url).then(response => response.json())
.then (response =>{
    response.forEach(element => {
        console.log(element.username, element.company, element.address,element.email)
    })
})

fetch (url, {
    method: "POST",
    headers: {
        "Content_type": "application/json"
    },
    body: JSON.stringify({
        userId: 1,
        username: "Bret",
        email: "Sincere@april.biz"

    })
}).then (response => response.json())
    .then (response => console.log(response))


    