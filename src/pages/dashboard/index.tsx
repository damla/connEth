import type { NextPage } from 'next';
import { DashboardLayout } from '../../components/layouts';
import { ProfilePage } from '../../components/templates';

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout title="dashboard">
      <ProfilePage />
    </DashboardLayout>
  );
};

export default Dashboard;
