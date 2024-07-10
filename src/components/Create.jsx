import { useContext, useState } from "react";
import { todocontext } from "../Context/Context";

const Create = () => {
    const [tasks, settasks] = useContext(todocontext);

    const [title, settitle] = useState("");

    const TaskSubmitHandler = (e) => {
        e.preventDefault();
        settasks([...tasks, { title: title, completed: false }]);
        settitle("");
    };

    return (
        <form
            onSubmit={TaskSubmitHandler}
            className="w-[35%] flex justify-between px-5 my-[2%]"
        >
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                placeholder="write your next task..."
                className="px-6 py-1 text-yellow-100 outline-none w-[100%]  rounded-xl bg-zinc-700 "
                type="text"
            />
            <button className="outline-none text-4xl m-2 font-extrabold flex justify-center items-center w-[1vmax] h-[6vmax] rounded-full bg-orange-600">
                <i className="ri-add-fill"></i>
            </button>
        </form>
    );
};

export default Create;