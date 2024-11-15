
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum BaseStatus {
    active = "active",
    inactive = "inactive"
}

export enum VehicleType {
    car = "car",
    bus = "bus",
    truck = "truck",
    motorcycle = "motorcycle",
    van = "van",
    bicycle = "bicycle",
    other = "other"
}

export enum UserRole {
    admin = "admin",
    driver = "driver",
    conductor = "conductor",
    user = "user"
}

export interface QueryUserArg {
    id: number;
}

export interface QueryVehicleArgs {
    id: number;
}

export interface QueryTripArgs {
    id: number;
}

export interface CreateUserInput {
    username: string;
    password: string;
    email: string;
    age?: Nullable<number>;
    fullName: string;
    role: UserRole;
}

export interface UpdateUserInput {
    id: number;
    fullName?: Nullable<string>;
    email?: Nullable<string>;
    age?: Nullable<number>;
    role?: Nullable<UserRole>;
}

export interface UpdatePasswordInput {
    id: number;
    password: string;
}

export interface LoginInput {
    username: string;
    password: string;
}

export interface CreateVehicleInput {
    info: VehicleInfoInput;
    driverId?: Nullable<number>;
    conductorId?: Nullable<number>;
}

export interface VehicleInfoInput {
    title: string;
    numberPlate: string;
    model: string;
    manufacturer: string;
    registrationDate: string;
    type: VehicleType;
}

export interface UpdateVehicleInfoInput {
    id: number;
    info: VehicleInfoInput;
}

export interface CreateTripInput {
    departure: DepartureArrivalInput;
    arrival: DepartureArrivalInput;
    estimatedDuration: number;
    approxDistance: number;
    fare: number;
    vehicleId: number;
}

export interface DepartureArrivalInput {
    date: string;
    time: string;
    location: string;
}

export interface UpdateTripInput {
    departure?: Nullable<DepartureArrivalInput>;
    arrival?: Nullable<DepartureArrivalInput>;
    estimatedDuration?: Nullable<number>;
    approxDistance?: Nullable<number>;
    fare?: Nullable<number>;
    vehicleId?: Nullable<number>;
    id: number;
}

export interface DepartureArrival {
    date: string;
    time: string;
    location: string;
}

export interface Trip {
    createdAt: DateTime;
    updatedAt: DateTime;
    id: number;
    departure: DepartureArrival;
    arrival: DepartureArrival;
    estimatedDuration: number;
    approxDistance: number;
    fare: number;
    vehicle: Vehicle;
    status: BaseStatus;
}

export interface VehicleInfo {
    title: string;
    numberPlate: string;
    model: string;
    manufacturer: string;
    registrationDate: string;
    type: VehicleType;
}

export interface Vehicle {
    id: number;
    info: VehicleInfo;
    driver?: Nullable<MinimalUser>;
    conductor?: Nullable<MinimalUser>;
    status: BaseStatus;
}

export interface User {
    id: number;
    fullName: string;
    username: string;
    email: string;
    role: UserRole;
    age?: Nullable<number>;
    vehicles?: Nullable<Vehicle[]>;
    vehiclesAsConductor?: Nullable<Vehicle[]>;
}

export interface MinimalUser {
    fullName: string;
}

export interface AuthResponse {
    user: User;
    access_token: string;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    user(payload: QueryUserArg): User | Promise<User>;
    protectedData(): string | Promise<string>;
    vehicles(): Vehicle[] | Promise<Vehicle[]>;
    vehicle(payload: QueryVehicleArgs): Vehicle | Promise<Vehicle>;
    trips(): Trip[] | Promise<Trip[]>;
    trip(payload: QueryTripArgs): Trip | Promise<Trip>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): number | Promise<number>;
    updateUserPassword(updatePasswordInput: UpdatePasswordInput): string | Promise<string>;
    removeUser(id: number): string | Promise<string>;
    login(input: LoginInput): AuthResponse | Promise<AuthResponse>;
    createVehicle(createVehicleInput: CreateVehicleInput): Vehicle | Promise<Vehicle>;
    updateVehicleInfo(updateVehicleInfoInput: UpdateVehicleInfoInput): number | Promise<number>;
    removeVehicle(id: number): number | Promise<number>;
    createTrip(createTripInput: CreateTripInput): Trip | Promise<Trip>;
    updateTrip(updateTripInput: UpdateTripInput): number | Promise<number>;
    removeTrip(id: number): number | Promise<number>;
}

export type DateTime = any;
type Nullable<T> = T | null;
