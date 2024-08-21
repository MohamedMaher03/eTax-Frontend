

function Logout(){

    function handleLogout(){
        window.location.href = '/login';
        localStorage.removeItem('token');
    }

    return(
        // <button onClick={handleLogout}</button>
        <a className="btn btn-primary red me-auto fs-6" onClick={handleLogout}> تسجيل الخروج </a>
                        
    )
}

export default Logout