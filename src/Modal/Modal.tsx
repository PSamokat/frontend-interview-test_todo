/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";

interface ModalProps {
  item?: {// TODO: передлать на CategoryItem | TaskItem
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean; // TODO: Булевые переменные через is
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<ModalProps> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  return (
    <div
        // TODO: класс modal постоянный, вынести его из тернарного оператора
      className={active ? "modal active" : "modal" }
      onClick={() => {
        // TODO: Вынести колбек в отдельную функцию, можно упростить: clearState?.()
        clearState && clearState();
        setActive(false);
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
