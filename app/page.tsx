import { GET_USERS } from '@/graphql/queries/getUsers';
import styles from './page.module.css';
import client from '@/lib/apollo-client';

async function getUsers() {
  const { data } = await client.query({ query: GET_USERS });
  return data;
}

const Home = async () => {
  const data = await getUsers();
  return <main className={styles.main}>data</main>;
};

export default Home;
