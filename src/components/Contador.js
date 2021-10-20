import React,{Fragment,useState} from 'react';

const Contador = () =>{

    // UseState se utiliza para mantener estados postRenderizacion
    const [numero,setNumero] = useState(0);

    //Se crea funcion Aumentar 
    const Aumentar = () =>{

        setNumero(numero+1)
    }
    //Se crea funcion reducir
    const Reducir = () =>{
        setNumero(numero-1)
    }

    return(
        <Fragment>
            <h2>Cantidad del Contador: {numero}</h2>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Reducir</button>
        </Fragment>
    )
}

export default Contador;