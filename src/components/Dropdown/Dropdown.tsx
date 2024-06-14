import classNames from "classnames";
import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from './Dropdown.module.css';

export type DropdownProps = {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  target: HTMLButtonElement | HTMLDivElement | null;
}
export const Dropdown: FC<DropdownProps> = ({ children, className, onClose, target }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickDoc = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target) && !target?.contains(event.target)) {
        onClose?.()
      }
    }

    document.addEventListener('click', handleClickDoc)
    return () => {
      document.removeEventListener('click', handleClickDoc)
    }
  }, [onClose, target])

  const { width, height } = target!.getBoundingClientRect();
  let { x, y } = target!.getBoundingClientRect();

  x += width / 2;
  y += height;
  y += window.scrollY

  const node = document.getElementById('modal')!

  return createPortal((
    <div style={{ left: x, top: y }} className={classNames(className, styles.container)} ref={ref}>
      {children}
    </div>
  ), node);
}
