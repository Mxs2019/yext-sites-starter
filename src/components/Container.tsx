import cx from 'classnames';
import React from 'react';

type Props = {
  //Insert Props Here
  children: React.ReactNode;
  className?: string;
};

const Container = ({ className, children }: Props) => {
  return <div className={cx('max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8', className)}>{children}</div>;
};

export default Container;
