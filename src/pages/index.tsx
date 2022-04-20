import { Page } from '@prisma/client';
import { Landing } from '../components/layouts';
import { HomePage } from '../components/templates';
import { prisma } from '../lib/prisma/prisma';

interface Props {
  content: Page['content'];
}

export default function Home({ content }: Props) {
  return (
    <Landing>
      <HomePage data={content} />
    </Landing>
  );
}

export const getServerSideProps = async () => {
  const content = await prisma.page.findMany({
    select: {
      content: true,
    },
  });
  return {
    props: { content },
  };
};
