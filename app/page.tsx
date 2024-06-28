import { GET_USERS } from '@/graphql/queries/getUsers';
import client from '@/lib/apollo-client';
import { IUserData } from '@/app/interface';
import UserList from '@/app/components/user/list';

async function getUsers() {
  const { data } = await client.query<IUserData>({
    query: GET_USERS,
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        next: { revalidate: 0 }
      }
    }
  });
  return data;
}

const Home = async () => {
  const data: IUserData = await getUsers();
  return <UserList data={data} />;
};

export default Home;
