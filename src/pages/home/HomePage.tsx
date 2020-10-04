import * as classNames from 'classnames';
import * as React from 'react';
// import { useContext } from 'react';
import { Helmet } from 'react-helmet';

// components

// contexts
// import { PageContext } from '../../contexts';

// styles
// import * as styles from './HomePage.sass';

interface IProps {
  className?: string;
}

export const HomePage: React.FC<IProps> = ({ className }) => {
  // const { setPage } = useContext(PageContext);

  return (
    <div className={classNames(className)}>
      <Helmet
        title="Home"
        meta={[
          {
            name: 'description',
            content: 'Fashioning Uganda'
          },
          {
            name: 'keywords',
            content: 'uganda fashion'
          }
        ]}
      />
      This is the home page.
    </div>
  );
};
