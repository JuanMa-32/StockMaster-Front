import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClientePrincipal } from "../components/Clientes/ClientePrincipal"
import { NavBar } from "../components/headers/NavBar"

export const ClientePage = () => {
    return (
        <>
            <NavBar titulo={`clientes`} />
            <ClientePrincipal />
        </>)
}