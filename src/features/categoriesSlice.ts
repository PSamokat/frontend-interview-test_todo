/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../app/store";

export interface CategoriesState {
  id: string;
  name: string;
  description: string;
}
// TODO: Некорректный нейминг, по логике это CategoriesItem, перенести этот тип в common/types, вместо него добавить тип InitialState = Array<CategoriesItem>

const initialState: CategoriesState[] = [
  {
    id: "d485a644-5a24-4f55-b3f7-a083338be879",
    name: "Категория",
    description: "Описание может быть длинным",
  },
  {
    id: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
    name: "Категория2",
    description: "Описание может быть длинным",
  },
  {
    id: "36704c57-4575-4112-b962-948b04a20506",
    name: "Категория3",
    description: "Описание может быть длинным",
  },
];
// TODO: Заменить тип на InitialState

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // TODO: Типизировать аргументы каждого редюсера (state: InitialState, action: PayloadAction<*Тип вызываемого action*>)
    categoriesAdded: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    categoriesUpdated: (state, action) => {
      const { id, name, description } = action.payload,
        existingCategory = state.find((category) => category.id === id);

      if (existingCategory) {
        existingCategory.name = name;
        existingCategory.description = description;
      }
    },
    categoriesRemoved: (
      state: CategoriesState[],
      action: PayloadAction<string>
    ) => {
      // TODO: Не жалеть буквы на именование переменных нап. categoryToRemove, мутабельность переменной не нужна, объявить ее через const
      // TODO: убрать неиспользуемые агрументы
      let rm = (el: CategoriesState, i: number, arr: CategoriesState[]) =>
          el.id === action.payload,
          // TODO: Переименовать, здесь ищется не Task a Category, каждую переменную обьявить отдельно, не через запятую
        rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
  },
});

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } =
  categoriesSlice.actions;

// TODO: Селекторы вынести в отдельный файл
export const selectAllCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
