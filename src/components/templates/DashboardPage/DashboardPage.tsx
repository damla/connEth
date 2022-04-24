import { Header } from '../../layouts/Dashboard/modules';
import { Table } from '../../layouts/Dashboard/modules/Table';
import { ITable } from '../../../interfaces/pages/dashboard';

interface Props {
  data: {
    title: string;
    table: ITable;
  };
}

const DashboardPage = ({ data: { title, table } }: Props) => {
  return (
    <>
      <Header title={title} />
      <Table data={table} />
    </>
  );
};

export default DashboardPage;
