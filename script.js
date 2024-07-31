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
    const userAge = parseInt(prompt('Quanti anni hai?', 15 ));
    console.log('Age', userAge); 
// fine
   
// 3.lavorazione dati
    // calcolo prezzo del biglietto  scontato       
    const ticketKm = 0.21;

    const ticketPrice = userKm * ticketKm;
    console.log('Ticket price €', ticketPrice,);
  
    // calcolo dello sconto
    let discount = 0;

    if (userAge > 65) {
        discount = 40;
        let messageDiscount = `Hai diritto a uno sconto del ${discount}%`;
        console.log('Message Discount', messageDiscount);
    } else if (userAge < 18) {
        discount = 20;
        let messageDiscount = `Hai diritto a uno sconto del ${discount}%`;
        console.log('Message Discount', messageDiscount);
    }
    
    // calcolo prezzo del biglietto scontato   
    if (userAge < 18 || userAge > 65){  
    console.log('discount', discount,'%');

    const ticketDiscounted = (ticketPrice - ((ticketPrice * discount) / 100)).toFixed(2);
    console.log('Ticket price with discount €', ticketDiscounted,);
    }
    
// fine

// 4.generazione output
