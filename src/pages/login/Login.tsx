import React, { useState} from "react";
import './style.css';
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const baseUrl = 'https://retaily.online/api_test/users/auth';

export function Login () {
    const [user, setUser] = useState ('');
    const [pass, setPass] = useState ('');

   
    const navigate = useNavigate();
      
    async function handleSubmit (e : any) {
        e.preventDefault();
        axios
            .post(`${baseUrl}`, {
                login: user,
                psw: pass,   
            })
            .then((res: any) => {
                let token = res.data.token
                navigate ('/menu', {state:{token}});
            })
            .catch((err) => {
                console.log(err)
            })
        }

    
    return (
        <div className="login_b">
            <div className="l_container">
                <div className="form-container sign-in">
                    <form onSubmit ={handleSubmit}>
                        <h1>Добро пожаловать!</h1>
                        <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="Логин" id="username" value={user} required/>
                        <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="Пароль" id="pass" value={pass} required/>
                        <button className="sub_button" onClick={handleSubmit}>Войти</button>
                        <a href="/">Забыли пароль?</a>
                        <Link to="/" className="reg_but">
                        <button className="reg_but">Зарегистрироваться</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div> 
    );
}

