export interface IUser {
    _id: string;
    fullname: string;
    phoneNumber: string;
    email: string;
    role: boolean;
    password: string;
    forgotPasswordToken: string;
    forgotPasswordTokenExpiryDate: Date;
}