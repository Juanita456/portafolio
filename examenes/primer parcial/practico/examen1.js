import('node-fetch').then(({ default: fetch }) => {
    const readline = require('readline');

var url = "https://jsonplaceholder.typicode.com/todos";

function mostrarMenu() {
    console.log("Menú:");
    console.log("1. Lista de todos los pendientes (solo IDs)");
    console.log("2. Lista de todos los pendientes (IDs y title)");
    console.log("3. Lista de todos los pendientes sin resolver (ID y title)");
    console.log("4. Lista de todos los pendientes resueltos (solo ID y title)");
    console.log("5. Lista de todos los pendientes (IDs y userId)");
    console.log("6. Lista de todos los pendientes resueltos (ID y userID)");
    console.log("7. Lista de todos los pendientes sin resolver (ID y userID)");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Ingrese el número de la opción: ", function (opcion) {
        opcion = parseInt(opcion);

        switch (opcion) {
            case 1:
                fetch(url).then(response => response.json())
                    .then(response => {
                        response.forEach(element => {
                            console.log("-ID: "+element.id);
                        });
                        rl.close();
                    });
                break;
            case 2:
                fetch(url).then(response => response.json())
                    .then(response => {
                        response.forEach(element => {
                            console.log("-ID: "+element.id, "-Title: "+element.title);
                        });
                        rl.close();
                    });
                break;
            case 3:
                fetch(url).then(response => response.json())
                    .then(response => {
                        response.forEach(element => {
                            if (element.completed == false) {
                                console.log("-ID: "+element.id, "-Title: "+element.title);
                            }
                        });
                        rl.close();
                    });
                break;
            case 4:
                fetch(url).then(response => response.json())
                    .then(response => {
                        response.forEach(element => {
                            if (element.completed == true) {
                                console.log("-ID: "+element.id, "-Title: "+element.title);
                            }
                        });
                        rl.close();
                    });
                break;
            case 5:
                fetch(url).then(response => response.json())
                    .then(response => {
                        response.forEach(element => {
                            console.log("-ID: "+element.id, "-UserID: "+element.userId);
                        });
                        rl.close();
                    });
                break;
            case 6:
                fetch(url).then(response => response.json())
                    .then(response => {
                        response.forEach(element => {
                            if (element.completed == true) {
                                console.log("-ID: "+element.id, "-UserID: "+element.userId);
                            }
                        });
                        rl.close();
                    });
                break;
            case 7:
                fetch(url).then(response => response.json())
                    .then(response => {
                        response.forEach(element => {
                            if (element.completed == false) {
                                console.log("ID: "+element.id, "UserID: "+element.userId);
                            }
                        });
                        rl.close();
                    });
                break;
            default:
                console.log("Opción inválida");
                rl.close();
        }
    });
}

mostrarMenu();
}).catch(err => console.error(err));