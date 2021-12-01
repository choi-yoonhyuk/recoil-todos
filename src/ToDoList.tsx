import React from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("Too short!");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }


// React-Hook-Form
function ToDoList() {
  const { register, watch } = useForm();
  console.log(register("email"));
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("name")} placeholder="Name" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
