import UserList from "../components/user-list/UserList";

const USERS_MOCK = [
  {
    name: "User A",
  },
  {
    name: "User B",
  },
  {
    name: "User C",
  },
  {
    name: "User D",
  },
];

class Users {
  render() {
    const userList = new UserList();
    const markup = userList.render({ users: USERS_MOCK });

    document.querySelector("body").innerHTML += markup;
  }
}

export default Users;
