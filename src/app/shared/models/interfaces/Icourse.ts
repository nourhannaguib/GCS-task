export interface Icourse {
    id?:number;
    code:string;
    name:string;
    hours:number;
    instructors?:string[],
    students?:string[]
}
