import React, { useContext, useState } from 'react'
import axios from 'axios';
import AuthContext from '../utils/auth-context';

const LogIn: React.FC = () => {

    const [email, setEmail] = useState<string | undefined>("");
    const [password, setPassword] = useState<string | undefined>("");

    const auth = useContext(AuthContext);

    const changeEmail = (event: any) => {
        setEmail(event.target.value)
    }
    const changePassword = (event: any) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: any) => {
        console.log("submited")
        event.preventDefault();
        axios.post('http://localhost:5000/api/users/singin', {
            email,
            password
        })
            .then(function (response) {
                auth.logIn(response.data.userId, response.data.token, response.data.email)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>email</label>
                    <input type="email" value={email} onChange={changeEmail} />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" value={password} onChange={changePassword} />
                </div>
                <input type="submit" />
            </form>

        </div>
    );
}

export default LogIn;