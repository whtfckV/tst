import { FC, useContext, useEffect, useRef, useState } from "react";
import CalendarIcon from '../../assets/calendar_icon.svg?react'
import { Dropdown } from "../Dropdown";
import Calendar from "react-calendar";
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'
import styles from './Information.module.css'
import { Table } from "../Table/Table";
import { MenuContext } from "../../context";
import classNames from "classnames";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const createItem = (name: string, sum: string) => <li className={styles.earnItem}>
  <span>{name}</span>
  <span>{sum}</span>
</li>


export const Information: FC = () => {
  const [isMenuOpen] = useContext(MenuContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<Value>(new Date());
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (value instanceof Array) {
      const startDate = moment(value[0]).format('YYYY-MM-DD')
      const endDate = moment(value[1]).format('YYYY-MM-DD')
      setInputValue(`${startDate} ~ ${endDate}`)
    } else {
      setInputValue('')
    }
  }, [value])

  const onChange = (value: Value) => {
    setValue(value);
  };

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.bubbles = false
    event.preventDefault();
    event.stopPropagation();
    setInputValue(event.target.value);
  }

  const handleFocus = () => {
    setIsDropdownOpen(true);
  }

  return (
    <section className={classNames(styles.information, !isMenuOpen && styles.full)}>
      <div className={styles.informationHeader}>
        <h2 className={styles.title}>Кальян</h2>
        <div className={styles.calendarDisplay} ref={ref}>
          <input type="text" className={styles.calendarInput} value={inputValue} onChange={handleInput} onFocus={handleFocus} />
          <button className={styles.btn} onClick={handleClick}>
            <CalendarIcon />
          </button>
          {isDropdownOpen &&
            <Dropdown className={styles.calendar} target={ref.current} onClose={handleClick}>
              <Calendar selectRange={true} value={value} onChange={onChange} />
            </Dropdown>
          }
        </div>
      </div>
      <ul className={styles.earn}>
        <li>
          <ul>
            {createItem('Выручка прошлый месяц', 'р.23 120')}
            {createItem('Выручка текущий месяц', 'р.23 120')}
            {createItem('LFL', '33.32')}
          </ul>
        </li>
        <li>
          <ul>
            {createItem('Кол-во чеков прошлый месяц', '420')}
            {createItem('Кол-во чеков текущий месяц', '120')}
            {createItem('LFL', '-53.12')}
          </ul>
        </li>
        <li>
          <ul>
            {createItem('Средний чек прошлый месяц', 'р.1420')}
            {createItem('Средний чек текущий месяц', 'р.1120')}
            {createItem('LFL', '-53.12')}
          </ul>
        </li>
        <li>
          <ul>
            {createItem('Средняя выручка за день, прошлый месяц', 'р.5420')}
            {createItem('Средняя выручка за день, текущий месяц', 'р.3120')}
            {createItem('LFL', '-53.12')}
          </ul>
        </li>
        <li>
          <ul>
            {createItem('Среднее кол-во чеков за день, прошлый месяц', '420')}
            {createItem('Среднее кол-во чеков за день, текущий месяц', '320')}
            {createItem('LFL', '-53.12')}
          </ul>
        </li>
        <li>
          <ul>
            {createItem('Кол-во чеков через бонус+, прошлый месяц', '420')}
            {createItem('Кол-во чеков через бонус+, текущий месяц', '320')}
            {createItem('LFL', '-53.12')}
          </ul>
        </li>
        <li>
          <ul>
            {createItem('Сумма оплат бонусами, прошлый месяц', '420')}
            {createItem('Сумма оплат бонусами, текущий месяц', '320')}
            {createItem('LFL', '-53.12')}
          </ul>
        </li>
      </ul>
      <Table />
    </section>

  )
}