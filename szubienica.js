
let hasla = [
    'BEZ PRACY NIE MA KOŁACZY',
    'CO DWIE GŁOWY TO NIE JEDNA',
    'NIE MA TEGO ZŁEGO CO BY NA DOBRE NIE WYSZŁO',
    'GDZIE KUCHAREK SZEŚĆ TAM NIE MA CO JEŚĆ',
    'KTO RANO WSTAJE TEMU PAN BÓG DAJE',
    'LEPSZY WRÓBEL W GARŚCI NIŻ GOŁĄB NA DACHU',
    'JAK SOBIE POŚCIELISZ TAK SIĘ WYŚPISZ',
    'APETYT ROŚNIE W MIARĘ JEDZENIA',
    'NIE WSZYSTKO ZŁOTO CO SIĘ ŚWIECI',
    'FORTUNA KOŁEM SIĘ TOCZY',
    'CZAS TO PIENIĄDZ',
    'PRAWDZIWYCH PRZYJACIÓŁ POZNAJE SIĘ W BIEDZIE',
    'KTO POD KIM DOŁKI KOPIE TEN SAM W NIE WPADA',
    'ZGODA BUDUJE NIEZGODA RUJNUJE',
    'CO ZA DUŻO TO NIEZDROWO'
];

let losowa = Math.floor(Math.random() * hasla.length);

let haslo = hasla[losowa];
haslo = haslo.toUpperCase();

let dlugosc = haslo.length;
let haslo1 = '';

let yes = new Audio("yes.wav");
let no  = new Audio("no.wav");

for(let i = 0; i < dlugosc; i++){
    if(haslo[i] == ' ') haslo1 = haslo1 + ' ';
    else haslo1 = haslo1 + '-';
}

function wypisz_haslo(){
    document.getElementById('plansza').innerHTML = haslo1;
}

window.onload = start;

let litery = ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ż','Ź'];

function start(){
    let tresc_diva = '';

    for(let i = 0; i < 35; i++){
        let element = 'lit' + i;

        tresc_diva += '<div class="litera" ';
        tresc_diva += 'onclick="sprawdz(' + i + ')" ';
        tresc_diva += 'id="' + element + '">';
        tresc_diva += litery[i];
        tresc_diva += '</div>';
    }

    document.getElementById('alfabet').innerHTML = tresc_diva;

    wypisz_haslo();
}

let ile_skuch = 0;

function sprawdz(nr)
{
    let haslo2 = "";
    let trafiona = false;

    for(let i = 0; i < dlugosc; i++)
    {
        if(haslo.charAt(i) == litery[nr])
        {
            haslo2 += litery[nr];
            trafiona = true;
        }
        else
        {
            haslo2 += haslo1.charAt(i);
        }
    }

    let klikniety_div = document.getElementById("lit"+nr);

    if(trafiona == true)
    {
        klikniety_div.style.background = "#003300";
        klikniety_div.style.color = "#00C000";
        klikniety_div.style.border = "3px solid #00C000";

        haslo1 = haslo2;
        wypisz_haslo();

        yes.play();
    }
    else
    {
        klikniety_div.style.background = "#330000";
        klikniety_div.style.color = "#C00000";
        klikniety_div.style.border = "3px solid #C00000";

        ile_skuch++;

        document.getElementById("szubienica").innerHTML =
        '<img src="s' + ile_skuch + '.jpg" alt="">';

        no.play();
    }

    klikniety_div.style.cursor = "default";
    klikniety_div.setAttribute("onclick", "");

    if(haslo1 == haslo)
    {
        document.getElementById("alfabet").innerHTML =
        "Podano prawidłowe hasło: " + haslo + '<br><br>';

        document.getElementById("alfabet").innerHTML +=
        '<span class="reset" onclick="location.reload()">JESZCZE RAZ</span>';
    }

    if(ile_skuch >= 9)
    {
        document.getElementById("alfabet").innerHTML =
        "Przegrana! Prawidłowe hasło: " + haslo + '<br><br>';

        document.getElementById("alfabet").innerHTML +=
        '<span class="reset" onclick="location.reload()">JESZCZE RAZ</span>';
    }
}
