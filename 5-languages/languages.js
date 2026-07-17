const languages = prompt("Какой язык вы используете")

switch (true) {
    case languages === "EN":
        console.log("Hello");
        break;
    case languages === "ES":
        console.log("¡Hola!");
        break;
    case languages === "DE":
        console.log("Gutten tag!");
        break;
    case languages === "RU":
        console.log("Привет!");
        break;                 
    default: 
        console.log("Не знаешь язык");
}