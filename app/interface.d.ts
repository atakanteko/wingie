export interface IPhoto {
  url: string;
}

export interface IAlbum {
  photos: {
    data: IPhoto[];
  };
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  albums: {
    data: IAlbum[];
  };
}

export interface IUserData {
  users: {
    data: IUser[];
  };
}
