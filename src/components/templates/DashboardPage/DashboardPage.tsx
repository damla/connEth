import { Header } from '../../layouts/Dashboard/modules';
import { Table } from '../../layouts/Dashboard/modules/Table';

// interface Transactions {
//   total: number;
//   page: number;
//   page_size: number;
//   result: [];
// }

const DashboardPage = () => {
  return (
    <>
      <Header title="dashboard" />
      <Table />
    </>
  );
};

export default DashboardPage;
