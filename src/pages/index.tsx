import { Language, PageType } from '@prisma/client';
import { useMemo } from 'react';
import { Landing } from '../components/layouts';
import { HomePage } from '../components/templates';
import { Content } from '../interfaces/page';
import { prisma } from '../lib/prisma/prisma';
interface Props {
  data: {
    content: Content;
  };
}

export default function Home({ data: { content } }: Props) {
  const memoContent = useMemo(() => content, [content]);
  return (
    <Landing data={memoContent}>
      <HomePage data={memoContent.main} />
    </Landing>
  );
}

export const getStaticProps = async ({ locale = 'TR' }) => {
  const data = await prisma.page.findFirst({
    select: {
      content: true,
    },
    where: {
      language: locale.toLocaleUpperCase() === 'EN' ? Language.EN : Language.TR,
      page: PageType.HOME,
    },
  });

  return {
    props: { data },
  };
};
