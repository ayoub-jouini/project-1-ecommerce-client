import { createContext } from "react";

interface Props {
    isLoggedIn: boolean;
    userId: string | null;
    email: string | null;
    token: string | null;
    logIn: (userId: string | null, token: string | null, emailT: string | null) => void;
    logOut: () => void;
}

const AuthContext = createContext<Props>({
    isLoggedIn: false,
    userId: null,
    email: null,
    token: null,
    logIn: () => { },
    logOut: () => { }
})

export default AuthContext;