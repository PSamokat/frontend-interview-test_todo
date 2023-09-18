import { ModalBtn } from "./ModalBtn";

interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string; // TODO: Не жалеть буквы для переменных
  size?: string; // TODO: Сделать enum FooterSize
  onSubmit: () => void;
}

// TODO: Добавить импорт React
export const ModalFooter: React.FC<ModalFooterProps> = ({
  clearState,
  setActive,
  submitBtnText,
  size,
  onSubmit,
}) => {
  return (
    <footer className="modal__content-footer">
      <ModalBtn type="primary" size={size || ""} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={() => {
            // TODO: Вынести колбек в отдельную функцию, можно упростить: clearState?.()
          clearState && clearState();
          setActive(false);
        }}
      >
        Закрыть
      </ModalBtn>
    </footer>
  );
};
