import { atom, selector } from "recoil";


export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  "DELETE" = "DELETE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const toDoCate = atom<Categories>({
  key: "toDoCate",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: JSON.parse(localStorage.getItem("TODO") || "[]"),
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const toDoCategory = get(toDoCate);
    return toDos.filter((todo) => todo.category === toDoCategory);
  },
});
