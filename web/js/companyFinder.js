/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $.get("http://localhost:8080/InternshipServer/api/student", function (data) {
        $.each(data, function (key, value) {
            $("#data").append(value.name);
        });
    });
    $("#testButton").click(function () {

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/InternshipServer/api/student",
            data: JSON.stringify({"idStudent": 6, "name": "Travica"}),
            contentType: "application/json"
        });
    });
    
    $(document).ready(function () {
        $('#dtBasicExample').DataTable({
            "searching": true,
            "sorting": [[0, 'desc']],
            "paging": false,
            "ordering": true,
            "ajax": {
                "url": "http://localhost:8080/InternshipServer/api/internship/company/3",
                "dataSrc": ""
            },
            "columns": [
                { "data": "name" },
                { "data": "department" },
                { "data": "duration" },
                { "data": "startDate" },
                { "data": "endDate" }
            ],
            "bInfo": false  
        });
        $('.dataTables_length').addClass('bs-select');
    });
    
 

});