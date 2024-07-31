//Check link
console.log('JS OK')

// 1.preparazione dati
    //1.recupero l'elemento dal Dom
    const resulelement = document.getElementById('price');
    console.log('id', resulelement);
// fine

//2.raccolta dati
    // 1.chiedo all'utente quanti chilometri deve percorrere
    const userKm = parseInt(prompt('Quanti chilometri devi percorrere?', 150 ));
    console.log('Km', userKm); 

    // 2.chiedo all'utente la sua età
    const userAge = parseInt(prompt('Quanti anni hai?', 27 ));
    console.log('Age', userAge); 
// fine
   
// 3.lavorazione dati
    // calcolo prezzo del biglietto        
    const ticketKm = 0.21;

    const ticketPrice = userKm * ticketKm;
    console.log('Ticket price €', ticketPrice,);

    

// 4.generazione output
