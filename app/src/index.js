import Navigation from "./components/navigation/Navigation";
import Router from "./components/router/Router";

console.log("app shell is running...");

const ROUTES_CONFIG = [
  {
    path: "/",
    componentFn: () =>
      import("home/Home").then((module) => {
        const Home = module.default;
        new Home().render();
      }),
  },
  {
    path: "/users",
    componentFn: () =>
      import("users/Users").then((module) => {
        const Users = module.default;
        new Users().render();
      }),
  },
];

const navigation = new Navigation();
navigation.render({
  items: [
    { name: "Home", link: "/" },
    { name: "Users", link: "/users" },
  ],
});
const router = new Router();
router.render({ config: ROUTES_CONFIG });
