import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const Person: React.FC = ()=>{
    const context = useContext(AppContext)
    const [firstname, ] = context.firstname
    const [lastname, ] = context.lastname
    return <>{firstname} {lastname}</>
}

export default Person