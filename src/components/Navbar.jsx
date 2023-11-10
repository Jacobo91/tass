import { NavLink } from "react-router-dom"
import { useAPI } from "../hooks/useAPI"
import { idUsuario } from "../utils"

function Navbar({ setID }) {

    const { isLoading, error, data } = useAPI("grupos", `grupo/${idUsuario}/usuario`)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>ooooops ocurrio un error</p>
    }

    console.log(data)

    const { grupos } = data

    const handleGroup = (id) => {
        console.log(
                id
        )
        setID(id)
    }

    return (
    <nav>
        <ul>
            {grupos && 
                grupos.map((grupo) => (
                    <NavLink  onClick={() => handleGroup(grupo._id)} to={`/${grupo.nombre}`} key={grupo._id} >{grupo.nombre.toUpperCase()}</NavLink>
                ))
            }
        </ul>
    </nav>
    )
}

export default Navbar