import axios from "axios";
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL||"http://localhost:5000" });
export const getTransacoes = ()=>api.get("/transacoes");
export const postTransacao = p=>api.post("/transacoes",p);
export const getCategorias = ()=>api.get("/categorias");
export const postCategoria = p=>api.post("/categorias",p);
export const postSugestoes = p=>api.post("/ia/sugestoes",p);
export default api;