import {Request} from 'express';
import { tokenPayload } from './tokenpayload.model';
export interface CustomRequest extends Request{
    user? : tokenPayload;
}