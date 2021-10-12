//Contenu du fichier Validation_JQuery.js						
// Cet événement permet d'attendre jusqu'au déploiement complet de la page. 
$(function() {
  // Cette ligne va capturer l'événement de validation du formulaire
  // appelé "Enregistrement".
  $("form[name='Enregistrement']").validate({
    // Spécification des règles de validation.
    rules: {
      // A gauche le nom du champ du formulaire. A droit, la validation 
      // à appliquer.
      prenom: "required", //Le prénom est obligatoire. 
      nom: "required", //Le nom est obligatoire.
      email: { // Plusieurs règles peuvent être spécifiées.
        required: true, // L'e-mail est obligatoire. 
        email: true // Cette règle permet d'utiliser la validation e-mail incluse en JQuery.
      },
      motDePasse: { 
        required: true, // Le mot de passe est obligatoire.
        minlength: 5 // Sa longueur minimale est de 5 caractères.
      }
    },
    // Spécification des messages d'erreur pour chaque champ.
    messages: {
      prenom: "Le prénom est obligatoire",
      nom: "Le nom est obligatoire",
      motDePasse: {
        required: "Le mot de passe est obligatoire",
        minlength: "Votre mot de passe doit avoir au moins 5 caractères"
      },
      email: "L'e-mail est obligatoire"
    },
    // Cet événement permet de s'assurer que le formulaire est soumis une fois 
    // que la validation a été réussie. 
    submitHandler: function(form) {
      form.submit();
    }
  });
});						
					