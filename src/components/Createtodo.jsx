import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Createtodo(props) {
    const [createTodo, setCreateTodo] = React.useState("")
    
    const handlesubmit=(event)=>{
        event.preventDefault()
        props.settodo([...props.todos, createTodo])
        setCreateTodo("");
    }

    const handletexxtareachange=(e)=>{
        setCreateTodo(e.target.value)
    }
  return (
    <div className='createtododiv p-2 '>
        <Form onSubmit={(event)=>handlesubmit(event)}>
        <Form.Label>Create a new Todo</Form.Label>
        <div className='mb-2'>
        <Form.Control as="textarea" className='todoclass' name='task' value={createTodo} onChange={handletexxtareachange} rows={4}></Form.Control>
            
        </div>
        <button type='submit'  className='btn btn-primary '>Submit</button>

        </Form>
    </div>
  )
}
