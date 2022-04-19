import type { NextPage } from 'next';
import { Dashboard } from '../components/layouts';
import { ProfilePage } from '../components/templates';

const Profile: NextPage = () => {
  return (
    <Dashboard title="profile">
      <ProfilePage />
    </Dashboard>
  );
};

export default Profile;
