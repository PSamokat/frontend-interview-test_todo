/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalInput } from "./ModalInput";
import { ModalRow } from "./ModalRow";
import { ModalTextarea } from "./ModalTextarea";
import { ModalFooter } from "./ModalFooter";
import { tasksAdded } from "../features/tasksSlice";
import { categoriesAdded } from "../features/categoriesSlice";

interface ModalCreateItemProps {
  active: boolean; // TODO: Булевые переменные через is
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: добавить импорт React
export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(""), // TODO: Переименовать в itemName
    [selected, setSelected] = useState(""), // TODO: Переименовать в selectedCategoryName
    [description, setDescription] = useState(""); // TODO: Переименовать в descriptionText
    // TODO: Каждую переменую обьявить отдельно
  function clearState() {
    setName("");
    setDescription("");
    setSelected("");
  }

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title={isCategories ? "Создание категории" : "Создание задачи"}
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
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        onSubmit={
            // TODO: Вынести колбек в функцию
          name
            ? () => {
                dispatch(
                  isCategories
                    ? categoriesAdded({ name, description })
                    : tasksAdded({
                        name,
                        description,
                          // TODO: Ошибка. Используется сеттер стейта вместо значения
                        category: setSelected,
                      })
                );
                clearState();
                setActive(false);
              }
            : () => {}
        }
      />
    </Modal>
  );
};
