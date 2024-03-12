export class User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  created_at: Date;
  google_status: boolean;
  google_id?: string;
}
