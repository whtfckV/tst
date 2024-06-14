import { FC, useContext } from "react";
import { Container } from "../Container";
import styles from './Header.module.css';
import MenuIcon from '../../assets/menu_icon.svg?react';
import MenuIconOpen from '../../assets/menu_icon_open.svg?react';
import Person from '../../assets/person.svg?react';
import Exit from '../../assets/exit.svg?react';
import { MenuContext } from "../../context";

export const Header: FC = () => {
  const [menuContex, setMenuContext] = useContext(MenuContext)

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <button className={styles.btn} onClick={() => { setMenuContext(!menuContex) }}>
          {menuContex ? <MenuIconOpen /> : <MenuIcon />}
        </button>
        <div className={styles.userPanel}>
          <button className={styles.userBtn}>
            <Person />
            <span>Админ</span>
          </button>
        </div>
        <button className={styles.exit}>
          <Exit />
          <span>Выйти</span>
        </button>
      </Container>
    </header>
  )
};