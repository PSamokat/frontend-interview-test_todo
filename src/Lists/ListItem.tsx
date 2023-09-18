/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import edit from "../icons/edit.svg";
import remove from "../icons/remove.svg";
// TODO: Иконки переименовать на iconEdit и iconRemove
import { selectAllCategories } from "../features/categoriesSlice";
import { ModalEditItem } from "../Modal/ModalEditItem";
import { ModalRemoveItem } from "../Modal/ModalRemoveItem";

interface ListItemProps {
  // TODO: передлать на CategoryItem | TaskItem
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
}

// TODO: Добавить импорт React
export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const categories = useSelector(selectAllCategories),
      // TODO: Булевые переменные должны начинатся с is, has, can итд, они одлжны отвечать на вопрос да:нет
    [editModalActive, setEditModalActive] = useState(false)
  let [removeModalActive, setRemoveModalActive] = useState(false);
  // TODO: обьявить через const
  // TODO: Каждую переменую обьявить отдельно
  return (
      // TODO: Фрагмент не нужен и лучше использовать <React.Fragment>
      // TODO: Некорректный БЭМ нейминг
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {
                  // TODO: Вынести из разметки и обернуть в useMemo, в зависимость: item
                  categories.find((category) => category.id === item.category)
                    ?.name
                }
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description}</div>
        </div>
        <div className="list-item-col2">
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setEditModalActive(true);
            }}
          >
            <img src={edit} alt="edit" />
          </button>
          <button
            className="list-item-col2__btn"
            onClick={() => {
              // TODO: Ошибка, стейт обновляется через сеттер
              removeModalActive = true;
            }}
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
        <ModalEditItem
            // TODO: Модальные окна вынести на уровень App, для управления ими сдлеать кастомный хук
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveItem
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
