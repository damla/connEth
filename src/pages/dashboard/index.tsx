import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { DashboardLayout } from '../../components/layouts';
import { DashboardPage } from '../../components/templates';

const Dashboard: NextPage = () => {
  const { isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <DashboardLayout title="dashboard">
      <DashboardPage />
    </DashboardLayout>
  );
};

export default Dashboard;
