console.log("app shell is running...");

import("home/Home").then((module) => {
  const Home = module.default;
  new Home().render();
});

import("users/Users").then((module) => {
  const Users = module.default;
  new Users().render();
});
