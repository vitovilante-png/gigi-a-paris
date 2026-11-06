/* Foto reali da Wikimedia Commons (licenze libere, con attribuzione). */
const PHOTOS = {
  "1-1": { src: "photos/ep1-1.jpg", alt: "La torre dell'orologio della Gare de Lyon a Parigi contro un cielo blu.",
    caption: "La torre dell'orologio della Gare de Lyon, la prima cosa che Gigi vede di Parigi. Ha un quadrante su ogni lato, così nessuno può dire di non sapere che ore sono.",
    author: "Arria Belli", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    url: "https://commons.wikimedia.org/wiki/File:Tour_de_l%27horloge_de_la_Gare_de_Lyon.jpg" },
  "1-2": { src: "photos/ep1-2.jpg", alt: "La vetrina nera e oro di una boulangerie parigina, Le Moulin de la Vierge, con una tenda arancione e il pane in vetrina.",
    caption: "Una vera boulangerie parigina. Prova a leggere le scritte con le regole di Croissant: «pains sur levain», «viennoiserie», «tout au beurre».",
    author: "Moonik", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    url: "https://commons.wikimedia.org/wiki/File:Boulangerie_64_rue_Saint-Dominique_Paris_7e.jpg" },
  "1-3": { src: "photos/ep1-3.jpg", alt: "La facciata bianca della basilica del Sacré-Cœur a Montmartre con le statue equestri verdi.",
    caption: "La basilica del Sacré-Cœur, in cima alla collina di Montmartre: dalla finestra del Petit Vésuve si vedono le sue cupole bianche.",
    author: "Dietmar Rabich", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    url: "https://commons.wikimedia.org/wiki/File:Paris,_Sacr%C3%A9-C%C5%93ur_de_Montmartre_--_2014_--_1193.jpg" },
  "1-4": { src: "photos/ep1-4.jpg", alt: "Foto storica in bianco e nero del mercato di rue Lepic, con banchi, carretti e passanti sul pavé.",
    caption: "Il mercato di rue Lepic in una foto degli anni Venti. Guarda in alto, sul palazzo in fondo: c'è un'insegna «LEFÈVRE». Una parente di Madame?",
    author: "Agence Rol, Bibliothèque nationale de France", license: "Pubblico dominio", licenseUrl: null,
    url: "https://commons.wikimedia.org/wiki/File:March%C3%A9_rue_Lepic_-_btv1b532047212.jpg" }
};

/* Illustrazioni degli episodi: scene in stile manifesto da viaggio, disegnate in SVG. */
const ART = {
"1-1": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La Gare de Lyon al tramonto: la torre dell'orologio, un treno blu, Gigi con la valigia e il gatto Croissant con il monocolo che lo aspetta sul binario.">
<defs><linearGradient id="a1sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26386f"/><stop offset=".55" stop-color="#c8607a"/><stop offset="1" stop-color="#f4b860"/></linearGradient></defs>
<rect width="800" height="400" fill="url(#a1sky)"/>
<g fill="#fff" opacity=".85"><circle cx="70" cy="38" r="1.8"/><circle cx="160" cy="70" r="1.4"/><circle cx="300" cy="30" r="1.6"/><circle cx="420" cy="58" r="1.3"/><circle cx="720" cy="40" r="1.8"/><circle cx="760" cy="96" r="1.2"/></g>
<circle cx="220" cy="300" r="70" fill="#ffd27a" opacity=".55"/>
<path d="M30 232 L255 168 L490 232 Z" fill="#cdb38c"/>
<rect x="40" y="230" width="440" height="140" fill="#e8d6b8"/>
<g fill="#2c3d6e"><path d="M70 360 V292 a38 38 0 0 1 76 0 V360 Z"/><path d="M170 360 V292 a38 38 0 0 1 76 0 V360 Z"/><path d="M270 360 V292 a38 38 0 0 1 76 0 V360 Z"/><path d="M370 360 V292 a38 38 0 0 1 76 0 V360 Z"/></g>
<g fill="#f6c86b" opacity=".9"><path d="M80 360 V296 a28 28 0 0 1 56 0 V360 Z"/><path d="M180 360 V296 a28 28 0 0 1 56 0 V360 Z"/><path d="M280 360 V296 a28 28 0 0 1 56 0 V360 Z"/><path d="M380 360 V296 a28 28 0 0 1 56 0 V360 Z"/></g>
<rect x="540" y="110" width="110" height="260" fill="#e8d6b8"/>
<rect x="530" y="96" width="130" height="18" fill="#cdb38c"/>
<path d="M545 96 L595 28 L645 96 Z" fill="#4c5d80"/>
<rect x="593" y="10" width="4" height="22" fill="#4c5d80"/>
<circle cx="595" cy="165" r="38" fill="#fdf6e3" stroke="#2c3d6e" stroke-width="6"/>
<g fill="#2c3d6e"><circle cx="595" cy="134" r="3"/><circle cx="626" cy="165" r="3"/><circle cx="595" cy="196" r="3"/><circle cx="564" cy="165" r="3"/></g>
<path d="M595 165 V142 M595 165 L613 174" stroke="#1b2440" stroke-width="5" stroke-linecap="round"/>
<rect x="578" y="232" width="34" height="62" rx="17" fill="#2c3d6e"/>
<rect y="358" width="800" height="42" fill="#2a2d38"/>
<rect y="354" width="800" height="6" fill="#f0c53a"/>
<path d="M0 286 H330 Q372 286 372 328 V356 H0 Z" fill="#1d3f8f"/>
<g fill="#f6d28b"><rect x="18" y="302" width="44" height="24" rx="3"/><rect x="80" y="302" width="44" height="24" rx="3"/><rect x="142" y="302" width="44" height="24" rx="3"/><rect x="204" y="302" width="44" height="24" rx="3"/><rect x="266" y="302" width="44" height="24" rx="3"/></g>
<rect y="338" width="368" height="5" fill="#fff" opacity=".8"/>
<rect x="459" y="318" width="10" height="38" fill="#1b2440"/><rect x="475" y="318" width="10" height="38" fill="#1b2440"/>
<path d="M450 270 h44 l6 52 h-56 Z" fill="#8a2f2f"/>
<circle cx="472" cy="254" r="15" fill="#e7b48f"/>
<path d="M457 251 a15 15 0 0 1 30 0 Z" fill="#2b1d14"/>
<path d="M465 262 q7 5 14 0" stroke="#2b1d14" stroke-width="3" fill="none" stroke-linecap="round"/>
<rect x="500" y="316" width="36" height="40" rx="4" fill="#b5772a"/><path d="M510 316 v-8 h16 v8" stroke="#6b4416" stroke-width="3" fill="none"/>
<rect x="500" y="330" width="36" height="4" fill="#6b4416"/>
<path d="M496 290 L506 318" stroke="#8a2f2f" stroke-width="8" stroke-linecap="round"/>
<path d="M628 350 q26 -4 18 -32" stroke="#d9822b" stroke-width="6" fill="none" stroke-linecap="round"/>
<ellipse cx="612" cy="336" rx="18" ry="22" fill="#d9822b"/>
<circle cx="612" cy="308" r="13" fill="#d9822b"/>
<path d="M601 300 L603 286 L611 298 Z M623 300 L621 286 L613 298 Z" fill="#d9822b"/>
<circle cx="607" cy="307" r="2.2" fill="#1b2440"/><circle cx="617" cy="307" r="2.2" fill="#1b2440"/>
<circle cx="617" cy="307" r="5.5" fill="none" stroke="#f0c53a" stroke-width="1.6"/><path d="M622 309 q6 10 2 22" stroke="#f0c53a" stroke-width="1" fill="none"/>
<path d="M608 314 q4 3 8 0" stroke="#1b2440" stroke-width="1.5" fill="none"/>
<rect x="720" y="232" width="6" height="124" fill="#1b2440"/><circle cx="723" cy="226" r="11" fill="#ffe08a"/><circle cx="723" cy="226" r="22" fill="#ffe08a" opacity=".25"/>
</svg>`,

"1-2": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La facciata verde del caffè Le Petit Vésuve di mattina, con la tenda a righe, cornetti e un caffè fumante in vetrina e Madame Lefèvre che arriva con la baguette sotto il braccio.">
<defs><linearGradient id="a2sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe0f2"/><stop offset="1" stop-color="#fbeed8"/></linearGradient></defs>
<rect width="800" height="400" fill="url(#a2sky)"/>
<rect x="50" y="0" width="700" height="400" fill="#efe1c6"/>
<g><rect x="110" y="28" width="70" height="88" fill="#8fa9cf"/><rect x="94" y="28" width="16" height="88" fill="#2e5a8f"/><rect x="180" y="28" width="16" height="88" fill="#2e5a8f"/>
<rect x="290" y="28" width="70" height="88" fill="#8fa9cf"/><rect x="274" y="28" width="16" height="88" fill="#2e5a8f"/><rect x="360" y="28" width="16" height="88" fill="#2e5a8f"/>
<rect x="470" y="28" width="70" height="88" fill="#8fa9cf"/><rect x="454" y="28" width="16" height="88" fill="#2e5a8f"/><rect x="540" y="28" width="16" height="88" fill="#2e5a8f"/>
<rect x="640" y="28" width="70" height="88" fill="#8fa9cf"/><rect x="624" y="28" width="16" height="88" fill="#2e5a8f"/><rect x="710" y="28" width="16" height="88" fill="#2e5a8f"/></g>
<g fill="#1b2440"><rect x="90" y="116" width="110" height="5"/><rect x="270" y="116" width="110" height="5"/><rect x="450" y="116" width="110" height="5"/><rect x="620" y="116" width="110" height="5"/></g>
<g fill="#d9a7b0"><circle cx="110" cy="112" r="7"/><circle cx="130" cy="110" r="6"/><circle cx="460" cy="112" r="7"/><circle cx="480" cy="110" r="6"/></g>
<rect x="90" y="166" width="620" height="234" fill="#2e7051"/>
<rect x="90" y="166" width="620" height="46" fill="#1f4f39"/>
<text x="400" y="198" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="26" fill="#f0c53a" letter-spacing="3">LE PETIT VÉSUVE</text>
<g><rect x="90" y="212" width="62" height="34" fill="#c8413b"/><rect x="152" y="212" width="62" height="34" fill="#f7f3ea"/><rect x="214" y="212" width="62" height="34" fill="#c8413b"/><rect x="276" y="212" width="62" height="34" fill="#f7f3ea"/><rect x="338" y="212" width="62" height="34" fill="#c8413b"/><rect x="400" y="212" width="62" height="34" fill="#f7f3ea"/><rect x="462" y="212" width="62" height="34" fill="#c8413b"/><rect x="524" y="212" width="62" height="34" fill="#f7f3ea"/><rect x="586" y="212" width="62" height="34" fill="#c8413b"/><rect x="648" y="212" width="62" height="34" fill="#f7f3ea"/>
<path d="M90 246 a31 16 0 0 0 62 0 Z" fill="#c8413b"/><path d="M152 246 a31 16 0 0 0 62 0 Z" fill="#f7f3ea"/><path d="M214 246 a31 16 0 0 0 62 0 Z" fill="#c8413b"/><path d="M276 246 a31 16 0 0 0 62 0 Z" fill="#f7f3ea"/><path d="M338 246 a31 16 0 0 0 62 0 Z" fill="#c8413b"/><path d="M400 246 a31 16 0 0 0 62 0 Z" fill="#f7f3ea"/><path d="M462 246 a31 16 0 0 0 62 0 Z" fill="#c8413b"/><path d="M524 246 a31 16 0 0 0 62 0 Z" fill="#f7f3ea"/><path d="M586 246 a31 16 0 0 0 62 0 Z" fill="#c8413b"/><path d="M648 246 a31 16 0 0 0 62 0 Z" fill="#f7f3ea"/></g>
<path d="M690 260 q8 26 -4 40" stroke="#d9822b" stroke-width="7" fill="none" stroke-linecap="round"/>
<rect x="125" y="278" width="310" height="108" rx="4" fill="#f6c76b"/>
<rect x="140" y="360" width="150" height="8" rx="4" fill="#fff" opacity=".8"/>
<path d="M150 360 q28 -40 56 0 q-28 -16 -56 0 Z" fill="#c98a2b"/><path d="M200 360 q28 -40 56 0 q-28 -16 -56 0 Z" fill="#b97a22"/><path d="M176 346 q24 -34 48 0 q-24 -14 -48 0 Z" fill="#d89a3a"/>
<path d="M330 334 h44 v20 a22 15 0 0 1 -44 0 Z" fill="#fff"/><path d="M374 340 a9 9 0 0 1 0 16" stroke="#fff" stroke-width="4" fill="none"/><ellipse cx="352" cy="370" rx="32" ry="5" fill="#fff"/>
<path d="M345 326 q-7 -10 0 -20 q7 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".85"/><path d="M360 326 q-7 -10 0 -20 q7 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>
<rect x="465" y="270" width="84" height="130" fill="#1f4f39"/><rect x="477" y="282" width="60" height="62" fill="#f6c76b" opacity=".85"/><circle cx="537" cy="352" r="4" fill="#f0c53a"/>
<rect x="575" y="278" width="115" height="108" rx="4" fill="#f6c76b"/>
<rect x="50" y="392" width="700" height="8" fill="#9aa0ab"/>
<path d="M588 298 h40 l14 94 h-68 Z" fill="#3b3f6b"/>
<circle cx="608" cy="282" r="14" fill="#e9c2a0"/>
<path d="M594 280 a14 14 0 0 1 28 0 Z" fill="#b9b9c4"/><circle cx="608" cy="266" r="8" fill="#b9b9c4"/>
<path d="M602 290 h12" stroke="#7a4b3a" stroke-width="2"/>
<rect x="556" y="318" width="96" height="11" rx="5.5" fill="#d79a3c" transform="rotate(-22 604 323)"/>
</svg>`,

"1-3": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L'interno del caffè: dalla finestra si vede il Sacré-Cœur, Croissant dorme sul bancone vicino alla macchina dell'espresso, due tazzine sul tavolino e il cavalletto da pittrice di Léa.">
<defs><pattern id="a3chk" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#efe6d6"/><rect width="20" height="20" fill="#2b2f3a"/><rect x="20" y="20" width="20" height="20" fill="#2b2f3a"/></pattern>
<linearGradient id="a3sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fcdea"/><stop offset="1" stop-color="#e6f2f8"/></linearGradient></defs>
<rect width="800" height="400" fill="#f1e4cf"/>
<rect y="236" width="800" height="90" fill="#2e7051"/>
<rect y="320" width="800" height="80" fill="url(#a3chk)"/>
<rect x="300" y="36" width="220" height="172" fill="url(#a3sky)"/>
<path d="M300 208 Q410 150 520 208 Z" fill="#8fb88d"/>
<g fill="#fdfbf6"><rect x="380" y="150" width="66" height="32"/><path d="M394 152 a19 24 0 0 1 38 0 Z"/><rect x="411" y="112" width="4" height="16"/><circle cx="413" cy="128" r="4"/><path d="M368 164 a11 13 0 0 1 22 0 Z"/><path d="M436 164 a11 13 0 0 1 22 0 Z"/><rect x="458" y="124" width="12" height="44"/><path d="M458 124 a6 8 0 0 1 12 0 Z"/></g>
<rect x="300" y="36" width="220" height="172" fill="none" stroke="#7a5a3a" stroke-width="10"/>
<path d="M410 36 V208 M300 122 H520" stroke="#7a5a3a" stroke-width="6"/>
<rect x="560" y="46" width="130" height="78" rx="4" fill="#2b2f3a" stroke="#7a5a3a" stroke-width="6"/>
<text x="625" y="80" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="20" fill="#f7f3ea">PIZZA</text>
<text x="625" y="108" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="18" fill="#f0c53a">cinq euros</text>
<rect x="20" y="230" width="220" height="110" fill="#7a5a3a"/><rect x="12" y="222" width="236" height="12" fill="#5a3e26"/>
<rect x="36" y="168" width="84" height="54" rx="6" fill="#b8c0cc"/><path d="M48 168 a30 22 0 0 1 60 0 Z" fill="#9aa5b5"/><rect x="70" y="140" width="16" height="8" fill="#9aa5b5"/><circle cx="78" cy="136" r="6" fill="#c8413b"/>
<rect x="58" y="206" width="12" height="16" fill="#fff"/><rect x="88" y="206" width="12" height="16" fill="#fff"/>
<path d="M222 214 q22 -6 14 -22" stroke="#d9822b" stroke-width="7" fill="none" stroke-linecap="round"/>
<ellipse cx="192" cy="208" rx="34" ry="15" fill="#d9822b"/>
<circle cx="164" cy="204" r="12" fill="#d9822b"/>
<path d="M155 196 L156 184 L163 194 Z M171 195 L174 184 L177 197 Z" fill="#d9822b"/>
<path d="M158 204 q3 2 6 0 M167 204 q3 2 6 0" stroke="#1b2440" stroke-width="1.5" fill="none"/>
<text x="196" y="178" font-family="Georgia, serif" font-size="20" fill="#7a5a3a">z Z</text>
<ellipse cx="420" cy="296" rx="72" ry="14" fill="#c9d3df"/>
<rect x="415" y="298" width="10" height="72" fill="#2b2f3a"/><ellipse cx="420" cy="372" rx="30" ry="6" fill="#2b2f3a"/>
<path d="M392 278 h18 v10 a9 7 0 0 1 -18 0 Z" fill="#fff"/><path d="M432 278 h18 v10 a9 7 0 0 1 -18 0 Z" fill="#fff"/>
<path d="M398 270 q-4 -6 0 -12 M438 270 q-4 -6 0 -12" stroke="#7a5a3a" stroke-width="2" fill="none" opacity=".6"/>
<path d="M318 384 V300 q0 -32 30 -32 M318 330 h40 M358 330 V384" stroke="#2b2f3a" stroke-width="5" fill="none"/>
<path d="M522 384 V300 q0 -32 -30 -32 M522 330 h-40 M482 330 V384" stroke="#2b2f3a" stroke-width="5" fill="none"/>
<path d="M600 392 L640 150 L680 392 M640 150 V392" stroke="#7a5a3a" stroke-width="6" fill="none"/>
<rect x="588" y="168" width="104" height="122" fill="#fff" stroke="#5a3e26" stroke-width="4"/>
<circle cx="666" cy="194" r="12" fill="#f0c53a"/>
<path d="M600 270 q22 -60 46 -20 t34 -36" stroke="#c8413b" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M602 282 q30 -18 78 -6" stroke="#2b55b8" stroke-width="7" fill="none" stroke-linecap="round"/>
<ellipse cx="736" cy="388" rx="26" ry="6" fill="#5a3e26"/><path d="M720 388 l4 -40 h24 l4 40 Z" fill="#c8413b"/><path d="M736 348 v-20 M730 340 l-8 -14 M742 340 l8 -14" stroke="#3f8f3f" stroke-width="4" stroke-linecap="round"/>
</svg>`,

"1-4": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Il mercato di rue Lepic: un banco con la tenda a righe verdi, cassette di pomodori rossi a quattro euro, basilico a due euro, sei uova, il mercante con i baffi e la mano di Gigi che porge una banconota da venti euro.">
<defs><linearGradient id="a4sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe0f2"/><stop offset="1" stop-color="#eef5fb"/></linearGradient>
<pattern id="a4win" width="70" height="72" patternUnits="userSpaceOnUse"><rect x="20" y="12" width="30" height="44" fill="#6d86b0"/><rect x="14" y="54" width="42" height="5" fill="#1b2440"/></pattern>
<pattern id="a4str" width="80" height="10" patternUnits="userSpaceOnUse"><rect width="40" height="10" fill="#2e7051"/><rect x="40" width="40" height="10" fill="#f7f3ea"/></pattern></defs>
<rect width="800" height="400" fill="url(#a4sky)"/>
<rect x="0" y="36" width="410" height="300" fill="#e9dcc2"/><rect x="410" y="20" width="390" height="316" fill="#dccbab"/>
<rect x="0" y="50" width="410" height="230" fill="url(#a4win)"/><rect x="410" y="40" width="390" height="240" fill="url(#a4win)"/>
<path d="M0 36 H410 M410 20 H800" stroke="#4c5d80" stroke-width="10"/>
<rect y="336" width="800" height="64" fill="#a9aeb8"/>
<path d="M70 176 H730 L752 234 H48 Z" fill="url(#a4str)"/>
<rect x="70" y="170" width="660" height="8" fill="#1f4f39"/>
<rect x="88" y="234" width="9" height="160" fill="#5a3e26"/><rect x="703" y="234" width="9" height="160" fill="#5a3e26"/>
<rect x="356" y="262" width="88" height="70" rx="8" fill="#f7f3ea"/><path d="M362 296 h76 v36 h-76 Z" fill="#2e5a8f"/>
<circle cx="400" cy="250" r="20" fill="#e7b48f"/><path d="M380 246 a20 20 0 0 1 40 0 Z" fill="#2b2f3a"/><rect x="376" y="242" width="48" height="6" rx="3" fill="#2b2f3a"/>
<path d="M388 258 q12 8 24 0" stroke="#5a3e26" stroke-width="5" fill="none" stroke-linecap="round"/>
<rect x="100" y="306" width="600" height="18" fill="#7a5a3a"/>
<rect x="112" y="324" width="190" height="66" fill="#b98a55"/><rect x="314" y="324" width="180" height="66" fill="#b98a55"/><rect x="506" y="324" width="182" height="66" fill="#b98a55"/>
<g stroke="#8a6238" stroke-width="3"><path d="M112 346 h190 M314 346 h180 M506 346 h182"/></g>
<g fill="#d8402f"><circle cx="140" cy="292" r="16"/><circle cx="174" cy="292" r="16"/><circle cx="208" cy="292" r="16"/><circle cx="242" cy="292" r="16"/><circle cx="276" cy="292" r="16"/><circle cx="157" cy="266" r="16"/><circle cx="191" cy="266" r="16"/><circle cx="225" cy="266" r="16"/><circle cx="259" cy="266" r="16"/><circle cx="191" cy="241" r="16"/><circle cx="225" cy="241" r="16"/></g>
<g fill="#3f8f3f"><path d="M134 278 l6 -6 l6 6 Z"/><path d="M168 278 l6 -6 l6 6 Z"/><path d="M202 278 l6 -6 l6 6 Z"/><path d="M236 278 l6 -6 l6 6 Z"/><path d="M270 278 l6 -6 l6 6 Z"/><path d="M151 252 l6 -6 l6 6 Z"/><path d="M185 252 l6 -6 l6 6 Z"/><path d="M219 252 l6 -6 l6 6 Z"/><path d="M253 252 l6 -6 l6 6 Z"/><path d="M185 227 l6 -6 l6 6 Z"/><path d="M219 227 l6 -6 l6 6 Z"/></g>
<g fill="#3f8f3f"><circle cx="460" cy="292" r="14"/><circle cx="480" cy="282" r="12"/><circle cx="470" cy="270" r="11"/><circle cx="490" cy="296" r="12"/><circle cx="450" cy="276" r="10"/></g>
<g fill="#5aa85a"><circle cx="466" cy="286" r="6"/><circle cx="482" cy="272" r="5"/></g>
<rect x="540" y="284" width="130" height="24" rx="4" fill="#cfc3ae"/>
<g fill="#fdfbf6"><ellipse cx="556" cy="284" rx="10" ry="12"/><ellipse cx="578" cy="284" rx="10" ry="12"/><ellipse cx="600" cy="284" rx="10" ry="12"/><ellipse cx="622" cy="284" rx="10" ry="12"/><ellipse cx="644" cy="284" rx="10" ry="12"/><ellipse cx="666" cy="284" rx="10" ry="12" fill="#f3e2c8"/></g>
<g font-family="'Young Serif', Georgia, serif" text-anchor="middle">
<rect x="196" y="352" width="70" height="32" rx="3" fill="#2b2f3a"/><text x="231" y="375" font-size="18" fill="#f7f3ea">4 €</text>
<rect x="388" y="352" width="70" height="32" rx="3" fill="#2b2f3a"/><text x="423" y="375" font-size="18" fill="#f7f3ea">2 €</text>
<rect x="566" y="352" width="96" height="32" rx="3" fill="#2b2f3a"/><text x="614" y="375" font-size="16" fill="#f7f3ea">six œufs</text></g>
<path d="M800 250 L736 236" stroke="#8a2f2f" stroke-width="16" stroke-linecap="round"/>
<circle cx="732" cy="234" r="10" fill="#e7b48f"/>
<g transform="rotate(-10 700 226)"><rect x="660" y="206" width="78" height="40" rx="3" fill="#8fc0a9" stroke="#3d7a62" stroke-width="2"/><text x="699" y="233" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="18" fill="#1f4f39">20 €</text></g>
</svg>`,

"2-1": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Il giorno dell'apertura: la terrazza del Petit Vésuve con la lavagna OUVERT, un giornalista con taccuino e macchina fotografica, e Croissant che dorme sulla sedia migliore al sole.">
<defs><linearGradient id="b1sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe2a8"/><stop offset="1" stop-color="#fbeed8"/></linearGradient></defs>
<rect width="800" height="400" fill="url(#b1sky)"/>
<rect x="0" y="0" width="800" height="300" fill="#efe1c6"/>
<rect x="40" y="70" width="560" height="230" fill="#2e7051"/>
<rect x="40" y="70" width="560" height="44" fill="#1f4f39"/>
<text x="320" y="101" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="25" fill="#f0c53a" letter-spacing="3">LE PETIT VÉSUVE</text>
<rect x="70" y="140" width="250" height="140" rx="4" fill="#f6c76b"/>
<rect x="360" y="140" width="90" height="160" fill="#1f4f39"/><rect x="372" y="152" width="66" height="70" fill="#f6c76b" opacity=".85"/>
<rect x="378" y="176" width="54" height="22" rx="3" fill="#c8413b"/><text x="405" y="192" text-anchor="middle" font-family="'Barlow Condensed', Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">OUVERT</text>
<rect x="480" y="140" width="100" height="140" rx="4" fill="#f6c76b"/>
<g fill="#c8413b"><circle cx="110" cy="64" r="9"/><circle cx="200" cy="58" r="9"/><circle cx="290" cy="64" r="9"/><circle cx="380" cy="58" r="9"/><circle cx="470" cy="64" r="9"/><circle cx="560" cy="58" r="9"/></g>
<path d="M60 58 Q110 76 160 58 T260 58 T360 58 T460 58 T580 58" stroke="#1b2440" stroke-width="2" fill="none"/>
<rect y="300" width="800" height="100" fill="#b9bdc6"/>
<path d="M600 0 L800 0 L800 400 L470 400 Z" fill="#fff2b8" opacity=".45"/>
<path d="M120 400 L150 300 L190 300 L220 400 M135 352 H205" stroke="#2b2f3a" stroke-width="6" fill="none"/>
<rect x="138" y="296" width="64" height="58" rx="3" fill="#2b2f3a"/>
<text x="170" y="320" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="13" fill="#f7f3ea">OUVERT</text>
<text x="170" y="340" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="11" fill="#f0c53a">pizza du jour</text>
<rect x="296" y="316" width="10" height="70" fill="#1b2440"/><rect x="314" y="316" width="10" height="70" fill="#1b2440"/>
<path d="M286 228 h48 l6 92 h-60 Z" fill="#7a6a58"/>
<circle cx="310" cy="208" r="17" fill="#e7b48f"/>
<path d="M290 204 h40 v-6 a20 12 0 0 0 -40 0 Z" fill="#3b3f6b"/><rect x="284" y="202" width="52" height="5" rx="2" fill="#3b3f6b"/>
<path d="M300 240 L326 300" stroke="#1b2440" stroke-width="3"/>
<rect x="318" y="290" width="22" height="16" rx="3" fill="#1b2440"/><circle cx="329" cy="298" r="5" fill="#9aa5b5"/>
<path d="M330 246 L356 262" stroke="#7a6a58" stroke-width="9" stroke-linecap="round"/>
<rect x="350" y="250" width="26" height="32" rx="2" fill="#fdfbf6" transform="rotate(12 363 266)"/>
<path d="M356 258 h14 M356 265 h14 M356 272 h10" stroke="#8a9ab5" stroke-width="2" transform="rotate(12 363 266)"/>
<ellipse cx="540" cy="318" rx="62" ry="12" fill="#c9d3df"/><rect x="535" y="318" width="10" height="66" fill="#2b2f3a"/><ellipse cx="540" cy="386" rx="26" ry="5" fill="#2b2f3a"/>
<path d="M528 304 h18 v10 a9 7 0 0 1 -18 0 Z" fill="#fff"/>
<path d="M640 392 V300 q0 -34 32 -34 M640 330 h48 M688 330 V392" stroke="#2b2f3a" stroke-width="6" fill="none"/>
<path d="M690 322 q22 4 20 -20" stroke="#d9822b" stroke-width="7" fill="none" stroke-linecap="round"/>
<ellipse cx="664" cy="318" rx="32" ry="14" fill="#d9822b"/>
<circle cx="638" cy="312" r="12" fill="#d9822b"/>
<path d="M629 304 L630 292 L637 302 Z M645 303 L648 292 L651 305 Z" fill="#d9822b"/>
<path d="M632 312 q3 2 6 0 M641 312 q3 2 6 0" stroke="#1b2440" stroke-width="1.5" fill="none"/>
<circle cx="760" cy="40" r="26" fill="#ffd27a"/>
</svg>`,

"2-2": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La cantina del caffè: archi di mattoni, una lampadina accesa, bottiglie impolverate, una valigia rossa sotto le scale con sopra una chiave antica legata a un nastro blu, e gli occhi gialli di Croissant che brillano nel buio.">
<defs><pattern id="b2brick" width="60" height="30" patternUnits="userSpaceOnUse"><rect width="60" height="30" fill="#4a332c"/><rect x="1" y="1" width="58" height="13" fill="#5b3f35"/><rect x="-29" y="16" width="58" height="13" fill="#5b3f35"/><rect x="31" y="16" width="58" height="13" fill="#5b3f35"/></pattern>
<radialGradient id="b2glow" cx=".5" cy=".3" r=".6"><stop offset="0" stop-color="#ffd27a" stop-opacity=".55"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs>
<rect width="800" height="400" fill="url(#b2brick)"/>
<path d="M200 400 V170 a200 150 0 0 1 400 0 V400 Z" fill="#2a1f1c"/>
<rect width="800" height="400" fill="url(#b2glow)"/>
<path d="M420 0 V70" stroke="#1b1b1b" stroke-width="3"/><circle cx="420" cy="82" r="13" fill="#ffe08a"/><circle cx="420" cy="82" r="30" fill="#ffe08a" opacity=".25"/>
<g fill="#6b4a33"><rect x="0" y="380" width="230" height="20"/><rect x="0" y="340" width="190" height="20"/><rect x="0" y="300" width="150" height="20"/><rect x="0" y="260" width="110" height="20"/><rect x="0" y="220" width="70" height="20"/></g>
<g fill="#ffd34d"><circle cx="40" cy="206" r="4"/><circle cx="56" cy="206" r="4"/></g>
<rect x="610" y="150" width="170" height="230" fill="#5a3e26"/>
<g stroke="#3d2a1a" stroke-width="4"><path d="M610 207 H780 M610 264 H780 M610 321 H780"/></g>
<g fill="#2f5236"><ellipse cx="635" cy="190" rx="10" ry="14"/><ellipse cx="665" cy="190" rx="10" ry="14"/><ellipse cx="695" cy="190" rx="10" ry="14"/><ellipse cx="725" cy="190" rx="10" ry="14"/><ellipse cx="755" cy="190" rx="10" ry="14"/><ellipse cx="635" cy="247" rx="10" ry="14"/><ellipse cx="665" cy="247" rx="10" ry="14"/><ellipse cx="725" cy="247" rx="10" ry="14"/><ellipse cx="755" cy="247" rx="10" ry="14"/><ellipse cx="650" cy="304" rx="10" ry="14"/><ellipse cx="710" cy="304" rx="10" ry="14"/><ellipse cx="740" cy="304" rx="10" ry="14"/></g>
<rect y="380" width="800" height="20" fill="#2a1f1c"/>
<path d="M250 380 l14 -60 h40 l-6 60 Z" fill="#6b5a4a"/><path d="M520 380 v-40 h46 v40 M520 352 h46" stroke="#6b5a4a" stroke-width="5" fill="none"/>
<rect x="320" y="290" width="180" height="96" rx="10" fill="#b8322b"/>
<rect x="320" y="290" width="180" height="96" rx="10" fill="none" stroke="#7a1e19" stroke-width="5"/>
<path d="M386 290 v-16 a10 10 0 0 1 10 -10 h28 a10 10 0 0 1 10 10 v16" stroke="#3d2a1a" stroke-width="7" fill="none"/>
<rect x="335" y="318" width="10" height="68" fill="#7a1e19"/><rect x="475" y="318" width="10" height="68" fill="#7a1e19"/>
<rect x="362" y="334" width="78" height="34" rx="3" fill="#f3e2c8" transform="rotate(-4 401 351)"/>
<text x="401" y="357" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="16" fill="#3d2a1a" transform="rotate(-4 401 351)">Zizì</text>
<circle cx="452" cy="282" r="11" fill="none" stroke="#e0b44a" stroke-width="5"/>
<path d="M463 282 h40 M490 282 v10 M500 282 v8" stroke="#e0b44a" stroke-width="5" stroke-linecap="round"/>
<path d="M444 276 q-20 -18 -6 -26 q10 10 6 26 q-24 2 -30 -10" stroke="#2b55b8" stroke-width="5" fill="none" stroke-linecap="round"/>
<g fill="#fff" opacity=".35"><circle cx="300" cy="140" r="2"/><circle cx="340" cy="190" r="1.5"/><circle cx="470" cy="160" r="2"/><circle cx="520" cy="210" r="1.5"/><circle cx="390" cy="230" r="1.6"/></g>
</svg>`,

"2-3": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Il Petit Vésuve pieno di turisti: una ghirlanda di bandiere di Giappone, Spagna, Stati Uniti, Germania, Italia e Francia, tavolini con pizze e clienti da tutto il mondo, e Croissant con un passaporto.">
<defs><pattern id="b3chk" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#efe6d6"/><rect width="20" height="20" fill="#2b2f3a"/><rect x="20" y="20" width="20" height="20" fill="#2b2f3a"/></pattern></defs>
<rect width="800" height="400" fill="#f1e4cf"/>
<rect y="210" width="800" height="110" fill="#2e7051"/>
<rect y="320" width="800" height="80" fill="url(#b3chk)"/>
<path d="M20 30 Q400 110 780 30" stroke="#1b2440" stroke-width="2" fill="none"/>
<g><rect x="70" y="44" width="70" height="46" fill="#fff" stroke="#c9c2b4"/><circle cx="105" cy="67" r="13" fill="#c8102e"/></g>
<g><rect x="180" y="60" width="70" height="46" fill="#c60b1e"/><rect x="180" y="72" width="70" height="22" fill="#ffc400"/></g>
<g><rect x="290" y="68" width="70" height="46" fill="#fff"/><g fill="#b22234"><rect x="290" y="68" width="70" height="5"/><rect x="290" y="78" width="70" height="5"/><rect x="290" y="88" width="70" height="5"/><rect x="290" y="98" width="70" height="5"/><rect x="290" y="108" width="70" height="5"/></g><rect x="290" y="68" width="30" height="25" fill="#3c3b6e"/></g>
<g><rect x="440" y="68" width="70" height="46" fill="#000"/><rect x="440" y="83" width="70" height="16" fill="#dd0000"/><rect x="440" y="99" width="70" height="15" fill="#ffce00"/></g>
<g><rect x="550" y="60" width="70" height="46" fill="#009246"/><rect x="573" y="60" width="24" height="46" fill="#fff"/><rect x="597" y="60" width="23" height="46" fill="#ce2b37"/></g>
<g><rect x="660" y="44" width="70" height="46" fill="#002395"/><rect x="683" y="44" width="24" height="46" fill="#fff"/><rect x="707" y="44" width="23" height="46" fill="#ed2939"/></g>
<g><ellipse cx="200" cy="290" rx="80" ry="15" fill="#c9d3df"/><rect x="195" y="292" width="10" height="80" fill="#2b2f3a"/>
<circle cx="200" cy="284" r="26" fill="#e9b36a"/><circle cx="200" cy="284" r="21" fill="#d8402f"/><g fill="#fdfbf6"><circle cx="192" cy="279" r="4"/><circle cx="207" cy="288" r="4"/><circle cx="205" cy="276" r="3"/></g>
<path d="M118 290 h34 l4 80 h-42 Z" fill="#8a3fa0"/><circle cx="135" cy="248" r="16" fill="#f0cfa6"/><path d="M119 246 a16 16 0 0 1 32 0 v8 h-32 Z" fill="#1b1b1b"/><path d="M128 266 h14 l10 26 h-34 Z" fill="#8a3fa0"/>
<path d="M248 290 h36 l4 80 h-44 Z" fill="#2b55b8"/><circle cx="266" cy="246" r="16" fill="#e7b48f"/><path d="M250 240 h32 v-6 a16 10 0 0 0 -32 0 Z" fill="#c8413b"/><path d="M256 264 h20 l10 28 h-40 Z" fill="#2b55b8"/></g>
<g><ellipse cx="560" cy="290" rx="80" ry="15" fill="#c9d3df"/><rect x="555" y="292" width="10" height="80" fill="#2b2f3a"/>
<circle cx="560" cy="284" r="26" fill="#e9b36a"/><circle cx="560" cy="284" r="21" fill="#d8402f"/><g fill="#3f8f3f"><circle cx="552" cy="279" r="4"/><circle cx="567" cy="288" r="4"/></g>
<path d="M478 290 h36 l4 80 h-44 Z" fill="#c8413b"/><circle cx="496" cy="246" r="16" fill="#d9a07a"/><path d="M478 240 q18 -26 36 0 q4 20 -2 34 h-32 q-6 -14 -2 -34 Z" fill="#3d2a1a"/><circle cx="496" cy="248" r="13" fill="#d9a07a"/><path d="M486 264 h20 l10 28 h-40 Z" fill="#c8413b"/></g>
<path d="M660 392 V306 q0 -32 30 -32 M660 334 h46 M706 334 V392" stroke="#2b2f3a" stroke-width="6" fill="none"/>
<ellipse cx="684" cy="320" rx="24" ry="16" fill="#d9822b"/>
<circle cx="684" cy="296" r="13" fill="#d9822b"/><path d="M673 288 L675 274 L683 286 Z M695 288 L693 274 L685 286 Z" fill="#d9822b"/>
<circle cx="679" cy="295" r="2.2" fill="#1b2440"/><circle cx="689" cy="295" r="2.2" fill="#1b2440"/>
<rect x="694" y="306" width="26" height="34" rx="3" fill="#1d3f8f" transform="rotate(-14 707 323)"/>
<text x="707" y="327" text-anchor="middle" font-family="'Barlow Condensed', Arial, sans-serif" font-size="8" font-weight="700" fill="#f0c53a" transform="rotate(-14 707 323)">PASSEPORT</text>
</svg>`,

"2-4": `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L'album di famiglia di Zizì aperto sul bancone con vecchie foto color seppia, la chiave col nastro blu accanto, Gigi a sinistra e Madame Lefèvre che finalmente sorride a destra.">
<rect width="800" height="400" fill="#f1e4cf"/>
<rect y="0" width="800" height="70" fill="#2e7051"/>
<g fill="#f6c76b" opacity=".8"><circle cx="160" cy="70" r="10"/><circle cx="400" cy="70" r="10"/><circle cx="640" cy="70" r="10"/></g>
<rect y="270" width="800" height="130" fill="#7a5a3a"/><rect y="262" width="800" height="14" fill="#5a3e26"/>
<path d="M60 400 V250 q0 -60 60 -60 h20 q60 0 60 60 V400 Z" fill="#8a2f2f"/>
<circle cx="130" cy="160" r="36" fill="#e7b48f"/>
<path d="M94 156 a36 36 0 0 1 72 0 Z" fill="#2b1d14"/>
<path d="M114 176 q16 10 32 0" stroke="#2b1d14" stroke-width="5" fill="none" stroke-linecap="round"/>
<circle cx="118" cy="158" r="3.5" fill="#1b2440"/><circle cx="142" cy="158" r="3.5" fill="#1b2440"/>
<path d="M600 400 V250 q0 -60 60 -60 h20 q60 0 60 60 V400 Z" fill="#3b3f6b"/>
<circle cx="670" cy="160" r="36" fill="#e9c2a0"/>
<path d="M634 158 a36 36 0 0 1 72 0 Z" fill="#b9b9c4"/><circle cx="670" cy="116" r="18" fill="#b9b9c4"/>
<circle cx="658" cy="162" r="3.5" fill="#1b2440"/><circle cx="682" cy="162" r="3.5" fill="#1b2440"/>
<path d="M654 178 q16 14 32 0" stroke="#7a4b3a" stroke-width="4" fill="none" stroke-linecap="round"/>
<g fill="#e88f8f" opacity=".6"><circle cx="648" cy="174" r="6"/><circle cx="692" cy="174" r="6"/></g>
<path d="M230 300 L400 286 L570 300 L560 372 L400 360 L240 372 Z" fill="#fdfbf6" stroke="#5a3e26" stroke-width="3"/>
<path d="M400 286 V360" stroke="#c9b89a" stroke-width="3"/>
<g fill="#b48a5c"><rect x="256" y="300" width="60" height="44" transform="rotate(-3 286 322)"/><rect x="326" y="298" width="60" height="44" transform="rotate(2 356 320)"/><rect x="414" y="298" width="60" height="44" transform="rotate(-2 444 320)"/><rect x="486" y="300" width="60" height="44" transform="rotate(3 516 322)"/></g>
<g fill="#6e4f30"><circle cx="276" cy="314" r="6"/><path d="M268 340 h16 v-14 a8 8 0 0 0 -16 0 Z"/><circle cx="298" cy="312" r="6"/><path d="M290 338 h16 v-14 a8 8 0 0 0 -16 0 Z"/>
<circle cx="356" cy="312" r="7"/><path d="M346 340 h20 v-16 a10 10 0 0 0 -20 0 Z"/>
<circle cx="434" cy="312" r="6"/><path d="M426 338 h16 v-14 a8 8 0 0 0 -16 0 Z"/><circle cx="456" cy="312" r="6"/><path d="M448 338 h16 v-14 a8 8 0 0 0 -16 0 Z"/>
<circle cx="516" cy="314" r="7"/><path d="M506 342 h20 v-16 a10 10 0 0 0 -20 0 Z"/></g>
<text x="286" y="356" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="10" fill="#5a3e26">1962</text>
<text x="444" y="354" text-anchor="middle" font-family="'Young Serif', Georgia, serif" font-size="10" fill="#5a3e26">Zizì</text>
<circle cx="560" cy="250" r="10" fill="none" stroke="#e0b44a" stroke-width="5"/>
<path d="M570 250 h34 M594 250 v9 M602 250 v7" stroke="#e0b44a" stroke-width="5" stroke-linecap="round"/>
<path d="M552 244 q-20 -16 -6 -24 q10 10 6 24 q-24 2 -28 -10" stroke="#2b55b8" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M190 250 h32 v18 a16 12 0 0 1 -32 0 Z" fill="#fff"/><path d="M222 254 a8 8 0 0 1 0 14" stroke="#fff" stroke-width="4" fill="none"/>
<path d="M378 214 a8 8 0 0 1 14 -6 a8 8 0 0 1 14 6 q0 12 -14 22 q-14 -10 -14 -22 Z" fill="#e85d6a"/>
</svg>`
};
