interface RouteConfig {
  path: any,
  name: string
};

type AppRoutes = Record<string, RouteConfig>;

export const notAuthUserDesktop: AppRoutes = {
  products: {
    path: "/products",
    name: "Shop"
  },
  news: {
    path: "/news",
    name: "Newstand"
  },
  introduction: {
    path: "/introduction",
    name: "Who we are"
  },
  login: {
    path: "/login",
    name: "Log in"
  },
  cart: {
    path: "/cart",
    name: "Basket"
  },
};

export const notAuthUserMobile: AppRoutes = {
  cart: {
    path: "/cart",
    name: "Basket"
  },
  products: {
    path: "/products",
    name: "Shop"
  },
  news: {
    path: "/news",
    name: "Newstand"
  },
  introduction: {
    path: "/introduction",
    name: "Who we are"
  },
  login: {
    path: "/login",
    name: "Log in"
  },
};