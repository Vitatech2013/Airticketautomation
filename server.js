const express = require('express')

const app = express()

app.get('/home', loadstdHtml);
app.get('/Manager', managerlogin);
app.get('/ManagerHome', ManagersHome);

app.get('/userlogin',userlogins);
app.get('/userreg',userregs);
app.get('/userHome', usersHome);
app.get('/forgotPassword', forgotPassword);
app.get('/managerforgotPassword', managerforgotPassword);
app.get('/user/booking',bookingdetails);
app.get('/user/changePassword',userchangepwd);
app.get('/user/profile',viewprofile);
app.get('/user/Viewflights',userViewFlights);
app.get('/user/Viewbooking',userViewBookings);
app.get('/user/Searchflights',userViewSearch);
app.get('/user/payments',userPayments);
app.get('/user/reservations',userViewReservation);
app.get('/user/cancelreservations',userCancelReservation);

app.get('/manager/reservations',managerViewreservation);
app.get('/manager/cancelreservations',managerCancelReservation);
app.get('/manager/Viewusers',managerViewUsers);
app.get('/manager/Addflight',Addflights);
app.get('/manager/Viewflights',managerviewflights);
app.get('/manager/changePassword',managerchangepwd);


app.listen(3000, () => console.log(`Example app listening on port 3000!`))

function loadstdHtml(req, res) {
    
    res.sendFile('MainPage.html',{ root: __dirname });

}

function managerlogin(req, res) {
   // res.header("Control-Access-Allow-Origin","*")
    res.sendFile('ManagerLogin.html',{ root: __dirname });

}
function userlogins(req, res) {
    
    res.sendFile('UserLogin.html',{ root: __dirname });

}
function ManagersHome(req, res) {
    
    res.sendFile('Manager/ManagerMainPage.html',{ root: __dirname });

}

function usersHome(req, res) {
    
    res.sendFile('User/UserMainPage.html',{ root: __dirname });

}
function userregs(req, res) {
    
    res.sendFile('UserReg.html',{ root: __dirname });

}

function forgotPassword(req, res) {
    // res.header("Control-Access-Allow-Origin","*")
    res.sendFile('ForgotPassword.html',{ root: __dirname });
}
function managerforgotPassword(req, res) {
    // res.header("Control-Access-Allow-Origin","*")
    res.sendFile('ManagerForgotPassword.html',{ root: __dirname });
}
//User

function viewprofile (req, res) {
    
    res.sendFile('User/ViewProfile.html',{ root: __dirname });

}
function userViewFlights (req, res) {
    
    res.sendFile('User/ViewFlights.html',{ root: __dirname });

}
function bookingdetails (req, res) {
    
    res.sendFile('User/Booking.html',{ root: __dirname });

}
function userViewBookings (req, res) {
    
    res.sendFile('User/ViewBooking.html',{ root: __dirname });


}
function userViewSearch (req, res) {
    
    res.sendFile('User/SearchFlights.html',{ root: __dirname });


}
function userchangepwd (req, res) {
    
    res.sendFile('User/ChangePassword.html',{ root: __dirname });

}
function userPayments (req, res) {
    
    res.sendFile('User/Payment.html',{ root: __dirname });

}
function userViewReservation (req, res) {
    
    res.sendFile('User/ViewReservations.html',{ root: __dirname });

}
function userCancelReservation (req, res) {
    
    res.sendFile('User/CancelReservation.html',{ root: __dirname });

}

//Manager


function Addflights(req, res) {
    
    res.sendFile('Manager/AddFlights.html',{ root: __dirname });

}

function managerviewflights(req, res) {
    
    res.sendFile('Manager/ViewFlights.html',{ root: __dirname });

}
function managerViewreservation(req, res) {
    
    res.sendFile('Manager/ViewReservations.html',{ root: __dirname });

}
function managerViewUsers(req, res) {
    
    res.sendFile('Manager/ViewUser.html',{ root: __dirname });

}
function managerCancelReservation (req, res) {
    
    res.sendFile('Manager/CancelReservation.html',{ root: __dirname });

}
function managerchangepwd (req, res) {
    
    res.sendFile('Manager/ChangePassword.html',{ root: __dirname });

}

