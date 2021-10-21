import React, {useState} from 'react';

const Formulario = () => {
    const [nombre,setNombre] = useState()
    const [edad,setEdad] = useState()

    const validar = (event) => {
        event.preventDefault()
        if(!nombre.trim()){
            console.log("Nombre Vacio")
            return
        }

        if(!edad.trim()){
            console.log("Edad Vacia")
            return
        }
    }


    return(
        <div className="container">
            <form  onSubmit={validar} className="form-group">
                <input 
                    placeholder="Introduce el nombre" 
                    onChange={(e)=>{setNombre(e.target.value)}} 
                    type="text" 
                    className="form-control mb-3"/>
                <input 
                    placeholder="Introduce la edad" 
                    onChange={(e)=>{setEdad(e.target.value)}} 
                    type="text" 
                    className="form-control mb-3"/>
                <input type="submit" className='btn btn-info btn-block'/>
            </form>
        </div>
    )
}

export default Formulario