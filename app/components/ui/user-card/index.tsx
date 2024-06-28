'use client';
import { IUser, IUserData } from '@/app/interface';
import Link from 'next/link';
import './style.scss';
import Image from 'next/image';
import client from '@/lib/apollo-client';
import { GET_USERS, INCREASE_VOTE } from '@/graphql/queries/getUsers';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { routes } from '@/constant/routes';

const UserCard = ({ data, setUserData }: { data: IUser; setUserData: Dispatch<SetStateAction<IUserData>> }) => {
  const handleVoteIncrease = async (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    await client.mutate({
      mutation: INCREASE_VOTE,
      variables: { id },
      refetchQueries: [GET_USERS]
    });

    const { data } = await client.query<IUserData>({
      query: GET_USERS,
      fetchPolicy: 'no-cache',
      context: {
        fetchOptions: {
          next: { revalidate: 0 }
        }
      }
    });

    setUserData(data);
  };

  return (
    <Link href={routes.userDetail(data.id)} className='user-card'>
      <div className='img-section'>
        <div className='img-circle'>
          <div className='img'>
            <Image alt={data.name} fill src={data.photo} />
          </div>
        </div>
      </div>
      <div className='info-section'>
        <div className='info-box-1'>
          <h4>{data.name}</h4>
          <button onClick={(e) => handleVoteIncrease(e, data.id)}>Vote ({data.numberOfVote})</button>
        </div>
        <div className='info-box-2'>
          <div className='contact'>
            <Image alt='phone' width={16} height={16} src='/website-icon.svg' />
            <span>{data.website}</span>
          </div>
          <div className='contact'>
            <Image alt='phone' width={16} height={16} src='/phone-icon.svg' />
            <span>{data.phone}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
