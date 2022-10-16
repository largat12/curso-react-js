import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation, useParams } from 'react-router-dom';
import './banner.css';

export function Banner(props){
    const [bannerContent, setBannerContent] = useState([]);
    const [classCategory, setClassCategory] = useState("");

    
    let location = useLocation()
    let locationPathname = location.pathname;
    const params = useParams();
    const categoria = params.id


    useEffect( () =>{
        //validar si viene por una categoria
        if( (categoria !== undefined && categoria !== null) && String(locationPathname).indexOf("category") !== -1){
            let itemBanner = props.data.find( (elementItemBanner) => {
                return elementItemBanner.categoria === categoria.toLocaleLowerCase();
            })
            setBannerContent([itemBanner])
            setClassCategory("banner-categoria")
        }
        else{
            console.log("props.data", props.data)
            setBannerContent(props.data)
        }
    },[categoria, props.data, locationPathname])



    let cantidadItemsBanner = bannerContent.length

    console.log(bannerContent)
    if(bannerContent.indexOf(undefined) === -1){
        return (
            cantidadItemsBanner === 1 
            ?
            <div id="banner" className={classCategory}>
                {bannerContent.map( (elementBanner, index) => {
                    return (<img key={index} className="d-block w-100" src={elementBanner.imagen} alt={elementBanner.alt}/>);
                })}
            </div>
            :
            <div id="banner">
                <Carousel>
                    {bannerContent.map( (elementBanner, index) => {
                        return (<Carousel.Item key={index}><img key={index} className="d-block w-100" src={elementBanner.imagen} alt={elementBanner.alt}/></Carousel.Item>);
                    })}
                </Carousel>
            </div>
        )
    }
    

    
        

    
    




    
}