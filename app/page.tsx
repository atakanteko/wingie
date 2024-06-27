import { GET_USERS } from '@/graphql/queries/getUsers';
import styles from './page.module.css';
import client from '@/lib/apollo-client';
import { IUserData } from './interface';

async function getUsers() {
  const { data } = await client.query<IUserData>({
    query: GET_USERS
  });
  return data;
}

const Home = async () => {
  const data: IUserData = await getUsers();
  return <main className={styles.main}>{data.users.data[0].name}</main>;
};

export default Home;
