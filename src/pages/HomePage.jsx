import { TaskFrom } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { TaskTitle } from "../components/TaskTitle";
import { useTask } from "../context";

export default function HomePage() {
    return (
        <div className="flex h-screen bg-neutral-50">
            <div className="m-auto">
                <div className="container w-screen max-w-screen-lg relative h-[36rem] border-4 border-cyan-400 bg-white">
                    <TaskTitle title="REACT TODO LIST"/>
                    <TaskFrom />
                    <TaskList />
                </div>
                
            </div>
        </div>
    )
}