import "./UserList.css";

class UserList {
  render({ users } = {}) {
    if (!users) {
      throw new Error("A list of users must be provided");
    }

    const allUsersAsMarkup = users
      .map((user) => `<li>${user.name}</li>`)
      .join("");

    return `
        <section>
            <h2>List of users registered in the application</h2>
            <ul class="app-1-users-list">${allUsersAsMarkup}</ul>
        </section>
    `;
  }
}

export default UserList;
