
addEventListener('load', ()=>{

    var bill = document.querySelector('.bill');

    var persons = document.querySelector('.persons');

    var btn_reset = document.querySelector('.btn_reset');

    var d_total = document.querySelector('.total');

    var d_total_person = document.querySelector('.total_tip')

    var button_porcent5 = document.querySelector('.button_porcent5');

    var button_porcent10 = document.querySelector('.button_porcent10');

    var button_porcent15 = document.querySelector('.button_porcent15');

    var button_porcent25 = document.querySelector('.button_porcent25');

    var button_porcent50 = document.querySelector('.button_porcent50');

    var button_porcent_c = document.querySelector('.button_porcent_c');
    
    var porcent = 5;

    function remove(){
        var activo = document.getElementsByClassName('active')[0];
       if(activo != undefined){
        activo.classList.remove('active');
       }
    }

    function show(){

        var subtotal = parseFloat(bill.value);

        var people = parseInt(persons.value);

        if(button_porcent_c.value != ""){
            porcent = button_porcent_c.value;
        }


        var total_tip = ((porcent * subtotal) / 100);

        var total = subtotal + total_tip

        var total_person = total_tip / people ;

        var nonvalid_span = document.querySelector('.nonvalid_span');

        if ( people == 0 || subtotal == 0 || isNaN(people) || isNaN(subtotal)){
            d_total_person.innerHTML = "$0.00";

            d_total.innerHTML = "$0.00";


        }else{
            d_total_person.innerHTML = "$" + total_person.toFixed(2);

            d_total.innerHTML = "$" + (total / people).toFixed(2);

            

            var busqueda_valida = document.getElementsByClassName('nonvalid')[0];
            var busqueda_show = document.getElementsByClassName('show')[0]

            if(busqueda_valida != undefined){
                persons.classList.remove("nonvalid")
               }

               if(busqueda_show != undefined){
                nonvalid_span.classList.remove("show");
               }
        }
      
        if(people == 0){

            d_total_person.innerHTML = "$0.00";

            d_total.innerHTML = "$0.00";

            

            persons.classList.add("nonvalid");

            nonvalid_span.classList.add("show");

        }else{


            var busqueda_valida = document.getElementsByClassName('nonvalid')[0];
            var busqueda_show = document.getElementsByClassName('show')[0]

            if(busqueda_valida != undefined){
                persons.classList.remove("nonvalid")
                console.log("hola");
               }

               if(busqueda_show != undefined){
                nonvalid_span.classList.remove("show");
               }

           
        }

       

    }



    button_porcent5.addEventListener('click', () =>{
        porcent = 5;
        
        remove();

        show();
        button_porcent5.classList.add('active');
    });

    button_porcent10.addEventListener('click', () =>{
        porcent = 10;

        remove();
        show();
        button_porcent10.classList.add('active');
    });

    button_porcent15.addEventListener('click', () =>{
        porcent = 15;

        remove();
        show();
        button_porcent15.classList.add('active');
    });

    button_porcent25.addEventListener('click', () =>{
        porcent = 25;

        remove();
        show();
        button_porcent25.classList.add('active');
    });

    button_porcent50.addEventListener('click', () =>{

        remove();

        button_porcent50.classList.add('active');

        porcent = 50;

        show();

    });

    button_porcent_c.addEventListener('click', () =>{
        remove();
    });

    button_porcent_c.addEventListener('keyup', (event) =>{
        show();

        if(event.keyCode == 13){
           show();
        }

        if(event.keyCode == 8 && button_porcent_c.value == ""){
            porcent = 0;
            show();
        }
    });
    
    

    persons.addEventListener('keyup', () =>{
        show(); 
    });

   
    btn_reset.addEventListener('click', () =>{

        d_total_person.innerHTML = "$0.00";

        d_total.innerHTML = "$0.00";

        bill.value = "";
        persons.value ="";

        remove();

        button_porcent5.classList.add('active');

        porcent = 5;

    });

    




});