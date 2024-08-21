import { useState } from "react";
import React, { useEffect } from 'react'
import axios from 'axios';


const CompleteRegistrationForm = () => {

    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [orgname, setOrgName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [commercialRegisterNumber, setCommercialRegisterNumber] = useState('');
    const [taxCardNumber, setTaxCardNumber] = useState('');
    const [usersCount, setUsersCount] = useState('');
    const [revisersCount, setRevisersCount] = useState('');
    const [packages, setPackages] = useState([]);
    const [packageId, setPackageId] = useState('');
    const [packageError, setPackageError] = useState('');
    const [accept, setAccept] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        const tokenFromUrl = params.get('token');
        const emailFromUrl = params.get('email');

        if (tokenFromUrl && emailFromUrl) {
            setToken(tokenFromUrl);
            setEmail(emailFromUrl);
        } else {
            setError("Invalid or missing token and email in the URL.");
        }
    }, []);

    useEffect(() => {
        if (token && email) {
            axios.post("http://127.0.0.1:8000/api/auth/verify-user-email", { token, email })
                .catch(err => {
                    setError("Email verification failed.");
                });
        }
    }, []);

    useEffect(() => {
        if (token) {
            axios.get(`http://127.0.0.1:8000/api/register-data/${token}`)
                .then(response => {
                    const { user, organization } = response.data.message;
                    setOrgName(organization.name);
                    setUsername(user.name);
                    setPhone(user.phone);
                })
                .catch(err => {
                    setError("Failed to fetch registration data.");
                });
        }
    }, [token]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/package")
            .then(response => {
                console.log(response.data.packages);
                setPackages(response.data.packages);
                console.log(packages);
            })
            .catch(err => {
                setError("Failed to fetch packages.");
            });
    }, []);

    const handlePackageChange = (e) => {
        const selectedPackageId = e.target.value;
        setPackageError('');
        setPackageId(selectedPackageId);
    };
    const validatePassword = (password) => {
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar;
    };
    const isPasswordValid = validatePassword(password);
    async function handleSubmit(e) {
        e.preventDefault();
        setAccept(true);
        setPackageError(!packageId ? 'يرجى اختيار عدد العمليات من القائمة' : '');
    }

    if (error) {
        return (
            <div>
                <p className="alert alert-danger">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row vh-100">
                        <div
                            className="col-sm-5  d-flex flex-column justify-content-center align-items-center "
                        >
                            <form className="my-5 scrollit " action="/screens/home.html">

                                <img src="/assets/svg/loginLogo.svg" alt='login logo' />

                                <div className="my-5 authPageTitle"> التسجيل بالمنظومة</div>

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="entityName"> إسم الجهة</label>
                                    <input
                                        type="text"
                                        id="entityName"
                                        className="form-control form-control-lg"
                                        value={orgname}
                                        readonly
                                        disabled
                                    />
                                </div>
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="entityUserName">
                                        إسم مفوض الجهة</label
                                    >
                                    <input
                                        type="text"
                                        id="entityUserName"
                                        className="form-control form-control-lg"
                                        value={username}
                                        readonly
                                        disabled
                                    />
                                </div>

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="email"> البريد الإلكترونى</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control form-control-lg"
                                        value={email}
                                        readonly
                                        disabled
                                    />
                                </div>

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="email">رقم الهاتف</label>
                                    <input
                                        type="number"
                                        id="phone"
                                        className="form-control form-control-lg"
                                        value={phone}
                                        readonly
                                        disabled
                                    />
                                </div>

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="password">كلمة المرور</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="اكتب كلمة المرور"
                                        className="form-control form-control-lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {password.trim().length < 8 && accept && <p className='alert alert-danger small-alert'>من فضلك ادخل كلمة المرور لا تقل عن ثمان احرف</p>}
                                {!isPasswordValid && accept && <p className='alert alert-danger small-alert'>كلمة المرور يجب أن تحتوي على أحرف صغيرة وكبيرة ورقم ورمز خاص</p>}
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="password">تأكيد كلمة المرور</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="اكتب كلمة المرور"
                                        className="form-control form-control-lg"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                {confirmPassword !== password && accept && <p className='alert alert-danger small-alert'>كلمة المرور غير متطابقة</p>}

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="commercialNum">رقم السجل التجارى</label>
                                    <input
                                        type="number"
                                        id="commercialNum"
                                        placeholder="اكتب رقم السجل التجارى"
                                        className="form-control form-control-lg"
                                        value={commercialRegisterNumber}
                                        onChange={(e) => setCommercialRegisterNumber(e.target.value)}
                                    />
                                </div>
                                {!(/^\d{9}$/.test(commercialRegisterNumber)) && accept && <p className='alert alert-danger small-alert'>رقم السجل التجاري يجب أن يحتوي على 9 أرقام فقط</p>}
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="taxCardNum">رقم البطاقة الضريبية</label>
                                    <input
                                        type="number"
                                        id="taxCardNum"
                                        placeholder="اكتب رقم البطاقة الضريبية"
                                        className="form-control form-control-lg"
                                        value={taxCardNumber}
                                        onChange={(e) => setTaxCardNumber(e.target.value)}
                                    />
                                </div>
                                {!(/^\d{6,}$/.test(taxCardNumber)) && accept && <p className='alert alert-danger small-alert'>رقم البطاقة الضريبية يجب أن يحتوي على 6 أرقام على الأقل</p>}
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="userCount">عدد المستخدمين</label>
                                    <input
                                        type="number"
                                        id="userCount"
                                        placeholder="اكتب عدد المستخدمين"
                                        className="form-control form-control-lg"
                                        value={usersCount}
                                        onChange={(e) => setUsersCount(e.target.value)}
                                    />
                                </div>
                                {usersCount.trim() === '' && accept && <p className='alert alert-danger small-alert'>يجب ادخال عدد المستخدمين</p>}

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="reviewerCount">عدد المراجعيين</label>
                                    <input
                                        type="number"
                                        id="reviewerCount"
                                        placeholder="اكتب عدد المراجعيين"
                                        className="form-control form-control-lg"
                                        value={revisersCount}
                                        onChange={(e) => setRevisersCount(e.target.value)}
                                    />
                                </div>
                                {revisersCount.trim() === '' && accept && <p className='alert alert-danger small-alert'>يجب ادخال عدد المراجعين</p>}
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" htmlFor="ProcessCount">عدد العمليات (الباقة)</label>
                                    <select className="form-select" onChange={handlePackageChange}>
                                        <option selected disabled style={{ color: "#B5B5B5" }}>حدد عدد العمليات (الباقة)</option>
                                        {packages.map((pkg) => (
                                            <option key={pkg.id} value={pkg.id}>{pkg.operations_count}</option>
                                        ))}
                                    </select>
                                    {packageError && accept && <p className='alert alert-danger small-alert'>{packageError}</p>}
                                </div>

                                <div className="pt-1 ">
                                    <button onClick={handleSubmit}
                                        className="btn btn-primary btn-lg btn-block w-100"
                                        type="submit"
                                    >
                                        إنشاء حساب
                                    </button>
                                </div>

                            </form>
                        </div>

                        <div className="col-sm-7 px-0 d-none d-sm-block">
                            <img
                                src="/assets/svg/loginImg.svg"
                                alt="Login"
                                className="w-100 vh-100"
                                style={{ objectFit: "cover", objectPosition: "left" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CompleteRegistrationForm
