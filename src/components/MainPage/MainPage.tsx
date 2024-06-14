import { FC, useContext } from "react"
import { Container } from "../Container"
import { Menu } from "../Menu"
import { MenuContext } from "../../context"
import styles from './MainPage.module.css'
import { Information } from "../Information"

export const MainPage: FC = () => {
  const [menuContext] = useContext(MenuContext);

  return (
    <main>
      <h1 className={styles.mainTitle}>Главная страница</h1>
      <Container className={styles.container}>
        {menuContext ? <Menu /> : ''}
        <Information />
      </Container>
    </main>
  )
}