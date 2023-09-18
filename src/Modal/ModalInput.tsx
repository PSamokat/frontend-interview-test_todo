import important from "../icons/important.svg";
// TODO: Переименовать в iconImportant

interface ModalInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: string; // TODO: Сделать enum InputSize
}
// TODO: Добавить импорт React
export const ModalInput: React.FC<ModalInputProps> = ({
  name,
  setName,
  size,
}) => {
  return (
      // TODO: Некорректный БЭМ нейминг
      // TODO: класс modalinput-wrapper постоянный, вынести его из тернарного оператора
    <div
      className={
        size === "large" ? "modalinput-wrapper large" : "modalinput-wrapper"
      }
    >
      <input
        id="modalinput"
        className="modalinput"
        placeholder="Введите имя задачи/категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={important} alt="important" className="modalinput-icon" />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
