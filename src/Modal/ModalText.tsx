interface ModalTextProps {
  text: string;
}
// TODO: Добавить импорт React
export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
  // TODO: Некорректный БЭМ нейминг
  return <p className="modal__content-text">{text}</p>;
};
