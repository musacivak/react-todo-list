import { useTask } from "../context"

export const TaskList = () => {
    const { que, setQue } = useTask();
    
    const changeStatus = (val) => {
        const array = [...que];
        array[val].status = !array[val].status;
        setQue(array);
    }

    const deleteItem = (val) => {
        if (confirm("Are you sure you want to delete the record?") == true) {
            const array = [...que];
            array.splice(val, 1);
            setQue(array);
          }
    }

    return (
        <div className="flex p-10 ml-12 mr-12">
            <ul className="list-disc w-full">
                {que.map((val, index) => {
                    return (
                        <li key={index}  className={"flex flex-row mb-4 text-zinc-600 justify-between hover:underline hover:font-bold " + (val.status ? 'line-through' : '')}>
                            <span className="cursor-pointer" onClick={() => {changeStatus(index)}}>{val.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {deleteItem(index)}} className="w-4 cursor-pointer fill-red-400 hover:fill-red-600" viewBox="0 0 448 512"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/></svg>
                        </li>
                    )
                })}
                {que.length < 1 && <div className="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700" role="alert">Entry your first task!</div>}
            </ul>
        </div>
    )
}