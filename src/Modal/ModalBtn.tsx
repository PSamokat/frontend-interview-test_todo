import "./ModalBtn.css";
interface ModalBtnProps {
// TODO: type и size типизировать через enum
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

// TODO: добавить импорт React
export const ModalBtn: React.FC<ModalBtnProps> = ({
  type,
  children,
  size,
  onClick,
}) => {
  const btnClass =
    type === "primary"
      ? size === "large"
        ? "modalbtn primary large"
        : "modalbtn primary"
      : "modalbtn";
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
