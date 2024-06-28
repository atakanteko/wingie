export interface IUser {
  id: string;
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

export interface ISingleUserData {
  user: IUser;
}
