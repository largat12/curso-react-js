import { Button }  from "./Button/Button";

export function Card(props){
  console.log("props", props)
    return(
      <div className='card'>
        <div className='cad-img'>
          <img src="" alt=""/>
        </div>
        <div className='card-detail'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h4>$ {props.price}</h4>
            <Button />
        </div>
      </div>    
    );
  
  }