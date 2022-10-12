import { useTask } from "../context/";
import { QueCreate } from "../lib/TaskActions";
import { SubmitButton } from "./SubmitButton";

export const TaskFrom = () => {
    const {job, setJob, que,setQue} = useTask();

    const newJob = async () => {
        const data = {
            title: job,
            status: false,
        };

        await setQue([...que, data]);
        setJob("");
    } 

    return (
        <div className="flex p-10">
            <input type="text" value={job} onChange={event => setJob(event.target.value)} onKeyPress={event => {(event.key === 'Enter' && job.length > 3) ? newJob() : ''}}
            className="form-control
                block
                w-full
                px-3
                py-2
                pr-20
                text-base
                font-normal
                text-zinc-600
                bg-white bg-clip-padding
                border border-solid border-zinc-300
                rounded-xl
                transition
                ease-in-out
                m-0
                focus:font-medium  focus:bg-white focus:border-transparent focus:ring-0 focus:outline focus:outline-zinc-600" placeholder="Add a new task"/>
            <SubmitButton />
        </div> 
    )
}