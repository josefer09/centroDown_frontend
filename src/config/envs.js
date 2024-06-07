import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

    BACKEND_URL: get('BACKEND_URL').required().asString(),

}