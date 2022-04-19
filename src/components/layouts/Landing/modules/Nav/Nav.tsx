import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const Nav = () => {
  // const navigation = [
  //   { name: 'Profile', href: '#' },
  //   { name: 'Other', href: '#' },
  // ];
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.replace('/profile');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <nav className="container flex min-w-full items-center justify-between p-7 md:px-40">
      <span className=" text-gray-900 text-xl font-bold hover:cursor-default">
        NextJS Starter
      </span>
      <button
        className="hover:underline"
        onClick={() =>
          authenticate({ signingMessage: 'Authorize linking of your wallet' })
        }
      >
        Sign In
      </button>
    </nav>
  );
};

export default Nav;
