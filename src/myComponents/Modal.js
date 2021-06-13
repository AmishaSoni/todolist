import React,{useState} from 'react'

const Modal = ({tasks,setTasks,setOpenModals}) => {
    const [value,setValue]=useState('')
    let submitValue=()=>{
        setTasks([...tasks,{id:((tasks[tasks.length-1].id))+1,desc:value}])
        setOpenModals(false)
    }
    return (
        <div className='overlay'>
            <div className='mainModal'>
                <input type="text" onChange={(e)=> setValue(e.target.value)} />
                <button className='submitBtn' onClick={submitValue}>submit</button>
            </div> 
        </div>
    )
}

export default Modal
