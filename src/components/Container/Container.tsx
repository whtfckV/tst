import { FC, ReactNode } from "react"
import styles from './Container.module.css';
import classNames from "classnames";

type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  )
}