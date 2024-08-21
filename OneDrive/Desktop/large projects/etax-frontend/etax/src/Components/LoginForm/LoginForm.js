import React,{useState} from "react";

function LoginForm () 
{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email: ', email);
        console.log('Password: ', password);
    }

    return(
        <div>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-sm-5 d-flex flex-column justify-content-center align-items-center">
                        <form className="m-auto" action="/screens/home.html">
                            <img src="/assets/svg/loginLogo.svg" />

                            <div className="my-5 authPageTitle">تسجيل الدخول</div>
                            <div className="form-outline mb-4 text-start">
                                <label className="form-label" for="email"> البريد الإلكترونى</label>
                                <input
                                type="email"
                                id="email"
                                className="form-control form-control-lg"
                                placeholder="أكتب البريد الإلكترونى"
                                />
                            </div>

                            <div className="form-outline mb-5 text-start">
                                <label className="form-label" for="password">كلمة المرور</label>
                                <input
                                type="password"
                                id="password"
                                placeholder="اكتب كلمة المرور"
                                className="form-control form-control-lg"
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
                                href="/screens/auth/join_us.html"
                                >
                                إنضم إلينا
                                </a>
                            </div>

                            {/* <p>
                            Don't have an account?
                            <a href="#!" className="link-info">Register here</a>
                            </p> */}
                        </form>
                    </div>
                    <div className="col-sm-7 px-0 d-none d-sm-block">
                        <img
                        src="/assets/svg/loginImg.svg"
                        alt="Login image"
                        className="w-100 vh-100"
                        // style="object-fit: cover; object-position: left"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm