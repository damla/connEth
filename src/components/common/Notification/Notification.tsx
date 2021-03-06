import { ExclamationIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useError } from '../../../hooks/useError';
import { getNotificationText } from '../../../utils/utils';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const currentLocale = router.locale || 'en';
  const { errors, clearErrors } = useError();

  const close = () => {
    clearErrors();
  };

  useEffect(() => {
    errors.length > 0 ? setIsVisible(true) : setIsVisible(false);
  }, [errors]);

  return (
    <div
      id="toast-warning"
      className={`absolute flex right-5 top-5 items-center shadow-md w-full max-w-xs p-4 text-gray-500 bg-slate-100 rounded-lg ${
        isVisible
          ? 'transition-all ease-in scale-100 duration-300'
          : 'transition-transform ease-out scale-0 duration-300'
      }`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
        <ExclamationIcon className="block h-6 w-6" aria-hidden="true" />
      </div>
      <div className="ml-3 text-sm font-normal">
        {getNotificationText(currentLocale)}
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        data-dismiss-target="#toast-warning"
        aria-label="Close"
        onClick={close}
      >
        <span className="sr-only">Close</span>
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Notification;
