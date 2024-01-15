import React, { useEffect, useState } from 'react'
import { ClienteAll } from '../../services/ClienteService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ClienteLista = () => {
  const navegar = useNavigate()
    const [clientes,setClientes]=useState([])
    const traerTodosLosClientes= async()=>{
        const respuesta = await ClienteAll()
       
        setClientes(respuesta.data)
      //  console.log(clientes);

    }
    const eliminarCliente = ()=>{
      Swal.fire({
        title: "Eliminar?",
        text: "Esta Seguro que desea eliminar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }
    const verCliente = (id)=>{
      if(id){
        navegar(`/clienteFormulario/${id}`)
      }else{
        navegar('/clienteFormulario')
      }
     
    }
    useEffect(()=>{
        traerTodosLosClientes()
    },[])

  return (
    <div>
       
           <table className="table table-hover m-2">
  <thead>
    <tr>
      
      <th scope="col">Nombre</th>
      <th scope="col">Celular</th>
      <th scope="col">Email</th>
      <th scope="col">Ver</th>
      <th scope="col">Eliminar</th>
      
    </tr>
  </thead>
  <tbody>
    {clientes.map(c=>(
         <tr key={c.id}>
         
         <td>{c.nombre}</td>
         <td>{c.telefono}</td>
         <td>{c.email}</td>
        <td>
        <FontAwesomeIcon onClick={()=>verCliente(c.id)} icon={faMagnifyingGlass} />
        </td>
         <td>
         <FontAwesomeIcon onClick={eliminarCliente} icon={faTrash} />
         </td>
       </tr>
    ))}
   
    
  </tbody>
</table>

    </div>
  )
}
