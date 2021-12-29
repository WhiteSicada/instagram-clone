import { users } from "./users";

export const posts = [
  {
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: users[0].user,
    likes: 7890,
    caption:
      "Train ride to shine baby Train ride to shine baby Train ride to shine baby Train ride to shine baby Train ride to shine baby Train ride to shine baby ",
    profilePicture: users[0].image,
    comments: [
      { user: "theqaman", comment: "waw men youare awesome" },
      { user: "zbida", comment: "hbera rak chabkha" },
    ],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/624929/pexels-photo-624929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: users[1].user,
    likes: 7890,
    caption: "Train ride to shine baby",
    profilePicture: users[1].image,
    comments: [
      { user: "theqaman", comment: "waw men youare awesome" },
      { user: "zbida", comment: "hbera rak chabkha" },
    ],
  },
];
