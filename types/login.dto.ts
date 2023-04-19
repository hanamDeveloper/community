export type LoginResponse = {
    id: string;
    nickname: string;
    grade: LOGIN_GRADE;
}

export enum LOGIN_GRADE  {
    Manager = 1,
    USER = 2,
    GUEST = 3,
}