interface RouteConfig {
  path: any,
  name: string
}

type AppRoutes = Record<string, RouteConfig>

export const notAuthUser: AppRoutes = {
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