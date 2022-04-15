import cx from 'classnames';
import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  //Insert Props Here
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const PageWrapper = ({ className, title, description, children }: Props) => {
  return (
    <div className={cx(className)}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <>{children}</>
    </div>
  );
};

export default PageWrapper;
