import * as React from 'react';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface IProps {
  page: string;
  setPage: Dispatch<SetStateAction<string>>
}

export const PageContext = createContext<IProps>({
  page: '',
  setPage: () => {}
});

export const PageContextProvider: React.SFC = (props) => {
  const [page, setPage] = useState('home');

  const value = { page, setPage };

  return (
    <PageContext.Provider value={value}>
      {props.children}
    </PageContext.Provider>
  );
};

export const PageContextConsumer = PageContext.Consumer;