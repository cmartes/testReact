import { URL_API } from "../constans/constans";
import axios from "axios";

export const client = axios.create({
    baseURL: URL_API
})