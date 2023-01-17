let productos = [
{
    id: 1,
    nombre: "Item1",
    precio: 20000,
    imagen: "img/imagen1.jpg",
    deporte: "grappling",
},
{
    id: 2,
    nombre: "Item2",
    precio: 15000,
    imagen: "img/imagen2.jpg",
    deporte: "grappling",
},
{
    id: 3,
    nombre: "Item3",
    precio: 8000,
    imagen: "img/imagen3.jpg",
    deporte: "striking",
},
{
    id: 4,
    nombre: "Item4",
    precio: 10000,
    imagen: "img/imagen4.jpg",
    deporte: "striking",
},
];


let templateCard = document.querySelector('#template-card')
let card = document.querySelector('.card')
let fragment = document.createDocumentFragment()
let carrito = {};
let numCompras= document.querySelector('.numCompra')

let contador = 0;

let btn = document.querySelector('.btnAgregar')



productos.forEach((item)=>{
  
 let clone = templateCard.content.cloneNode(true)
  clone.querySelector('img').setAttribute('src', item.imagen)
  
  clone.querySelector('.nombre').textContent = item.nombre
  clone.querySelector('.precio').textContent = item.precio
  
  clone.querySelector('.btnAgregar').dataset.id = item.id;
  fragment.appendChild(clone)
  card.appendChild(fragment)
})



let btnCarrito = document.querySelector('#btn')

let lista = document.querySelector('.lista-items')


btnCarrito.addEventListener('click', (e)=>{
 
 lista.classList.toggle('disable')
  
  
})


//Template Lista de productos:

let templateLista = document.querySelector('#template-lista')

card.addEventListener('click',(e)=>{
  
  if(e.target.classList.contains('btnAgregar')){
    
    numCompras.style.display = 'block'
    contador++;
    numCompras.innerHTML = `${contador}`
    console.log(contador)
    
    let elementos = e.target.parentElement
    
    pintarLista(elementos)
  }
  
})

let pintarLista=(elementos)=>{
  
  let infoCarrito = {
    id: elementos.querySelector('.btnAgregar').dataset.id, 
    
    title: elementos.querySelector('.nombre').textContent, 
    
    precio: elementos.querySelector('.precio').textContent, 
    
    cantidad: 1, 
  }
  
  
  if(carrito.hasOwnProperty(infoCarrito.id)){
    infoCarrito.cantidad = carrito[infoCarrito.id].cantidad + 1;
    
  }
  


  
  carrito[infoCarrito.id] = infoCarrito
  
  
  //console.log(carrito)
  pintarHTML()
}

let pintarHTML=()=>{
  
  lista.innerHTML = null;
  
  Object.values(carrito).forEach((product)=>{
    
   // console.log(product)
   
   let signoPeso = '$'
   let clone = templateLista.content.cloneNode(true)
   
   clone.querySelector('.sp1').textContent = product.cantidad
   
   clone.querySelector('.sp2').textContent = product.title
   
   clone.querySelector('.sp3').textContent  = signoPeso + product.precio * product.cantidad
    
    fragment.appendChild(clone)
    
  })
  
  lista.appendChild(fragment)
  
}



//Open menu navbar:

let menuMobile = document.querySelector('.menu-mobile')

let openMenu = document.querySelector('.btnOpen')

let btnCerrar = document.querySelector('.btnCerrar')
openMenu.addEventListener('click', ()=>{
  menuMobile.classList.remove('disable')
})


btnCerrar.addEventListener('click', ()=>{
  
  menuMobile.classList.add('disable')
  
  
  
})