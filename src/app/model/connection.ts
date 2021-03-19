import { User } from "./user";

// const user: User = new User();
export class Connection {
  id: number = 0;
  // user1: number = user.id;
  user1: User["id"] = 0;
  user2: User["id"] = 0;
  accepted: boolean = false;
}
