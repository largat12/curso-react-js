import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';


export const TitleComponent = (props) => {
    let title = props.title;
    const params = useParams()
    
    let defaultTitle = "Merkopolis"
    if(title === "Categoria"){
        title = params.id.charAt(0).toUpperCase() + params.id.slice(1);
        title = `${title} | ${defaultTitle}`
    }
    else if(title === "Producto"){
        title = `Detalles de producto | ${defaultTitle}`
    }
    else{
        title = `${title} | ${defaultTitle}`
    }   
    
    

    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
};