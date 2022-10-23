export function ElementsCheckout({data, elemento}){

    if(elemento === 'producto'){
        return(
            <div className={`row ${elemento}`}>
                <div className='col-6'>
                    <p>{`${data.title} x ${data.count}`}</p>
                </div>
                <div className='col-6'>
                    <p>$ { new Intl.NumberFormat("es-CO").format(Math.trunc(data.precio))}</p>
                </div>
            </div>
        )
    }
    else if(elemento === 'valores'){
        return(
            <div className={`row ${elemento}`}>
                <div className='col-6'>
                    <p>{data.title}</p>
                </div>
                <div className='col-6'>
                    <p>$ { new Intl.NumberFormat("es-CO").format(Math.trunc(data.precio))}</p>
                </div>
            </div>
        )
    }
    
}