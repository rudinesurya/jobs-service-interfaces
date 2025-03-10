import { ILocation } from './location.interface';

export interface IJobUpdate {
    title: string;
    description: string;
    location: ILocation;
    salary: number;
}