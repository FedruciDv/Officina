

export interface UserDb {
    id: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    license_code: string;
    license_expiration_date: Date;
    first_name: string;
    last_name: string;
    municipality_residence: string;
    fiscal_code: string;
    status: string;
    updated_at: Date;
    created_at: Date;
}

export class User{
    id: string;
    email: string;
    phone: string;
    username: string;
    license_code: string;
    license_expiration_date: Date;
    first_name: string;
    last_name: string;
    municipality_residence: string;
    fiscal_code: string;
    status: string;
    updated_at: Date;
    created_at: Date;
}

