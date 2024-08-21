import React, { useState } from 'react'
import LabelInput from '../LabelInput'
import axios from 'axios';

const RegistrationForm = () => {

    const [orgname, setOrgName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [accept, setAccept] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setAccept(true);
        let isValid = true;

        if (orgname.trim() === '') {
            isValid = false;
        }

        if (username.trim() === '') {
            isValid = false;
        }

        if (email.trim() === '' || !isEmailValid) {
            isValid = false;
        }

        // submit form data to server
        try {
            if (isValid) {
                //send data to server
                let res = await axios.post("http://127.0.0.1:8000/api/auth/register", {
                    name: username,
                    email: email,
                    organization_name: orgname,
                    phone: phone
                });
                if (res.status === 200) {
                    // window.location.pathname = "/";
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row vh-100">
                        <div
                            className="col-sm-5 d-flex flex-column justify-content-center align-items-center"
                        >
                            <form className="m-auto" id="join_form" onSubmit={handleSubmit}>
                                <img src="/assets/svg/loginLogo.svg" alt='login logo' />

                                <div className="my-5 authPageTitle">إنضم إلينا</div>
                                <LabelInput
                                    type="text"
                                    id="entityName"
                                    label="إسم الجهة"
                                    placeholder="أكتب إسم الجهة"
                                    value={orgname}
                                    onChange={(e) => setOrgName(e.target.value)}
                                />
                                {orgname.trim() === '' && accept && <p className='alert alert-danger small-alert'> من فضلك ادخل اسم الجهة</p>}
                                <LabelInput
                                    type="text"
                                    id="entityUserName"
                                    label="إسم مفوض الجهة"
                                    placeholder="أكتب إسم مفوض الجهة"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {username.trim() === '' && accept && <p className='alert alert-danger small-alert'> من فضلك ادخل اسم مفوض الجهة</p>}

                                <LabelInput
                                    type="email"
                                    id="email"
                                    label="البريد الإلكترونى"
                                    placeholder="أكتب البريد الإلكترونى"
                                    value={email}
                                    onChange={handleEmailChange}
                                />

                                {email.trim() === '' && accept && <p className='alert alert-danger small-alert'>  من فضلك ادخل البريد الالكتروني </p>}
                                {!isEmailValid && accept && <p className="alert alert-danger small-alert">من فضلك ادخل بريد إلكتروني صحيح</p>}
                                <LabelInput
                                    type="number"
                                    id="phone"
                                    label="رقم الهاتف"
                                    placeholder="اكتب رقم الهاتف"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <div className="pt-1 mb-4">
                                    <button
                                        className="btn btn-primary btn-lg btn-block w-100"
                                        type="submit"
                                    >
                                        تأكيد الإنضمام
                                    </button>
                                </div>
                                <div className="my-4">
                                    <p>لدى حساب على المنظومة ؟</p>
                                    <a href="/index.html" className="link-info">تسجيل الدخول</a>
                                </div>
                                <button
                                    type="button"
                                    id="openTermsBtn"
                                    className="pb-4 btn btn-link"
                                    data-bs-toggle="modal"
                                    data-bs-target="#termsPopup"

                                >
                                    إرشادات هامة
                                    <span> <i className="fa-solid fa-arrow-left"></i></span>
                                </button>
                            </form>

                            <div
                                className="modal fade"
                                id="termsPopup"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabindex="-1"
                                aria-labelledby="termsPopupLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="termsPopupLabel">
                                                الإرشادات
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            مرحبا بكم في منظومة التحقق من قسيمة الراتب للانضمام الي
                                            المنظومة يرجي اتباع التعليمات التالية : يجب ادخال البيانات
                                            الخاصة بجهة التحقق للشخص المسئول عن التحقق من عمليات
                                            الائتمان وقسائم الرواتب بها لن يتم الالتفات الي البريد
                                            الالكتروني الشخص في طلب الانضمام يجب ادخال بيانات الاعمال
                                            رقم السجل التجاري والبطاقة الضريبية والعنوان بشكل صحيح حتي
                                            يتم التحقق من صحتها
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                </div >
            </section >
        </div >
    )
}

export default RegistrationForm
