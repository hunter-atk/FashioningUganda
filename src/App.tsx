import * as React from 'react';
import { Helmet } from 'react-helmet';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import { Switch } from 'react-router-dom';

// components

// contexts
import { PageContextProvider } from './contexts/page';

// pages
import { HomePage } from './pages/home/HomePage';

// templates
import { MainTemplate } from './templates/main/MainTemplate';

// styles
import './App.sass';

const history = createBrowserHistory();

export const App: React.FC = () => (
  <>
    <Router history={history}>
      {/* <ScrollToTop> */}
        <MainTemplate>
          <Helmet titleTemplate={`%s | Fashioning Uganda`} />
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </MainTemplate>
      {/* </ScrollToTop> */}
    </Router>
  </>
);

export const AppProviders: React.SFC = ({ children }) => (
          <PageContextProvider>
            {children}
          </PageContextProvider>
);
