import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useTasks } from '../context/taskContext';



const Layout = ( { children } ) => {

    const router =  useRouter();

    const { tasks } = useTasks();

    return (
        <div className="h-screen bg-gray-900 text-white">
            <header className="flex bg-gray-800 text-white px-28 py-5 items-center">
                <Link href="/">
                <a>
                   <h1 className="font-black text-lg">tasks app</h1>
                </a>
                </Link>
                <span className="ml-2 text-gray-400 font-bold">
                    {tasks.length} tareas
                </span>
                <div className="flex-grow text-right">
                    <button className=" bg-green-500 hover:bg-green-300 px-5 py-2 font-bold inline-flex items-center" onClick={() => router.push('New')}>
                        <AiOutlinePlus  className="mr-2"/>
                        add tarea
                        </button>
                </div>

            </header>
            <main className="px-28 py-10">
                {children}
            </main>
        </div>
    )
}

export default Layout;