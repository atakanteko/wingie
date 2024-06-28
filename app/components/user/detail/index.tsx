'use client';
import { IUser } from '@/app/interface';
import './style.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const UserDetail = ({ user }: { user: IUser }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className='user-detail-container container'>
      <div className='user-detail'>
        <Image className='user-photo' width={150} height={150} src={user.photo} alt={user.name} />
        <div className='user-info'>
          <h2>{user.name}</h2>
          <p>@{user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>About Me: {user.aboutMe}</p>
          <p>Votes: {user.numberOfVote}</p>
        </div>
        <button className='go-back-btn' onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
