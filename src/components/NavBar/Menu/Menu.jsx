import './menu.css';

function executeMenu(e){
    e.preventDefault()
    const btn = document.getElementById("btnMenu")
    const elemento = document.getElementById("menu")
    let dataElement = elemento.getAttribute("data-element")
    var positionTop = btn.offsetTop + btn.offsetHeight
    console.log("positionTop", positionTop)
    if(dataElement === "false"){
        elemento.setAttribute("data-element","true")
        elemento.classList.remove('d-none')
        elemento.style.top = positionTop+"px"
    }
    else{
        elemento.setAttribute("data-element","false")
        elemento.classList.add('d-none')
    }
}
export function Menu(props){
    const elementMenu =     [{"title":"Vuelos","href":"#","class":"icon-avion"},
                             {"title":"Paquetes","href":"#", "class":"icon-paquetes"},
                             {"title":"Hoteles","href":"#", "class":"icon-hotel"},
                             {"title":"Actividades","href":"#", "class":"icon-actividades"},
                             {"title":"Carros","href":"#", "class":"icon-autos"}]



    return (
        <>
            <button id='btnMenu' onClick={executeMenu}><i className="icon-menu"></i><span>{props.btnTitleMenu}</span></button>
            <nav id='menu' className="d-none" data-element="false">
                <ul>
                    {elementMenu.map(elment => <li><a href={elment.href}><i className={elment.class}></i><span>{elment.title}</span></a></li>) }
                </ul>
            </nav>
        </>
        
    )
}