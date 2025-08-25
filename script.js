let wódz = 1; // Główny tracker okienek po środku
let ilosc_cyfr = 3; // Ile liczb posiada cyfra. For Loop
let index_tablicy = 0 // Dla wypisywania z tablicy
let przedzial = 9 // Liczby od 1 - <przedział>, będa się pojawiać (O ile jest tyle okienek)
let tablica_gracza = [];
let wylosowana_tablica = [
    String(Math.floor(Math.random() * (przedzial - 1)) + 1),
    String(Math.floor(Math.random() * (przedzial - 1)) + 1),
    String(Math.floor(Math.random() * (przedzial - 1)) + 1)
];

let próby = 0 // Counter prób dla left_container
let tracker = 1 // Dla kolorów
let speaker = document.getElementById('speakerbox') // Inicjuje i kończy tekst rozgrywke
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
            cont.style.background = 'linear-gradient( 135deg, #FF6FD8 10%, #3813C2 100%)';
        }

        // sprawdzamy czy gracz wypełnił sekwencję
        if (tablica_gracza.length === wylosowana_tablica.length) {
            for (let index_tablicy = 0; index_tablicy < ilosc_cyfr; index_tablicy++) {
                if (tablica_gracza[index_tablicy] === wylosowana_tablica[index_tablicy]) {
                    let zielone_tlo = document.getElementById(`num_${tracker}`)
                    zielone_tlo.style.background = "linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)";
                }
                else if (wylosowana_tablica.includes(tablica_gracza[index_tablicy])) {
                    let zolte_tlo = document.getElementById(`num_${tracker}`)
                    zolte_tlo.style.background = "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)" ;
                }
                    tracker++
                }

            if (tablica_gracza.join('') === wylosowana_tablica.join('')) {
        speaker.innerText = 'Wygrales! 🎉';
        } else {
        speaker.innerText = 'Spróbuj jeszcze raz 👍';
        
        }

            // resetujemy gracza
            tablica_gracza = [];
            próby++
            let ilosc_prób = document.getElementById("left_sidebar_t")
            ilosc_prób.innerText = `Ilość prób ${próby}/6`

            if (próby == 6) {
                speaker.innerText = 'Przegrales 👎';
            }


        }
    });
});