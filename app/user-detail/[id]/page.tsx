import UserDetail from '@/app/components/user/detail';
import { ISingleUserData, IUserData } from '@/app/interface';
import { GET_USER, GET_USERS } from '@/graphql/queries/getUsers';
import client from '@/lib/apollo-client';
import { Metadata } from 'next';
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
// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const response: IUserData = await getUsers();

  return response.users.map((user) => ({
    id: user.id
  }));
}

export async function generateMetadata({ params }: UserDetailPageProps): Promise<Metadata> {
  const response: ISingleUserData = await getUser(params.id);
  const user = response.user;

  return {
    title: `${user.name} - User Detail`,
    description: user.aboutMe || 'Details and information about user',
    keywords: ['rating', 'employee of the month'],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const response = await getUser(params.id);

  return <UserDetail user={response.user} />;
};

export default UserDetailPage;
