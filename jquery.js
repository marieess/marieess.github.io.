/*   
Le jean query se trouve dans sur les explications de projets (commentaires+ certaines images)
dans le cv avec un fadetoggle au niveau des hobbies 
sur la page d'accueil et page portfolio avec un rond qui se déplace               */
$(document).ready(function(){
$("#hobbies1").hover(function(){
  $("#hobbies1").fadeToggle(500);
}); 
});

$(document).ready(function(){
$("#hobbies2").hover(function(){
  $("#hobbies2").fadeToggle(500);
}); 
});

$(document).ready(function(){
$("#hobbies3").hover(function(){
  $("#hobbies3").fadeToggle(500);
}); 
});


$(document).ready(function(){
$("#hobbies4").hover(function(){
  $("#hobbies4").fadeToggle(500);
}); 
});


// penelope vandamme 
$(document).ready(function(){
 $("#explications").hover(function(){
        $("#explications").css({"background-color":"lightblue",},"slow");
     $("#explications").animate({borderRadius:"30%",}, 1000); }, 
        function(){
            $("#explications").css({"background-color":"#F3DBD3",});
            	$("#explications").animate({borderRadius:"0%",}, 2000); 
        });
 });


$(document).ready(function(){
 $("#explicationsdeux").hover(function(){
        $("#explicationsdeux").css({"background-color":"lightblue",},"slow");
     $("#explicationsdeux").animate({borderRadius:"20%",}, 1000); }, 
      function(){
          $("#explicationsdeux").css({"background-color":"#F3DBD3",});
           	$("#explicationsdeux").animate({borderRadius:"0%",}, 2000); 
       });
});

$(document).ready(function(){
 $("#projet").hover(function(){
        $("#projet").css({ width: '120%',}, 500);}, 
        function(){
            $("#projet").css({width: '100%',}, 500);});
 });

$(document).ready(function(){
 $("#projetdeux").hover(function(){
        $("#projetdeux").css({ width: '120%',}, 500);}, 
        function(){
            $("#projetdeux").css({width: '100%',}, 500);});
 });

$(document).ready(function(){
 $("#storiespene").hover(function(){
        $("#storiespene").css({ width: '32%',}, 500);}, 
        function(){
            $("#storiespene").css({width: '28%',}, 500);});
 });




$(document).ready(function(){
  $("#rondjquery2").hover(function (){
    $("#rondjquery2").animate({left:'1100px',}, 4000);
    $("#rondjquery2").animate({left:'400px',}, 4000);

  });
  });



$(document).ready(function(){
  $("#rond1").hover(function (){
    $("#rond1").animate({top:'160px',}, 2000);
    $("#rond1").animate({top:'500px',}, 2000);

  });
  });



$(document).ready(function(){
  $("#rond2").hover(function (){
    $("#rond2").animate({top:'1200px',}, 2000);
    $("#rond2").animate({top:'600px',}, 2000);

  });
  });



$(function() {
  
  $("form[name='contacts']").validate({
    // Spécification des règles de validation.
    rules: {
      prenom: "required", //Le prénom est obligatoire. 
      nom: "required", //Le nom est obligatoire.
      email: { // Plusieurs règles peuvent être spécifiées.
        required: true, // L'e-mail est obligatoire. 
        email: true // Cette règle permet d'utiliser la validation e-mail incluse en JQuery.
      },
    },
    // Spécification des messages d'erreur pour chaque champ.
    messages: {
      prenom: "Ouch, aucun prénom a été rentré",
      nom: "Ouch, aucun nom a été rentré",
      email: "Il me faut un petit e-mail pour continuer"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});       