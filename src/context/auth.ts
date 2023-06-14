import { createContext } from "react";

interface BaseAuthContext {
    isLoggedIn: boolean;
    refresh: boolean;
}

interface AuthContext extends Profile, BaseAuthContext {}

export const AuthContext = createContext<AuthContext | BaseAuthContext>({
    isLoggedIn: false,
    refresh: true,
});
