import React from 'react'
import PropTypes from 'prop-types'
import { Task, Contacto } from '../../../models/task.class';

const TaskComponent = ({contacto}) => {
  return (
    <div>
      {/* <h2>Nombre: {task.name}</h2>
      <h3>Descripcion: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>Esta tarea esta: {task.completed ? "COMPLETED":"PENDING"}</h5> */}
      <h1>Nombre: {contacto.Nombre}</h1>
      <h2>Apellido: {contacto.Apellido}</h2>
      <h3>Email: {contacto.Email}</h3>
      <h4>Conectado: {contacto.Conectado ? "Contacto en linea":"Contacto No Disponible"}</h4>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    contacto: PropTypes.instanceOf(Contacto)
}

export default TaskComponent
