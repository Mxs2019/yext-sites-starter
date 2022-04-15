/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon } from '@heroicons/react/outline';

type Props = {
  message?: string;
  ctaLabel?: string;
  ctaURL?: string;
};

export default function HeaderBanner({
  message = "Big news! We're excited to announce a brand new product!",
  ctaLabel = 'Learn more',
  ctaURL = 'https://example.com',
}: Props) {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
          <div className=" flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="">{message}</span>
            </p>
          </div>
          {ctaURL && (
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href={ctaURL}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                {ctaLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
