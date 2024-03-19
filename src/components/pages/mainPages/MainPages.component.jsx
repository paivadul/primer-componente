import { useEffect, useState } from "react";

const STATES = {
    "LOADING": 0,
    "ERROR": 1,
    "READY": 2,
}

const MainPages = (props) => {
    
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [pageState, setPageState] = useState(STATES.LOADING);

    const [data, setData] = useState(null); //acá se guardan los datos de API

    useEffect(() => {
        let id = Math.floor(Math.random() * 151)
        // id *= -1
        fetch("//pokeapi.co/api/v2/pokemon/" + id)
        .then(response => response.json())
        .then(data => {
            setPageState(STATES.READY)
            setData(data);
        })
        .catch(err => {
            setPageState(STATES.ERROR)
            console.error(err);
        });
    }, []);
    
    switch (pageState) {
        case STATES.LOADING:
            return <h1>Cargando...</h1>
        case STATES.ERROR:
            return <h1>Error!</h1>
        case STATES.READY:
            return <div>
                        <h1>Hola {data.name}!</h1>
                        {/* //data.x es el llamado a los datos contenidos en la PokeApi */}
                        <img src={data.sprites.back_default} />
                        <small># {data.order}</small>
                    </div>    
        default:
            break;
    }


    // return loading ? 
    // <div>
    //     <h1>Cargando...</h1>
    // </div>   :   (
    //     error != null ? 
    //     <div>
    //         <h1>Error!</h1>
    //     </div>   :  <div>
    //                     <h1>Hola {data.name}!</h1>
    //                     <img src={data.sprites.back_default} />
    //                     <small># {data.order}</small>
    //                 </div>
    //     )
}

export default MainPages;