/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalRow } from "./ModalRow";
import { ModalInput } from "./ModalInput";
import { ModalTextarea } from "./ModalTextarea";
import { ModalFooter } from "./ModalFooter";
import { tasksUpdated } from "../features/tasksSlice";
import { categoriesUpdated } from "../features/categoriesSlice";

interface ModalEditItemProps {
  item: { // TODO: передлать на CategoryItem | TaskItem
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean; // TODO: Булевые переменные через is
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: Добавить импорт React
export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(item.name), // TODO: Переименовать в itemName
    [selected, setSelected] = useState(item.category || ""), // TODO: Переименовать в selectedCategoryName
    [description, setDescription] = useState(item.description); // TODO: Переименовать в descriptionText
    // TODO: Каждую переменую обьявить отдельно

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title={
          isCategories ? "Редактирование категории" : "Редактирование задачи"
        }
      />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
            // TODO: Вынести колбек в одельную функцию
          dispatch(
            isCategories
              ? categoriesUpdated({ id: item.id, name, description })
              : tasksUpdated({
                  id: item.id,
                  name,
                  description,
                  category: selected,
                })
          );
          setActive(false);
        }}
      />
    </Modal>
  );
};
