import { FC, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { MenuContext } from './context'
import { MainPage } from './components/MainPage'

export const App: FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  return (
    <MenuContext.Provider value={[menu, setMenu]} >
      <>
        <Header />
        <MainPage />
      </>
    </MenuContext.Provider>
  )
}
