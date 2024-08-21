import Logout from "../logout"


function Home(){

    return(
        <div>
            <section id="navbar" className="fixed-top bg-white">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* togler Button */}
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
    
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            {/* Logo */}
                            <a className="navbar-brand ms-auto" href="#"
                            ><img src="/assets/svg/loginLogo.svg" width="100px"
                            /></a>
                            {/* Navigation Links */}
                            <div className="navbar-nav mx-auto">
                                <a className="nav-link active" href="#header">الرئيسية</a>
                                <a className="nav-link" href="#users">المستخدمين</a>
                                <a className="nav-link" href="#addUsers">إضاقة مستخدمين</a>
                                <a className="nav-link" href="#buyQuote">شراء الباقات</a>
                            </div>

                            {/* selectLanguage */}
    
                            <button type="button" className="btn btn-link dropdown me-2">
                                <img
                                    className="dropdown-toggle"
                                    id="changeLanguage"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    src="/assets/svg/translate.svg"
                                />
                                <ul className="dropdown-menu" aria-labelledby="changeLanguage">
                                    <li>
                                        <div className="dropdown-item fs-5">
                                            اللغة العربية
                                            <span className="float-end"
                                            ><img src="/assets/svg/checked.svg"
                                            /></span>
                                        </div>
                                    </li>
                                    <hr className="hr my-2" />
                                    <li>
                                        <div className="dropdown-item fs-5">English</div>
                                    </li>
                                </ul>
                            </button>
        
                            {/* Logout Button */}
                            <Logout/>
                            
                        </div>
                    </div>
                </nav>
            </section>
    

            <section id="header" className="container">
                <div className="row justify-content-between">
                    <div className="col-md-6 align-self-center">
                        <div className="content">
                            <h2 className="title">منظومة التحقق الضريبى</h2>
                            <p className="description">
                            تغطي منظومة التحقق من قسيمة الراتب جميع مجالات التحقق الخاصة
                            بالعاملين بكافة انواعهم المسجلين بمنظومة توحيد احتساب صرائب
                            المرتبات متضمنه التحقق الخاص الافراد حاملي الجنسية المصرية
                            والاجانب العاملين بمصر لكافة القطاعات المسجلة بمنظومة توحيد
                            واحتساب ضرائب الدخل
                            </p>
                            <div className="d-flex justify-content-start">
                                <a className="btn btn-primary me-3" href="#">المستخدمين</a>
                                <a className="btn btn-outline-primary-error" href="#">شراء الباقات</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/svg/headerImg.svg" alt="Image" className="image" />
                    </div>
                </div>
            </section>


            <section id="counter" className="container">
                <div className="card shadow-lg border-0 rounded-3 my-auto mx-auto">
                    <div className="card-body row">
                        <div className="col-sm-4 d-flex justify-content-center">
                            <img src="/assets/svg/users.svg" />
                            <div className="countrText">
                                <div className="counterTitle">عدد المستخدمين</div>
                                <div className="counterCount">765</div>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <img src="/assets/svg/reviewer.svg" />
                            <div className="countrText">
                                <div className="counterTitle">عدد المراجعين</div>
                                <div className="counterCount">765</div>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-center">
                            <img src="/assets/svg/credits.svg" />
                            <div className="countrText">
                                <div className="counterTitle">رصيد الباقة</div>
                                <div className="counterCount">1299</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="users" className="container">
                <div className="card border-0 sectionTitleCard">
                    <div className="card-body titleSection">مستخدمين المنظومة</div>
                </div>
                <div className="table-responsive g-0 text-center shadow-sm mt-5">
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">إسم المستخدم</th>
                        <th scope="col">صلاحية المستخدم</th>
                        <th scope="col">حالة المستخدم</th>
                        <th scope="col">رصيد المستخدم</th>
                        <th scope="col">إضافة رصيد</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>ادمن</td>
                        <td>
                            <select className="form-select avilable">
                            <option value="1">نشط</option>
                            <option value="2">غير نشط</option>
                            </select>
                        </td>
                        <td>2000</td>
                        <td className="addCredit">
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>مستخدم</td>
                        <td>
                            <select className="form-select avilable">
                            <option value="1">نشط</option>
                            <option value="2">غير نشط</option>
                            </select>
                        </td>
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>مراجع</td>
                        <td>
                            <select className="form-select notAvilable">
                            <option value="1">غير نشط</option>
                            <option value="2">نشط</option>
                            </select>
                        </td>
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>ادمن</td>
                        
                        <td>
                            <select className="form-select notAvilable">
                        
                            <option value="1">غير نشط</option>
                        <option value="2">نشط</option>
                        </select></td>
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>مستخدم</td>
                        <td>
                            <select className="form-select avilable">
                            <option value="1">نشط</option>
                            <option value="2">غير نشط</option>
                            </select>
                        </td>
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>مراجع</td>
                        <td>
                            <select className="form-select avilable">
                            <option value="1">نشط</option>
                            <option value="2">غير نشط</option>
                            </select>
                        </td>
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>ادمن</td>
                        
                        <td>
                            <select className="form-select avilable">
                            <option value="1">نشط</option>
                            <option value="2">غير نشط</option>
                            </select>
                        </td>
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>مستخدم</td>
                        <td>
                            <select className="form-select notAvilable">
                        
                            <option value="1">غير نشط</option>
                        <option value="2">نشط</option>
                        </select></td>
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>مراجع</td>
                        <td>
                            <select className="form-select notAvilable">
                        
                            <option value="1">غير نشط</option>
                        <option value="2">نشط</option>
                        </select></td>
                        
                        <td>2000</td>
                        <td>
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                        <tr>
                        <td>محمد احمد محمود</td>
                        <td>مراجع</td>
                        <td>
                            <select className="form-select notAvilable">
                        
                            <option value="1">غير نشط</option>
                        <option value="2">نشط</option>
                        </select></td>
                        <td>2000</td>
                        <td className="w-25">
                            <input
                            type="number"
                            id="addCredit"
                            className="form-control"
                            placeholder="أكتب الرصيد "
                            />
                        </td>
                        <td>
                            <button className="btn btn-primary notActive">تأكيد</button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <script id="pagination" src="/js/main.js"></script>
                </div>
            </section> 
    

            {/* ADD USER */}
            <section id="addUsers" className="container">
            <div className="card border-0 sectionTitleCard">
                <div className="card-body titleSection">إضافة المستخدمين</div>
            </div>
        
            <div className="row justify-content-between">
                <div className="col-md-6 align-self-center">
                <form className="m-auto" id="add_user_form" action="#">
                    <div className="d-flex justify-content-between">
                    <div className="form-outline mb-4 me-3 text-start">
                        <label className="form-label" for="userName"> إسم المستخدم</label>
                        <input
                        type="text"
                        id="userName"
                        className="form-control form-control-lg"
                        placeholder="أكتب إسم المستخدم"
                        />
                    </div>
        
                    <div className="form-outline mb-4 text-start">
                        <label className="form-label" for="email"> البريد الإلكترونى</label>
                        <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="أكتب البريد الإلكترونى"
                        />
                    </div>
                    </div>
        
                    <div className="d-flex justify-content-between">
                    <div className="form-outline mb-4 me-3 text-start">
                        <label className="form-label" for="userPasstemp">
                        كلمة المرور الإفتراضية
                        </label>
                        <input
                        type="password"
                        id="userPasstemp"
                        className="form-control form-control-lg"
                        placeholder="أكتب كلمة المرور  "
                        />
                    </div>
        
                    <div className="form-outline mb-4 text-start">
                        <label className="form-label" for="phone">رقم الهاتف</label>
                        <input
                        type="number"
                        id="phone"
                        placeholder="اكتب رقم الهاتف"
                        className="form-control form-control-lg"
                        />
                    </div>
                    </div>
        
                    <div className="d-flex justify-content-between">
                    <div className="form-outline mb-4 me-3 text-start w-100">
                        <label className="form-label" for="preveladge"> الصلاحية</label>
                        <select className="form-select">
                        <option selected disabled >
                            حدد الصلاحية
                        </option>
                        <option value="1">ادمن</option>
                        <option value="2">مستخدم</option>
                        <option value="3">مراجع</option>
                        </select>
                    </div>
        
                    <div className="form-outline mb-4 text-start w-100">
                        <label className="form-label" for="status"> الحالة</label>
                        <select className="form-select">
                        <option selected disabled >
                            حدد الحالة
                        </option>
                        <option value="1">نشط</option>
                        <option value="2">غير نشط</option>
                        </select>
                    </div>
                    </div>
        
                    <div className="pt-4 text-center">
                    <button
                        className="btn btn-primary btn-lg btn-block w-50"
                        type="submit"
                    >
                        إضافة المستخدم
                    </button>
                    </div>
                </form>
                </div>
                <div className="col-md-6">
                <img
                    className="mt-5"
                    src="/assets/svg/userHeaderImg.svg"
                    alt="Image"
                    class = "image"
                />
                </div>
            </div>
            </section>

    
        {/* END ADD USER */}

            <section id="buyQuote" className="container">
            <div className="card border-0 sectionTitleCard">
                <div className="card-body titleSection">شراء الباقات</div>
            </div>
        
            <div id="carouselExample" className="carousel slide my-5">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex justify-content-evenly">
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">1000 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">19000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">500 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">10700 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">250 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">6000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">100 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">3400 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">50 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">6000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-evenly">
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">1000 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">19000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">500 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">10700 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">250 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">6000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">100 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">3400 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">50 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">6000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-evenly">
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">1000 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">19000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">500 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">10700 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">250 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">6000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">100 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">3400 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    <div className="card border-1 border-light-subtle shadow-sm rounded">
                        <div className="card-body d-flex flex-column text-center mx-auto">
                        <img src="/assets/svg/goal.svg" />
                        <div className="countNum">50 معاملة</div>
                        <div className="text">بقيمة</div>
                        <div className="price">6000 جنيها</div>
                        <div className="btn btn-primary">شراء الباقة</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
                >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            </section>


            <section id="footer">
            <div className="row justify-content-between mx-auto py-5 px-5">
                <div className="col-sm-6">
                <div className="desc">
                    من خلال هذه المنظومة يمكنك الاستعلام و التحقق من الشئون الضريبية لدى
                    الجهات الأخرى و التحقق من مستند الرواتب الخاص بالمواطن للتأكد من
                    صحتة
                </div>
        
                <div className="navbar-nav mx-auto mt-5">
                    <div className="d-flex justify-content-start">
                    <a className="nav-link active" href="#header">الرئيسية</a>
                    <a className="nav-link" href="#users">المستخدمين</a>
                    <a className="nav-link" href="#buyQuote">شراء الباقات</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-3 d-flex justify-content-evenly">
                <img src="/assets/svg/etaxLogoWhite.svg" />
                <a href="#header"><img src="/assets/svg/scrollUp.svg" /></a>
                </div>
            </div>
            </section>

            
        <script src="/bootstrap/bootstrap.bundle.min.js"></script>
      </div>
    
    )
}

export default Home