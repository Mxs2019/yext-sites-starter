import { renderToString } from 'react-dom/server';
import ContactUs from '../components/ContactUs';
import CTAHeader from '../components/CTAHeader';
import HeaderBanner from '../components/HeaderBanner';
import HouseAddressSection from '../components/HoursAddressSection';
import PageWrapper from '../components/PageWrapper';
import SampleFooter from '../components/SampleFooter';
import '../index.css';
import { Location } from '../types/location';
import { reactWrapper } from '../wrapper';

export const config = {
  name: 'locations',
  hydrate: true,
  streamId: 'locations',
  stream: {
    $id: 'locations',
    source: 'knowledgeGraph',
    destination: 'pages',
    fields: [
      'id',
      'uid',
      'meta',
      'name',
      'address',
      'mainPhone',
      'description',
      'hours',
      'photoGallery',
      'featuredMessage',
      'slug',
      'geocodedCoordinate',
      'services',
      'neighborhood',
      'paymentOptions',
      'c_relatedFAQs.question',
      'c_relatedFAQs.answer',
    ],
    filter: {
      entityTypes: ['location'],
    },
    localization: {
      locales: ['en'],
      primary: false,
    },
  },
};

export const getPath = (data: any) => {
  const location = data.document.streamOutput as Location;
  return `locations/${location.id}`;
};

const Index = ({ data }: { data: any }) => {
  const { document } = data;
  const location = document.streamOutput as Location;
  const { name, description, featuredMessage, address, mainPhone } = location;

  return (
    <PageWrapper title={name} description={description}>
      {featuredMessage && <HeaderBanner message={featuredMessage.description} ctaURL={featuredMessage.url} />}
      <CTAHeader name={name} />
      <HouseAddressSection location={location} />
      <ContactUs address={address} phone={mainPhone} />
      <SampleFooter />
    </PageWrapper>
  );
};

export const render = (data: any) =>
  reactWrapper(data, 'index', 'index.tsx', renderToString(<Index data={data} />), config.hydrate);

export default Index;
