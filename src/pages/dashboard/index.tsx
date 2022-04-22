import type { NextPage } from 'next';
import { DashboardLayout } from '../../components/layouts';
import { DashboardPage } from '../../components/templates';

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout title="dashboard">
      <DashboardPage />
    </DashboardLayout>
  );
};

export default Dashboard;
