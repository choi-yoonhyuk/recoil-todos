import React from "react";
import { useForm } from "react-hook-form";
import { DefaultValue } from "recoil";

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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

// React-Hook-Form
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "",
    },
  });
  const onVaild = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password1) {
      setError(
        "password1",
        {
          message: "The password you entered is incorrect",
        },
        { shouldFocus: true }
      );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "이메일 형식으로 입력해주세요",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("username", {
            required: "Write Name",
            minLength: {
              value: 4,
              message: "too short",
            },
            validate: (value) => value.includes("nico") ? "'nico'를 포함 할 수 없습니다." : true ,
          })}
          placeholder="UserName"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: 5,
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password is too short",
            },
          })}
          placeholder="confirm password"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
