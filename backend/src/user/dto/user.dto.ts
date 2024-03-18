export type UserCreateDTO = {
  id?: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  role: string;
  google_status: boolean;
  google_id?: string;
};

export type UserValidation = {
  email: string;
  cpf: string;
};
