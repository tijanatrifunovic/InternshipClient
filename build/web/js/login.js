/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $('#loginButton').click(function() {
        var userType = $('#userTypeSelect').val();
        if (userType == 1) {
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/InternshipServer/api/student/login",
                data: JSON.stringify({"email": $('#email').val(), "password": $('#password').val()}),
                contentType: "application/json",
                success: function(returnData) {
                    sessionStorage.setItem("data",JSON.stringify(returnData));
                    window.location.replace('StudentLoggedIn/finder.html');
                },
                error: function(error) {
                    if (error.status == 400) {
                       $('#alertMessage').html("Some field is missing.");
                    } else {
                       $('#alertMessage').html("Something went wron. Please try again."); 
                    }
                    $('#alert').addClass("alert-danger show");

                } 
            });
        } else if (userType == 2) {
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/InternshipServer/api/company/login",
                data: JSON.stringify({"email": $('#email').val(), "password": $('#password').val()}),
                contentType: "application/json",
                success: function(returnData) {
                    sessionStorage.setItem("data",JSON.stringify(returnData));
                    window.location.replace('CompanyLoggedIn/finder.html');
                },
                error: function(error) {
                    if (error.status == 400) {
                       $('#alertMessage').html("Some field is missing.");
                    } else {
                       $('#alertMessage').html("Something went wron. Please try again."); 
                    }
                    $('#alert').addClass("alert-danger show");

                } 
            });
        } else {
            $('#alertMessage').html("Some field is missing.");
            $('#alert').addClass("alert-danger show");
        }
    });
    
    $('#closeAlert').click(function() {
        $('#alert').removeClass("alert-danger show");
    });
    
    
});

