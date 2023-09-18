import close from "../icons/close.svg";
// TODO: Переименовать в iconClose

interface ModalHeaderProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}
// TODO: Добавить импорт React
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  clearState,
  title,
  setActive,
}) => {
  return (

    <header className="modal__content-header">
      <h4 className="modal__content-title">{title}</h4>
      <button
        className="modal__content-header__btn"
        onClick={() => {
            // TODO: Вынести колбек в отдельную функцию, можно упростить: clearState?.()
          clearState && clearState();
          setActive(false);
        }}
      >
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
