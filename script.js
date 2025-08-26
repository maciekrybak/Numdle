let wódz = 1; // Główny tracker okienek po środku
let ilosc_cyfr = 3; // Ile liczb posiada cyfra. For Loop
let index_tablicy = 0 // Dla wypisywania z tablicy
let przedzial = 9 // Liczby od 1 - <przedział>, będa się pojawiać (O ile jest tyle okienek)
let max_próby = 6


let score_board = [] // DOPIERO ZACZNIEMY TO ROBIĆ PO ZAIMPLEMENTOWANIU RESET
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

// USTAWIANIE PRÓB 

document.getElementById("set6").addEventListener("click", () => {
    max_próby = 6;
    document.getElementById("left_sidebar_t").innerText = `Ilość prób ${próby}/${max_próby}`;
});

document.getElementById("set5").addEventListener("click", () => {
    max_próby = 5;
    document.getElementById("left_sidebar_t").innerText = `Ilość prób ${próby}/${max_próby}`;
});

document.getElementById("set4").addEventListener("click", () => {
    max_próby = 4;
    document.getElementById("left_sidebar_t").innerText = `Ilość prób ${próby}/${max_próby}`;
});

document.getElementById("set3").addEventListener("click", () => {
    max_próby = 3;
    document.getElementById("left_sidebar_t").innerText = `Ilość prób ${próby}/${max_próby}`;
});

// RESET 

        document.getElementById("reset_button").addEventListener("click", () => {
            document.querySelectorAll(".inp").forEach(el => {
                el.innerText = " ";
                el.classList.remove('zielone','zolte');
            })
            document.querySelectorAll(".cont").forEach(el => {
                el.style.background = "linear-gradient(135deg, #E2B0FF 10%, #9F44D3 100%)";
            });
            wódz = 1
            tracker = 1
            próby = 0
            tablica_gracza = []
            speaker.innerText = "Kliknij w okienka na prawo, aby rozpocząć rozgrywkę";
            document.getElementById("left_sidebar_t").innerText = `Ilość prób ${próby}/${max_próby}`;
            })


// GŁÓWNY SKRYPT

conts.forEach(cont => {
    cont.addEventListener('click', () => {
        if (próby >= max_próby) return;

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
            let wygrana = tablica_gracza.join('') === wylosowana_tablica.join('');

            for (let index_tablicy = 0; index_tablicy < ilosc_cyfr; index_tablicy++) {
                if (tablica_gracza[index_tablicy] === wylosowana_tablica[index_tablicy]) {
                    let zielone_tlo = document.getElementById(`num_${tracker}`);
                    zielone_tlo.classList.add('zielone'); // efekt fade
                } else if (wylosowana_tablica.includes(tablica_gracza[index_tablicy])) {
                    let zolte_tlo = document.getElementById(`num_${tracker}`);
                    zolte_tlo.classList.add('zolte'); // efekt fade
                }
                tracker++;
            }

            if (wygrana) {
                speaker.innerText = 'Wygrales! 🎉';
            } else {
                próby++;
                let ilosc_prób = document.getElementById("left_sidebar_t")
                ilosc_prób.innerText = `Ilość prób ${próby}/${max_próby}`;

                if (próby === max_próby) {
                    speaker.innerText = 'Przegrales 👎';
                } else {
                    speaker.innerText = 'Spróbuj jeszcze raz 👍';
                }
            }

            // resetujemy gracza
            tablica_gracza = [];
        }
    });
});
