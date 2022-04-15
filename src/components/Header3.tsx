import cx from 'classnames';
import React from 'react';

type Props = {
  //Insert Props Here
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
};

const Header = ({ className, children, level = 1 }: Props) => {
  return (
    <div
      className={cx('', className, {
        'text-3lg': level === 1,
        'text-2xl font-bold': level === 2,
        'text-xl': level === 3,
      })}
    >
      {children}
    </div>
  );
};

export default Header;
