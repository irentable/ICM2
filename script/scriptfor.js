
   function isEmpty()
   {
       var nom = document.forms['fo'].nom.value;
       if(fo.nom.value==''){
          alert ('veillez saisir votre nom');
        }
        else if(fo.nwhatsapp.value==''){
        alert ('veillez saisir votre numero whatsapp ');
        }
        else if(fo.pays.value==''){
        alert ('veillez saisir votre pays ');
        }
        else if(fo.ville.value==''){
            alert ('veillez saisir votre ville ');
        }
        else if(fo.add.value==''){
            alert ('veillez saisir votre adresse de residence ');
        }  
        else{
            window.location.replace("Formulairevalide.html");
        } 
    } 
