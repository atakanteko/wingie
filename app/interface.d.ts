export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  aboutMe: string;
  photo: string;
  numberOfVote: number;
}

export interface IUserData {
  users: IUser[];
}
