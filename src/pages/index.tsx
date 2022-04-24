import { Language, PageType } from '@prisma/client';
import { useMemo } from 'react';
import { HomeLayout } from '../components/layouts';
import { HomePage } from '../components/templates';
import { IContent } from '../interfaces/pages/landing';
import { prisma } from '../lib/prisma/prisma';

interface Props {
  data: {
    content: IContent;
  };
}

export default function Home({ data: { content } }: Props) {
  const memoContent = useMemo(() => content, [content]);

  return (
    <HomeLayout data={memoContent.footer}>
      <HomePage data={memoContent.main} />
    </HomeLayout>
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
