import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import ContactUs from '../components/ContactUs';
import CTAHeader from '../components/CTAHeader';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import HouseAddressSection from '../components/HoursAddressSection';
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
  return `index/${data.document.streamOutput.uid.toString()}`;
};

const Index = ({ data }: { data: any }) => {
  const { document } = data;
  const { streamOutput } = document;
  const { name, description, featuredMessage, address, hours, mainPhone, geocodedCoordinate, services, photoGallery } =
    streamOutput as Location;

  const location = streamOutput;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name}</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {featuredMessage && <HeaderBanner message={featuredMessage?.description} />}
      <CTAHeader name={name} />
      <HouseAddressSection location={location} />
      <ContactUs address={address} phone={mainPhone} />
      <Footer />
    </>
  );
};

export const render = (data: any) =>
  reactWrapper(data, 'index', 'index.tsx', renderToString(<Index data={data} />), config.hydrate);

export default Index;
