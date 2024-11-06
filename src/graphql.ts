
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface QueryUserArg {
    id: number;
}

export interface CreateUserInput {
    username: string;
    password: string;
    email: string;
    age?: Nullable<number>;
    fullName: string;
}

export interface UpdateUserInput {
    username?: Nullable<string>;
    password?: Nullable<string>;
    email?: Nullable<string>;
    age?: Nullable<number>;
    fullName?: Nullable<string>;
    id: number;
}

export interface UpdatePasswordInput {
    id: number;
    password: string;
}

export interface LoginInput {
    username: string;
    password: string;
}

export interface User {
    id: number;
    fullName: string;
    username: string;
    email: string;
    age?: Nullable<number>;
}

export interface AuthResponse {
    user: User;
    access_token: string;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(payload: QueryUserArg): User | Promise<User>;
    protectedData(): string | Promise<string>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): number | Promise<number>;
    updateUserPassword(updatePasswordInput: UpdatePasswordInput): string | Promise<string>;
    removeUser(id: number): string | Promise<string>;
    login(input: LoginInput): AuthResponse | Promise<AuthResponse>;
}

type Nullable<T> = T | null;
