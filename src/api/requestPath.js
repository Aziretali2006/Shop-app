
export const requestPath = {
  register: "/users/user/",
  login: "/token/",
  user: "/users/user/current_user/",
  products: "/products/product/",
  favorite: "/favorites/",
  favoriteWithId: (id) => `/favorites/${id}/`,
  baskets: "/baskets/",
  basketWithId: (id) => `/baskets/${id}/`
}