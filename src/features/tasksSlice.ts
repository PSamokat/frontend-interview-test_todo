/* VENDOR */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../app/store";

export interface CategoriesState {
  id: string;
  name: string;
  description: string;
  category: string;
}
// TODO: Некорректный нейминг, по логике это TaskItem, перенести этот тип в common/types, вместо него добавить тип InitialState = Array<TaskItem>


const initialState: CategoriesState[] = [
  {
    id: "dcf6c7ea-56fe-4e36-960b-686ebf86d651",
    name: "Задача",
    description: "Описание может быть длинным",
    category: "d485a644-5a24-4f55-b3f7-a083338be879",
  },
  {
    id: "8c90d466-4d2b-4813-a5b4-110b014bf7f2",
    name: "Задача2",
    description: "Описание может быть длинным",
    category: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
  },
  {
    id: "5a034ea1-6159-4805-a4be-e8c160d8ef10",
    name: "Задача3",
    description: "Описание может быть длинным",
    category: "",
  },
];
// TODO: Заменить тип на InitialState
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // TODO: Типизировать аргументы каждого редюсера (state: InitialState, action: PayloadAction<*Тип вызываемого action*>)
    tasksAdded: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    tasksUpdated: (state, action) => {
      const { id, name, description, category } = action.payload,
        existingTask = state.find((task) => task.id === id);

      if (existingTask) {
        existingTask.name = name;
        existingTask.description = description;
        existingTask.category = category;
      }
    },
    tasksRemoved: (state, action) => {
      // TODO: Не жалеть буквы на именование переменных нап. categoryToRemove, мутабельность переменной не нужна, объявить ее через const
      // TODO: убрать неиспользуемые агрументы
      let rm = (el: CategoriesState, i: number, arr: CategoriesState[]) =>
          el.id === action.payload,
          // TODO: Переименоватьп , каждую переменную обьявить отдельно, не через запятую
        rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
    tasksClearedCategories: (state, action) => {
      // TODO: Функцию map возвращает новый массив, в данном случае стейт не изменится
      state.map((task) => {
        if (task.category === action.payload) task.category = "";
      });
    },
  },
});

export const {
  tasksAdded,
  tasksUpdated,
  tasksRemoved,
  tasksClearedCategories,
} = tasksSlice.actions;

// TODO: Селекторы вынести в отдельный файл
export const selectAllTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
