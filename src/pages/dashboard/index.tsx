import { Language, PageType } from '@prisma/client';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useMoralis } from 'react-moralis';
import { DashboardLayout } from '../../components/layouts';
import { DashboardPage } from '../../components/templates';
import { IContent } from '../../interfaces/pages/dashboard';
import { prisma } from '../../lib/prisma/prisma';

interface Props {
  data: {
    content: IContent;
  };
}

export default function Dashboard({ data: { content } }: Props) {
  const { isAuthenticated } = useMoralis();
  const router = useRouter();

  const { navbar, main, footer } = useMemo(() => content, [content]);

  useEffect(() => {
    if (!isAuthenticated) router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <DashboardLayout data={{ navbar, footer }}>
      <DashboardPage data={main} />
    </DashboardLayout>
  );
}

export const getStaticProps = async ({ locale = 'TR' }) => {
  const data = await prisma.page.findFirst({
    select: {
      content: true,
    },
    where: {
      language: locale.toLocaleUpperCase() === 'EN' ? Language.EN : Language.TR,
      page: PageType.DASHBOARD,
    },
  });

  return {
    props: { data },
  };
};
