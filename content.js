/* ===== CONTENUTI DEL CORSO =====
   Ogni lezione: episode (storia), words (parole-gancio con frase d'esempio), tip (trucco di Croissant),
   lab (solo lezione 1: vocali), practice (esercizi liberi), test (12 domande, soglia 70%).
   Le frasi crescono di lezione in lezione: L1 ~5-6 parole, L2 ~6-8, L3 ~7-9 (con et/mais), L4 ~8-10.
   Tipi di domanda: mcq, listen, type, order, match. */
const COURSE = {
  modules: [
    {
      n: 1, arr: "1er", name: "Premiers pas", it: "Primi passi", level: "A1",
      lessons: [
        /* ---------------- LEZIONE 1 ---------------- */
        {
          id: "1-1", street: "Rue des Sons", title: "I suoni del francese",
          goal: "Leggere e pronunciare frasi semplici senza farti ingannare dalla scrittura.",
          episode: {
            title: "Arrivo alla Gare de Lyon",
            intro: "Gigi Esposito, pizzaiolo napoletano, ha appena ereditato dalla prozia Zizì un minuscolo caffè a Montmartre: Le Petit Vésuve. Problema: di francese sa dire solo «croissant», e pure male. Scende dal treno con una valigia e la lettera del notaio. Sul binario lo aspetta qualcuno di molto peloso.",
            lines: [
              { who: "Croissant", fr: "Bonjour. Tu es Gigi, le neveu de Zizì ?", it: "Buongiorno. Sei Gigi, il nipote di Zizì?" },
              { who: "Gigi", fr: "Oui, c'est moi ! Mais… un chat qui parle ?!", it: "Sì, sono io! Ma… un gatto che parla?!" },
              { who: "Croissant", fr: "Je suis Croissant, le chat de Zizì. Et je parle très bien.", it: "Sono Croissant, il gatto di Zizì. E parlo benissimo." },
              { who: "Gigi", fr: "Croissant ? Comme le croissant du petit déjeuner ?", it: "Croissant? Come il cornetto della colazione?" },
              { who: "Croissant", fr: "Oui. Et ici, c'est Paris. On ne prononce pas le S final !", it: "Sì. E qui è Parigi. La S finale non si pronuncia!" },
              { who: "Gigi", fr: "D'accord ! Alors, bonjour Paris, et bonjour le chat !", it: "D'accordo! Allora, buongiorno Parigi, e buongiorno gatto!" },
              { who: "Croissant", fr: "Viens. Le café de Zizì est dans la rue des Abbesses.", it: "Vieni. Il caffè di Zizì è in rue des Abbesses." }
            ],
            outro: "Croissant sospira: «Ti insegnerò io. Prima regola: in francese metà delle lettere sono lì solo per bellezza.»",
            you: "Poi Croissant si gira verso di te: «E tu, {nome}? Ripeti con me: bonjour, oui, croissant. E la T finale, mi raccomando, non si sente!»"
          },
          words: [
            { fr: "bonjour", it: "buongiorno", say: "bõ-jùr", hook: "BON + JOUR = «buon giorno», pezzo per pezzo. La j si dice come la g di «garage»: immagina di dare il buongiorno a un meccanico nel suo garage.",
              ex: { fr: "Bonjour madame, je suis Gigi !", it: "Buongiorno signora, sono Gigi!" } },
            { fr: "oui", it: "sì", say: "uì", hook: "Un topolino entusiasta che squittisce «uì!» a ogni proposta. In francese il sì è uno squittio.",
              ex: { fr: "Oui, je suis à Paris maintenant.", it: "Sì, adesso sono a Parigi." } },
            { fr: "non", it: "no", say: "nõ", hook: "È il nostro «no», detto col raffreddore: la N finale non si sente e la vocale esce dal naso.",
              ex: { fr: "Non, le chat ne parle pas !", it: "No, il gatto non parla!" } },
            { fr: "chat", it: "gatto", say: "scià", hook: "Croissant si crede lo Scià di Persia: è il gatto più snob di Parigi. CH = sc, la T finale è muta: chat = «scià».",
              ex: { fr: "Le chat de Zizì est très snob.", it: "Il gatto di Zizì è molto snob." } },
            { fr: "moi", it: "io, me", say: "muà", hook: "Muà! Un bacio mandato a se stessi. OI si legge sempre «uà», e moi è la parola dell'ego.",
              ex: { fr: "Moi, j'adore le pain de Paris.", it: "Io adoro il pane di Parigi." } },
            { fr: "eau", it: "acqua", say: "o", hook: "Tre lettere e un solo suono: «o!», il grido di chi si tuffa nell'acqua gelata della Senna.",
              ex: { fr: "Un verre d'eau, s'il vous plaît.", it: "Un bicchiere d'acqua, per favore." } },
            { fr: "pain", it: "pane", say: "pẽ", hook: "Il PANE ha perso la E finale ed è rimasto raffreddato: «pẽ», tutto nel naso.",
              ex: { fr: "Le pain français est très bon.", it: "Il pane francese è molto buono." } },
            { fr: "rue", it: "via, strada", say: "rü", hook: "Di' «ri» con le labbra a bacio: ottieni la U francese. Immagina Gigi che bacia il marciapiede della sua nuova rue.",
              ex: { fr: "Le café est dans cette rue.", it: "Il caffè è in questa via." } },
            { fr: "Paris", it: "Parigi", say: "parì", hook: "La S finale è in vacanza in Costa Azzurra e a Paris non torna mai. Parì!",
              ex: { fr: "Paris est une ville magnifique.", it: "Parigi è una città magnifica." } },
            { fr: "croissant", it: "cornetto", say: "kruassã", hook: "OI = uà, e la T finale tace come un gatto che dorme: krua-SSÃ. È anche il nome del gatto, che non ne è fiero.",
              ex: { fr: "Un croissant et un café, merci !", it: "Un cornetto e un caffè, grazie!" } }
          ],
          tip: {
            title: "Le 8 regole d'oro della pronuncia",
            body: "<p>Il francese si scrive in un modo e si legge in un altro, ma sempre con le stesse regole. Imparale una volta e le leggerai ovunque.</p><ol><li><b>Lettere in vacanza.</b> Le consonanti finali di solito non si pronunciano: Paris, chat, croissant. Si sentono quasi sempre solo C, R, F, L: pensa all'inglese <i>CaReFuL</i>.</li><li><b>OU = u italiana:</b> vous, bonjour.</li><li><b>U = «i» con le labbra a bacio:</b> rue, salut.</li><li><b>OI = «uà»</b>, come il pianto di un neonato: moi, toi, trois.</li><li><b>AU / EAU = «o»:</b> eau, gâteau.</li><li><b>CH = «sc»:</b> chat, chocolat.</li><li><b>AN, ON, IN = suono nasale.</b> Parla come se avessi il raffreddore: pain, bon, croissant.</li><li><b>R = un gargarismo leggero</b> in fondo alla gola.</li></ol><p>Nelle frasi d'esempio qui sotto, cerca le regole: ogni frase ne contiene almeno due.</p><p class='legend'>Nelle pronunce del corso: <b>j</b> = g di garage · <b>ü</b> = u francese · <b>ö</b> = «eu» francese · <b>ã õ ẽ</b> = vocali nasali · <b>sc</b> = sc di scena.</p>",
            examples: [
              { fr: "Le chocolat chaud est délicieux.", it: "La cioccolata calda è deliziosa." },
              { fr: "Ce gâteau est beau et bon.", it: "Questa torta è bella e buona." },
              { fr: "Vous êtes dans la bonne rue.", it: "Siete nella via giusta." },
              { fr: "Moi et toi, on boit de l'eau.", it: "Io e te beviamo acqua." },
              { fr: "Salut ! Tu as un croissant pour moi ?", it: "Ciao! Hai un cornetto per me?" }
            ]
          },
          lab: {
            intro: "Il francese ha più vocali dell'italiano: oltre alle nostre ci sono vocali arrotondate e nasali. Tocca ogni parola, ascoltala e ripetila ad alta voce guardandoti allo specchio: la posizione di lingua e labbra conta quanto il suono.",
            vowels: [
              { sym: "i", name: "i", how: "Come la i italiana, labbra tese in un sorriso.", ex: ["lit", "ami", "Paris"] },
              { sym: "é", name: "e chiusa", how: "Come la e di «perché». Si scrive é, -er, -ez.", ex: ["café", "parler", "nez"] },
              { sym: "è", name: "e aperta", how: "Come la e di «bello». Si scrive è, ê, ai.", ex: ["mère", "fête", "lait"] },
              { sym: "a", name: "a", how: "Come la a italiana.", ex: ["chat", "ami", "madame"] },
              { sym: "ò", name: "o aperta", how: "Come la o di «porta».", ex: ["porte", "bol", "homme"] },
              { sym: "ó", name: "o chiusa", how: "Come la o di «sole». Si scrive o, au, eau.", ex: ["eau", "beau", "rose"] },
              { sym: "ou", name: "ou", how: "La u italiana, con le labbra ben spinte in avanti.", ex: ["vous", "loup", "rouge"] },
              { sym: "u", name: "u francese", how: "Lingua ferma come per dire «i», labbra strette a bacio. Non è la nostra u.", ex: ["tu", "rue", "salut"] },
              { sym: "eu", name: "eu chiusa", how: "Lingua come per «é», labbra arrotondate (come la ö tedesca).", ex: ["deux", "peu", "bleu"] },
              { sym: "œu", name: "eu aperta", how: "Lingua come per «è», labbra arrotondate e più aperte.", ex: ["fleur", "sœur", "heure"] },
              { sym: "e", name: "e muta", how: "Breve e rilassata, labbra appena arrotondate. Spesso sparisce del tutto.", ex: ["le", "je", "petit"] },
              { sym: "an", name: "nasale an / en", how: "Una a scura con l'aria che esce anche dal naso. La n non si pronuncia.", ex: ["dans", "enfant", "temps"] },
              { sym: "on", name: "nasale on", how: "Una o chiusa nasale, labbra arrotondate. Niente n.", ex: ["bon", "nom", "pont"] },
              { sym: "in", name: "nasale in / ain / un", how: "Una e aperta nasale, labbra distese. Niente n.", ex: ["vin", "pain", "un"] }
            ],
            pairs: [
              { w: ["tu", "tout"], note: "U francese contro OU: «tu» e «tutto»." },
              { w: ["rue", "roue"], note: "La strada e la ruota: cambia solo la vocale." },
              { w: ["deux", "des"], note: "EU chiusa (labbra tonde) contro É (labbra distese)." },
              { w: ["le", "les"], note: "E muta (il) contro É (i): singolare e plurale." },
              { w: ["peur", "père"], note: "EU aperta contro È: la paura e il padre." },
              { w: ["beau", "bon"], note: "O orale contro O nasale: bello e buono." },
              { w: ["vin", "vent", "vont"], note: "Le tre nasali: vino, vento, (loro) vanno." }
            ]
          },
          practice: [
            { t: "listen", say: "roue", q: "Cosa hai sentito? Ascolta bene la vocale", opts: ["roue (ruota)", "rue (strada)"], a: 0, why: "Roue ha OU, la u italiana. Rue ha la U francese, con le labbra a bacio e la lingua come per la «i»." },
            { t: "listen", say: "vent", q: "Quale nasale hai sentito?", opts: ["vent (vento)", "vin (vino)", "vont (vanno)"], a: 0, why: "Vent ha la nasale AN/EN: una a scura che esce dal naso." },
            { t: "listen", say: "Le chat de Zizì est très snob.", q: "Cosa hai sentito?", opts: ["Il gatto di Zizì è molto snob.", "Il cane di Zizì è molto snob.", "Il gatto di Zizì è molto stanco.", "La casa di Zizì è molto bella."], a: 0, why: "Chat = «scià», lo Scià dei gatti." },
            { t: "mcq", q: "In «Un verre d'eau, s'il vous plaît», come si pronuncia «eau»?", opts: ["o", "e-a-u", "eu", "ao"], a: 0, why: "AU ed EAU si leggono sempre «o»." },
            { t: "order", q: "Riordina: «Il pane francese è molto buono.»", words: ["Le", "pain", "français", "est", "très", "bon."], why: "Pain, français e bon hanno tutti un suono nasale." },
            { t: "type", q: "Completa: «Le ___ de Zizì est très snob.» (gatto)", a: ["chat"], why: "CH + A + T muta: chat." }
          ],
          test: [
            { t: "listen", say: "Oui, je suis à Paris maintenant.", q: "Cosa hai sentito?", opts: ["Sì, adesso sono a Parigi.", "No, non sono a Parigi.", "Sì, domani vado a Parigi.", "Sì, abito a Parigi da anni."], a: 0, why: "Oui = «uì», lo squittio del sì. Maintenant = adesso." },
            { t: "listen", say: "Moi, j'adore le pain de Paris.", q: "Cosa hai sentito?", opts: ["Io adoro il pane di Parigi.", "Io adoro il vino di Parigi.", "Tu adori il pane di Parigi.", "Io odio il pane di Parigi."], a: 0, why: "Moi = «muà», il bacio a se stessi. Pain = il pane raffreddato." },
            { t: "mcq", q: "Come si legge «oi» in «Moi et toi, on boit de l'eau»?", opts: ["uà", "oi", "o", "ü"], a: 0, why: "OI = uà, come il pianto del neonato: muà, tuà, buà." },
            { t: "mcq", q: "In «Le pain français est très bon», quali parole hanno un suono nasale?", opts: ["pain, français e bon", "solo très", "le ed est", "nessuna"], a: 0, why: "AIN, AN, ON si dicono col naso: pẽ, fransè, bõ." },
            { t: "mcq", q: "In «Le chat est très snob», «ch» si pronuncia come…", opts: ["sc di scena", "c di casa", "ch di chiave", "k"], a: 0, why: "CH = sc: chat = «scià»." },
            { t: "type", q: "Completa: «Un verre d'___, s'il vous plaît.» (acqua)", a: ["eau"], why: "Tre lettere, un suono: eau = «o»." },
            { t: "type", q: "Completa: «___ madame, je suis Gigi !» (buongiorno)", a: ["bonjour"], why: "Bon + jour, tutto attaccato." },
            { t: "listen", say: "Un croissant et un café, merci !", q: "Cosa hai sentito?", opts: ["Un cornetto e un caffè, grazie!", "Due cornetti e un caffè, grazie!", "Un cornetto senza caffè, grazie!", "Un panino e un caffè, grazie!"], a: 0, why: "Krua-ssã: OI = uà e T muta." },
            { t: "order", q: "Riordina: «Il gatto di Zizì è molto snob.»", words: ["Le", "chat", "de", "Zizì", "est", "très", "snob."], why: "Stesso ordine dell'italiano: soggetto, verbo, aggettivo." },
            { t: "mcq", q: "Come si pronuncia «rue» in «Le café est dans cette rue»?", opts: ["ri con le labbra a bacio", "ru come in «rumore»", "ru-e, con la e finale"], a: 0, why: "U francese = «i» detta con le labbra a bacio." },
            { t: "mcq", q: "In «Le chef est avec le chat», quale consonante finale SI pronuncia?", opts: ["la C di «avec»", "la T di «chat»", "la T di «est»"], a: 0, why: "C, R, F, L (CaReFuL) di solito si sentono: avec = «avèk», chef = «scèf»." },
            { t: "type", say: "Le pain français est très bon.", q: "Ascolta e completa: «Le ___ français est très bon.»", a: ["pain"], why: "Pain = pane, il pane raffreddato." }
          ]
        },
        /* ---------------- LEZIONE 2 ---------------- */
        {
          id: "1-2", street: "Rue des Saluts", title: "Saluti e cortesia",
          goal: "Salutare, ringraziare e chiedere come va con frasi complete, scegliendo tra «tu» e «vous».",
          episode: {
            title: "La prima cliente",
            intro: "Prima mattina al Petit Vésuve. Gigi ha appena acceso la macchina del caffè quando la porta si apre: è Madame Lefèvre, la boulangère di fronte, famosa per non sorridere dal 1987.",
            lines: [
              { who: "Mme Lefèvre", fr: "Bonjour, monsieur. Vous êtes le nouveau patron du café ?", it: "Buongiorno, signore. Lei è il nuovo proprietario del caffè?" },
              { who: "Gigi", fr: "Bonjour, madame ! Oui, je suis le neveu de Zizì. Ça va ?", it: "Buongiorno, signora! Sì, sono il nipote di Zizì. Come va?" },
              { who: "Croissant", fr: "Psst… Avec madame, on ne dit pas « ça va ». On dit : comment allez-vous ?", it: "Psst… Con la signora non si dice «come va». Si dice: come sta?" },
              { who: "Gigi", fr: "Pardon, madame ! Comment allez-vous ce matin ?", it: "Mi scusi, signora! Come sta stamattina?" },
              { who: "Mme Lefèvre", fr: "Très bien, merci. Et vous ? Je voudrais un café, s'il vous plaît.", it: "Molto bene, grazie. E lei? Vorrei un caffè, per favore." },
              { who: "Gigi", fr: "Bien sûr ! Voilà votre café, madame. Il est très chaud.", it: "Certo! Ecco il suo caffè, signora. È molto caldo." },
              { who: "Léa", fr: "Salut ! Ça va ? C'est toi, le nouveau du café ?", it: "Ciao! Come va? Sei tu il nuovo del caffè?" },
              { who: "Gigi", fr: "Oui, c'est moi ! Ça va très bien, merci, et toi ?", it: "Sì, sono io! Va molto bene, grazie, e tu?" },
              { who: "Mme Lefèvre", fr: "Merci pour le café. Au revoir, monsieur, et à bientôt !", it: "Grazie per il caffè. Arrivederci, signore, e a presto!" }
            ],
            outro: "Madame Lefèvre esce. Croissant giura di averla vista quasi sorridere. Quasi.",
            you: "Croissant ti fissa: «{nome}, quando entri in un negozio in Francia, cosa dici per prima cosa? Esatto: Bonjour madame. Dimenticarlo è un crimine.»"
          },
          words: [
            { fr: "salut", it: "ciao (tra amici)", say: "salü", hook: "Come il brindisi «Salute!»: con gli amici si brinda, e con gli amici si dice salut. Vale sia quando arrivi sia quando te ne vai.",
              ex: { fr: "Salut Léa ! Tu vas au café ce matin ?", it: "Ciao Léa! Vai al caffè stamattina?" } },
            { fr: "bonsoir", it: "buonasera", say: "bõ-suàr", hook: "SOIR = sera, la stessa radice di «soirée». Bon-soir = buona-sera, pezzo per pezzo. OI = uà, come sempre.",
              ex: { fr: "Bonsoir madame, vous avez une table libre ?", it: "Buonasera signora, ha un tavolo libero?" } },
            { fr: "merci", it: "grazie", say: "mersì", hook: "Pensa alla MERCE: ogni volta che il fornaio ti consegna la merce, tu dici «merci».",
              ex: { fr: "Merci beaucoup pour le café, monsieur !", it: "Grazie mille per il caffè, signore!" } },
            { fr: "s'il vous plaît", it: "per favore (formale)", say: "sil-vu-plè", hook: "Alla lettera «se vi piace». Immagina Gigi che porge una pizza fumante con un inchino: «se vi piace…».",
              ex: { fr: "Deux croissants et un café, s'il vous plaît.", it: "Due cornetti e un caffè, per favore." } },
            { fr: "ça va ?", it: "come va?", say: "sa va", hook: "Un pappagallo che ripete «Sa va? Sa va?» a chiunque passi. Risposta: «Ça va!». Stessa frase: cambia solo il tono.",
              ex: { fr: "Salut Gigi, ça va bien ce matin ?", it: "Ciao Gigi, va tutto bene stamattina?" } },
            { fr: "très bien", it: "molto bene", say: "trè biẽ", hook: "TRÈS suona come TRE: bene per tre volte = molto bene!",
              ex: { fr: "Ça va très bien, merci, et toi ?", it: "Va molto bene, grazie, e tu?" } },
            { fr: "pardon", it: "scusa, scusi", say: "pardõ", hook: "Il nostro «perdono», accorciato e raffreddato: pardõ. Lo dici quando pesti un piede nel métro.",
              ex: { fr: "Pardon madame, où est la rue Lepic ?", it: "Mi scusi signora, dov'è rue Lepic?" } },
            { fr: "au revoir", it: "arrivederci", say: "o-rvuàr", hook: "REVOIR = rivedere: «au revoir» è «al rivedersi». Immagina un re (o' re!) che si allontana salutando dal balcone.",
              ex: { fr: "Au revoir madame, et bonne journée !", it: "Arrivederci signora, e buona giornata!" } },
            { fr: "à bientôt", it: "a presto", say: "a biẽ-tò", hook: "BIEN + TÔT = «bene presto». Il cappellino sulla ô segna una S sparita secoli fa.",
              ex: { fr: "Merci pour tout, et à bientôt au café !", it: "Grazie di tutto, e a presto al caffè!" } },
            { fr: "monsieur", it: "signore", say: "mösiö", hook: "Si scrive «mon-sieur» ma si dice «mösiö»: le lettere fanno sciopero proprio nella parola più educata.",
              ex: { fr: "Bonjour monsieur, un café pour vous aussi ?", it: "Buongiorno signore, un caffè anche per lei?" } },
            { fr: "madame", it: "signora", say: "madàm", hook: "Ma-dame: «mia dama». Gigi ci aggiunge sempre un inchino.",
              ex: { fr: "Madame Lefèvre est la boulangère du quartier.", it: "Madame Lefèvre è la panettiera del quartiere." } },
            { fr: "comment allez-vous ?", it: "come sta?", say: "komã-talè-vu", hook: "La T di comment si attacca ad allez: «komã-talè». È la liaison, un ponte tra due parole. Usala con chi daresti del Lei.",
              ex: { fr: "Bonjour madame, comment allez-vous aujourd'hui ?", it: "Buongiorno signora, come sta oggi?" } }
          ],
          tip: {
            title: "Tu o vous? Il termometro della cortesia",
            body: "<p><b>Vous</b> è il nostro «Lei» (ed è anche il «voi»). La regola di Croissant: <i>a chi stringeresti la mano, vous; a chi daresti una pacca sulla spalla, tu.</i></p><ul><li><b>Bonjour</b> va sempre bene, dal mattino fino a sera.</li><li><b>Bonsoir</b> si usa dopo le 18 circa.</li><li><b>Salut</b> = ciao, ma solo tra amici, sia quando arrivi sia quando te ne vai.</li><li><b>Ça va ? / Ça va !</b> sono la stessa frase usata come domanda e come risposta: cambia solo l'intonazione.</li><li>In Francia, entrando in un negozio, si saluta <b>sempre</b>: «Bonjour madame». Non farlo è considerato maleducato.</li></ul><p>Per allungare una frase di cortesia aggiungi chi (<i>madame, monsieur</i>), quando (<i>ce matin, aujourd'hui</i>) e un augurio (<i>bonne journée, à bientôt</i>).</p>",
            examples: [
              { fr: "Salut Léa, ça va bien aujourd'hui ?", it: "Ciao Léa, va tutto bene oggi?" },
              { fr: "Oui, ça va très bien, merci !", it: "Sì, va molto bene, grazie!" },
              { fr: "Bonjour madame, comment allez-vous ce matin ?", it: "Buongiorno signora, come sta stamattina?" },
              { fr: "Je vais bien, merci. Et toi ?", it: "Sto bene, grazie. E tu?" },
              { fr: "Très bien, merci beaucoup. Et vous, monsieur ?", it: "Molto bene, grazie mille. E lei, signore?" }
            ]
          },
          practice: [
            { t: "mcq", q: "Entri in una boulangerie alle 9 di mattina. Quale frase usi?", opts: ["Bonjour madame, deux croissants, s'il vous plaît.", "Salut ! Deux croissants, ça va ?", "Bonsoir madame, deux croissants.", "Au revoir madame, deux croissants."], a: 0, why: "Bonjour è sempre sicuro, e con una sconosciuta niente salut." },
            { t: "listen", say: "Merci beaucoup pour le café, monsieur !", q: "Cosa hai sentito?", opts: ["Grazie mille per il caffè, signore!", "Per favore, un caffè, signore!", "Grazie per il cornetto, signora!", "Arrivederci e grazie, signore!"], a: 0, why: "Merci beaucoup = grazie mille. Merci: la merce consegnata." },
            { t: "match", q: "Abbina le espressioni", pairs: [["à bientôt au café", "a presto al caffè"], ["merci beaucoup", "grazie mille"], ["pardon madame", "mi scusi signora"], ["bonne journée", "buona giornata"]] },
            { t: "order", q: "Riordina: «Due cornetti e un caffè, per favore.»", words: ["Deux", "croissants", "et", "un", "café,", "s'il", "vous", "plaît."], why: "S'il vous plaît = «se vi piace», sempre alla fine." },
            { t: "type", q: "Completa: «___ madame, et bonne journée !» (arrivederci)", a: ["au revoir"], why: "Au revoir = al rivedersi." }
          ],
          test: [
            { t: "mcq", q: "Sono le 20:00 e arrivi al ristorante. Quale frase è giusta?", opts: ["Bonsoir madame, vous avez une table libre ?", "Bonjour madame, vous avez une table libre ?", "Salut madame, tu as une table libre ?", "À bientôt madame, une table libre ?"], a: 0, why: "Dopo le 18 si passa a bonsoir, e con una sconosciuta si usa vous." },
            { t: "mcq", q: "Quale frase useresti con la panettiera che non conosci?", opts: ["Bonjour madame, comment allez-vous ?", "Salut, ça va ?", "Salut madame, et toi ?"], a: 0, why: "Stretta di mano = vous; pacca sulla spalla = tu." },
            { t: "listen", say: "Deux croissants et un café, s'il vous plaît.", q: "Cosa hai sentito?", opts: ["Due cornetti e un caffè, per favore.", "Due caffè e un cornetto, per favore.", "Due cornetti e un tè, grazie.", "Un cornetto e due caffè, per favore."], a: 0, why: "Sil-vu-plè: «se vi piace», con l'inchino di Gigi." },
            { t: "listen", say: "Salut Gigi, ça va bien ce matin ?", q: "Cosa hai sentito?", opts: ["Ciao Gigi, va tutto bene stamattina?", "Ciao Gigi, dove vai stamattina?", "Buonasera Gigi, come va stasera?", "Ciao Gigi, sei libero stamattina?"], a: 0, why: "Il pappagallo che chiede «sa va?» a tutti. Ce matin = stamattina." },
            { t: "type", q: "Completa: «___ beaucoup pour le café, monsieur !» (grazie)", a: ["merci"], why: "Merci, come la merce." },
            { t: "type", q: "Completa: «___ Léa ! Tu vas au café ce matin ?» (ciao)", a: ["salut"], why: "Salut, come il brindisi." },
            { t: "mcq", q: "Cosa significa «Ça va très bien, merci, et toi ?»", opts: ["Va molto bene, grazie, e tu?", "Vado molto bene, grazie a te.", "Va bene così, grazie lo stesso.", "Molto bene, grazie, e lei?"], a: 0, why: "Très ≈ tre: tre volte bene. Et toi = e tu (informale)." },
            { t: "order", q: "Riordina: «Molto bene, grazie. E lei, signora?»", words: ["Très", "bien,", "merci.", "Et", "vous,", "madame ?"], why: "Et vous ? = e lei? (formale)." },
            { t: "match", q: "Abbina le espressioni", pairs: [["bonsoir madame", "buonasera signora"], ["au revoir monsieur", "arrivederci signore"], ["comment allez-vous ?", "come sta?"], ["à bientôt", "a presto"]] },
            { t: "mcq", q: "Un amico ti chiede «Salut, ça va ?». La risposta più naturale è:", opts: ["Ça va bien, merci, et toi ?", "Comment allez-vous, monsieur ?", "Bonsoir madame, à bientôt.", "S'il vous plaît, monsieur."], a: 0, why: "Stessa frase come risposta, poi «e tu?» con il tu." },
            { t: "type", say: "Pardon madame, où est la rue Lepic ?", q: "Ascolta e completa: «___ madame, où est la rue Lepic ?»", a: ["pardon"], why: "Pardon = scusi, il perdono raffreddato." },
            { t: "order", q: "Riordina: «Mi scusi signora, dov'è rue Lepic?»", words: ["Pardon", "madame,", "où", "est", "la", "rue", "Lepic ?"], why: "Où est… ? = dov'è…? Utilissimo in viaggio." }
          ]
        },
        /* ---------------- LEZIONE 3 ---------------- */
        {
          id: "1-3", street: "Rue de l'Identité", title: "Presentarsi",
          goal: "Presentarti con frasi lunghe e collegate: nome, origine, città, studio e gusti.",
          episode: {
            title: "Il colloquio al contrario",
            intro: "Gigi ha bisogno di una cameriera. Léa, studentessa di Belle Arti, si presenta per il posto. Solo che le domande le fa lei.",
            lines: [
              { who: "Léa", fr: "Bonjour ! Je viens pour le travail. Comment tu t'appelles ?", it: "Ciao! Vengo per il lavoro. Come ti chiami?" },
              { who: "Gigi", fr: "Je m'appelle Gigi, je suis italien et je suis pizzaiolo.", it: "Mi chiamo Gigi, sono italiano e faccio il pizzaiolo." },
              { who: "Léa", fr: "Pizzaiolo ? Génial ! Et tu viens d'où, exactement ?", it: "Pizzaiolo? Fantastico! E da dove vieni, esattamente?" },
              { who: "Gigi", fr: "Je viens de Naples, mais maintenant j'habite ici, à Montmartre.", it: "Vengo da Napoli, ma adesso abito qui, a Montmartre." },
              { who: "Léa", fr: "Enchantée ! Moi, je m'appelle Léa. Je suis française et je suis étudiante aux Beaux-Arts.", it: "Piacere! Io mi chiamo Léa. Sono francese e studio all'Accademia di Belle Arti." },
              { who: "Gigi", fr: "Enchanté, Léa ! Et tu aimes la pizza napolitaine ?", it: "Piacere, Léa! E ti piace la pizza napoletana?" },
              { who: "Léa", fr: "J'adore la pizza, et j'aime beaucoup les chats !", it: "Adoro la pizza, e mi piacciono molto i gatti!" },
              { who: "Croissant", fr: "Elle aime les chats ? Parfait. Elle est embauchée.", it: "Le piacciono i gatti? Perfetto. È assunta." }
            ],
            outro: "Léa comincia domani. Croissant invece comincia subito: a dormire sul bancone.",
            you: "Prima di addormentarsi, Croissant apre un occhio: «Ora presentati tu, {nome}. Nel mio trucco trovi la tua frase già pronta.»",
            mine: { fr: "Bonjour ! Je m'appelle {nome} et j'apprends le français avec Croissant.", it: "Ciao! Mi chiamo {nome} e imparo il francese con Croissant." }
          },
          words: [
            { fr: "je m'appelle", it: "mi chiamo", say: "je mapèl", hook: "«Je ma-PELLE»: immagina Gigi che si presenta tirandosi la pelle del braccio, dove ha il nome tatuato.",
              ex: { fr: "Bonjour, je m'appelle Gigi et je suis pizzaiolo.", it: "Ciao, mi chiamo Gigi e faccio il pizzaiolo." } },
            { fr: "comment tu t'appelles ?", it: "come ti chiami?", say: "komã tü tapèl", hook: "COMMENT = come (una lettera in più, una pronuncia in meno). Tu t'appelles = «tu ti chiami».",
              ex: { fr: "Salut ! Moi, c'est Léa. Et toi, comment tu t'appelles ?", it: "Ciao! Io sono Léa. E tu, come ti chiami?" } },
            { fr: "je suis", it: "io sono", say: "je süì", hook: "Gigi in piedi SUI tetti di Parigi che grida al mondo chi è: «Je suis Gigi!».",
              ex: { fr: "Je suis italien, mais j'habite en France maintenant.", it: "Sono italiano, ma adesso abito in Francia." } },
            { fr: "italien / italienne", it: "italiano / italiana", say: "italiẽ / italièn", hook: "La E finale è il rossetto delle parole: le rende femminili e fa risvegliare la consonante prima. Italien (nasale) → italienne (la N si sente).",
              ex: { fr: "Gigi est italien, et sa cousine Maria est italienne aussi.", it: "Gigi è italiano, e anche sua cugina Maria è italiana." } },
            { fr: "français / française", it: "francese (m / f)", say: "fransè / fransèz", hook: "Stesso rossetto: français ha la S muta, française la fa suonare come una Z.",
              ex: { fr: "Léa est française, mais son père est italien.", it: "Léa è francese, ma suo padre è italiano." } },
            { fr: "je viens de", it: "vengo da", say: "je viẽ de", hook: "VIENS ricorda «vieni». Ma «je viens» = io vengo: in francese il soggetto c'è sempre, anche quando è ovvio.",
              ex: { fr: "Je viens de Naples, une belle ville du sud de l'Italie.", it: "Vengo da Napoli, una bella città del sud Italia." } },
            { fr: "j'habite à", it: "abito a", say: "jabìt a", hook: "Quasi italiano: abito → j'habite. La H è un fantasma: c'è, ma non si sente.",
              ex: { fr: "J'habite à Paris, dans un petit appartement à Montmartre.", it: "Abito a Parigi, in un piccolo appartamento a Montmartre." } },
            { fr: "enchanté", it: "piacere (di conoscerti)", say: "ã-sciã-tè", hook: "Incantato! Quando conosci qualcuno ti dichiari «incantato». Teatrale, molto francese. Una donna scrive enchantée.",
              ex: { fr: "Enchanté, madame ! Je suis le nouveau voisin italien.", it: "Piacere, signora! Sono il nuovo vicino italiano." } },
            { fr: "étudiant / étudiante", it: "studente / studentessa", say: "etüdiã / etüdiãt", hook: "Lo studente col naso chiuso dopo una notte sui libri: é-tü-diã.",
              ex: { fr: "Léa est étudiante aux Beaux-Arts de Paris depuis un an.", it: "Léa studia all'Accademia di Belle Arti di Parigi da un anno." } },
            { fr: "j'aime", it: "mi piace, amo", say: "jèm", hook: "Suona come «gemma»: ciò che ami è una gemma. J'aime la pizza = la pizza è la mia gemma.",
              ex: { fr: "J'aime la pizza, le café et surtout les chats.", it: "Mi piacciono la pizza, il caffè e soprattutto i gatti." } },
            { fr: "et toi ?", it: "e tu?", say: "e tuà", hook: "OI = uà, come in moi. Moi e toi, «muà» e «tuà»: due baci, uno per me e uno per te.",
              ex: { fr: "Moi, j'habite à Montmartre. Et toi, tu habites où ?", it: "Io abito a Montmartre. E tu, dove abiti?" } }
          ],
          tip: {
            title: "Il francese non sta mai senza soggetto",
            body: "<p>In italiano diciamo «sono italiano». In francese il soggetto è obbligatorio: <b>je suis italien</b>. Senza <i>je</i> la frase zoppica.</p><ul><li><b>je</b> diventa <b>j'</b> davanti a vocale o H muta: j'habite, j'aime. Ma: je m'appelle, je suis.</li><li><b>Femminile = + e</b> (il rossetto): étudiant → étudiante, français → française, italien → italienne (qui la N raddoppia).</li><li>Per le città si usa <b>à</b> (j'habite à Rome); per l'origine <b>de</b> (je viens de Milan).</li><li><b>Allunga le frasi con et (e) e mais (ma):</b> «Je suis italien <b>et</b> je suis pizzaiolo», «Je viens de Naples, <b>mais</b> j'habite à Paris».</li><li>Attenzione: <b>et</b> (e) ed <b>est</b> (è) si pronunciano uguali, «é». Il contesto ti dice quale dei due è.</li></ul>",
            examples: [
              { fr: "Je m'appelle Sofia et je suis italienne.", it: "Mi chiamo Sofia e sono italiana." },
              { fr: "Je viens de Milan, mais j'habite à Lyon.", it: "Vengo da Milano, ma abito a Lione." },
              { fr: "Léa est française et elle est étudiante.", it: "Léa è francese ed è studentessa." },
              { fr: "J'aime le café et j'adore les croissants.", it: "Mi piace il caffè e adoro i cornetti." }
            ]
          },
          practice: [
            { t: "order", q: "Riordina: «Mi chiamo Gigi e sono italiano.»", words: ["Je", "m'appelle", "Gigi", "et", "je", "suis", "italien."], why: "Due frasi unite da et: il soggetto je si ripete." },
            { t: "mcq", q: "Léa parla di sé. Quale frase è corretta?", opts: ["Je suis française et je suis étudiante.", "Je suis français et je suis étudiant.", "Suis française et étudiante.", "Je française, je étudiante."], a: 0, why: "Femminile: il rossetto -e su entrambe le parole, e je sempre presente." },
            { t: "listen", say: "J'habite à Paris, dans un petit appartement.", q: "Cosa hai sentito?", opts: ["Abito a Parigi, in un piccolo appartamento.", "Vengo da Parigi, da un piccolo paese.", "Lavoro a Parigi, in un piccolo caffè.", "Abito a Parigi, in una grande casa."], a: 0, why: "J'habite = abito, con la H fantasma." },
            { t: "type", q: "Completa: «Moi, j'habite à Montmartre. Et ___, tu habites où ?» (tu)", a: ["toi"], why: "Et toi : «e tuà»." },
            { t: "match", q: "Abbina le frasi", pairs: [["je suis italien", "sono italiano"], ["j'aime les chats", "mi piacciono i gatti"], ["enchanté, madame", "piacere, signora"], ["je viens de Naples", "vengo da Napoli"]] }
          ],
          test: [
            { t: "listen", say: "Salut ! Moi, c'est Léa. Et toi, comment tu t'appelles ?", q: "Cosa hai sentito?", opts: ["Ciao! Io sono Léa. E tu, come ti chiami?", "Ciao! Io sono Léa. E tu, come stai?", "Ciao! Io sono Léa. E tu, da dove vieni?", "Ciao! Lei è Léa. E tu, dove abiti?"], a: 0, why: "Comment = come, tu t'appelles = ti chiami." },
            { t: "order", q: "Riordina: «Sono italiano, ma abito in Francia.»", words: ["Je", "suis", "italien,", "mais", "j'habite", "en", "France."], why: "Mais = ma. Per i paesi femminili si usa en: en France, en Italie." },
            { t: "order", q: "Riordina: «Abito a Parigi, in un piccolo appartamento.»", words: ["J'habite", "à", "Paris,", "dans", "un", "petit", "appartement."], why: "Città → à. Dans = dentro, in." },
            { t: "mcq", q: "Gigi parla di sé. Quale frase è corretta?", opts: ["Je suis italien et je viens de Naples.", "Suis italien et viens de Naples.", "Je suis italienne et je viens de Naples.", "Je italien, je Naples."], a: 0, why: "Serve je, e Gigi è un uomo: italien." },
            { t: "mcq", q: "Come dici «Léa è studentessa all'Accademia di Belle Arti»?", opts: ["Léa est étudiante aux Beaux-Arts.", "Léa est étudiant aux Beaux-Arts.", "Léa et étudiante aux Beaux-Arts.", "Léa suis étudiante aux Beaux-Arts."], a: 0, why: "Est = è (verbo), et = e. Si pronunciano uguali, ma si scrivono diversi." },
            { t: "type", q: "Completa: «J'___ la pizza, le café et surtout les chats.» (mi piace)", a: ["aime", "j'aime"], why: "J'aime, come «gemma»." },
            { t: "type", q: "Completa: «___, madame ! Je suis le nouveau voisin.» (piacere, detto da un uomo)", a: ["enchanté"], why: "Enchanté = incantato. Una donna scrive enchantée." },
            { t: "listen", say: "Je viens de Naples, une belle ville du sud de l'Italie.", q: "Cosa hai sentito?", opts: ["Vengo da Napoli, una bella città del sud Italia.", "Vado a Napoli, una bella città del sud Italia.", "Abito a Napoli, una bella città del nord Italia.", "Vengo da Napoli, una regione del sud Italia."], a: 0, why: "Je viens de = vengo da." },
            { t: "mcq", q: "Perché si scrive «j'habite» e non «je habite»?", opts: ["Perché habite comincia con H muta: je diventa j'", "È solo un errore comune", "Perché è femminile"], a: 0, why: "Davanti a vocale o H muta, je → j'." },
            { t: "match", q: "Abbina le frasi", pairs: [["elle est italienne", "lei è italiana"], ["il est français", "lui è francese"], ["et toi, tu habites où ?", "e tu, dove abiti?"], ["j'habite à Lyon", "abito a Lione"]] },
            { t: "mcq", q: "«Léa est française, mais son père est italien.» significa…", opts: ["Léa è francese, ma suo padre è italiano.", "Léa è francese, e sua madre è italiana.", "Léa è italiana, ma suo padre è francese.", "Léa e suo padre sono francesi."], a: 0, why: "Mais = ma; son père = suo padre." },
            { t: "type", say: "Je suis italien, mais j'habite en France.", q: "Ascolta e completa: «Je ___ italien, mais j'habite en France.»", a: ["suis"], why: "Je suis, Gigi sui tetti di Parigi." }
          ]
        },
        /* ---------------- LEZIONE 4 ---------------- */
        {
          id: "1-4", street: "Rue des Nombres", title: "I numeri da 0 a 20",
          goal: "Usare i numeri fino a 20 in frasi vere: prezzi, orari, quantità e domande al mercato.",
          episode: {
            title: "Pomodori al mercato",
            intro: "Il Petit Vésuve apre domani e Gigi deve fare la spesa al mercato di rue Lepic. Ha 20 euro in tasca e una missione: trovare pomodori degni di una margherita.",
            lines: [
              { who: "Gigi", fr: "Bonjour, monsieur ! Je voudrais des tomates pour mes pizzas, s'il vous plaît.", it: "Buongiorno! Vorrei dei pomodori per le mie pizze, per favore." },
              { who: "Marchand", fr: "Bien sûr ! Vous en voulez combien ?", it: "Certo! Quanti ne vuole?" },
              { who: "Gigi", fr: "Dix… Non, pardon, douze tomates bien rouges !", it: "Dieci… No, scusi, dodici pomodori belli rossi!" },
              { who: "Marchand", fr: "Douze tomates, ça fait quatre euros. Et avec ça ?", it: "Dodici pomodori, fanno quattro euro. E poi?" },
              { who: "Gigi", fr: "Et le basilic, il coûte combien ?", it: "E il basilico, quanto costa?" },
              { who: "Marchand", fr: "Deux euros le bouquet. Il est très frais, ce matin !", it: "Due euro il mazzetto. È freschissimo, stamattina!" },
              { who: "Gigi", fr: "Parfait. Voilà un billet de vingt euros.", it: "Perfetto. Ecco una banconota da venti euro." },
              { who: "Marchand", fr: "Merci ! Je vous rends quatorze euros. Bonne journée !", it: "Grazie! Le do quattordici euro di resto. Buona giornata!" }
            ],
            outro: "Croissant controlla il resto: 20 − 4 − 2 = 14. «Bravo. Con i numeri non sei un disastro totale. Solo parziale.»",
            you: "«E tu, {nome}, quanti anni hai? In francese l'età si dice con avoir: io ho… anni. Nel mio trucco c'è la tua frase.»",
            mine: { fr: "Je m'appelle {nome}, j'ai {eta} ans et j'adore Paris.", it: "Mi chiamo {nome}, ho {eta} anni e adoro Parigi." }
          },
          words: [
            { fr: "un", it: "uno", say: "ẽ", hook: "Uno col raffreddore: la N sparisce nel naso. Un café, un croissant.",
              ex: { fr: "Je voudrais un café et un croissant, s'il vous plaît.", it: "Vorrei un caffè e un cornetto, per favore." } },
            { fr: "deux", it: "due", say: "dö", hook: "«Due» detto con la bocca a O per lo stupore: dö! La X finale è muta.",
              ex: { fr: "Il y a deux chats sur le toit du café.", it: "Ci sono due gatti sul tetto del caffè." } },
            { fr: "trois", it: "tre", say: "truà", hook: "Uà! uà! Il neonato piange per i suoi tre dentini nuovi: trois.",
              ex: { fr: "Léa travaille au café trois jours par semaine.", it: "Léa lavora al caffè tre giorni a settimana." } },
            { fr: "quatre", it: "quattro", say: "katr", hook: "È quattro che ha perso la O finale per strada: katr.",
              ex: { fr: "Les quatre tables du café sont déjà occupées.", it: "I quattro tavoli del caffè sono già occupati." } },
            { fr: "cinq", it: "cinque", say: "sẽk", hook: "Cinque raffreddato: «sẽk». Qui la Q finale si sente.",
              ex: { fr: "Une pizza margherita coûte cinq euros chez Gigi.", it: "Una pizza margherita costa cinque euro da Gigi." } },
            { fr: "six", it: "sei", say: "sis", hook: "Un serpente che sibila sei volte: sis! Da sola, la X si legge S. Davanti a vocale diventa Z: six œufs = «si-zö».",
              ex: { fr: "J'achète six œufs pour faire un gâteau.", it: "Compro sei uova per fare una torta." } },
            { fr: "sept", it: "sette", say: "set", hook: "Un SET da sette piatti per il Petit Vésuve. La P dorme: set.",
              ex: { fr: "Le café de Gigi est ouvert sept jours sur sept.", it: "Il caffè di Gigi è aperto sette giorni su sette." } },
            { fr: "huit", it: "otto", say: "üit", hook: "Il fischio del vigile: «üit!». Otto fischi per otto auto in divieto di sosta.",
              ex: { fr: "Le marché de la rue Lepic ouvre à huit heures.", it: "Il mercato di rue Lepic apre alle otto." } },
            { fr: "neuf", it: "nove", say: "nöf", hook: "Neuf vuol dire anche «nuovo»: il nove è il numero nuovo di zecca.",
              ex: { fr: "Mon téléphone est tout neuf : il a neuf jours !", it: "Il mio telefono è nuovissimo: ha nove giorni!" } },
            { fr: "dix", it: "dieci", say: "dis", hook: "DIS come DITA: dix sono le tue dieci dita.",
              ex: { fr: "Gigi compte jusqu'à dix avant de répondre au chat.", it: "Gigi conta fino a dieci prima di rispondere al gatto." } },
            { fr: "douze", it: "dodici", say: "duz", hook: "Da 11 a 16 finiscono tutti in -ze, come i nostri -dici: onze, douze, treize, quatorze, quinze, seize.",
              ex: { fr: "Je voudrais douze tomates bien rouges pour mes pizzas.", it: "Vorrei dodici pomodori belli rossi per le mie pizze." } },
            { fr: "vingt", it: "venti", say: "vẽ", hook: "Dentro vingt c'è il VIN: un vino invecchiato vent'anni. G e T sono muti: si dice solo «vẽ».",
              ex: { fr: "Voilà un billet de vingt euros pour les tomates.", it: "Ecco una banconota da venti euro per i pomodori." } },
            { fr: "combien ?", it: "quanto?", say: "kõbiẽ", hook: "COM-BIEN: Gigi al mercato si gratta la testa, «com'è… bene, ma quanto costa?». Due nasali di fila.",
              ex: { fr: "Excusez-moi, monsieur, le basilic coûte combien, s'il vous plaît ?", it: "Mi scusi, signore, quanto costa il basilico, per favore?" } }
          ],
          tip: {
            title: "La mappa dei numeri di Croissant",
            body: "<ul><li><b>Da 0 a 10:</b> imparali con i ganci (le dieci dita di dix, il fischio di huit…).</li><li><b>Da 11 a 16 finiscono in -ze</b>, come i nostri -dici: onze, douze, treize, quatorze, quinze, seize.</li><li><b>Da 17 a 19 sono logici:</b> dix-sept (dieci-sette), dix-huit, dix-neuf.</li><li><b>Six, huit, dix:</b> da soli la consonante finale si sente. Davanti a una consonante tace (six tomates = «si tomat»), davanti a una vocale si lega con un suono Z (six œufs = «si-zö»).</li><li><b>Frasi utili con i numeri:</b> <i>il y a</i> (c'è, ci sono), <i>ça fait…</i> (fa…, costa in tutto…), <i>à … heures</i> (alle ore…), <i>… ans</i> (… anni).</li></ul><p class='legend'>Spoiler per il futuro: 80 si dice <i>quatre-vingts</i>, «quattro-venti». I francesi contano a ventine, come i Celti. Croissant sostiene che lo fanno per confondere i turisti.</p>",
            examples: [
              { fr: "J'ai onze euros dans mon porte-monnaie.", it: "Ho undici euro nel portamonete." },
              { fr: "Le café ouvre à sept heures et ferme à dix-neuf heures.", it: "Il caffè apre alle sette e chiude alle diciannove." },
              { fr: "Il y a treize tables et quinze chaises.", it: "Ci sono tredici tavoli e quindici sedie." },
              { fr: "Six œufs et dix tomates, s'il vous plaît.", it: "Sei uova e dieci pomodori, per favore." },
              { fr: "La petite sœur de Léa a dix-sept ans.", it: "La sorellina di Léa ha diciassette anni." },
              { fr: "Ça fait combien en tout, monsieur ?", it: "Quanto fa in tutto, signore?" }
            ]
          },
          practice: [
            { t: "listen", say: "Léa travaille au café trois jours par semaine.", q: "Quanti giorni a settimana lavora Léa?", opts: ["3", "4", "13", "30"], a: 0, why: "Trois = «truà», il neonato coi tre dentini." },
            { t: "mcq", q: "Come dici «La sorellina di Léa ha diciassette anni»?", opts: ["La petite sœur de Léa a dix-sept ans.", "La petite sœur de Léa a sept-dix ans.", "La petite sœur de Léa a seize ans.", "La petite sœur de Léa est dix-sept ans."], a: 0, why: "L'età si dice con avoir (a = ha), e 17 = dieci-sette: dix-sept." },
            { t: "match", q: "Abbina numeri e parole", pairs: [["deux chats", "2 gatti"], ["huit heures", "ore 8"], ["neuf jours", "9 giorni"], ["dix tomates", "10 pomodori"]] },
            { t: "type", q: "Completa: «Voilà un billet de ___ euros.» (20, in lettere)", a: ["vingt"], why: "Il vino di vent'anni: vingt." },
            { t: "listen", say: "Il y a quinze chaises dans le café.", q: "Quante sedie ci sono nel caffè?", opts: ["15", "5", "50", "14"], a: 0, why: "Quinze: famiglia -ze, come quindici." }
          ],
          test: [
            { t: "listen", say: "J'achète six œufs pour faire un gâteau.", q: "Quante uova compra?", opts: ["6", "7", "16", "10"], a: 0, why: "Six davanti a vocale si lega con una Z: «si-zö»." },
            { t: "listen", say: "Je voudrais douze tomates bien rouges, s'il vous plaît.", q: "Quanti pomodori vuole?", opts: ["12", "2", "20", "11"], a: 0, why: "Douze, come dodici." },
            { t: "listen", say: "Je vous rends quatorze euros. Bonne journée !", q: "Quanto resto riceve?", opts: ["14 €", "4 €", "40 €", "13 €"], a: 0, why: "Quatorze, come quattordici." },
            { t: "type", q: "Completa: «Une pizza margherita coûte ___ euros.» (5, in lettere)", a: ["cinq"], why: "Cinq, il cinque raffreddato." },
            { t: "type", q: "Completa: «Gigi compte jusqu'à ___ avant de répondre.» (10, in lettere)", a: ["dix"], why: "Dix come le dieci dita." },
            { t: "mcq", q: "Come dici «Il caffè chiude alle diciannove»?", opts: ["Le café ferme à dix-neuf heures.", "Le café ferme à neuf-dix heures.", "Le café ferme à dix-huit heures.", "Le café ouvre à dix-neuf heures."], a: 0, why: "Dieci-nove: dix-neuf. Ferme = chiude, ouvre = apre." },
            { t: "mcq", q: "Il mercante dice: «Douze tomates, ça fait quatre euros.» Quanto paghi?", opts: ["4 €", "14 €", "40 €", "12 €"], a: 0, why: "Quatre = quattro senza la O. Douze è il numero dei pomodori." },
            { t: "match", q: "Abbina le espressioni", pairs: [["un café", "1 caffè"], ["trois jours", "3 giorni"], ["sept jours sur sept", "tutti i giorni"], ["seize heures", "ore 16"]] },
            { t: "order", q: "Riordina: «Vorrei dodici pomodori per le mie pizze.»", words: ["Je", "voudrais", "douze", "tomates", "pour", "mes", "pizzas."], why: "Je voudrais = vorrei: la formula gentile per chiedere." },
            { t: "mcq", q: "Vuoi sapere il prezzo del basilico. Cosa chiedi?", opts: ["Le basilic coûte combien, s'il vous plaît ?", "Comment allez-vous, le basilic ?", "Le basilic, ça va ?", "Pardon, le basilic est où ?"], a: 0, why: "Combien = quanto; coûter = costare." },
            { t: "mcq", q: "In «Le café est ouvert sept jours sur sept», come si pronuncia «sept»?", opts: ["set, con la P muta", "sept, con la P", "se, tutto muto", "sèp"], a: 0, why: "Sept si dice «set», come un set di piatti." },
            { t: "type", say: "Il y a onze tables dans le café de Gigi.", q: "Ascolta: quanti tavoli ci sono? Scrivi il numero in cifre", a: ["11"], why: "Onze = undici." }
          ]
        }
      ]
    },
    {
      n: 2, arr: "2e", name: "Qui es-tu ?", it: "Chi sei?", level: "A1",
      lessons: [
        /* ---------------- LEZIONE 2-1 ---------------- */
        {
          id: "2-1", street: "Rue de l'Être", title: "Être e avoir: essere e avere",
          goal: "Descrivere te stesso e ciò che hai con i due verbi più importanti del francese, anche in frase negativa.",
          episode: {
            title: "Il giorno dell'apertura",
            intro: "Oggi il Petit Vésuve riapre. Gigi è in piedi dalle cinque, Léa ha scritto il menu sulla lavagna e Croissant ha scelto la sedia migliore, quella al sole. Arriva il primo cliente: un giornalista del quartiere.",
            lines: [
              { who: "Journaliste", fr: "Bonjour ! Je suis journaliste pour le petit journal de Montmartre.", it: "Buongiorno! Sono giornalista per il giornalino di Montmartre." },
              { who: "Gigi", fr: "Enchanté ! Je suis Gigi, et je suis le nouveau patron du café.", it: "Piacere! Sono Gigi, e sono il nuovo proprietario del caffè." },
              { who: "Journaliste", fr: "Vous êtes italien ? Vous avez un accent très sympathique.", it: "Lei è italiano? Ha un accento molto simpatico." },
              { who: "Gigi", fr: "Oui, je suis de Naples. J'ai un four à pizza et beaucoup d'idées !", it: "Sì, sono di Napoli. Ho un forno per la pizza e tante idee!" },
              { who: "Léa", fr: "Et nous avons aussi un chat très célèbre dans le quartier : Croissant !", it: "E abbiamo anche un gatto famosissimo nel quartiere: Croissant!" },
              { who: "Journaliste", fr: "Ah, le chat a un nom ! Il est gentil avec les clients ?", it: "Ah, il gatto ha un nome! È gentile con i clienti?" },
              { who: "Croissant", fr: "Je ne suis pas gentil. Je suis élégant. Ce n'est pas la même chose.", it: "Non sono gentile. Sono elegante. Non è la stessa cosa." },
              { who: "Gigi", fr: "Excusez-le, il a faim. Il est toujours de mauvaise humeur avant le déjeuner.", it: "Lo scusi, ha fame. È sempre di cattivo umore prima di pranzo." }
            ],
            outro: "Il giorno dopo, sul giornalino di Montmartre: «Un nuovo caffè, una pizza eccezionale e un gatto insopportabile.» Croissant ritaglia l'articolo e lo appende sopra la cassa.",
            you: "Croissant ti guarda: «Buona notizia, {nome}: come in italiano, l'età, la fame e la sete si hanno. J'ai faim, j'ai soif, j'ai {eta} ans. Nel mio trucco c'è la tua frase.»",
            mine: { fr: "Je suis {nome}, j'ai {eta} ans et j'ai très envie de voir Paris.", it: "Sono {nome}, ho {eta} anni e ho tanta voglia di vedere Parigi." }
          },
          words: [
            { fr: "être", it: "essere", say: "ètr", hook: "Il cappellino sulla ê è una S scomparsa: estre → être, proprio come «essere». Sotto il cappello c'è l'essere.",
              ex: { fr: "Je suis en retard, mais je suis très content d'être ici.", it: "Sono in ritardo, ma sono contentissimo di essere qui." } },
            { fr: "tu es", it: "tu sei", say: "tü è", hook: "La S di es non si sente: «tü è». Quasi come un italiano che dice «tu è(i)» di fretta.",
              ex: { fr: "Tu es la nouvelle serveuse du café, n'est-ce pas ?", it: "Sei la nuova cameriera del caffè, vero?" } },
            { fr: "il est / elle est", it: "lui è / lei è", say: "il è / èl è", hook: "EST si scrive con tre lettere ma si dice solo «è»: la S e la T sono partite in vacanza insieme.",
              ex: { fr: "Croissant est un chat élégant, mais il est un peu snob.", it: "Croissant è un gatto elegante, ma è un po' snob." } },
            { fr: "nous sommes", it: "noi siamo", say: "nu sòm", hook: "SOMMES somiglia a «somma»: noi siamo la somma di tutti. Gigi + Léa + Croissant = nous sommes.",
              ex: { fr: "Nous sommes ouverts tous les jours, sauf le lundi.", it: "Siamo aperti tutti i giorni, tranne il lunedì." } },
            { fr: "vous êtes", it: "voi siete / lei è", say: "vu-zèt", hook: "Liaison! La S di vous salta su êtes e ronza come una Z: «vu-zèt». Una zanzara che vola da una parola all'altra.",
              ex: { fr: "Vous êtes journaliste ? Vous avez des questions pour moi ?", it: "Lei è giornalista? Ha delle domande per me?" } },
            { fr: "ils sont / elles sont", it: "loro sono", say: "il sõ", hook: "SONT è il nostro «sono» col naso chiuso: ils sont = loro sono, tutti raffreddati.",
              ex: { fr: "Léa et Gigi sont fatigués, mais ils sont très heureux.", it: "Léa e Gigi sono stanchi, ma sono molto felici." } },
            { fr: "avoir", it: "avere", say: "avuàr", hook: "AVOIR = AVERE con il pianto del neonato in mezzo: av-UÀ-r. Il neonato vuole avere tutto.",
              ex: { fr: "Pour ouvrir un café, il faut avoir du courage et de la patience.", it: "Per aprire un caffè bisogna avere coraggio e pazienza." } },
            { fr: "j'ai", it: "io ho", say: "jé", hook: "J'ai = «jé»: immagina Gigi che alza trionfante il suo primo incasso e grida «jé!». Io ho!",
              ex: { fr: "J'ai un petit café, un grand four et un chat insupportable.", it: "Ho un piccolo caffè, un grande forno e un gatto insopportabile." } },
            { fr: "tu as", it: "tu hai", say: "tü a", hook: "Tu as = «tü a», con la S muta: è «tu hai» che ha perso la H e la I per strada.",
              ex: { fr: "Tu as faim ? J'ai une pizza margherita toute chaude !", it: "Hai fame? Ho una pizza margherita caldissima!" } },
            { fr: "il a / elle a", it: "lui ha / lei ha", say: "il a / èl a", hook: "Una A sola, come in italiano senza la H: lui ha → il a.",
              ex: { fr: "Madame Lefèvre a une boulangerie juste en face du café.", it: "Madame Lefèvre ha una panetteria proprio di fronte al caffè." } },
            { fr: "nous avons / vous avez / ils ont", it: "abbiamo / avete / hanno", say: "nu-zavõ / vu-zavè / il-zõ", hook: "Tre zanzare in fila: la S finale di nous, vous e ils ronza come una Z davanti alla vocale.",
              ex: { fr: "Nous avons beaucoup de clients, mais ils ont toujours des questions difficiles !", it: "Abbiamo molti clienti, ma hanno sempre domande difficili!" } },
            { fr: "j'ai faim / j'ai soif", it: "ho fame / ho sete", say: "jé fẽ / jé suàf", hook: "FAIM è la «fame» raffreddata. SOIF fa «suàf», come il rumore di un sorso d'acqua.",
              ex: { fr: "J'ai faim et j'ai soif : un croissant et un jus d'orange, s'il vous plaît !", it: "Ho fame e sete: un cornetto e un succo d'arancia, per favore!" } }
          ],
          tip: {
            title: "Être e avoir: la tabella da sapere a memoria",
            body: "<div class='tbl'><table><thead><tr><th></th><th>être (essere)</th><th>avoir (avere)</th></tr></thead><tbody><tr><td>je / j'</td><td>suis</td><td>ai</td></tr><tr><td>tu</td><td>es</td><td>as</td></tr><tr><td>il / elle</td><td>est</td><td>a</td></tr><tr><td>nous</td><td>sommes</td><td>avons</td></tr><tr><td>vous</td><td>êtes</td><td>avez</td></tr><tr><td>ils / elles</td><td>sont</td><td>ont</td></tr></tbody></table></div><ul><li><b>Come in italiano</b>, l'età, la fame, la sete, il freddo e la paura si hanno: j'ai vingt ans, j'ai faim, j'ai froid, j'ai peur.</li><li><b>La negazione è un panino:</b> il verbo è il prosciutto, <i>ne</i> e <i>pas</i> sono le due fette di pane. Je <b>ne</b> suis <b>pas</b> gentil. Davanti a vocale ne → n': je <b>n'</b>ai <b>pas</b> faim.</li><li><b>Liaison:</b> nous‿avons, vous‿êtes, ils‿ont. La S diventa Z e lega le parole. Attenzione: <i>ils sont</i> (sono, con la S) e <i>ils ont</i> (hanno, con la Z) si distinguono solo così!</li></ul>",
            examples: [
              { fr: "Je suis italien et j'ai un café à Paris.", it: "Sono italiano e ho un caffè a Parigi." },
              { fr: "Tu es fatigué ? Tu as besoin d'un café bien fort.", it: "Sei stanco? Hai bisogno di un caffè bello forte." },
              { fr: "Nous sommes à Montmartre et nous avons un chat très snob.", it: "Siamo a Montmartre e abbiamo un gatto molto snob." },
              { fr: "Vous êtes français ou vous êtes belge ?", it: "Lei è francese o è belga?" },
              { fr: "Je ne suis pas gentil et je n'ai pas faim.", it: "Non sono gentile e non ho fame." },
              { fr: "Ils ont un problème : ils sont en retard pour le train.", it: "Hanno un problema: sono in ritardo per il treno." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Léa et Gigi ___ fatigués, mais très heureux.»", opts: ["sont", "ont", "est", "sommes"], a: 0, why: "Loro sono = ils sont. Gli aggettivi (fatigués, heureux) vanno con être." },
            { t: "listen", say: "Vous êtes journaliste ? Vous avez des questions pour moi ?", q: "Cosa hai sentito?", opts: ["Lei è giornalista? Ha delle domande per me?", "Siete giornalisti? Avete delle risposte per me?", "Lei è giornalista? Ha un giornale per me?", "È lei il giornalista? Ha tempo per me?"], a: 0, why: "Vous êtes = «vu-zèt», vous avez = «vu-zavè»: due zanzare." },
            { t: "order", q: "Riordina: «Non sono gentile, sono elegante.»", words: ["Je", "ne", "suis", "pas", "gentil,", "je", "suis", "élégant."], why: "Il panino della negazione: ne + verbo + pas." },
            { t: "type", q: "Completa: «Tu ___ faim ? J'ai une pizza toute chaude !» (hai)", a: ["as"], why: "Tu as = «tü a», con la S muta." },
            { t: "match", q: "Abbina", pairs: [["nous sommes", "noi siamo"], ["ils ont", "loro hanno"], ["vous êtes", "voi siete"], ["j'ai", "io ho"]] }
          ],
          test: [
            { t: "mcq", q: "Completa: «Croissant ___ un chat élégant, mais il ___ un peu snob.»", opts: ["est / est", "a / est", "est / a", "sont / sont"], a: 0, why: "Il est, lui è: due volte être." },
            { t: "mcq", q: "Completa: «Madame Lefèvre ___ une boulangerie juste en face du café.»", opts: ["a", "est", "as", "ont"], a: 0, why: "Lei ha = elle a, una A sola." },
            { t: "listen", say: "Nous sommes ouverts tous les jours, sauf le lundi.", q: "Cosa hai sentito?", opts: ["Siamo aperti tutti i giorni, tranne il lunedì.", "Siamo chiusi tutti i giorni, tranne il lunedì.", "Siamo aperti solo il lunedì.", "Siete aperti tutti i giorni, anche il lunedì?"], a: 0, why: "Nous sommes, la somma di tutti. Sauf = tranne." },
            { t: "listen", say: "J'ai faim et j'ai soif : un croissant et un jus d'orange, s'il vous plaît !", q: "Cosa hai sentito?", opts: ["Ho fame e sete: un cornetto e un succo d'arancia, per favore!", "Ho fame: due cornetti e un caffè, per favore!", "Non ho fame: solo un succo d'arancia, per favore!", "Ho sete: un'acqua e un succo d'arancia, per favore!"], a: 0, why: "Faim = fame raffreddata, soif = il sorso «suàf»." },
            { t: "type", q: "Completa: «Nous ___ un petit café et un grand four.» (abbiamo)", a: ["avons"], why: "Nous avons = «nu-zavõ»." },
            { t: "type", q: "Completa: «Vous ___ journaliste ?» (è / siete)", a: ["êtes"], why: "Vous êtes = «vu-zèt», con il cappellino sulla ê." },
            { t: "type", q: "Completa: «Ils ___ fatigués, mais ils sont très heureux.» (sono)", a: ["sont"], why: "Ils sont, i raffreddati." },
            { t: "order", q: "Riordina: «Ho un piccolo caffè e un gatto insopportabile.»", words: ["J'ai", "un", "petit", "café", "et", "un", "chat", "insupportable."], why: "Petit va prima del nome, come in italiano." },
            { t: "order", q: "Riordina: «Non ho fame, ma ho molta sete.»", words: ["Je", "n'ai", "pas", "faim,", "mais", "j'ai", "très", "soif."], why: "Davanti a vocale ne → n': je n'ai pas." },
            { t: "mcq", q: "Come si dice «Ho vent'anni»?", opts: ["J'ai vingt ans.", "Je suis vingt ans.", "J'ai vingt années.", "Je vingt ans."], a: 0, why: "L'età si ha: j'ai… ans." },
            { t: "mcq", q: "Come distingui all'ascolto «ils sont» (sono) da «ils ont» (hanno)?", opts: ["Sont si dice con la S (il sõ), ont con la Z (il-zõ)", "Non c'è nessuna differenza", "Ont ha la T che si pronuncia", "Sont ha la O aperta"], a: 0, why: "Nella liaison di ils‿ont la S diventa Z." },
            { t: "match", q: "Abbina", pairs: [["tu es", "tu sei"], ["elle a", "lei ha"], ["nous avons", "noi abbiamo"], ["ils sont", "loro sono"]] }
          ]
        },
        /* ---------------- LEZIONE 2-2 ---------------- */
        {
          id: "2-2", street: "Rue des Articles", title: "Gli articoli: le, la, les, un, une, des",
          goal: "Dare il genere giusto alle cose e descrivere cosa c'è in un luogo con «il y a».",
          episode: {
            title: "La valigia in cantina",
            intro: "Gigi e Léa scendono in cantina per fare l'inventario. Tra bottiglie vuote e sedie rotte c'è qualcosa che nessuno tocca da anni. Croissant, per una volta, sembra nervoso.",
            lines: [
              { who: "Léa", fr: "Alors, qu'est-ce qu'il y a dans la cave ? Il y a des bouteilles, des chaises…", it: "Allora, cosa c'è in cantina? Ci sono delle bottiglie, delle sedie…" },
              { who: "Gigi", fr: "Il y a aussi une vieille table et un grand miroir cassé.", it: "C'è anche un vecchio tavolo e un grande specchio rotto." },
              { who: "Léa", fr: "Regarde, Gigi ! Sous l'escalier, il y a une valise rouge.", it: "Guarda, Gigi! Sotto le scale c'è una valigia rossa." },
              { who: "Gigi", fr: "C'est la valise de Zizì ! Il y a son nom sur l'étiquette.", it: "È la valigia di Zizì! C'è il suo nome sull'etichetta." },
              { who: "Croissant", fr: "Ne l'ouvre pas. Les secrets de Zizì sont les secrets de Zizì.", it: "Non aprirla. I segreti di Zizì sono i segreti di Zizì." },
              { who: "Léa", fr: "Trop tard ! Il y a des photos, des lettres et un album de famille.", it: "Troppo tardi! Ci sono delle foto, delle lettere e un album di famiglia." },
              { who: "Gigi", fr: "Et ça, qu'est-ce que c'est ? Une clé ancienne avec un ruban bleu…", it: "E questa cos'è? Una chiave antica con un nastro blu…" }
            ],
            outro: "Croissant sospira e torna di sopra. Sa benissimo che cosa apre quella chiave. Ma non lo dirà. Non ancora.",
            you: "«{nome}, regola d'oro: in francese ogni parola ha il suo genere, e non sempre è quello italiano. La table, la mer e la fleur sono femminili (il tavolo, il mare, il fiore!), le nuage è maschile (la nuvola). Imparale sempre con l'articolo!»"
          },
          words: [
            { fr: "le", it: "il, lo (maschile)", say: "le", hook: "LE sembra il nostro «le», ma è maschile! Immagina un signore con i baffi che si chiama Le: le café, le chat, le pain.",
              ex: { fr: "Le café de Zizì est petit, mais le chat est vraiment énorme.", it: "Il caffè di Zizì è piccolo, ma il gatto è davvero enorme." } },
            { fr: "la", it: "la (femminile)", say: "la", hook: "LA è uguale all'italiano, che fortuna. Ma attenzione: la table è femminile, anche se da noi «il tavolo» è maschile.",
              ex: { fr: "La table de la cuisine est vieille, mais elle est très solide.", it: "Il tavolo della cucina è vecchio, ma è molto solido." } },
            { fr: "l'", it: "il, lo, la (davanti a vocale)", say: "l", hook: "L' è l'articolo che inciampa sulla vocale e perde la sua: l'eau, l'école, l'hôtel. Come il nostro «l'acqua».",
              ex: { fr: "L'eau de Paris est bonne, et l'hôtel est près de la gare.", it: "L'acqua di Parigi è buona, e l'hotel è vicino alla stazione." } },
            { fr: "les", it: "i, gli, le (plurale)", say: "lé", hook: "LES è un plurale pigro: la S non si sente! «Les chats» si dice «lé scià». Ascolta: le (e muta) contro les (é chiusa).",
              ex: { fr: "Les clients aiment les pizzas, mais ils détestent les chats.", it: "I clienti amano le pizze, ma detestano i gatti." } },
            { fr: "un", it: "un, uno", say: "ẽ", hook: "UN, col raffreddore: un café, un chat, un problème.",
              ex: { fr: "Il y a un problème : il y a un poil de chat dans le café !", it: "C'è un problema: c'è un pelo di gatto nel caffè!" } },
            { fr: "une", it: "una", say: "ün", hook: "UNE = una con le labbra a bacio: «ün». La E finale fa sentire la N.",
              ex: { fr: "Léa a une idée géniale : une pizza en forme de croissant !", it: "Léa ha un'idea geniale: una pizza a forma di cornetto!" } },
            { fr: "des", it: "dei, degli, delle", say: "dé", hook: "DES è il plurale di un/une. In italiano spesso lo saltiamo («ho foto»), in francese mai: j'ai des photos. Pensa a un dado (dé) che fa cadere tanti oggetti.",
              ex: { fr: "Dans la valise de Zizì, il y a des photos, des lettres et des secrets.", it: "Nella valigia di Zizì ci sono foto, lettere e segreti." } },
            { fr: "il y a", it: "c'è, ci sono", say: "ilià", hook: "IL-Y-A si dice tutto attaccato: «ilià». Immagina Gigi che apre la porta della cantina e grida «ilià!»: c'è qualcosa!",
              ex: { fr: "Il y a une valise rouge sous l'escalier de la cave.", it: "C'è una valigia rossa sotto le scale della cantina." } },
            { fr: "la valise", it: "la valigia", say: "valìz", hook: "Quasi uguale: valigia → valise. La S fra due vocali si dice Z.",
              ex: { fr: "La valise de Zizì est vieille, rouge et très lourde.", it: "La valigia di Zizì è vecchia, rossa e molto pesante." } },
            { fr: "la clé", it: "la chiave", say: "klé", hook: "CLÉ come la chiave di violino in musica (la clef). Una chiave che apre un segreto.",
              ex: { fr: "Cette clé ancienne ouvre peut-être une porte secrète du café.", it: "Questa chiave antica apre forse una porta segreta del caffè." } },
            { fr: "le secret", it: "il segreto", say: "sekrè", hook: "Il segreto ha la T finale muta: sa tacere, come ogni buon segreto.",
              ex: { fr: "Croissant connaît tous les secrets de la famille de Zizì.", it: "Croissant conosce tutti i segreti della famiglia di Zizì." } }
          ],
          tip: {
            title: "Maschile, femminile e la bustina di «des»",
            body: "<ul><li><b>le</b> (maschile), <b>la</b> (femminile), <b>l'</b> (davanti a vocale o H muta), <b>les</b> (plurale). La S di les è muta, ma davanti a vocale si lega: les‿amis = «lé-zamì».</li><li><b>un, une, des</b> sono gli indeterminativi. <i>Des</i> è obbligatorio anche dove l'italiano non mette niente: «ho foto» → j'ai <b>des</b> photos.</li><li><b>Il y a + un / une / des</b> = c'è, ci sono. Per tutto: il y a un chat, il y a des chats.</li><li><b>Trucco del genere:</b> le parole in <i>-tion, -té, -ette, -ure</i> sono quasi sempre femminili (la station, la liberté, la baguette, la voiture); quelle in <i>-age, -ment, -eau, -isme</i> quasi sempre maschili (le fromage, le moment, le gâteau, le tourisme).</li><li><b>Trappole:</b> la table, la mer, la fleur, la dent sono femminili; le nuage (la nuvola) è maschile.</li></ul>",
            examples: [
              { fr: "Il y a un chat sur la table de la cuisine.", it: "C'è un gatto sul tavolo della cucina." },
              { fr: "Les amis de Léa sont des étudiants des Beaux-Arts.", it: "Gli amici di Léa sono studenti delle Belle Arti." },
              { fr: "Dans la cave, il y a des bouteilles et une valise.", it: "In cantina ci sono delle bottiglie e una valigia." },
              { fr: "La baguette et le fromage sont sur la table.", it: "La baguette e il formaggio sono sul tavolo." },
              { fr: "L'hôtel est loin, mais la station de métro est près d'ici.", it: "L'hotel è lontano, ma la stazione della metro è qui vicino." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «___ table de la cuisine est vieille.»", opts: ["La", "Le", "Les", "L'"], a: 0, why: "Table è femminile in francese, anche se «tavolo» è maschile." },
            { t: "mcq", q: "Completa: «Dans la valise, il y a ___ photos et ___ lettres.»", opts: ["des / des", "les / un", "un / une", "une / des"], a: 0, why: "Plurale indeterminato: des, sempre." },
            { t: "listen", say: "Il y a une valise rouge sous l'escalier.", q: "Cosa hai sentito?", opts: ["C'è una valigia rossa sotto le scale.", "C'è una valigia rossa sopra le scale.", "Ci sono due valigie rosse sotto le scale.", "C'è una valigia nera in cantina."], a: 0, why: "Il y a = «ilià», c'è." },
            { t: "order", q: "Riordina: «Ci sono delle foto e delle lettere nella valigia.»", words: ["Il", "y", "a", "des", "photos", "et", "des", "lettres", "dans", "la", "valise."], why: "Il y a + des + nome." },
            { t: "match", q: "Abbina", pairs: [["la clé", "la chiave"], ["le secret", "il segreto"], ["l'eau", "l'acqua"], ["les chats", "i gatti"]] }
          ],
          test: [
            { t: "mcq", q: "Completa: «___ hôtel est près de la gare.»", opts: ["L'", "Le", "La", "Les"], a: 0, why: "La H di hôtel è muta: l'articolo si apostrofa." },
            { t: "mcq", q: "Quale espressione è corretta?", opts: ["une vieille table", "un vieux table", "une vieux table", "un vieille table"], a: 0, why: "Table è femminile: une, e anche l'aggettivo al femminile, vieille." },
            { t: "listen", say: "Les clients aiment les pizzas, mais ils détestent les chats.", q: "Cosa hai sentito?", opts: ["I clienti amano le pizze, ma detestano i gatti.", "Il cliente ama la pizza, ma detesta il gatto.", "I clienti amano i gatti, ma detestano le pizze.", "I clienti amano le pizze e anche i gatti."], a: 0, why: "Les = «lé», plurale: la S non si sente." },
            { t: "listen", say: "Léa a une idée géniale : une pizza en forme de croissant !", q: "Cosa hai sentito?", opts: ["Léa ha un'idea geniale: una pizza a forma di cornetto!", "Léa ha un'idea: un cornetto a forma di pizza!", "Léa ha fame: una pizza e un cornetto!", "Léa non ha idee per la pizza."], a: 0, why: "Une idée, une pizza: due femminili." },
            { t: "type", q: "Completa con l'articolo: «Il y a ___ valise rouge sous l'escalier.» (una)", a: ["une"], why: "Une, con le labbra a bacio." },
            { t: "type", q: "Completa con l'articolo: «___ secrets de Zizì sont dans la valise.» (i)", a: ["les"], why: "Les = plurale determinativo." },
            { t: "type", q: "Completa: «___ des photos et des lettres dans la valise.» (ci sono)", a: ["il y a"], why: "Il y a vale per «c'è» e per «ci sono»." },
            { t: "order", q: "Riordina: «Il gatto conosce tutti i segreti della famiglia.»", words: ["Le", "chat", "connaît", "tous", "les", "secrets", "de", "la", "famille."], why: "De + la famille = della famiglia." },
            { t: "mcq", q: "In «des», la S finale…", opts: ["non si pronuncia (dé), ma si lega davanti a vocale", "si pronuncia sempre", "si pronuncia come una C", "rende nasale la E"], a: 0, why: "Des amis = «dé-zamì»." },
            { t: "mcq", q: "Quale parola è femminile in francese, anche se in italiano è maschile?", opts: ["la mer (il mare)", "le café (il caffè)", "le chat (il gatto)", "le pain (il pane)"], a: 0, why: "La mer è femminile: una delle trappole da ricordare." },
            { t: "match", q: "Abbina", pairs: [["une clé", "una chiave"], ["des lettres", "delle lettere"], ["la valise", "la valigia"], ["il y a", "c'è / ci sono"]] },
            { t: "type", say: "Il y a des bouteilles, des chaises et une vieille table.", q: "Ascolta e completa: «Il y a des bouteilles, des chaises et ___ vieille table.»", a: ["une"], why: "Table è femminile: une vieille table." }
          ]
        },
        /* ---------------- LEZIONE 2-3 ---------------- */
        {
          id: "2-3", street: "Rue des Nations", title: "Paesi, nazionalità e lingue",
          goal: "Dire da dove vieni e che lingue parli, e fare le stesse domande ai turisti con frasi complete.",
          episode: {
            title: "Turisti da tutto il mondo",
            intro: "L'articolo del giornalino ha funzionato fin troppo: il Petit Vésuve è pieno di turisti. Léa corre tra i tavoli, Gigi impasta senza sosta e Croissant fa il controllo passaporti dalla sua sedia.",
            lines: [
              { who: "Léa", fr: "Bonjour ! Vous êtes d'où ? Vous parlez français ?", it: "Buongiorno! Di dove siete? Parlate francese?" },
              { who: "Yuki", fr: "Je suis japonaise, je viens de Tokyo. Je parle un peu français.", it: "Sono giapponese, vengo da Tokyo. Parlo un po' di francese." },
              { who: "Tom", fr: "Moi, je suis américain, de New York. Je ne parle pas bien français, désolé !", it: "Io sono americano, di New York. Non parlo bene il francese, mi dispiace!" },
              { who: "Gigi", fr: "Pas de problème ! Ici, on parle français, italien, anglais… et un peu chat.", it: "Nessun problema! Qui si parla francese, italiano, inglese… e un po' di gatto." },
              { who: "Carmen", fr: "Et moi, je suis espagnole, mais j'habite en Allemagne, à Berlin.", it: "E io sono spagnola, ma abito in Germania, a Berlino." },
              { who: "Léa", fr: "Alors, une pizza pour le Japon, une pour les États-Unis et une pour l'Espagne ?", it: "Allora, una pizza per il Giappone, una per gli Stati Uniti e una per la Spagna?" },
              { who: "Croissant", fr: "Et pour la France, un peu de respect et une assiette de saumon.", it: "E per la Francia, un po' di rispetto e un piatto di salmone." }
            ],
            outro: "A fine giornata la cassa è piena e Gigi ha imparato a dire «grazie» in sei lingue. Croissant ne parla una sola, ma con grande convinzione.",
            you: "«E tu, {nome}, da dove vieni? Ricorda la mia geografia: en Italie, en France… ma au Japon e aux États-Unis! Nel mio trucco c'è la tua frase.»",
            mine: { fr: "Je m'appelle {nome}, j'habite en Italie et je parle italien, mais j'apprends le français.", it: "Mi chiamo {nome}, abito in Italia e parlo italiano, ma sto imparando il francese." }
          },
          words: [
            { fr: "la France / français", it: "la Francia / francese", say: "frãs / fransè", hook: "FRANCE col naso chiuso: «frãs». E la lingua? Le français, sempre con la minuscola!",
              ex: { fr: "Léa est française, elle habite en France depuis toujours.", it: "Léa è francese, vive in Francia da sempre." } },
            { fr: "l'Italie / italien", it: "l'Italia / italiano", say: "litalì / italiẽ", hook: "ITALIE: l'Italia ha perso la A finale e ha preso una E muta, come un italiano che arriva a Parigi e cambia accento.",
              ex: { fr: "Gigi est italien, il parle italien avec sa mère au téléphone.", it: "Gigi è italiano, parla italiano con sua madre al telefono." } },
            { fr: "l'Espagne / espagnol", it: "la Spagna / spagnolo", say: "lespàgn / espagnòl", hook: "ESPAGNE: la Spagna con una E davanti, come se qualcuno esclamasse «eh, Spagna!». GN si legge come in «gnocchi».",
              ex: { fr: "Carmen est espagnole, mais elle habite en Allemagne avec son mari.", it: "Carmen è spagnola, ma vive in Germania con suo marito." } },
            { fr: "l'Allemagne / allemand", it: "la Germania / tedesco", say: "lalmàgn / almã", hook: "ALLEMAGNE non somiglia a Germania! Pensa agli Alamanni, antica tribù germanica: i francesi chiamano tutta la Germania con il loro nome.",
              ex: { fr: "Mon ami Paul est allemand, il travaille à Berlin comme architecte.", it: "Il mio amico Paul è tedesco, lavora a Berlino come architetto." } },
            { fr: "l'Angleterre / anglais", it: "l'Inghilterra / inglese", say: "lãgletèr / ãglè", hook: "ANGLE-TERRE = la terra degli Angli. E anglais è «inglese» detto col raffreddore.",
              ex: { fr: "Tom parle anglais, mais il n'est pas anglais : il est américain.", it: "Tom parla inglese, ma non è inglese: è americano." } },
            { fr: "le Japon / japonais", it: "il Giappone / giapponese", say: "japõ / japonè", hook: "JAPON è il Giappone senza la coda «-ne» e col naso chiuso. La J come in garage: «japõ».",
              ex: { fr: "Yuki est japonaise, elle vient de Tokyo pour étudier la cuisine française.", it: "Yuki è giapponese, viene da Tokyo per studiare la cucina francese." } },
            { fr: "les États-Unis / américain", it: "gli Stati Uniti / americano", say: "lé-zéta-züni / amerikẽ", hook: "ÉTATS-UNIS: tante liaison in una sola parola, «lé-zéta-züni». Gli stati sono uniti anche nella pronuncia!",
              ex: { fr: "Tom vient des États-Unis, il est en vacances à Paris pour deux semaines.", it: "Tom viene dagli Stati Uniti, è in vacanza a Parigi per due settimane." } },
            { fr: "parler", it: "parlare", say: "parlé", hook: "PARLER = parlare, con la R finale muta: «parlé». Il verbo più facile del francese.",
              ex: { fr: "Je parle italien à la maison et un peu français au travail.", it: "Parlo italiano a casa e un po' di francese al lavoro." } },
            { fr: "en / au / aux", it: "in (con i paesi)", say: "ã / o / o", hook: "Paesi femminili (quasi sempre in -e) → EN: en France, en Italie. Maschili → AU: au Japon. Plurali → AUX: aux États-Unis.",
              ex: { fr: "J'habite en Italie, mais mon frère travaille au Japon depuis un an.", it: "Abito in Italia, ma mio fratello lavora in Giappone da un anno." } },
            { fr: "un peu", it: "un po'", say: "ẽ pö", hook: "UN PEU = un po', con la EU a labbra tonde: «pö». Come la smorfietta di chi non è sicuro: pö…",
              ex: { fr: "Je parle un peu français, mais je comprends beaucoup de mots.", it: "Parlo un po' di francese, ma capisco molte parole." } },
            { fr: "désolé", it: "mi dispiace", say: "dezolé", hook: "DÉSOLÉ = desolato. I francesi si dichiarano «desolati» per ogni piccolezza: è il loro «scusa». Una donna scrive désolée.",
              ex: { fr: "Désolé, je ne parle pas bien français, mais j'apprends vite !", it: "Mi dispiace, non parlo bene il francese, ma imparo in fretta!" } }
          ],
          tip: {
            title: "En France, au Japon: la geografia di Croissant",
            body: "<ul><li><b>Paesi femminili</b> (quasi tutti quelli in -e): la France, l'Italie, l'Espagne → <b>en</b> France, <b>en</b> Italie.</li><li><b>Paesi maschili:</b> le Japon, le Portugal, le Canada, le Brésil → <b>au</b> Japon, <b>au</b> Canada.</li><li><b>Paesi plurali:</b> les États-Unis, les Pays-Bas → <b>aux</b> États-Unis.</li><li><b>Città:</b> sempre <b>à</b>: à Paris, à Tokyo, à Naples.</li><li><b>Provenienza:</b> de France, d'Italie, du Japon, des États-Unis.</li><li><b>Maiuscola o minuscola?</b> Aggettivo e lingua in minuscolo (il est italien, le français); la persona in maiuscolo (un Italien, une Française).</li></ul>",
            examples: [
              { fr: "Yuki habite au Japon, mais elle étudie en France.", it: "Yuki vive in Giappone, ma studia in Francia." },
              { fr: "Tom vient des États-Unis et il parle anglais.", it: "Tom viene dagli Stati Uniti e parla inglese." },
              { fr: "Nous sommes italiens, nous habitons à Milan.", it: "Siamo italiani, abitiamo a Milano." },
              { fr: "Vous parlez espagnol ? Non, je parle seulement italien.", it: "Parla spagnolo? No, parlo solo italiano." },
              { fr: "Carmen est espagnole, mais elle habite en Allemagne.", it: "Carmen è spagnola, ma vive in Germania." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «J'habite ___ Italie, mais mon frère travaille ___ Japon.»", opts: ["en / au", "au / en", "à / à", "en / en"], a: 0, why: "Italie è femminile → en; Japon è maschile → au." },
            { t: "listen", say: "Je suis japonaise, je viens de Tokyo. Je parle un peu français.", q: "Cosa hai sentito?", opts: ["Sono giapponese, vengo da Tokyo. Parlo un po' di francese.", "Sono cinese, vengo da Tokyo. Non parlo francese.", "Sono giapponese, abito a Parigi. Parlo bene il francese.", "Sono giapponese, vado a Tokyo. Parlo un po' di inglese."], a: 0, why: "Japonaise, femminile: si sente la Z finale." },
            { t: "match", q: "Abbina", pairs: [["allemand", "tedesco"], ["anglais", "inglese"], ["espagnole", "spagnola"], ["japonais", "giapponese"]] },
            { t: "order", q: "Riordina: «Tom viene dagli Stati Uniti e parla inglese.»", words: ["Tom", "vient", "des", "États-Unis", "et", "il", "parle", "anglais."], why: "Des États-Unis: provenienza da un paese plurale." },
            { t: "type", q: "Completa: «Désolé, je ne ___ pas bien français.» (parlo)", a: ["parle"], why: "Je parle, con la E finale muta." }
          ],
          test: [
            { t: "mcq", q: "Come dici «Abito in Francia, a Parigi»?", opts: ["J'habite en France, à Paris.", "J'habite au France, en Paris.", "J'habite à France, en Paris.", "J'habite en France, en Paris."], a: 0, why: "Paese femminile → en; città → à." },
            { t: "mcq", q: "Completa: «Tom vient ___ États-Unis.»", opts: ["des", "de", "du", "en"], a: 0, why: "Paese plurale: des États-Unis." },
            { t: "mcq", q: "Carmen è una donna spagnola. Dice: «Je suis…»", opts: ["espagnole", "espagnol", "Espagne", "espagnolle"], a: 0, why: "Femminile: + e, il rossetto." },
            { t: "listen", say: "Tom parle anglais, mais il n'est pas anglais : il est américain.", q: "Cosa hai sentito?", opts: ["Tom parla inglese, ma non è inglese: è americano.", "Tom parla americano, ma è inglese.", "Tom non parla inglese, perché è americano.", "Tom parla inglese ed è inglese."], a: 0, why: "Il n'est pas = non è: il panino della negazione." },
            { t: "listen", say: "Je parle italien à la maison et un peu français au travail.", q: "Cosa hai sentito?", opts: ["Parlo italiano a casa e un po' di francese al lavoro.", "Parlo francese a casa e un po' di italiano al lavoro.", "Parlo italiano a casa e molto francese al lavoro.", "Parlo italiano al lavoro e francese a casa."], a: 0, why: "Un peu = un po', con la «pö» a labbra tonde." },
            { t: "type", q: "Completa: «Yuki habite ___ Japon, mais elle étudie en France.»", a: ["au"], why: "Le Japon è maschile → au Japon." },
            { t: "type", q: "Completa: «Gigi est ___, il vient de Naples.» (italiano)", a: ["italien"], why: "Aggettivo di nazionalità: minuscolo." },
            { t: "order", q: "Riordina: «Parlo un po' di francese, ma capisco molte parole.»", words: ["Je", "parle", "un", "peu", "français,", "mais", "je", "comprends", "beaucoup", "de", "mots."], why: "Beaucoup de = molti, molte." },
            { t: "mcq", q: "Come si scrivono i nomi delle lingue in francese?", opts: ["Con la minuscola: le français, l'italien", "Con la maiuscola: le Français", "Senza articolo: français", "Sempre al femminile: la française"], a: 0, why: "Le lingue sono maschili e minuscole." },
            { t: "match", q: "Abbina", pairs: [["l'Allemagne", "la Germania"], ["l'Angleterre", "l'Inghilterra"], ["le Japon", "il Giappone"], ["les États-Unis", "gli Stati Uniti"]] },
            { t: "mcq", q: "Un turista ti chiede «Vous parlez anglais ?». Parli solo un po' di inglese. Rispondi:", opts: ["Oui, un peu. Je parle surtout italien.", "Oui, je suis anglais de Londres.", "Non, je ne suis pas en Angleterre.", "Désolé, je ne parle pas italien."], a: 0, why: "Un peu = un po'; surtout = soprattutto." },
            { t: "type", say: "Je suis espagnole, mais j'habite en Allemagne.", q: "Ascolta e completa: «Je suis espagnole, mais j'habite ___ Allemagne.»", a: ["en"], why: "L'Allemagne è femminile → en." }
          ]
        },
        /* ---------------- LEZIONE 2-4 ---------------- */
        {
          id: "2-4", street: "Rue de la Famille", title: "La famiglia e i possessivi",
          goal: "Presentare la tua famiglia con mon, ma, mes e raccontare chi è chi in una foto.",
          episode: {
            title: "L'album di Zizì",
            intro: "Gigi non resiste: porta di sopra l'album trovato nella valigia e lo apre sul bancone. Madame Lefèvre entra per il solito caffè, vede le foto… e si ferma di colpo.",
            lines: [
              { who: "Gigi", fr: "Regardez, madame : c'est l'album de famille de ma grand-tante Zizì.", it: "Guardi, signora: è l'album di famiglia della mia prozia Zizì." },
              { who: "Mme Lefèvre", fr: "Mon Dieu… Sur cette photo, c'est ma mère, à côté de Zizì !", it: "Mio Dio… In questa foto c'è mia madre, accanto a Zizì!" },
              { who: "Gigi", fr: "Votre mère ? Et ici, c'est mon grand-père, le frère de Zizì !", it: "Sua madre? E qui c'è mio nonno, il fratello di Zizì!" },
              { who: "Mme Lefèvre", fr: "Ma mère et Zizì étaient sœurs. Alors Zizì est ma tante !", it: "Mia madre e Zizì erano sorelle. Allora Zizì è mia zia!" },
              { who: "Gigi", fr: "Alors… vous et moi, nous sommes de la même famille ?", it: "Allora… lei e io siamo della stessa famiglia?" },
              { who: "Mme Lefèvre", fr: "Nous sommes cousins, Gigi. Et maintenant, tu peux me dire « tu ».", it: "Siamo cugini, Gigi. E adesso puoi darmi del tu." },
              { who: "Croissant", fr: "Enfin. Ça fait trois semaines que j'attends ce moment.", it: "Finalmente. Sono tre settimane che aspetto questo momento." },
              { who: "Léa", fr: "Madame Lefèvre… vous souriez ?!", it: "Madame Lefèvre… sta sorridendo?!" },
              { who: "Mme Lefèvre", fr: "Appelle-moi Françoise. Et oui, je souris : c'est un jour spécial.", it: "Chiamami Françoise. E sì, sorrido: è un giorno speciale." }
            ],
            outro: "Per la prima volta dal 1987 Madame Lefèvre, anzi Françoise, sorride davanti a tutti. Croissant fa finta di dormire, ma ha l'aria soddisfatta. E la chiave col nastro blu? Quella è un'altra storia: la scoprirai nel 3° arrondissement.",
            you: "«{nome}, hai visto? In francese «mio» cambia: mon père, ma mère, mes parents. Ora presenta tu la tua famiglia: nel mio trucco c'è la tua frase.»",
            mine: { fr: "Je m'appelle {nome}, j'ai {eta} ans, et ma famille est petite mais très bruyante.", it: "Mi chiamo {nome}, ho {eta} anni, e la mia famiglia è piccola ma molto rumorosa." }
          },
          words: [
            { fr: "le père", it: "il padre", say: "pèr", hook: "PÈRE è padre senza la D, con la è aperta. Il Papa è le Pape, ma il papà è le père.",
              ex: { fr: "Mon père travaille dans une banque, mais il rêve d'ouvrir une pizzeria.", it: "Mio padre lavora in banca, ma sogna di aprire una pizzeria." } },
            { fr: "la mère", it: "la madre", say: "mèr", hook: "MÈRE suona come «mare»: la madre è un mare d'affetto. E infatti la mer (il mare) e la mère (la madre) si pronunciano uguali!",
              ex: { fr: "Ma mère téléphone tous les dimanches pour savoir si je mange bien.", it: "Mia madre telefona ogni domenica per sapere se mangio bene." } },
            { fr: "les parents", it: "i genitori", say: "parã", hook: "Trappola! PARENTS non sono i parenti: sono i GENITORI. I parenti in francese sono «la famille».",
              ex: { fr: "Mes parents habitent à Naples, dans une petite maison près de la mer.", it: "I miei genitori abitano a Napoli, in una casetta vicino al mare." } },
            { fr: "le frère / la sœur", it: "il fratello / la sorella", say: "frèr / sör", hook: "FRÈRE come «frate»: i frati si chiamano fratelli. SŒUR come «suora»: le suore si chiamano sorelle!",
              ex: { fr: "J'ai un frère et deux sœurs, et nous sommes très différents.", it: "Ho un fratello e due sorelle, e siamo molto diversi." } },
            { fr: "le grand-père / la grand-mère", it: "il nonno / la nonna", say: "grã-pèr / grã-mèr", hook: "Il nonno è un «grande padre», la nonna una «grande madre». Logico, no?",
              ex: { fr: "Ma grand-mère prépare les meilleures lasagnes du monde le dimanche.", it: "Mia nonna prepara le migliori lasagne del mondo la domenica." } },
            { fr: "l'oncle / la tante", it: "lo zio / la zia", say: "lõkl / tãt", hook: "ONCLE ricorda l'inglese «uncle». TANTE è la zia che ti regala TANTE caramelle.",
              ex: { fr: "Mon oncle et ma tante viennent à Paris pour l'ouverture du café.", it: "Mio zio e mia zia vengono a Parigi per l'inaugurazione del caffè." } },
            { fr: "le cousin / la cousine", it: "il cugino / la cugina", say: "kuzẽ / kuzìn", hook: "COUSIN è il cugino. Il cuscino invece è le coussin, con due S: non confonderli, o abbraccerai tuo cugino per dormire!",
              ex: { fr: "Ma cousine Françoise a une boulangerie juste en face de mon café.", it: "Mia cugina Françoise ha una panetteria proprio di fronte al mio caffè." } },
            { fr: "mon / ma / mes", it: "mio / mia / miei, mie", say: "mõ / ma / mé", hook: "MON per il maschile, MA per il femminile, MES per il plurale. Davanti a vocale anche le femmine prendono MON (mon amie), per non inciampare.",
              ex: { fr: "Mon frère, ma sœur et mes parents arrivent samedi pour le dîner.", it: "Mio fratello, mia sorella e i miei genitori arrivano sabato per cena." } },
            { fr: "ton / ta / tes", it: "tuo / tua / tuoi, tue", say: "tõ / ta / té", hook: "Stesso schema con la T: ton chat, ta valise, tes secrets.",
              ex: { fr: "C'est ta famille sur la photo ? Ton père te ressemble beaucoup !", it: "È la tua famiglia nella foto? Tuo padre ti somiglia molto!" } },
            { fr: "son / sa / ses", it: "suo / sua / suoi, sue", say: "sõ / sa / sé", hook: "Son e sa seguono la COSA posseduta, non chi la possiede. «Sa valise» è la sua valigia, che sia di Gigi o di Léa.",
              ex: { fr: "Zizì garde ses photos, ses lettres et sa clé dans une valise rouge.", it: "Zizì tiene le sue foto, le sue lettere e la sua chiave in una valigia rossa." } },
            { fr: "la famille", it: "la famiglia", say: "famìi", hook: "FAMILLE: la doppia L dopo la I si legge «i», come un gatto che miagola in fondo alla parola: fa-mì-i.",
              ex: { fr: "Dans ma famille, tout le monde parle fort et tout le monde a raison.", it: "Nella mia famiglia tutti parlano forte e tutti hanno ragione." } }
          ],
          tip: {
            title: "Mon, ma, mes: i possessivi senza panico",
            body: "<div class='tbl'><table><thead><tr><th></th><th>maschile</th><th>femminile</th><th>plurale</th></tr></thead><tbody><tr><td>io</td><td>mon</td><td>ma</td><td>mes</td></tr><tr><td>tu</td><td>ton</td><td>ta</td><td>tes</td></tr><tr><td>lui / lei</td><td>son</td><td>sa</td><td>ses</td></tr><tr><td>noi</td><td colspan='2'>notre</td><td>nos</td></tr><tr><td>voi / Lei</td><td colspan='2'>votre</td><td>vos</td></tr><tr><td>loro</td><td colspan='2'>leur</td><td>leurs</td></tr></tbody></table></div><ul><li><b>Niente articolo</b> davanti al possessivo: «la mia mamma» → <b>ma mère</b>, mai «la ma mère».</li><li>Il possessivo segue la <b>cosa posseduta</b>: sa valise (la valigia di Gigi), son chat (il gatto di Léa).</li><li>Davanti a vocale il femminile usa mon / ton / son: <b>mon amie</b>, <b>son école</b>.</li><li><b>Trappole:</b> les parents = i genitori; la mer, la mère e le maire (il sindaco) si pronunciano tutti «mèr».</li></ul>",
            examples: [
              { fr: "Mon père et ma mère habitent en Italie, près de Naples.", it: "Mio padre e mia madre vivono in Italia, vicino a Napoli." },
              { fr: "Mes cousins français sont très sympathiques.", it: "I miei cugini francesi sono molto simpatici." },
              { fr: "Léa adore sa grand-mère et son petit frère.", it: "Léa adora sua nonna e il suo fratellino." },
              { fr: "Mon amie Sofia vient de Rome avec ses parents.", it: "La mia amica Sofia viene da Roma con i suoi genitori." },
              { fr: "Notre café est petit, mais nos clients sont fidèles.", it: "Il nostro caffè è piccolo, ma i nostri clienti sono fedeli." },
              { fr: "Ta tante est aussi ma tante : nous sommes cousins !", it: "Tua zia è anche mia zia: siamo cugini!" }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «___ mère téléphone tous les dimanches.»", opts: ["Ma", "Mon", "Mes", "La ma"], a: 0, why: "Mère è femminile: ma. Mai l'articolo davanti." },
            { t: "mcq", q: "«Mes parents habitent à Naples» significa…", opts: ["I miei genitori abitano a Napoli.", "I miei parenti abitano a Napoli.", "Mio padre abita a Napoli.", "I miei amici abitano a Napoli."], a: 0, why: "Parents = genitori: la trappola più famosa." },
            { t: "listen", say: "J'ai un frère et deux sœurs, et nous sommes très différents.", q: "Cosa hai sentito?", opts: ["Ho un fratello e due sorelle, e siamo molto diversi.", "Ho due fratelli e una sorella, e siamo molto simili.", "Ho un fratello e due cugine, e siamo molto diversi.", "Ho una sorella e due fratelli, e siamo uguali."], a: 0, why: "Frère come frate, sœur come suora." },
            { t: "match", q: "Abbina", pairs: [["le grand-père", "il nonno"], ["la tante", "la zia"], ["le cousin", "il cugino"], ["la sœur", "la sorella"]] },
            { t: "order", q: "Riordina: «Mio zio e mia zia vengono a Parigi.»", words: ["Mon", "oncle", "et", "ma", "tante", "viennent", "à", "Paris."], why: "Mon oncle (maschile), ma tante (femminile)." }
          ],
          test: [
            { t: "mcq", q: "Completa: «___ amie Sofia vient de Rome.» (la mia amica)", opts: ["Mon", "Ma", "Mes", "Mia"], a: 0, why: "Davanti a vocale anche il femminile prende mon: mon amie." },
            { t: "mcq", q: "Completa: «Zizì garde ___ photos et ___ clé dans une valise.»", opts: ["ses / sa", "son / sa", "sa / ses", "ses / son"], a: 0, why: "Photos è plurale → ses; clé è femminile → sa." },
            { t: "listen", say: "Ma grand-mère prépare les meilleures lasagnes du monde le dimanche.", q: "Cosa hai sentito?", opts: ["Mia nonna prepara le migliori lasagne del mondo la domenica.", "Mia madre prepara le migliori lasagne del mondo il sabato.", "Mia nonna mangia le lasagne ogni domenica.", "Mia zia prepara le lasagne per tutto il mondo."], a: 0, why: "Grand-mère, la grande madre." },
            { t: "listen", say: "Ma mère et Zizì étaient sœurs. Alors Zizì est ma tante !", q: "Cosa hai sentito?", opts: ["Mia madre e Zizì erano sorelle. Allora Zizì è mia zia!", "Mia madre e Zizì erano amiche. Allora Zizì è mia cugina!", "Mio padre e Zizì erano fratelli. Allora Zizì è mia nonna!", "Mia sorella e Zizì sono amiche. Allora Zizì è mia zia!"], a: 0, why: "Sœurs = sorelle, tante = zia." },
            { t: "type", q: "Completa: «Mes ___ habitent à Naples.» (genitori)", a: ["parents"], why: "Parents = genitori, non parenti!" },
            { t: "type", q: "Completa: «J'ai un frère et deux ___.» (sorelle)", a: ["sœurs", "soeurs"], why: "Sœur come suora; al plurale + s." },
            { t: "type", q: "Completa: «C'est ta famille ? ___ père te ressemble beaucoup !» (tuo)", a: ["ton"], why: "Père è maschile: ton." },
            { t: "order", q: "Riordina: «Mio fratello, mia sorella e i miei genitori arrivano sabato.»", words: ["Mon", "frère,", "ma", "sœur", "et", "mes", "parents", "arrivent", "samedi."], why: "Mon, ma, mes: maschile, femminile, plurale." },
            { t: "mcq", q: "Come si dice «la mia mamma» in francese?", opts: ["ma mère", "la ma mère", "la mère mienne", "mon mère"], a: 0, why: "Niente articolo davanti al possessivo." },
            { t: "mcq", q: "Quale trio di parole si pronuncia allo stesso modo?", opts: ["la mer, la mère, le maire", "le père, la paire, le pain", "la sœur, le sel, la soif", "le frère, le froid, la fraise"], a: 0, why: "Mare, madre e sindaco: tutti «mèr»." },
            { t: "match", q: "Abbina", pairs: [["notre café", "il nostro caffè"], ["vos clients", "i vostri clienti"], ["leur fille", "la loro figlia"], ["mes cousins", "i miei cugini"]] },
            { t: "type", say: "Nous sommes cousins, et maintenant tu peux me dire tu.", q: "Ascolta e completa: «Nous sommes ___, et maintenant tu peux me dire tu.» (cugini)", a: ["cousins"], why: "Cousin, non coussin (cuscino)!" }
          ]
        }
      ]
    },
    { n: 3, arr: "3e", name: "Au café", it: "Al caffè", level: "A1", soon: "Ordinare · Verbi in -er · Prezzi · I gusti" },
    { n: 4, arr: "4e", name: "En ville", it: "In città", level: "A1", soon: "I luoghi · Chiedere la strada · Aller e venir · Preposizioni" },
    { n: 5, arr: "5e", name: "Le temps", it: "Il tempo", level: "A1", soon: "L'ora · Giorni e mesi · La routine · Il meteo" },
    { n: 6, arr: "6e", name: "Voyager", it: "Viaggiare", level: "A2", soon: "Stazione e biglietti · Hotel · Futuro prossimo · Imprevisti" },
    { n: 7, arr: "7e", name: "Raconter", it: "Raccontare", level: "A2", soon: "Passé composé con avoir ed être · Il weekend · Le date" },
    { n: 8, arr: "8e", name: "Faire les courses", it: "Fare la spesa", level: "A2", soon: "Negozi e quantità · Partitivo · Taglie · Pronomi" },
    { n: 9, arr: "9e", name: "Santé", it: "Salute", level: "A2", soon: "In farmacia · Dal medico · Il corpo · Il faut" },
    { n: 10, arr: "10e", name: "Vers le B1", it: "Verso il B1", level: "A2", soon: "Imparfait · Opinioni · Comparativi · Scrivere un messaggio" }
  ]
};
