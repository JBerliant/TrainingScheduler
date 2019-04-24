import { IUser } from '../common/auth/auth.service';

export interface IEvent{
  id: number;
  name: string,
  location: Date,
  cost: number,
  description: string,
  organizer?: IUser;
}
