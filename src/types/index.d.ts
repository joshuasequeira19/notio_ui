//type declaration file

interface ApiError {
    status: "success" | "failed"
    message: string;
}

//loggin in
interface ProfileApi {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
}

//global state use
interface Profile {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}