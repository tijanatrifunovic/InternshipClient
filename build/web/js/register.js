/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $("#userTypeSelect").change(function () {
        var selectedValue = $(this).val();
        if (selectedValue == 1) {
            $('#moreFields').html(' <div class="form-group">\n\
                                                    <label for="indexNumber">Index number</label>\n\
                                                    <input type="text" class="form-control" id="indexNumber" placeholder="Index number" required>\n\
                                                </div>\n\
                                                <div class="form-group">\n\
                                                    <label for="name">Name</label>\n\
                                                    <input type="text" class="form-control" id="name" placeholder="Name" required>\n\
                                                </div>\n\
                                                <div class="form-group">\n\
                                                    <label for="surname">Surname</label>\n\
                                                    <input type="text" class="form-control" id="surname" placeholder="Surname" required>\n\
                                                </div>\n\
                                                <div class="input-group mb-3">\n\
                                                    <div class="input-group-prepend">\n\
                                                        <label class="input-group-text" for="idDepartmentSelect">Department</label>\n\
                                                    </div>\n\
                                                        <select class="custom-select" id="idDepartmentSelect" required>\n\
                                                            <option selected value="">Choose...</option>\n\
                                                            <option value="1">Software engeneering</option>\n\
                                                            <option value="2">Company</option>\n\
                                                        </select>\n\
                                                </div>');
            
            
            $.get("http://localhost:8080/InternshipServer/api/student/departments", function (data) {
                $.each(data, function (key, value) {
                    $("#idDepartmentSelect").append('<option value="'+value.idDepartment+'">'+value.name+'</option>');
                });
            });
            
            
        } else if (selectedValue == 2) {
            $('#moreFields').html(' <div class="form-group">\n\
                                                    <label for="companuName">Company name</label>\n\
                                                    <input type="text" class="form-control" id="companuName" placeholder="Company name" required>\n\
                                                </div>\n\
                                                <div class="form-group">\n\
                                                    <label for="address">Address</label>\n\
                                                    <input type="text" class="form-control" id="address" placeholder="Address" required>\n\
                                                </div>');
        } else {
            $('#moreFields').html("");
        }
    });
    $('#registerButton').click(function() {
        var userType = $('#userTypeSelect').val();
        if (userType == 1) {
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/InternshipServer/api/student",
                data: JSON.stringify({"indexNumber": $('#indexNumber').val(), "name": $('#name').val(), "surname": $('#surname').val(), "email": $('#emailAddress').val(), "password": $('#password').val(), "idDepartment": $('#idDepartmentSelect').val()}),
                contentType: "application/json",
                success: function() {
                    $('#registerForm').trigger("reset");
                    $('#moreFields').html("");
                    $('#alertMessage').html("You have registered successfully.");
                    $('#alert').removeClass("alert-danger");
                    $('#alert').addClass("alert-success show");
                },
                error: function(error) {
                    $('#alert').removeClass("alert-success");
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
                url: "http://localhost:8080/InternshipServer/api/company",
                data: JSON.stringify({"email": $('#emailAddress').val(), "password": $('#password').val(), "name": $('#companuName').val(), "address": $('#address').val()}),
                contentType: "application/json",
                success: function() {
                    $('#registerForm').trigger("reset");
                    $('#moreFields').html("");
                    $('#alertMessage').html("You have registered successfully.");
                    $('#alert').removeClass("alert-danger");
                    $('#alert').addClass("alert-success show");
                },
                error: function(error) {
                    $('#alert').removeClass("alert-success");
                    if (error.status == 400) {
                       $('#alertMessage').html("Some field is missing.");
                    } else {
                       $('#alertMessage').html("Something went wron. Please try again."); 
                    }
                    $('#alert').addClass("alert-danger show");

                } 
            });
        } else {
            $('#alert').removeClass("alert-success");
            $('#alertMessage').html("Some field is missing.");
            $('#alert').addClass("alert-danger show");
        }
    });
    
    $('#closeAlert').click(function() {
        $('#alert').removeClass("alert-success alert-danger show");
    });
    
    
});

