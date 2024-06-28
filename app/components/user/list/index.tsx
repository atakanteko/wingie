'use client';
import { IUserData } from '@/app/interface';
import UserCard from '@/app/components/ui/user-card';
import './style.scss';
import { useState } from 'react';

type UserListProps = {
  data: IUserData;
};

const UserList = ({ data }: UserListProps) => {
  const [userData, setUserData] = useState<IUserData>(data);
  return (
    <div className='user-list container'>
      {userData?.users.map((item, index) => (
        <UserCard key={`@-${index}-${item.id}`} data={item} setUserData={setUserData} />
      ))}
    </div>
  );
};

export default UserList;
