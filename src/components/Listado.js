import React,{Fragment,useState} from 'react';

const Listado = () => {

    const [numeros,setNumeros] = useState([1,2,3,4,5,6,7,8,9])

    return(
        <Fragment>
            <ul>
                {
                    numeros.map((numero,index) =>
                        <li key={index}>{numero}</li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado