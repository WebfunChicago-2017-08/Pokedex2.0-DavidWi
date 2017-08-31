$(document).ready(function(){
     for(i = 1; i <=151; i ++){  
        $("#pokemon").append("<img id=pokepic" + i + " src='http://pokeapi.co/media/img/" + i +
        ".png'>");   
     }           
        $("img").on("click", function(e){
            var pokeID = e.target.id.split("pokepic")[1];
            $.get("http://pokeapi.co/api/v1/pokemon/" + pokeID +"/", function(data){
                
                var name ="<h4>name</h4>";
                name += "<ul>";
                var str = "";
                str += "<h4>Types</h4>";
                str += "<ul>";
                var str2 = "";
                str2 += "<h4>height</h4>";
                str2 += "<ul>";
                var str3 = "";
                str3 += "<h4>weight</h4>";
                str3 += "<ul>";      
                for(i = 0; i < data.types.length; i ++){
                    str += "<li>" + data.types[i].name + "</li>";           
                }
                    name += "<li>" + data.name + "</li>"
                    str2 += "<li>" + data.height + "</li>";
                    str3 += "<li>" + data.weight + "</li>";
                    name += "</ul>"
                    str += "</ul>";
                    str2 += "</ul>";
                    str3 += "</ul>";
                    $("#chosen").html(name + str + str2 + str3);
                        }, "json");            
        });            
});