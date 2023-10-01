import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainApi from '../utils/MainApi';

const CurrentUserContext = createContext();

export function useCurrentUser() {
    return useContext(CurrentUserContext);
}

export function CurrentUserProvider({ children }) {
    const [error, setError] = useState('');
    const [token, setToken] = useState(localStorage.getItem('jwt') || null);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            const resp = await MainApi.login(email, password);
            if (!resp.token) {
                throw new Error('No token received');
            }
            localStorage.setItem('jwt', resp.token); // Сохраняем токен в localStorage
            setToken(resp.token);
            console.log('token', resp.token);
            navigate('/movies/all');
        } catch (e) {
            console.error(e);
            setError(e.message);
        }
    };

    const logout = () => {
        localStorage.removeItem('jwt');
        setToken(null);
        setCurrentUser(null);
        navigate('/');
    };

    useEffect(() => {
        if (!token) {
            return;
        }
        console.log('token', token);
        MainApi.getInfo(token)
            .then((userInfo) => {
                console.log('userInfo', userInfo)
                if (userInfo) {
                    setCurrentUser(userInfo);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);

    return (
        <CurrentUserContext.Provider value={{ token, login, logout, currentUser, error, token }}>
            {children}
        </CurrentUserContext.Provider>
    );
}
