import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined; // TODO: selectedCategoryName
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

// TODO: Добавить импорт React
export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  return (
      // TODO: Некорректный БЭМ нейминг
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
