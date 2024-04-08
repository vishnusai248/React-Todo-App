import React from 'react'
import '../assets/Todolist.scss';
import trashlogo from '../assets/trash.svg'
export default function Todolists(props) {
    let list = props.todos

    const removetask = (index) => {
        props.settodos(previoustodos => {
            return previoustodos.filter((_, previous_index) => index !== previous_index);
        });
        console.log("hi ")
    };
    
  return (
    <div className='todolistdiv '>
        <h3>Todo's</h3>
        {list.length>0 ? (
        <ul className={"todo-listul " +(list.length > 0 ? "scroll_list" : "")}>
            {list.map((item, index)=>{
                return (
                    <li className='todo-item d-flex w-100' key={index}>

                        <span className='flex-grow-1'>
                            {index+1}.&nbsp;
                            {item}</span>
                        <button className="deletebtn btn" onClick={()=>removetask(index)}><img src={trashlogo} className='trashimg' /></button>
                    </li>
                )})
            }
            
        </ul>):<div className='d-flex justify-content-center align-items-center h-100'><p>No todo's added yet.</p></div>
        }
    </div>
  )
}
