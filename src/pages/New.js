import Layout from '../components/Layout';
import { useTasks } from '../context/taskContext';
import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

 const New = () => {

    const [task, setTask] = useState({
        title:'',
        description:''
    });

    const { createTask, updateTask, tasks } = useTasks();

    const { query} = useRouter();

    const handleChange = (event) => {
        setTask({...task, [event.target.name]:event.target.value})
    }

    const handleSummit = (event) => {
        event.preventDefault()
        if(!query.id){
            createTask(task.title, task.description)
        }else{
            updateTask(query.id, task)
        }
       
        //push("/")
    }

    useEffect(() => {
        if(query.id){
          const taskFound = tasks.find(task => task.id === query.id);
          setTask({title:taskFound.title, description:taskFound.description})
        }
    }, []) 

    return (
        <Layout>
        <form onSubmit={handleSummit}>
            <h1>{query.id ? 'Update a task':'Create Task'}</h1>
            <input  
            type="text" 
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={task.title}
            className="
            bg-gray-800 
            focus:text-gray-100 
            focus:outline-none
            w-full
            py-3
            px-4
            mb-5
            "/>

            <textarea rows="2" placeholder="Description"  
            name='description'
            onChange={handleChange}
            value={task.description}
            className="
            bg-gray-800 
            focus:text-gray-100 
            focus:outline-none
            w-full
            py-3
            px-4
            mb-5
            "
            >   
            </textarea>
            <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-50" 
            disabled={!task.title}
            >Save</button>
        </form>
        </Layout>
    )
}

export default New;
