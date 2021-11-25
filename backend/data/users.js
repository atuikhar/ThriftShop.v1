import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'thriftshopukhrul@gmail.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'A',
    email: 'a@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'B',
    email: 'b@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
];

export default users;
