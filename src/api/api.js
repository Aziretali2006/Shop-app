import { instance } from "../configs/config";
import { requestPath } from "./requestPath";


export const createUser = (data) => instance.post(requestPath.register , data);

export const auth_user = (data) => instance.post(requestPath.login , data);

export const getProducts = () => instance.get(requestPath.products);

export const AddFavorites = (data) =>  instance.post(requestPath.favorite , data);

export const getFavorites = () => instance.get(requestPath.favorite);

export const DeleteFavorite = (id) => instance.delete(requestPath.favoriteWithId(id));

export const AddBasket = (data) => instance.post(requestPath.baskets , data);

export const getBasket = () => instance.get(requestPath.baskets);

export const deleteBasket = (id) => instance.delete(requestPath.basketWithId(id));