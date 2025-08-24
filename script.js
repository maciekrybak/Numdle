let wódz = 1;
let ilosc_cyfr = 3;
let index_tablicy = 0
let przedzial = 9
let tablica_gracza = [];
let wylosowana_tablica = [
    String(Math.floor(Math.random() * (przedzial - 1)) + 1),
    String(Math.floor(Math.random() * (przedzial - 1)) + 1),
    String(Math.floor(Math.random() * (przedzial - 1)) + 1)
];

let próby = 0
let tracker = 1
const conts = document.querySelectorAll('.cont');

conts.forEach(cont => {
    cont.addEventListener('click', () => {
        let text = cont.innerText;

        // wyświetlamy klikniętą cyfrę
        document.getElementById(`num_${wódz}`).innerText = text;
        

        // dodajemy do tablicy gracza
        tablica_gracza.push(text);
        wódz++;
        if (!wylosowana_tablica.includes(text)) {
            cont.style.backgroundColor = 'grey'
        }

        // sprawdzamy czy gracz wypełnił sekwencję
        if (tablica_gracza.length === wylosowana_tablica.length) {
            for (let index_tablicy = 0; index_tablicy < ilosc_cyfr; index_tablicy++) {
                if (tablica_gracza[index_tablicy] === wylosowana_tablica[index_tablicy]) {
                    let zielone_tlo = document.getElementById(`num_${tracker}`)
                    zielone_tlo.style.backgroundColor = "green"
                }
                else if (wylosowana_tablica.includes(tablica_gracza[index_tablicy])) {
                    let zolte_tlo = document.getElementById(`num_${tracker}`)
                    zolte_tlo.style.backgroundColor = "yellow" 
                }
                    tracker++
                }

            
            if (tablica_gracza.join('') === wylosowana_tablica.join('')) {
        alert('Wygrales! 🎉');
        } else {
        alert('Spróbuj jeszcze raz 👍')
        
        }

            // resetujemy gracza
            tablica_gracza = [];
            próby++
            let ilosc_prób = document.getElementById("left_sidebar_t")
            ilosc_prób.innerText = `Ilość prób ${próby}/6`


        }
    });
});