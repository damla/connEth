import axiosClient from '../axios';

const FetchAllExample = async () => {
  const { data } = await axiosClient.get('/all');
  return data;
};

export default FetchAllExample;
