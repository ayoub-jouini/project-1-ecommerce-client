import { useState, useCallback, useEffect } from "react";

const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [emailT, setEmailT] = useState<string | null>(null);

    const login = useCallback((userId, token, emailT) => {
        setToken(token);
        setEmailT(emailT);
        setUserId(userId);
        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId,
                token,
                emailT
            })
        )
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setEmailT(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        // @ts-ignore
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token) {
            login(storedData.userId, storedData.token, storedData.emailT);
        }
    }, [login]);

    return { token, login, logout, userId, emailT };
}

export default useAuth;