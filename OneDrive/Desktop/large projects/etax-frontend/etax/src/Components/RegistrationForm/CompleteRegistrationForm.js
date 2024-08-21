import React from 'react'

const CompleteRegistrationForm = () => {
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
                                        value="مصلحة الضرائب المصرية"
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
                                        value="محمد خليل عبدالرحمن"
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
                                        value="mohamed@gmail.com"
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
                                    />
                                </div>

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="password">تأكيد كلمة المرور</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="اكتب كلمة المرور"
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="commercialNum">رقم السجل التجارى</label>
                                    <input
                                        type="number"
                                        id="commercialNum"
                                        placeholder="اكتب رقم السجل التجارى"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="taxCardNum">رقم البطاقة الضريبية</label>
                                    <input
                                        type="number"
                                        id="taxCardNum"
                                        placeholder="اكتب رقم البطاقة الضريبية"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="userCount">عدد المستخدمين</label>
                                    <input
                                        type="number"
                                        id="userCount"
                                        placeholder="اكتب عدد المستخدمين"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="reviewerCount">عدد المراجعيين</label>
                                    <input
                                        type="number"
                                        id="reviewerCount"
                                        placeholder="اكتب عدد المراجعيين"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                                <div className="form-outline mb-4 text-start">
                                    <label className="form-label" for="ProcessCount">عدد العمليات (الباقة)</label>
                                    <select className="form-select" >
                                        <option selected disabled style={{ color: "#B5B5B5" }}>حدد عدد العمليات (الباقة)</option>
                                        <option value="1">50</option>
                                        <option value="2">100</option>
                                        <option value="3">200</option>
                                        <option value="4">500</option>
                                        <option value="5">1000</option>
                                    </select>

                                </div>

                                <div className="pt-1 ">
                                    <button
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
