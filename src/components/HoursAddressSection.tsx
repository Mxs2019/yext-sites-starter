import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import cx from 'classnames';
import React from 'react';
import { Location } from '../types/location';
import Container from './Container';
import FormattedAddress from './FormattedAddress';
import FormattedPhoneNumber from './FormattedPhoneNumber';
import Header from './Header3';
import HoursTable from './HoursTable';
import StaticMap from './static-map';

type Props = {
  //Insert Props Here
  className?: string;
  location: Location;
};

const HoursAddressSection = ({ className, location }: Props) => {
  const { address, hours, geocodedCoordinate, mainPhone } = location;
  return (
    <div className={cx(className)}>
      <Container>
        <div className="grid md:grid-cols-3 gap-8 py-4 lg:py-8">
          {hours && (
            <div>
              <Header level={2} className="mb-4">
                Hours
              </Header>
              <HoursTable hours={hours} />
            </div>
          )}
          {geocodedCoordinate && (
            <div>
              <Header level={2} className="mb-4">
                Location
              </Header>
              <StaticMap coordinates={geocodedCoordinate} />
            </div>
          )}
          <div>
            <Header level={2} className="mb-4">
              Contact
            </Header>
            <dl className=" text-base text-gray-800">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <FormattedAddress address={address} />
                </dd>
              </div>
              {mainPhone && (
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <FormattedPhoneNumber phone={mainPhone} className="ml-3" />
                  </dd>
                </div>
              )}
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HoursAddressSection;
