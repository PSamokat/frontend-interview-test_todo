/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import down from "../icons/down.svg";
// TODO: Переименовать в iconDownArrow
import { selectAllCategories } from "../features/categoriesSlice";

interface ModalDropdownProps {
  selected: string | undefined; // TODO: Переименовать в selectedCategoryName
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

// TODO: добавить импорт React
export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false),
    options = useSelector(selectAllCategories);

  return (
      // TODO: Некорректный БЭМ нейминг
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="dropdown-label">Категория</span>
        {
            // TODO: класс dropdown-btn постоянный, вынести его из тернарного оператора
        }
      <div className={selected ? "dropdown-btn" : "dropdown-btn placeholder" }  >

        {// TODO: Обернуть в useMemo, назвать itemCategory
            options.find((option) => option.id === selected)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={() => {
                  // TODO: Вынести кобек в функцию
                setSelected(option.id);
                setIsActive(false);
              }}
              key={option.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
