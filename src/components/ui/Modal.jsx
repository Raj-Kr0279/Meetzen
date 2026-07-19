import React, { useEffect, useId, useRef } from "react";

const Modal = ({
  children,
  onClose,
  title,
  className = "",
  panelClassName = "",
  overlayClassName = "",
  closeOnOverlayClick = true,
  initialFocusRef,
}) => {
  const titleId = useId();
  const fallbackFocusRef = useRef(null);

  useEffect(() => {
    const focusTarget = initialFocusRef?.current ?? fallbackFocusRef.current;
    focusTarget?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [initialFocusRef, onClose]);

  return (
    <div className={`fixed inset-0 z-50 ${className}`}>
      <button
        type="button"
        className={`absolute inset-0 h-full w-full bg-slate-950/55 ${overlayClassName}`}
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-label="Close dialog"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={`relative z-10 ${panelClassName}`}
      >
        {title ? (
          <h2 id={titleId} className="sr-only">
            {title}
          </h2>
        ) : null}
        <div ref={fallbackFocusRef} tabIndex={-1}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
