import { APP_NAME } from '../../../../../utils/constants';
import { ConnectWallet, Icon } from '../../../../common';
import { Icons } from '../../../../common/Icon/Icon';

const Nav = () => {
  return (
    <nav className="container flex flex-wrap bg-white min-w-full items-center justify-between shadow-md p-5 md:px-40">
      <span className="inline-flex sm:mb-0 text-gray-800 text-xl font-bold hover:cursor-default items-center">
        <Icon icon={Icons.ETHEREUM} alt="ethereum" />
        {APP_NAME}
      </span>
      <ConnectWallet icon />
    </nav>
  );
};

export default Nav;
