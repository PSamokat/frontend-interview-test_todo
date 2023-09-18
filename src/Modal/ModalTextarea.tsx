interface ModalTextareaProps {
  description: string; // TODO: Переименоватьв descriptionText
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}
// TODO: Добавить импорт React
export const ModalTextarea: React.FC<ModalTextareaProps> = ({
  description,
  setDescription,
}) => {
  return (
      // TODO: Некорректный БЭМ нейминг
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
