import PhoneNumber from 'awesome-phonenumber';
import React from 'react';
type Props = {
  //Insert Props Here
  className?: string;
  phone: string;
};

const FormattedPhoneNumber = ({ className, phone }: Props) => {
  const pn = new PhoneNumber(phone);
  return <span className={className}>{pn.getNumber('international')}</span>;
};

export default FormattedPhoneNumber;
