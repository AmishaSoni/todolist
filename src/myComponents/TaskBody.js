import React,{useState} from 'react'
import Modal from './Modal'
const TaskBody = () => {
    console.warn("hello world");
    const [openModal,setOpenModal]=useState(false)

    const [task,settask]=useState(
        [
            {id:0,
             desc:"Welcome to your todolist !"
            },
            {id:1,
             desc:"Hit the + button to add a new item."
            },
            {id:2,
              desc:"Double click to delete an item"
            }
        ]
    )
    //console.log(task)
    let deleteTask=(id)=>{
        settask(task.filter((elem)=>{
            return elem.id!=id;
        }))
    }
    return (
        <>
        <div className="content">
            {task.map((item)=>{
               return <div className='item' key={item.id} onDoubleClick={()=>deleteTask(item.id)}>{item.desc}</div>
            })}
            <button onClick={()=>setOpenModal(true)} className='btn'>+</button>
            {openModal?<Modal tasks={task} setTasks={settask} setOpenModals={setOpenModal} />:''} 
        </div> 
        </>
    );
}

export default TaskBody
