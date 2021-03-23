import { Interest } from "./interest";
import { Location } from "./location";

export class User {
  id: number = 0;
  name: string = '';
  gender: string = '';
  age: number = 0;
  photo: string = '';
  description: string = '';
  location: Location = {
    id: 0,
    zip: 0,
    city: '',
    address: '',
  };
  interests: Interest[] = [{
    id: 0,
    name: '',
    description: '',
  }]
}
