import React, {Fragment,useState} from 'react';

const Temperatura = () => {

    const [temperatura,setTemperatura] = useState(15)

    const Subir = ()=>{
        setTemperatura(temperatura+1)
    }

    const Bajar = ()=>{
        setTemperatura(temperatura-1)
    }

    return(
        <Fragment>
            <div className="container">
                <h2>La temperatura es: {temperatura}</h2>
                <p>{temperatura > 21 ? 'Hace Calor' : 'Hace Frio'}</p>
                <button onClick={Subir}>Aumentar temperatura</button>
                <button onClick={Bajar}>Reducir temperatura</button>
            </div>
        </Fragment>
    )
}

export default Temperatura