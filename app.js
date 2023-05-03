function Hamburguesa (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = `${nombre} por $ ${precio}`;
}

const simple = new Hamburguesa (`Hamburguesa simple`, 1100);
const completa = new Hamburguesa ("Hamburguesa completa", 1500);
const dobleCheese = new Hamburguesa ("Hamburguesa doble cheese", 2250);
const tripleCheese = new Hamburguesa ("Hamburguesa triple cheese", 2500);
const agrandar = new Hamburguesa ("Agrandado", 200);


let descripciones = []
let carrito = []
let montoTotal = ""
let descripcionPedido = ""

solicitarPedido();
function solicitarPedido(){

    eleccion = prompt(`Elija que hamburguesa desea comer:
    1: Simple
    2: Completa
    3: Doblecheese
    4: Triplecheese
    8: Ver carrito
    9: Limpiar carrito
    0: Finalizar`) 


while (eleccion != "0"){
    switch (eleccion){
        case "1":
            carrito.push(simple)
            break;
        case "2":
            carrito.push(completa)
            break;
        case "3":
            carrito.push(dobleCheese)
            break;
        case "4":
            carrito.push(tripleCheese)
            break;
        case "8":
        verCarrito();    
        case "9":
        vaciarCarrito();
        default:
            alert(`La opcion ingresada no es correcta`)
            solicitarPedido();
            break;
    }

    agrandarCombo();

    montoTotal = carrito.reduce((acumulado, hamburguesa)=>{
        return acumulado + hamburguesa.precio
    },0);
    
    descripciones = carrito.map(producto => producto.descripcion);
    descripcionPedido = descripciones.join("\n");
 

   
    eleccion = prompt(`Agregar al pedido:
    1: Simple
    2: Completa
    3: Doblecheese
    4: Triplecheese
    8: Ver carrito
    9: Limpiar carrito
    0: Finalizar`)
    
    } 

    alert(`Su pedido fue finalizado, su valor final es de $${montoTotal} \n\n ${descripcionPedido}`)
    return 0;
} 

function agrandarCombo(){
    let respuestaAgrandar = prompt(`¿Desea agrandar el combo por $${agrandar.precio}
    Ingrese SI o NO`).toLowerCase()
    if(respuestaAgrandar === "si"){
        carrito.push(agrandar);
    } else if(respuestaAgrandar === "no") {
    } else {
        alert(`Por favor responda solo con "SI" o con "NO"`)
        agrandarCombo();
    } 
}

function vaciarCarrito() {
    respuestaVaciar = prompt(`¿Esta seguro de querer eliminar todos los articulos de su carrito? \n Ingrese SI o NO`).toLowerCase();
        if (respuestaVaciar === "si"){
            carrito = [];
            alert("Su pedido fue eliminado, puede continuar con su compra.");
            solicitarPedido();
        } else if (respuestaVaciar === "no"){
            solicitarPedido();
        } else {
            vaciarCarrito();
        }
}

function verCarrito() {
    mostrarCarritoUsuario = alert(`Usted ha seleccionado: \n\n ${descripcionPedido} \n\n Valor: ${montoTotal}`)
    solicitarPedido();
}