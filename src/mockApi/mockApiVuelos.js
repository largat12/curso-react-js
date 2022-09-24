const data =  [{
    'id':"1",
    'pictureUrl':'https://www.viajesexito.com/Portals/1/Images/productos/aerolineas/destinos/default.jpg',
    'title':'Ibague',
    'description': 'Bógota',
    'price': '115900',
    'puntos': '33',
    'stock': '5',
    'categoria':'Ibague',
},
{
    'id':"2",
    'pictureUrl':'https://www.viajesexito.com/portals/1/Images/productos/aerolineas/destinos/Cali/Cali-1.jpg',
    'title':'Cali',
    'description': 'Medellín',
    'price': '119110',
    'puntos': '34',
    'stock': '10',
    'categoria':'Cali',
},
{
    'id':"3",
    'pictureUrl':'https://www.viajesexito.com/portals/1/Images/productos/aerolineas/destinos/Bucaramanga/Bucaramanga.jpg',
    'title':'Bucaramanga',
    'description': 'Medellín',
    'price': '119840',
    'puntos': '34',
    'stock': '3',
    'categoria':'Bucaramanga',
},
{
    'id':"4",
    'pictureUrl':'https://www.viajesexito.com/Portals/1/Images/productos/aerolineas/destinos/medellin/Medellin-2.jpg',
    'title':'Medellín',
    'description': 'Montería',
    'price': '119840',
    'puntos': '34',
    'stock': '2',
    'categoria':'Medellín',
}]

export function getVuelos(){
    return new Promise((resolve) => {
        console.log('realizando consulta')
        setTimeout(()=>{
            resolve(data)
        }, 2000)
        
    })
}
