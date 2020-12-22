$(document).ready(()=>{
    
    $("#p1").hide();
    $("#b1").click(function(){  
        // $.ajax({
        //     datatype: "json",
        //     data:"data",

        //     url:"https://ifsc.razorpay.com/SBIN0050085",
        //     success : function (data){
        //         $("#p1").text(data.BRANCH);
        //         $("#p2").text(data.ADDRESS);
        //     },
        //     error: function(err){
        //         console.log(err);
        //     }
        // });
        //----------------------------------------
        // var xmlh = new XMLHttpRequest();
        // xmlh.onreadystatechange=function(){
        //     if(this.readyState==4 && this.status==200){
        //         var obj = JSON.parse(this.responseText);
        //         $("#p1").text(obj.BRANCH);
        //     }
        //     else if(this.status==403)
        //         console.log("Forbidden");
        // };
        // xmlh.open("GET","https://ifsc.razorpay.com/SBIN0050085",true);
        // xmlh.send();
        //----------------------------------------
        var ifsc=$("#ifsctxt").val();

        $.getJSON("https://ifsc.razorpay.com/"+ifsc,function(data){
            var datatxt="<tbody>";
            for(var key in data){
                datatxt+="<tr><td>"+key+"</td><td>"+data[key]+"</td></tr>";
                $("#p1").hide();

            }
            datatxt += "</tbody>";
            $("#datatb").html(datatxt);
        }).fail(function(){
            $("#p1").show();
            
        });
    });
});