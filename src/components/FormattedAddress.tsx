import React from 'react';
import { Address } from '../types/location';

type Props = {
  //Insert Props Here
  className?: string;
  address: Address;
};

const FormattedAddress = ({ className, address }: Props) => {
  return (
    <div>
      <p>{address.line1}</p>
      <p>
        {address.city}, {address.region} {address.postalCode}
      </p>
    </div>
  );
};

export default FormattedAddress;
