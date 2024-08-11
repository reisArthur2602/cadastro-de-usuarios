export type UserResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type UserProps = Omit<UserResponse, 'id'>;
