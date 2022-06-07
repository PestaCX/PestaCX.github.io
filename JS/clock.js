
    function updateClock() {
        time_date = new Date();
        document.getElementById("clock").innerHTML =
         String(time_date.getFullYear()) + "."
         + String(time_date.getMonth()+1) + "." 
         + String(time_date.getDate()) + "." + "  " 
         + String(time_date.getHours()) + ":" 
         + (String(time_date.getMinutes()).length == 1 ? String("0"+time_date.getMinutes()) : String(time_date.getMinutes())) + ":"
         + (String(time_date.getSeconds()).length == 1 ? String("0"+time_date.getSeconds()) : String(time_date.getSeconds()));
         
         
         
         
     /*   document.getElementById("length").innerHTML =
        String(time_date.getSeconds()).length;*/

        setTimeout(updateClock,1000); 
     } 
     updateClock();
