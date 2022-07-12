// let entrada = prompt("ingrese un dia")
// while(entrada != "ESC"){
//     switch(entrada){
//         case "martes":
//             alert("Turnos disponibles");
//             break;
//         case "miercoles":
//             alert("Turnos disponibles");
//             break;
//         case "jueves":
//             alert("Turnos disponibles");
//             break;
//         case "viernes":
//             alert("Turnos disponibles");
//             break;
//         case "sabado":
//             alert("Turnos disponibles");
//             break;
//         case "domingo":
//             alert("Estamos Cerrados");
//             break;
//         case "lunes":
//             alert("Estamos Cerrados");
//             break;
//         }
//     entrada = prompt("ingrese un dia")
// }
// alert("Bienvenido a Leglam");

// function largoDelPelo(){
//     let largo =prompt("ingrese el largo de su cabello")
//     if(largo === ""){
//         alert("debe ingresar el largo de su cabello");
//         largoDelPelo();
//     }
//     else{
//         ingresarColor()
//     }
//     console.log(largo)
// }

// largoDelPelo()

// function ingresarColor(){
//     let color =prompt("ingrese el color de su cabello")
//     if(color === ""){
//         alert("debe ingresar el color de su cabello");
//         ingresarColor();
//     }
//     else{
//         estadoDelPelo()
//     }
//     console.log(color)
// }

// function estadoDelPelo(){
//     let estado =prompt("ingrese el estado de su cabello")
//     if(estado === ""){
//         alert("debe ingresar el estado de su cabello");
//         estadoDelPelo();
//     }
//     else{
//         trabajoDeseado()
//     }
//     console.log(estado)
// }

// function trabajoDeseado(){
//     console.log("1:corte");
//     console.log("2:decoloracion");
//     console.log("3:alisado")

// let trabajoDeseado=prompt("Seleccione el trabajo deseado");

// switch(trabajoDeseado){
//     case "1":
//         console.log("Eligio corte de Cabello");
//         pregunta();
//         break;
//     case "2":
//         console.log("Eligio corte de Cabello");
//         pregunta();
//         break;
//     case "3":
//         console.log("Eligio corte de Cabello");
//         pregunta();
//         break;
//     default:
//         alert("Seleccione un tipo de trabajo");
//         trabajoDeseado();
//         break;
// }
// }
// function pregunta(){
//     console.log("Pedir otro turno");
//     console.log("1: Si");
//     console.log("2: No");
    
//     let preguntaFinal=prompt("¿Desea pedir otro turno?");

//     switch(preguntaFinal){
//         case "1":
//             largoDelPelo();
//             break;
//         case "2":
//             alert("Te esperamos el dia del turno");
//             break;
//         default:
//             alert("Opcion Invalida");
//             break;

//     }
// }