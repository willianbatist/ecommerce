export type UserCreateDTO = {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  google_status: boolean;
  google_id?: string;
};
