import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  locale?: string;
  className?: string;
}

const MyLink = (props: Props) => {
  const { href, locale, children, ...rest }: Props = props;
  return (
    <Link href={href} locale={locale}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default MyLink;
