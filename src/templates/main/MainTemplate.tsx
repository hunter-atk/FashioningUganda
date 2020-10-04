import * as classNames from 'classnames';
import * as React from 'react';

// components

// contexts

// styles
// import * as styles from './MainTemplate.sass';

interface IProps {
  className?: string;
}

export const MainTemplate: React.SFC<IProps> = ({ children, className }) => {

  return (
    <div
      className={classNames(
        // styles.main,
        className
      )}
    >
      {children}
    </div>

    // needs header and footer before and after children
  );
};
