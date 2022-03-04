export interface IUser {
	id: string;
	fullName: string;
	email: string;
	phone: string;
	addresses: Array<string> | never[];
}
