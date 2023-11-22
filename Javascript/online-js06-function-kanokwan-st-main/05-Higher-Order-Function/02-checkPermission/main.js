function checkPermission(role, admin, notAdmin) {
    if (role == "ADMIN") admin();
    else notAdmin();
}

checkPermission(
    "ADMIN",
    function admin() {
        alert("ACCESS GRANTED");
    },
    function notAdmin() {
        alert("ACCESS DENIED");
    }
)