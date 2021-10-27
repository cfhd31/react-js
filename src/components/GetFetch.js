const naves =[
    { id: 1, nave: "Vindicator",  precio: "5B",   imagen: '../../assets/imagen/acorazado3.jpg'},
    { id: 2, nave: "Rattlesnake", precio: "4.3B", imagen: '../../assets/imagen/acorazado1.jpg'},
    { id: 3, nave: "Bhaalgorn",   precio: "6.3B", imagen: '../../assets/imagen/acorazado2.jpg'},
    { id: 4, nave: "Machariel",   precio: "3.3B", imagen: '../../assets/imagen/acorazado3.jpg'},
]

export const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(naves)
    }, 3000)
})