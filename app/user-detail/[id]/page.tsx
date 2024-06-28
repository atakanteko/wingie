import UserDetail from '@/app/components/user/detail';
import { ISingleUserData } from '@/app/interface';
import { GET_USER } from '@/graphql/queries/getUsers';
import client from '@/lib/apollo-client';
import React from 'react';

type UserDetailPageProps = {
  params: {
    id: string;
  };
};

async function getUser(id: string) {
  const { data } = await client.query<ISingleUserData>({
    query: GET_USER,
    variables: { id: id },
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        next: { revalidate: 0 }
      }
    }
  });
  return data;
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const response: ISingleUserData = await getUser(params.id);

  return <UserDetail user={response.user} />;
};

export default UserDetailPage;
