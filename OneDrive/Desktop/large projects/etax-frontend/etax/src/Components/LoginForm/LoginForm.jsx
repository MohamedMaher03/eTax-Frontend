import React, {useState} from "react";
import { Route } from "react-router-dom";

function LoginForm()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrMsg] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleLogin = async(e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password: password
        };

        try{
            const response = await fetch('http://localhost/eTax-project/public/api/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();

            if(response.ok){
                localStorage.setItem('token', data.token);
                window.location.href = '/screens/home.html';
            } else{
                setErrMsg("Login failed please check your email and password match with the ones on the system.");
                setHasError(true);
            }
        }
        catch (error){
            setErrMsg("Login failed please check your email and password match with the ones on the system.");
            setHasError(true);
        }
    }
    return(
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row vh-100">
                        <div className="col-sm-5 d-flex flex-column justify-content-center align-items-center">
                            <form className="m-auto" onSubmit={handleLogin}>
                                <img src="/assets/svg/loginLogo.svg" />
                                <div className="my-5 authPageTitle">تسجيل الدخول</div>
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label"> البريد الإلكترونى</label>
                                    <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    placeholder="أكتب البريد الإلكترونى"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="orm-outline mb-4 text-start">
                                    <label className="form-label" >كلمة المرور</label><br/>
                                    <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="اكتب كلمة المرور"
                                    className="form-control form-control-lg"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="pt-1 mb-4">
                                    <button
                                    className="btn btn-primary btn-lg btn-block w-100"
                                    type="submit"
                                    >
                                    تسجيل الدخول
                                    </button>
                                </div>
                                <div className="pt-1">
                                    <a
                                    className="btn btn-outline-primary btn-lg btn-block w-100"
                                    href="/register"
                                    >
                                    إنضم إلينا
                                    </a>
                                </div>
                            </form>
                                {hasError && (
                                    <div style={{ color: 'red', marginTop: '10px' }}>
                                        {errorMsg}
                                    </div>
                                )}
                        </div>
                        
                        <div className="col-sm-7 px-0 d-none d-sm-block position-left">
                            <img
                            src="/assets/svg/loginImg.svg"
                            alt="Login image"
                            className="w-100 vh-100"
                            // style="object-fit: cover; object-position: left"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default LoginForm