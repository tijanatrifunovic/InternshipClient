/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $(document).ready(function () {
        var data = JSON.parse(sessionStorage.getItem("data"));
        $('#nameSurname').text(data.name + " " + data.surname);
        $('#indexNumber').text(data.indexNumber);
        $('#email').text(data.email);
        $('#department').text(data.department);



        $(".btn-pref .btn").click(function () {
            $(".btn-pref .btn").removeClass("btn-dark").addClass("btn-default");
            $(this).removeClass("btn-default").addClass("btn-dark");

            //change active tab
            var tabs = $('.tab-pane');
            tabs.each(function () {
                console.log($(this).removeClass("active"))
            });
            var id = $(this).attr("id");
            $("#" + id + "Pane").addClass("active");

            if (id == "internshipData") {
                $.get("http://localhost:8080/InternshipServer/api/student/" + data.idUser, function (returnData) {
                    $('#company').text(returnData.company);
                    $('#internshipName').text(returnData.name);
                    $('#startDate').text(returnData.startDate);
                    $('#endDate').text(returnData.endDate);
                    $('#duration').text(returnData.duration);
                    $('#description').text(returnData.description);
                    var done = returnData.done;
                    if (returnData.done == 0) {
                        $('#done').attr("src", "../images/bad.png");
                    } else {
                        $('#done').attr("src", "../images/good.png");
                    }
                });
            }

        });


    });
});