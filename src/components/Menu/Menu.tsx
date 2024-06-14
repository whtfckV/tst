import { FC } from "react";
import styles from './Menu.module.css';
import Person from '../../assets/person.svg?react'

export const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <nav>
        <div className={styles.account}>
          <button className={styles.accountBtn}>
            <Person />
            <span>Попов И.</span>
          </button>
        </div>
        <ul className={styles.ways}>
          <li>
            <h3 className={styles.categories}>Настройки</h3>
            <ul className={styles.category}>
              <li><a className={styles.categoriesLink} href="#">Права доступа</a></li>
              <li><a className={styles.categoriesLink} href="#">Проверка синхронизации</a></li>
              <li><a className={styles.categoriesLink} href="#">Справочник</a></li>
            </ul>
          </li>
          <li>
            <h3 className={styles.categories}>Тестирование</h3>
            <ul className={styles.category}>
              <li><a className={styles.categoriesLink} href="#">Тесты</a></li>
              <li><a className={styles.categoriesLink} href="#">Результаты тестов</a></li>
              <li><a className={styles.categoriesLink} href="#">Лучшый сотрудник</a></li>
            </ul>
          </li>
          <li>
            <h3 className={styles.categories}>Размед отчетов</h3>
            <ul className={styles.category}>
              <li><a className={styles.categoriesLink} href="#">Ревизор</a></li>
              <li><a className={styles.categoriesLink} href="#">Продажи (журнал)</a></li>
              <li><a className={styles.categoriesLink} href="#">Подсчет смен</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}