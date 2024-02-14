import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider, useDisclosure } from '@nextui-org/react';

import { AppContext } from './context';
import { TTheme } from './types';
import { NavBar, Footer } from './components';
import { Main } from './pages';

import './App.css';



function App() {
  const [theme, setTheme] = useState<TTheme>('dark');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <AppContext.Provider value={{ theme, setTheme, isEmailModalOpen: isOpen, openEmailModal: onOpen, changeEmailModalState: onOpenChange }}>
        <div className={'grid bg-[#1a1319]'}>
          <main className={`dark text-foreground bg-[url('/src/assets/test.svg')] h-[5491px] max-w-[1440px] pl-40 pr-40 pt-1 flex flex-col justify-self-center`}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    </NextUIProvider>
  );
}

export default App;
