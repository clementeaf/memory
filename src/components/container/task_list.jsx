import React from 'react'
import { Contacto, Task } from '../../models/task.class'
import { LEVELS } from './../../models/levels.enum';
import TaskComponent from './../pure/forms/task';

const TaskListComponent =(props)=> {
  
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const defaultContact = new Contacto('Clemente', 'Arriagada', 'carriagdafalcone@gmail.com', true);

    const changeState = (id) => {
      console.log('TODO:Cambiar estado de nueva tarea')
    }

    const changeStateContact = (id) => {
      console.log('TODO:Cambiar estado de nueva tarea')
    }

    return (
    <div>
      <div>
        Tu tarea:
      </div>
      {/* To DO: Aplicar un for/map para renderizar lista */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
      <TaskComponent contacto={defaultContact}></TaskComponent>
    </div>
  )
}

export default TaskListComponent

