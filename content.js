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
    {
      n: 3, arr: "3e", name: "Au café", it: "Al caffè", level: "A1",
      lessons: [
        /* ---------------- LEZIONE 3-1 ---------------- */
        {
          id: "3-1", street: "Rue de la Commande", title: "Ordinare al caffè",
          goal: "Ordinare da bere e da mangiare con «je voudrais», chiedere il conto e pagare con frasi gentili e complete.",
          episode: {
            title: "Il cliente misterioso",
            intro: "Primo vero giorno di servizio al caffè. Alle otto in punto entra un signore anziano, elegantissimo, con un cappello grigio e un ombrello anche se c'è il sole. Si siede al tavolino vicino alla vetrina e guarda Croissant come se lo conoscesse da sempre.",
            lines: [
              { who: "Gigi", fr: "Bonjour monsieur, bienvenue chez nous ! Qu'est-ce que je vous sers ce matin ?", it: "Buongiorno signore, benvenuto da noi! Cosa le servo stamattina?" },
              { who: "M. Bernard", fr: "Bonjour. Je voudrais un café crème, s'il vous plaît, mais sans sucre.", it: "Buongiorno. Vorrei un caffè crème, per favore, ma senza zucchero." },
              { who: "Gigi", fr: "Très bien. Et avec ça ? Nous avons des croissants tout chauds ce matin.", it: "Benissimo. Desidera altro? Stamattina abbiamo dei croissant caldissimi." },
              { who: "M. Bernard", fr: "Un croissant, oui, et un grand verre d'eau, s'il vous plaît.", it: "Un croissant, sì, e un grande bicchiere d'acqua, per favore." },
              { who: "Croissant", fr: "Il commande un croissant. J'espère pour lui qu'il ne parle pas de moi.", it: "Ordina un croissant. Spero per lui che non stia parlando di me." },
              { who: "Léa", fr: "Voilà votre café crème, votre croissant et votre verre d'eau, monsieur.", it: "Ecco il suo caffè crème, il suo croissant e il suo bicchiere d'acqua, signore." },
              { who: "M. Bernard", fr: "Merci, mademoiselle. L'addition, s'il vous plaît, je suis un peu pressé.", it: "Grazie, signorina. Il conto, per favore, ho un po' fretta." },
              { who: "Gigi", fr: "Ça fait cinq euros. Vous payez par carte ou en espèces ?", it: "Sono cinque euro. Paga con la carta o in contanti?" },
              { who: "M. Bernard", fr: "En espèces. Gardez la monnaie… et regardez bien sous la tasse, jeune homme.", it: "In contanti. Tenga il resto… e guardi bene sotto la tazza, giovanotto." }
            ],
            outro: "Sotto la tazza c'è un biglietto scritto a mano: «La clé au ruban bleu ouvre une porte verte, rue Charlot, dans le 3e. Un ami de Zizì.» Gigi corre fuori, ma il signore col cappello grigio è già sparito tra la folla. Croissant, per una volta, non fa battute.",
            you: "«{nome}, al bar ti basta una formula magica: «Je voudrais…, s'il vous plaît». Con quella ordini tutto, dal caffè al croissant. Purché il croissant non sia io.»",
            mine: { fr: "Bonjour, je m'appelle {nome} et je voudrais un grand café crème, s'il vous plaît.", it: "Buongiorno, mi chiamo {nome} e vorrei un grande caffè crème, per favore." }
          },
          words: [
            { fr: "je voudrais", it: "vorrei", say: "jə vudrè", hook: "VOUDRAIS sembra «voglio dire» sussurrato con educazione: è il «vorrei» gentile. Al bar non dire mai «je veux» (voglio): suona come un bambino capriccioso.",
              ex: { fr: "Je voudrais un café et deux croissants, s'il vous plaît, pour emporter.", it: "Vorrei un caffè e due croissant, per favore, da portare via." } },
            { fr: "un café", it: "un caffè (espresso)", say: "ẽ kafé", hook: "In Francia «un café» è già un espresso: piccolo e forte. Niente sorprese, ma niente schiuma.",
              ex: { fr: "Le matin, je bois toujours un café très serré avant de commencer le travail.", it: "La mattina bevo sempre un caffè molto ristretto prima di cominciare a lavorare." } },
            { fr: "un café crème", it: "caffè con latte schiumato", say: "kafé krèm", hook: "CRÈME come la crema: è il «cappuccino» dei francesi, un caffè coperto da una nuvola di crema di latte.",
              ex: { fr: "Un café crème et un croissant au beurre : c'est le petit-déjeuner parisien classique.", it: "Un caffè crème e un croissant al burro: è la colazione parigina classica." } },
            { fr: "un thé", it: "un tè", say: "ẽ té", hook: "THÉ si legge proprio «tè», come in italiano: la H è solo decorativa, come il mignolo alzato di chi beve il tè.",
              ex: { fr: "Ma grand-mère prend un thé au citron tous les après-midi à quatre heures.", it: "Mia nonna prende un tè al limone tutti i pomeriggi alle quattro." } },
            { fr: "l'eau", it: "l'acqua", say: "lò", hook: "EAU: tre lettere per un solo suono, «o». Come la bocca che fa «oh!» davanti a un bicchiere d'acqua fresca. È femminile: une carafe d'eau.",
              ex: { fr: "Vous pouvez nous apporter une carafe d'eau, s'il vous plaît ? Il fait très chaud.", it: "Può portarci una caraffa d'acqua, per favore? Fa molto caldo." } },
            { fr: "avec / sans", it: "con / senza", say: "avèk / sã", hook: "AVEC suona come «ha vecchio»: vai al bar CON il tuo vecchio amico. SANS somiglia a «senza» se lo dici col naso chiuso: sã.",
              ex: { fr: "Je prends mon café avec un peu de lait, mais sans sucre, merci.", it: "Prendo il caffè con un po' di latte, ma senza zucchero, grazie." } },
            { fr: "la carte", it: "il menù", say: "la kart", hook: "LA CARTE è il menù, il foglio di carta con tutti i piatti. Attenzione: «le menu» in Francia è il menù fisso a prezzo unico!",
              ex: { fr: "Excusez-moi, est-ce que je peux voir la carte des desserts, s'il vous plaît ?", it: "Mi scusi, posso vedere il menù dei dolci, per favore?" } },
            { fr: "l'addition", it: "il conto", say: "ladisjõ", hook: "L'ADDITION: il cameriere fa l'ADDIZIONE di tutto quello che hai preso. Ecco il conto!",
              ex: { fr: "L'addition, s'il vous plaît : nous avons un train à onze heures.", it: "Il conto, per favore: abbiamo un treno alle undici." } },
            { fr: "Et avec ça ?", it: "Desidera altro?", say: "e avèk sa", hook: "Letteralmente «e con questo?»: lo dicono tutti i camerieri e i commessi. Rispondi «C'est tout, merci» (è tutto, grazie).",
              ex: { fr: "Et avec ça, madame ? — C'est tout, merci, je suis au régime !", it: "Desidera altro, signora? — È tutto, grazie, sono a dieta!" } },
            { fr: "le serveur / la serveuse", it: "il cameriere / la cameriera", say: "sèrvör / sèrvöz", hook: "SERVEUR: quello che SERVE. Per chiamarlo non dire «garçon!», è maleducato: alza la mano e di' «S'il vous plaît !».",
              ex: { fr: "Le serveur arrive avec un plateau plein de tasses, de verres et de croissants.", it: "Il cameriere arriva con un vassoio pieno di tazze, bicchieri e croissant." } },
            { fr: "pour emporter / sur place", it: "da portare via / al tavolo", say: "pur ãporté / sür plas", hook: "EM-PORTER: «portare via» con te. SUR PLACE: «sul posto», resti seduto al tavolino a guardare Parigi.",
              ex: { fr: "C'est pour emporter ou sur place ? — Sur place, je ne suis pas pressé.", it: "È da portare via o lo consuma qui? — Qui, non ho fretta." } }
          ],
          tip: {
            title: "La formula magica: «Je voudrais…, s'il vous plaît»",
            body: "<div class='tbl'><table><thead><tr><th>Momento</th><th>Tu dici</th><th>Il cameriere dice</th></tr></thead><tbody><tr><td>Ordinare</td><td><b>Je voudrais</b> un café. / <b>Pour moi</b>, un thé.</td><td>Qu'est-ce que je vous sers ?</td></tr><tr><td>Aggiungere</td><td>Et aussi un croissant.</td><td>Et avec ça ?</td></tr><tr><td>Finire</td><td><b>C'est tout</b>, merci.</td><td>Sur place ou à emporter ?</td></tr><tr><td>Pagare</td><td><b>L'addition</b>, s'il vous plaît.</td><td>Ça fait cinq euros.</td></tr><tr><td>Come pagare</td><td>Par carte. / En espèces.</td><td>Vous payez comment ?</td></tr></tbody></table></div><ul><li><b>Je voudrais</b> è il condizionale di «vouloir»: gentile e sempre giusto. «Je veux» al bar suona brusco.</li><li><b>Un café</b> è un espresso. Per il cappuccino chiedi <b>un café crème</b>; per un caffè lungo, <b>un café allongé</b>.</li><li>La <b>carafe d'eau</b> (acqua del rubinetto) è gratuita per legge: chiedila senza paura.</li><li>Il servizio è già incluso nel prezzo: la mancia è un gesto gentile, non un obbligo.</li></ul>",
            examples: [
              { fr: "Je voudrais un café crème et un pain au chocolat, s'il vous plaît.", it: "Vorrei un caffè crème e un pain au chocolat, per favore." },
              { fr: "Pour moi, un thé à la menthe, et pour mon amie, un jus d'orange.", it: "Per me un tè alla menta, e per la mia amica un succo d'arancia." },
              { fr: "C'est tout, merci. Je peux payer par carte ?", it: "È tutto, grazie. Posso pagare con la carta?" },
              { fr: "Excusez-moi, nous voudrions aussi une carafe d'eau, s'il vous plaît.", it: "Mi scusi, vorremmo anche una caraffa d'acqua, per favore." },
              { fr: "L'addition, s'il vous plaît. Le café était délicieux.", it: "Il conto, per favore. Il caffè era delizioso." },
              { fr: "Un croissant pour emporter, et un café sur place.", it: "Un croissant da portare via e un caffè da bere qui." }
            ]
          },
          practice: [
            { t: "mcq", q: "Qual è il modo gentile di ordinare al bar?", opts: ["Je voudrais un café, s'il vous plaît.", "Je veux un café.", "Donne-moi un café.", "Café, garçon !"], a: 0, why: "Je voudrais = vorrei: la formula magica." },
            { t: "mcq", q: "Il cameriere ti chiede «Et avec ça ?». Cosa significa?", opts: ["Desidera altro?", "Con cosa paga?", "Con chi è?", "Va bene così?"], a: 0, why: "Et avec ça? = e con questo? Rispondi «C'est tout, merci»." },
            { t: "listen", say: "Je prends mon café avec un peu de lait, mais sans sucre, merci.", q: "Cosa hai sentito?", opts: ["Prendo il caffè con un po' di latte, ma senza zucchero, grazie.", "Prendo il caffè senza latte, ma con un po' di zucchero, grazie.", "Prendo il tè con il latte e lo zucchero, grazie.", "Non prendo il caffè, solo latte, grazie."], a: 0, why: "Avec = con, sans = senza." },
            { t: "match", q: "Abbina", pairs: [["l'addition", "il conto"], ["la carte", "il menù"], ["l'eau", "l'acqua"], ["le serveur", "il cameriere"]] },
            { t: "order", q: "Riordina: «Vorrei un caffè crème, per favore.»", words: ["Je", "voudrais", "un", "café", "crème,", "s'il", "vous", "plaît."], why: "Je voudrais + quello che vuoi + s'il vous plaît." }
          ],
          test: [
            { t: "mcq", q: "In un caffè francese, «un café» è…", opts: ["un espresso", "un cappuccino", "un caffè americano", "un caffè con panna"], a: 0, why: "Un café = espresso. Il cappuccino è un café crème." },
            { t: "mcq", q: "Come chiedi il conto?", opts: ["L'addition, s'il vous plaît.", "La carte, s'il vous plaît.", "Le compte, s'il vous plaît.", "La note, merci beaucoup."], a: 0, why: "L'addition: il cameriere fa l'addizione." },
            { t: "mcq", q: "«C'est pour emporter ou sur place ?» Vuoi sederti al tavolino. Rispondi:", opts: ["Sur place, s'il vous plaît.", "Pour emporter, merci.", "En espèces, merci.", "Avec du sucre."], a: 0, why: "Sur place = sul posto, al tavolo." },
            { t: "mcq", q: "Come si chiama educatamente il cameriere?", opts: ["S'il vous plaît !", "Garçon !", "Eh, toi !", "Serveur, vite !"], a: 0, why: "«Garçon!» è considerato maleducato: basta «S'il vous plaît!»." },
            { t: "listen", say: "Merci, mademoiselle. L'addition, s'il vous plaît, je suis un peu pressé.", q: "Cosa hai sentito?", opts: ["Grazie, signorina. Il conto, per favore, ho un po' fretta.", "Grazie, signorina. Il menù, per favore, ho molta fame.", "Grazie, signora. Un caffè, per favore, sono stanco.", "Grazie, signorina. Il conto lo pago domani."], a: 0, why: "L'addition = il conto; pressé = di fretta." },
            { t: "listen", say: "Vous pouvez nous apporter une carafe d'eau, s'il vous plaît ? Il fait très chaud.", q: "Cosa chiede il cliente?", opts: ["Una caraffa d'acqua, perché fa molto caldo.", "Una bottiglia di vino, perché è una festa.", "Un caffè caldo, perché fa freddo.", "Il menù dei dolci, perché ha fame."], a: 0, why: "Eau = acqua; la carafe d'eau è gratuita." },
            { t: "type", q: "Completa: «Je ___ un thé au citron, s'il vous plaît.» (vorrei)", a: ["voudrais"], why: "Je voudrais = vorrei." },
            { t: "type", q: "Completa: «Un café ___ sucre, merci.» (senza)", a: ["sans"], why: "Sans = senza; avec = con." },
            { t: "type", say: "Et avec ça, madame ? C'est tout, merci.", q: "Ascolta e completa: «Et avec ça, madame ? — C'est ___, merci.»", a: ["tout"], why: "C'est tout = è tutto." },
            { t: "order", q: "Riordina: «Il conto, per favore, ho un po' fretta.»", words: ["L'addition,", "s'il", "vous", "plaît,", "je", "suis", "un", "peu", "pressé."], why: "Je suis pressé = sono di fretta (être!)." },
            { t: "match", q: "Abbina", pairs: [["avec", "con"], ["sans", "senza"], ["par carte", "con la carta"], ["en espèces", "in contanti"]] },
            { t: "mcq", q: "Quale frase NON useresti per ordinare?", opts: ["Ça fait cinq euros.", "Pour moi, un café.", "Je voudrais un croissant.", "Et aussi un jus d'orange."], a: 0, why: "«Ça fait cinq euros» lo dice chi incassa: sono cinque euro." }
          ]
        },
        /* ---------------- LEZIONE 3-2 ---------------- */
        {
          id: "3-2", street: "Rue des Verbes", title: "I verbi in -er: parlare, cercare, trovare",
          goal: "Coniugare al presente i verbi in -er (quasi tutti i verbi francesi) e usarli per raccontare cosa fai e cosa cerchi.",
          episode: {
            title: "La porta verde di rue Charlot",
            intro: "Domenica mattina il caffè è chiuso. Gigi, Léa e Croissant (dentro una borsa di tela, offesissimo) prendono il metrò fino al Marais, nel 3° arrondissement. Rue Charlot è piena di botteghe antiche, ma di porte verdi ce ne sono almeno dieci. Davanti a una piccola drogheria c'è un signore con il grembiule che li osserva incuriosito.",
            lines: [
              { who: "Léa", fr: "Bonjour monsieur ! Nous cherchons une vieille boutique. Vous habitez ici depuis longtemps ?", it: "Buongiorno signore! Cerchiamo una vecchia bottega. Abita qui da tanto tempo?" },
              { who: "M. Karim", fr: "Oui, j'habite et je travaille dans cette rue depuis vingt ans.", it: "Sì, abito e lavoro in questa strada da vent'anni." },
              { who: "Gigi", fr: "Nous cherchons une porte verte qui va avec cette clé au ruban bleu.", it: "Cerchiamo una porta verde che vada con questa chiave dal nastro blu." },
              { who: "M. Karim", fr: "Ce ruban bleu… Ici, les anciens parlent encore de la confiserie de Zizì !", it: "Questo nastro blu… Qui gli anziani parlano ancora della confetteria di Zizì!" },
              { who: "Gigi", fr: "Zizì ? C'est ma grand-tante ! Vous trouvez ça incroyable aussi, non ?", it: "Zizì? È la mia prozia! Anche lei lo trova incredibile, no?" },
              { who: "M. Karim", fr: "Regardez, c'est la porte verte en face. Elle est fermée depuis très longtemps.", it: "Guardate, è la porta verde qui di fronte. È chiusa da tantissimo tempo." },
              { who: "Croissant", fr: "Vous cherchez, vous parlez, vous regardez… Et moi, je mange quand, exactement ?", it: "Voi cercate, parlate, guardate… E io, esattamente, quando mangio?" },
              { who: "Léa", fr: "Gigi, écoute ! La clé tourne dans la serrure… La porte s'ouvre !", it: "Gigi, ascolta! La chiave gira nella serratura… La porta si apre!" },
              { who: "Gigi", fr: "Incroyable : des bocaux de bonbons partout, et un vieux carnet sur le comptoir.", it: "Incredibile: barattoli di caramelle dappertutto, e un vecchio quaderno sul bancone." }
            ],
            outro: "Sotto la polvere, l'insegna dice ancora «Au Petit Bonheur». Il quaderno sul bancone ha la copertina blu, come il nastro, e sulla prima pagina c'è scritto: «Les recettes de Zizì». La prima ricetta è una torta di mele. Croissant annusa il bancone e, per la prima volta, fa le fusa.",
            you: "«{nome}, hai notato? Quasi tutti i verbi della puntata finiscono in -ER: chercher, parler, habiter, regarder. Ottima notizia: si coniugano tutti allo stesso modo, e quattro forme su sei si pronunciano uguali!»",
            mine: { fr: "Je m'appelle {nome}, j'habite en Italie et j'aime beaucoup parler français avec mes amis.", it: "Mi chiamo {nome}, abito in Italia e mi piace molto parlare francese con i miei amici." }
          },
          words: [
            { fr: "parler", it: "parlare", say: "parlé", hook: "PARLER è «parlare» che ha perso la A finale ed è diventato elegante: parlé. Je parle, tu parles, il parle: si pronunciano tutti «parl».",
              ex: { fr: "Dans ce quartier, les gens parlent français, chinois, arabe et même italien.", it: "In questo quartiere la gente parla francese, cinese, arabo e perfino italiano." } },
            { fr: "habiter", it: "abitare", say: "abité", hook: "HABITER = abitare con un cappellino H che non si pronuncia. Siccome la H è muta, si dice J'HABITE con l'apostrofo.",
              ex: { fr: "J'habite dans un petit appartement au troisième étage, sans ascenseur.", it: "Abito in un piccolo appartamento al terzo piano, senza ascensore." } },
            { fr: "travailler", it: "lavorare", say: "travajé", hook: "TRAVAILLER somiglia a «travagliare»: in effetti a volte lavorare è un bel travaglio! La doppia L si legge come una «i».",
              ex: { fr: "Léa travaille au café le matin et elle étudie à l'université le soir.", it: "Léa lavora al caffè la mattina e studia all'università la sera." } },
            { fr: "chercher", it: "cercare", say: "shèrshé", hook: "CHERCHER = CERCARE, ma la CH si legge «sc» come in «scena»: scèr-scé. Ti sembra di cercare zittendo qualcuno: sccc!",
              ex: { fr: "Nous cherchons une porte verte avec une vieille serrure en cuivre.", it: "Cerchiamo una porta verde con una vecchia serratura di rame." } },
            { fr: "trouver", it: "trovare", say: "truvé", hook: "TROUVER = TROVARE, con OU che si legge «u». Chi cerca (cherche) trova (trouve): stesso proverbio, stessa logica.",
              ex: { fr: "Je cherche mes clés partout, mais je ne trouve jamais rien le matin.", it: "Cerco le chiavi dappertutto, ma la mattina non trovo mai niente." } },
            { fr: "aimer", it: "amare / piacere", say: "èmé", hook: "AIMER vuol dire sia amare sia «piacere»: j'aime le café = mi piace il caffè; je t'aime = ti amo. Occhio al contesto, o dichiarerai amore a una baguette!",
              ex: { fr: "J'aime beaucoup ce quartier, ses petites rues et ses vieilles boutiques.", it: "Mi piace molto questo quartiere, le sue stradine e le sue vecchie botteghe." } },
            { fr: "manger", it: "mangiare", say: "mãjé", hook: "MANGER = MANGIARE senza la I. Con NOUS aggiunge una E: nous mangEons, per non perdere il suono dolce della G.",
              ex: { fr: "Le dimanche, nous mangeons tous ensemble chez ma grand-mère.", it: "La domenica mangiamo tutti insieme da mia nonna." } },
            { fr: "regarder", it: "guardare", say: "rəgardé", hook: "REGARDER = GUARDARE con un «re» davanti. Regarde ! = Guarda! Lo dirai mille volte a Parigi, col naso all'insù.",
              ex: { fr: "Regarde, Gigi : il y a un vieux nom écrit au-dessus de la porte !", it: "Guarda, Gigi: c'è un vecchio nome scritto sopra la porta!" } },
            { fr: "écouter", it: "ascoltare", say: "ekuté", hook: "ÉCOUTER sembra «scoutare»: gli scout ASCOLTANO i rumori del bosco. La É iniziale spesso sostituisce una S italiana: école = scuola, étoile = stella.",
              ex: { fr: "J'écoute la radio française en voiture pour améliorer ma prononciation.", it: "Ascolto la radio francese in macchina per migliorare la pronuncia." } },
            { fr: "fermé / ouvert", it: "chiuso / aperto", say: "fèrmé / uvèr", hook: "FERMÉ: il negozio si è FERMATO, è chiuso. OUVERT: aperto, come una bocca che dice «uuh». Li vedrai su ogni porta di Parigi.",
              ex: { fr: "Le dimanche, beaucoup de boutiques sont fermées, mais les boulangeries sont ouvertes.", it: "La domenica molti negozi sono chiusi, ma le panetterie sono aperte." } },
            { fr: "depuis", it: "da (tempo)", say: "dəpüi", hook: "DEPUIS = «da» per il tempo: j'habite ici depuis vingt ans = abito qui da vent'anni. Si usa il presente, proprio come in italiano.",
              ex: { fr: "Cette boutique est fermée depuis très longtemps, et personne ne sait pourquoi.", it: "Questa bottega è chiusa da tantissimo tempo, e nessuno sa perché." } }
          ],
          tip: {
            title: "I verbi in -ER: una sola regola per migliaia di verbi",
            body: "<div class='tbl'><table><thead><tr><th></th><th>parler</th><th>si pronuncia</th></tr></thead><tbody><tr><td>je</td><td>parl<b>e</b></td><td>parl</td></tr><tr><td>tu</td><td>parl<b>es</b></td><td>parl</td></tr><tr><td>il / elle</td><td>parl<b>e</b></td><td>parl</td></tr><tr><td>nous</td><td>parl<b>ons</b></td><td>parlõ</td></tr><tr><td>vous</td><td>parl<b>ez</b></td><td>parlé</td></tr><tr><td>ils / elles</td><td>parl<b>ent</b></td><td>parl</td></tr></tbody></table></div><ul><li>Togli <b>-er</b> e aggiungi <b>-e, -es, -e, -ons, -ez, -ent</b>. Vale per circa il 90% dei verbi francesi.</li><li><b>Trappola:</b> la desinenza <b>-ent</b> di «ils parlent» è muta! Si dice «il parl», non «il parlent».</li><li>Davanti a vocale o H muta, <b>je</b> diventa <b>j'</b>: j'aime, j'habite, j'écoute.</li><li>Con la liaison il plurale si sente: ils‿aiment (il-zèm), nous‿habitons (nu-zabitõ).</li><li>Verbi in -ger aggiungono una E con nous: nous mangeons, nous voyageons.</li></ul>",
            examples: [
              { fr: "Je cherche la porte verte, mais je ne trouve pas la rue.", it: "Cerco la porta verde, ma non trovo la strada." },
              { fr: "Tu parles français avec un joli accent italien.", it: "Parli francese con un bell'accento italiano." },
              { fr: "Nous habitons à Paris, mais nous travaillons en banlieue.", it: "Abitiamo a Parigi, ma lavoriamo in periferia." },
              { fr: "Vous écoutez souvent de la musique française ?", it: "Ascoltate spesso musica francese?" },
              { fr: "Ils aiment le quartier et ils mangent toujours au même restaurant.", it: "Amano il quartiere e mangiano sempre allo stesso ristorante." },
              { fr: "Elle regarde les vieilles photos et elle trouve une lettre de Zizì.", it: "Guarda le vecchie foto e trova una lettera di Zizì." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Nous ___ une porte verte.» (cercare)", opts: ["cherchons", "cherchez", "cherchent", "cherche"], a: 0, why: "Nous → -ons: nous cherchons." },
            { t: "mcq", q: "Come si pronuncia «ils parlent»?", opts: ["il parl", "il parlènt", "il parlã", "il parlé"], a: 0, why: "La desinenza -ent è muta!" },
            { t: "listen", say: "J'habite dans un petit appartement au troisième étage, sans ascenseur.", q: "Cosa hai sentito?", opts: ["Abito in un piccolo appartamento al terzo piano, senza ascensore.", "Abito in una grande casa al primo piano, con ascensore.", "Lavoro in un piccolo ufficio al terzo piano, senza finestre.", "Cerco un piccolo appartamento al terzo piano, con ascensore."], a: 0, why: "J'habite = abito; sans = senza." },
            { t: "match", q: "Abbina", pairs: [["chercher", "cercare"], ["trouver", "trovare"], ["regarder", "guardare"], ["écouter", "ascoltare"]] },
            { t: "order", q: "Riordina: «Abito e lavoro in questa strada da vent'anni.»", words: ["J'habite", "et", "je", "travaille", "dans", "cette", "rue", "depuis", "vingt", "ans."], why: "Depuis + presente, come in italiano." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Vous ___ français très bien !» (parlare)", opts: ["parlez", "parlons", "parlent", "parles"], a: 0, why: "Vous → -ez: vous parlez." },
            { t: "mcq", q: "Completa: «Léa ___ au café le matin.» (lavorare)", opts: ["travaille", "travailles", "travaillons", "travaillent"], a: 0, why: "Elle → -e: elle travaille." },
            { t: "mcq", q: "Quale forma è giusta?", opts: ["J'aime le café.", "Je aime le café.", "J'aimes le café.", "Je aimer le café."], a: 0, why: "Je + vocale = j'; con je la desinenza è -e." },
            { t: "mcq", q: "«Le dimanche, beaucoup de boutiques sont fermées.» Significa…", opts: ["La domenica molti negozi sono chiusi.", "La domenica molti negozi sono aperti.", "Il lunedì molti negozi sono chiusi.", "La domenica molte botteghe sono piene."], a: 0, why: "Fermé = chiuso, ouvert = aperto." },
            { t: "mcq", q: "Completa: «Le dimanche, nous ___ chez ma grand-mère.» (mangiare)", opts: ["mangeons", "mangons", "mangez", "mangent"], a: 0, why: "Manger con nous prende la E: nous mangeons." },
            { t: "listen", say: "Ce ruban bleu… Ici, les anciens parlent encore de la confiserie de Zizì !", q: "Cosa hai sentito?", opts: ["Questo nastro blu… Qui gli anziani parlano ancora della confetteria di Zizì!", "Questa chiave blu… Qui i bambini cercano ancora la casa di Zizì!", "Questo nastro rosso… Qui nessuno parla più di Zizì!", "Questa porta blu… Qui gli anziani abitano ancora con Zizì!"], a: 0, why: "Ils parlent: la -ent non si sente." },
            { t: "listen", say: "Je cherche mes clés partout, mais je ne trouve jamais rien le matin.", q: "Cosa hai sentito?", opts: ["Cerco le chiavi dappertutto, ma la mattina non trovo mai niente.", "Trovo sempre le chiavi la mattina, ma non cerco mai niente.", "Cerco le chiavi solo la sera, e le trovo sempre.", "Ho perso le chiavi di casa questa mattina."], a: 0, why: "Chercher = cercare, trouver = trovare." },
            { t: "type", q: "Completa: «Tu ___ la radio française ?» (ascoltare)", a: ["écoutes", "ecoutes"], why: "Tu → -es: tu écoutes." },
            { t: "type", q: "Completa: «Ils ___ beaucoup le quartier.» (amare)", a: ["aiment"], why: "Ils → -ent (muta): ils aiment, con la liaison il-zèm." },
            { t: "type", say: "Cette boutique est fermée depuis très longtemps.", q: "Ascolta e completa: «Cette boutique est fermée ___ très longtemps.»", a: ["depuis"], why: "Depuis = da (tempo)." },
            { t: "order", q: "Riordina: «Cerchiamo una porta verde in questa strada.»", words: ["Nous", "cherchons", "une", "porte", "verte", "dans", "cette", "rue."], why: "Nous cherchons: -ons con nous." },
            { t: "match", q: "Abbina", pairs: [["je parle", "io parlo"], ["nous parlons", "noi parliamo"], ["vous parlez", "voi parlate"], ["ils parlent", "loro parlano"]] }
          ]
        },
        /* ---------------- LEZIONE 3-3 ---------------- */
        {
          id: "3-3", street: "Rue des Prix", title: "I numeri fino a 100 e i prezzi",
          goal: "Contare fino a 100, capire i prezzi al mercato e chiedere quanto costa qualcosa senza perderti nei conti alla francese.",
          episode: {
            title: "Il mercato dei Bambini Rossi",
            intro: "Per la torta di mele di Zizì servono ingredienti freschi. Léa porta Gigi al Marché des Enfants Rouges, il mercato coperto più antico di Parigi, a due passi dalla bottega. Tra banchi di frutta, formaggi e cucine di mezzo mondo, una venditrice con il cappello di paglia sistema una montagna di mele.",
            lines: [
              { who: "Gigi", fr: "Bonjour madame ! Combien coûtent ces belles pommes rouges, s'il vous plaît ?", it: "Buongiorno signora! Quanto costano queste belle mele rosse, per favore?" },
              { who: "Mme Rose", fr: "Trois euros quarante le kilo. Elles sont bien sucrées, parfaites pour une tarte.", it: "Tre euro e quaranta al chilo. Sono belle dolci, perfette per una torta." },
              { who: "Gigi", fr: "Parfait ! Je voudrais deux kilos de pommes et six œufs bien frais.", it: "Perfetto! Vorrei due chili di mele e sei uova freschissime." },
              { who: "Mme Rose", fr: "Voilà. Avec le beurre et la farine, ça fait douze euros cinquante.", it: "Ecco qua. Con il burro e la farina, sono dodici euro e cinquanta." },
              { who: "Léa", fr: "Douze euros cinquante ? Dans le carnet de Zizì, tout coûte beaucoup moins cher !", it: "Dodici euro e cinquanta? Nel quaderno di Zizì costa tutto molto meno!" },
              { who: "Mme Rose", fr: "Bien sûr, ma petite : à l'époque de Zizì, on payait en francs, pas en euros !", it: "Certo, piccola mia: ai tempi di Zizì si pagava in franchi, non in euro!" },
              { who: "Croissant", fr: "Soixante-dix, quatre-vingts, quatre-vingt-dix… Les Français comptent comme des comptables fous.", it: "Sessanta più dieci, quattro volte venti, quattro volte venti più dieci… I francesi contano come ragionieri impazziti." },
              { who: "Gigi", fr: "J'ai seulement un billet de vingt euros. Vous avez la monnaie, madame ?", it: "Ho solo una banconota da venti euro. Ha il resto, signora?" },
              { who: "Mme Rose", fr: "Pas de problème. Je vous rends sept euros cinquante. Et ce ruban bleu… c'est celui de Zizì ?", it: "Nessun problema. Le do sette euro e cinquanta di resto. E questo nastro blu… è quello di Zizì?" }
            ],
            outro: "Mme Rose sorride: da bambina comprava le caramelle «Au Petit Bonheur» con dieci centesimi di franco, e Zizì le regalava sempre un bonbon in più. «Se riaprite la bottega», dice, «io sarò la vostra prima cliente.» Gigi torna a casa con le mele, le uova e un'idea che gli frulla in testa.",
            you: "«{nome}, al mercato il difficile non è comprare: è capire i prezzi! Dopo il 60 i francesi fanno i conti: 70 = 60 + 10, 80 = 4 × 20, 90 = 4 × 20 + 10. Nel mio trucco ti spiego come non impazzire.»",
            mine: { fr: "Je m'appelle {nome}, j'ai {eta} ans et je voudrais un kilo de pommes, s'il vous plaît.", it: "Mi chiamo {nome}, ho {eta} anni e vorrei un chilo di mele, per favore." }
          },
          words: [
            { fr: "vingt / trente", it: "20 / 30", say: "vẽ / trãt", hook: "VINGT si legge «vẽ», come chi ha VINTO e lo dice col naso: la G e la T sono mute. TRENTE è quasi trenta, con la nasale.",
              ex: { fr: "Ce petit panier de fraises coûte vingt euros ? C'est vraiment beaucoup trop cher !", it: "Questo cestino di fragole costa venti euro? È davvero troppo caro!" } },
            { fr: "quarante / cinquante", it: "40 / 50", say: "karãt / sẽkãt", hook: "Quasi come in italiano: quaranta → quarante, cinquanta → cinquante. Basta mettere il naso al posto della A finale.",
              ex: { fr: "Mon père a cinquante ans, mais il court comme un garçon de vingt ans.", it: "Mio padre ha cinquant'anni, ma corre come un ragazzo di venti." } },
            { fr: "soixante", it: "60", say: "swasãt", hook: "SOIXANTE: la X si legge S, «suasãt». Pensa a un «soave santo» di sessant'anni che conta i soldi con calma.",
              ex: { fr: "Ma voisine a soixante ans et elle travaille encore tous les jours au marché.", it: "La mia vicina ha sessant'anni e lavora ancora tutti i giorni al mercato." } },
            { fr: "soixante-dix", it: "70", say: "swasãt-dis", hook: "Il 70 in Francia non esiste! Si dice 60 + 10: SOIXANTE-DIX. E 71 = 60 + 11: soixante et onze.",
              ex: { fr: "Le bus soixante-dix passe devant le marché toutes les dix minutes.", it: "L'autobus settanta passa davanti al mercato ogni dieci minuti." } },
            { fr: "quatre-vingts", it: "80", say: "katrə-vẽ", hook: "80 = QUATRE-VINGTS, quattro volte venti: i francesi contano ancora come gli antichi Galli, sulle dita di mani e piedi!",
              ex: { fr: "La vieille dame du troisième étage a quatre-vingts ans et beaucoup d'énergie.", it: "L'anziana signora del terzo piano ha ottant'anni e tantissima energia." } },
            { fr: "quatre-vingt-dix", it: "90", say: "katrə-vẽ-dis", hook: "90 = 4 × 20 + 10. Lungo, ma logico. In Belgio e in Svizzera dicono «nonante»: molto più facile, ma a Parigi ti guarderanno storto.",
              ex: { fr: "Le carnet de recettes de Zizì a quatre-vingt-dix pages écrites à la main.", it: "Il quaderno di ricette di Zizì ha novanta pagine scritte a mano." } },
            { fr: "cent", it: "100", say: "sã", hook: "CENT è «cento» senza la O, e la T è muta: sã. Come un sospiro di sollievo: finalmente cento, finiti i conti!",
              ex: { fr: "Ce billet de cent euros est trop gros pour payer un simple café.", it: "Questa banconota da cento euro è troppo grossa per pagare un semplice caffè." } },
            { fr: "Combien ça coûte ?", it: "Quanto costa?", say: "kõbjẽ sa kut", hook: "COMBIEN: «come bene?» chiede il cliente furbo. COÛTE = costa: il cappellino sulla U ricorda la S scomparsa di «costa».",
              ex: { fr: "Excusez-moi, combien coûtent ces tomates et ces belles courgettes ?", it: "Mi scusi, quanto costano questi pomodori e queste belle zucchine?" } },
            { fr: "l'euro / le centime", it: "l'euro / il centesimo", say: "lörò / sãtìm", hook: "In un prezzo si dice «trois euros quarante» (3,40 €): prima gli euro, poi i centesimi, senza «e». Con la liaison: deux‿euros (dö-zörò).",
              ex: { fr: "Ça fait trois euros et vingt centimes. Vous avez la monnaie, s'il vous plaît ?", it: "Sono tre euro e venti centesimi. Ha gli spiccioli, per favore?" } },
            { fr: "cher / pas cher", it: "caro / economico", say: "shèr / pa shèr", hook: "CHER = caro, sia per i prezzi sia per le persone (mon cher ami). Per dire «economico» basta PAS CHER: non caro.",
              ex: { fr: "Ce marché n'est pas cher, et les produits sont frais et délicieux.", it: "Questo mercato non è caro, e i prodotti sono freschi e deliziosi." } },
            { fr: "un kilo de…", it: "un chilo di…", say: "ẽ kilò də", hook: "Dopo una quantità si usa sempre DE, senza articolo: un kilo DE pommes, une bouteille D'eau, beaucoup DE fromage.",
              ex: { fr: "Je voudrais un kilo de pommes, une douzaine d'œufs et un peu de beurre.", it: "Vorrei un chilo di mele, una dozzina di uova e un po' di burro." } }
          ],
          tip: {
            title: "Da 20 a 100: i conti alla francese",
            body: "<div class='tbl'><table><thead><tr><th>Numero</th><th>Francese</th><th>Come ragionano</th></tr></thead><tbody><tr><td>20</td><td>vingt</td><td>20</td></tr><tr><td>21</td><td>vingt et un</td><td>20 e 1</td></tr><tr><td>22</td><td>vingt-deux</td><td>20-2</td></tr><tr><td>30 / 40 / 50</td><td>trente / quarante / cinquante</td><td>come in italiano</td></tr><tr><td>60</td><td>soixante</td><td>60</td></tr><tr><td>70</td><td>soixante-dix</td><td>60 + 10</td></tr><tr><td>71</td><td>soixante et onze</td><td>60 + 11</td></tr><tr><td>80</td><td>quatre-vingts</td><td>4 × 20</td></tr><tr><td>81</td><td>quatre-vingt-un</td><td>4 × 20 + 1</td></tr><tr><td>90</td><td>quatre-vingt-dix</td><td>4 × 20 + 10</td></tr><tr><td>99</td><td>quatre-vingt-dix-neuf</td><td>4 × 20 + 19</td></tr><tr><td>100</td><td>cent</td><td>100</td></tr></tbody></table></div><ul><li>Con 21, 31, 41, 51, 61 e 71 si usa <b>et</b>: vingt et un, soixante et onze. Negli altri casi il trattino.</li><li><b>Quatre-vingts</b> prende la S solo quando è da solo: quatre-vingts, ma quatre-vingt-trois.</li><li><b>Prezzi:</b> 3,40 € si legge «trois euros quarante»; 12,50 € «douze euros cinquante».</li><li><b>Trucco per il 70-99:</b> quando senti «soixante» o «quatre-vingt», aspetta la fine del numero prima di scrivere!</li></ul>",
            examples: [
              { fr: "Les pommes coûtent trois euros quarante le kilo.", it: "Le mele costano tre euro e quaranta al chilo." },
              { fr: "Ma grand-mère a quatre-vingt-deux ans et elle cuisine encore tous les jours.", it: "Mia nonna ha ottantadue anni e cucina ancora tutti i giorni." },
              { fr: "Il y a soixante-quinze marches pour arriver chez moi.", it: "Ci sono settantacinque gradini per arrivare a casa mia." },
              { fr: "Ce sac coûte quatre-vingt-dix-neuf euros : c'est trop cher pour moi.", it: "Questa borsa costa novantanove euro: è troppo cara per me." },
              { fr: "Combien coûte un café en terrasse à Paris ? Environ trois euros.", it: "Quanto costa un caffè all'aperto a Parigi? Circa tre euro." },
              { fr: "Je vous dois combien ? — Vingt et un euros, s'il vous plaît.", it: "Quanto le devo? — Ventun euro, per favore." }
            ]
          },
          practice: [
            { t: "mcq", q: "Come si dice 70?", opts: ["soixante-dix", "septante", "sept-dix", "soixante"], a: 0, why: "70 = 60 + 10. «Septante» si usa in Belgio e Svizzera." },
            { t: "mcq", q: "«Quatre-vingts» è…", opts: ["80", "24", "40", "90"], a: 0, why: "4 × 20 = 80." },
            { t: "listen", say: "Trois euros quarante le kilo. Elles sont bien sucrées, parfaites pour une tarte.", q: "Quanto costano le mele?", opts: ["3,40 € al chilo", "4,30 € al chilo", "3,14 € al chilo", "13,40 € al chilo"], a: 0, why: "Trois euros quarante = 3,40 €." },
            { t: "match", q: "Abbina", pairs: [["cinquante", "50"], ["soixante", "60"], ["quatre-vingt-dix", "90"], ["cent", "100"]] },
            { t: "order", q: "Riordina: «Quanto costano queste mele, per favore?»", words: ["Combien", "coûtent", "ces", "pommes,", "s'il", "vous", "plaît", "?"], why: "Combien coûtent… ? = quanto costano…?" }
          ],
          test: [
            { t: "mcq", q: "Come si dice 71?", opts: ["soixante et onze", "soixante-onze", "soixante-dix-un", "septante et un"], a: 0, why: "71 = 60 + 11, con «et»." },
            { t: "mcq", q: "Quale numero è «quatre-vingt-quinze»?", opts: ["95", "85", "75", "415"], a: 0, why: "4 × 20 + 15 = 95." },
            { t: "mcq", q: "Come si legge il prezzo 12,50 €?", opts: ["douze euros cinquante", "douze virgule cinquante euros", "douze et cinquante euros", "cinquante douze euros"], a: 0, why: "Prima gli euro, poi i centesimi: douze euros cinquante." },
            { t: "mcq", q: "Completa: «Je voudrais un kilo ___ pommes.»", opts: ["de", "des", "les", "du"], a: 0, why: "Dopo una quantità si usa sempre de." },
            { t: "listen", say: "Ça fait douze euros cinquante.", q: "Quanto devi pagare?", opts: ["12,50 €", "2,50 €", "15,20 €", "12,15 €"], a: 0, why: "Douze = 12, cinquante = 50." },
            { t: "listen", say: "La vieille dame du troisième étage a quatre-vingts ans et beaucoup d'énergie.", q: "Quanti anni ha la signora?", opts: ["80", "24", "90", "60"], a: 0, why: "Quatre-vingts = 4 × 20 = 80." },
            { t: "listen", say: "Le carnet de recettes de Zizì a quatre-vingt-dix pages écrites à la main.", q: "Quante pagine ha il quaderno di Zizì?", opts: ["90", "80", "70", "49"], a: 0, why: "Quatre-vingt-dix = 4 × 20 + 10 = 90." },
            { t: "type", q: "Scrivi in lettere il numero 60.", a: ["soixante"], why: "Soixante: la X si legge S." },
            { t: "type", q: "Completa: «___ coûtent ces tomates ?» (quanto)", a: ["combien"], why: "Combien = quanto." },
            { t: "type", say: "Ce marché n'est pas cher, et les produits sont frais.", q: "Ascolta e completa: «Ce marché n'est pas ___, et les produits sont frais.»", a: ["cher"], why: "Pas cher = economico." },
            { t: "order", q: "Riordina: «Vorrei due chili di mele e sei uova.»", words: ["Je", "voudrais", "deux", "kilos", "de", "pommes", "et", "six", "œufs."], why: "Deux kilos DE pommes: de dopo la quantità." },
            { t: "match", q: "Abbina", pairs: [["trente", "30"], ["quarante", "40"], ["soixante-dix", "70"], ["quatre-vingts", "80"]] }
          ]
        },
        /* ---------------- LEZIONE 3-4 ---------------- */
        {
          id: "3-4", street: "Rue des Goûts", title: "I gusti: j'aime, j'adore, je déteste",
          goal: "Dire cosa ti piace, cosa adori e cosa detesti, confrontare i gusti con «moi aussi» e «moi non plus» e descrivere un sapore.",
          episode: {
            title: "La degustazione",
            intro: "Lunedì sera, dopo la chiusura, il caffè profuma di burro e di mele. Gigi ha seguito la ricetta di Zizì parola per parola. Françoise arriva con un tagliere di formaggi «per fare le cose per bene», Léa apparecchia, e Croissant si siede sulla sedia migliore, come un giudice di gara.",
            lines: [
              { who: "Mme Lefèvre", fr: "J'ai apporté trois fromages : le brie, le roquefort et le comté.", it: "Ho portato tre formaggi: il brie, il roquefort e il comté." },
              { who: "Gigi", fr: "J'adore le fromage, mais je préfère la mozzarella de Naples, bien sûr !", it: "Adoro il formaggio, ma preferisco la mozzarella di Napoli, ovviamente!" },
              { who: "Léa", fr: "Moi, je n'aime pas le roquefort : il est trop fort et trop salé.", it: "A me non piace il roquefort: è troppo forte e troppo salato." },
              { who: "Mme Lefèvre", fr: "Moi non plus ! Je préfère le comté, il est plus doux et délicieux.", it: "Neanche a me! Preferisco il comté, è più delicato e delizioso." },
              { who: "Croissant", fr: "Le fromage, c'est vulgaire. Moi, j'aime seulement le saumon et le caviar.", it: "Il formaggio è volgare. A me piacciono solo il salmone e il caviale." },
              { who: "Gigi", fr: "Et maintenant, goûtez la tarte aux pommes de Zizì : c'est ma première tarte !", it: "E adesso assaggiate la torta di mele di Zizì: è la mia prima torta!" },
              { who: "Léa", fr: "Mmm… c'est délicieux ! Pas trop sucré, et la pâte est vraiment parfaite.", it: "Mmm… è deliziosa! Non troppo dolce, e la pasta è davvero perfetta." },
              { who: "Mme Lefèvre", fr: "C'est exactement le goût de mon enfance. Bravo, Gigi, j'adore ta tarte.", it: "È esattamente il sapore della mia infanzia. Bravo, Gigi, adoro la tua torta." },
              { who: "Croissant", fr: "Bon. Je goûte un petit morceau… seulement par politesse, évidemment.", it: "Va bene. Assaggio un pezzettino… solo per educazione, ovviamente." }
            ],
            outro: "Croissant mangia tre pezzi di torta «per educazione». Mentre lava i piatti, Gigi sfoglia il quaderno fino all'ultima pagina: c'è una piantina di Parigi disegnata a mano, con una croce rossa e una frase: «Le vrai trésor de Zizì est ici.» Dove? Per scoprirlo bisogna imparare a muoversi in città: ci vediamo nel 4° arrondissement.",
            you: "«{nome}, ora sai dire i tuoi gusti: j'adore, j'aime, je préfère, je déteste. Ricorda che dopo questi verbi ci vuole sempre l'articolo: j'aime LE fromage. E se qualcuno detesta il roquefort come te, rispondi «moi non plus!».»",
            mine: { fr: "Je m'appelle {nome} : j'adore le café, j'aime bien le fromage, mais je déteste les oignons.", it: "Mi chiamo {nome}: adoro il caffè, mi piace abbastanza il formaggio, ma detesto le cipolle." }
          },
          words: [
            { fr: "j'adore", it: "adoro", say: "jadòr", hook: "ADORER come «adorare»: i francesi lo usano per tutto, anche per una baguette ben cotta. J'adore! con la R che gratta in gola, come un gatto contento.",
              ex: { fr: "J'adore les croissants au beurre, surtout quand ils sont encore chauds.", it: "Adoro i croissant al burro, soprattutto quando sono ancora caldi." } },
            { fr: "j'aime bien", it: "mi piace (abbastanza)", say: "jèm bjẽ", hook: "Trappola gentile: J'AIME BIEN è MENO forte di j'aime! Aggiungere «bien» abbassa il volume: è il «mi piace, sì, carino» per un amico simpatico.",
              ex: { fr: "J'aime bien ce restaurant, mais je préfère la pizzeria de Gigi.", it: "Questo ristorante mi piace abbastanza, ma preferisco la pizzeria di Gigi." } },
            { fr: "je préfère", it: "preferisco", say: "jə prefèr", hook: "PRÉFÉRER = preferire. Gli accenti ballano: préférer, ma je préfÈre, con la è aperta, perché la sillaba dopo è muta.",
              ex: { fr: "Je préfère le thé le matin et le café après le déjeuner.", it: "Preferisco il tè la mattina e il caffè dopo pranzo." } },
            { fr: "je déteste", it: "detesto", say: "jə detèst", hook: "DÉTESTER = detestare. Molto forte! Per essere più gentile puoi dire «je n'aime pas beaucoup» (non mi piace molto).",
              ex: { fr: "Je déteste attendre le métro sous la pluie à huit heures du matin.", it: "Detesto aspettare il metrò sotto la pioggia alle otto del mattino." } },
            { fr: "le goût", it: "il gusto, il sapore", say: "lə gu", hook: "GOÛT è «gusto» a cui hanno rubato lo «sto»: il cappellino sulla U ricorda la S scomparsa, come in coûte (costa) e forêt (foresta).",
              ex: { fr: "Cette tarte a le goût de mon enfance et de la cuisine de ma grand-mère.", it: "Questa torta ha il sapore della mia infanzia e della cucina di mia nonna." } },
            { fr: "goûter", it: "assaggiare / la merenda", say: "guté", hook: "GOÛTER = assaggiare. E «le goûter» è la merenda dei bambini francesi alle quattro e mezza: pane e cioccolato!",
              ex: { fr: "Tu veux goûter ma tarte aux pommes ? C'est la recette secrète de Zizì.", it: "Vuoi assaggiare la mia torta di mele? È la ricetta segreta di Zizì." } },
            { fr: "délicieux / délicieuse", it: "delizioso / deliziosa", say: "delisjö / delisjöz", hook: "DÉLICIEUX = delizioso: il finale -EUX si dice «ö», come il versetto che fai quando qualcosa è buonissimo: öööh.",
              ex: { fr: "La soupe est délicieuse, mais le pain est un peu trop sec.", it: "La zuppa è deliziosa, ma il pane è un po' troppo secco." } },
            { fr: "sucré / salé", it: "dolce / salato", say: "sükré / salé", hook: "SUCRÉ viene da sucre (zucchero), SALÉ da sel (sale). Attenzione: una persona «dolce» si dice doux o douce, non sucrée!",
              ex: { fr: "Le matin je mange sucré, mais le soir je préfère le salé.", it: "La mattina mangio dolce, ma la sera preferisco il salato." } },
            { fr: "le fromage", it: "il formaggio", say: "lə fromaj", hook: "FROMAGE è «formaggio» con le lettere mescolate: FOR diventa FRO. La Francia ne ha più di mille tipi, uno per ogni giorno di tre anni!",
              ex: { fr: "En France, on mange le fromage après le plat principal et avant le dessert.", it: "In Francia il formaggio si mangia dopo il piatto principale e prima del dolce." } },
            { fr: "la tarte aux pommes", it: "la torta di mele", say: "la tart ò pòm", hook: "POMME = mela: pensa al «pomo» di Adamo. E le patate sono «pommes de terre», mele di terra!",
              ex: { fr: "La tarte aux pommes de Zizì est simple, mais elle est vraiment parfaite.", it: "La torta di mele di Zizì è semplice, ma è davvero perfetta." } },
            { fr: "moi aussi / moi non plus", it: "anch'io / neanch'io", say: "mwa osì / mwa nõ plü", hook: "MOI AUSSI risponde a una frase positiva (j'aime → moi aussi). MOI NON PLUS a una negativa (je n'aime pas → moi non plus). Come in italiano: anch'io / neanch'io.",
              ex: { fr: "Je n'aime pas le roquefort. — Moi non plus, il est beaucoup trop fort !", it: "Non mi piace il roquefort. — Neanche a me, è decisamente troppo forte!" } }
          ],
          tip: {
            title: "Il termometro dei gusti (con l'articolo!)",
            body: "<div class='tbl'><table><thead><tr><th>Quanto?</th><th>Francese</th><th>Esempio</th></tr></thead><tbody><tr><td>❤❤❤</td><td>j'adore</td><td>J'adore <b>le</b> chocolat.</td></tr><tr><td>❤❤</td><td>j'aime</td><td>J'aime <b>la</b> musique.</td></tr><tr><td>❤</td><td>j'aime bien</td><td>J'aime bien <b>le</b> thé.</td></tr><tr><td>—</td><td>je n'aime pas beaucoup</td><td>Je n'aime pas beaucoup <b>le</b> lait.</td></tr><tr><td>✗</td><td>je n'aime pas</td><td>Je n'aime pas <b>les</b> oignons.</td></tr><tr><td>✗✗</td><td>je déteste</td><td>Je déteste <b>le</b> roquefort.</td></tr></tbody></table></div><ul><li>Dopo aimer, adorer, préférer e détester si usa sempre l'<b>articolo determinativo</b> (le, la, les), come in italiano: «mi piace il formaggio» → j'aime <b>le</b> fromage.</li><li><b>Moi aussi</b> = anch'io (dopo una frase positiva); <b>moi non plus</b> = neanch'io (dopo una negativa).</li><li><b>Trop</b> = troppo: trop sucré, trop salé, trop cher. <b>Pas trop</b> = non troppo.</li><li>Préférer cambia accento: je préf<b>è</b>re, tu préf<b>è</b>res, ma nous préf<b>é</b>rons.</li></ul>",
            examples: [
              { fr: "J'adore le chocolat noir, mais je n'aime pas le chocolat blanc.", it: "Adoro il cioccolato fondente, ma non mi piace il cioccolato bianco." },
              { fr: "Tu aimes le fromage français ? — Oui, j'aime bien le comté.", it: "Ti piace il formaggio francese? — Sì, il comté mi piace abbastanza." },
              { fr: "Nous préférons le café sans sucre et sans lait.", it: "Preferiamo il caffè senza zucchero e senza latte." },
              { fr: "J'aime beaucoup Paris. — Moi aussi, surtout au printemps !", it: "Mi piace molto Parigi. — Anche a me, soprattutto in primavera!" },
              { fr: "Je n'aime pas le métro le matin. — Moi non plus, il y a trop de monde.", it: "Non mi piace il metrò la mattina. — Neanche a me, c'è troppa gente." },
              { fr: "Ce gâteau est délicieux, mais il est un peu trop sucré pour moi.", it: "Questo dolce è delizioso, ma per me è un po' troppo dolce." }
            ]
          },
          practice: [
            { t: "mcq", q: "Quale frase esprime il gusto PIÙ forte?", opts: ["J'adore le café.", "J'aime bien le café.", "J'aime le café.", "Je n'aime pas beaucoup le café."], a: 0, why: "J'adore > j'aime > j'aime bien." },
            { t: "mcq", q: "Qualcuno dice «Je n'aime pas le roquefort». Sei d'accordo. Rispondi:", opts: ["Moi non plus.", "Moi aussi.", "Moi oui.", "Moi pas aussi."], a: 0, why: "Dopo una frase negativa: moi non plus." },
            { t: "listen", say: "Le matin je mange sucré, mais le soir je préfère le salé.", q: "Cosa hai sentito?", opts: ["La mattina mangio dolce, ma la sera preferisco il salato.", "La mattina mangio salato, ma la sera preferisco il dolce.", "La sera non mangio mai niente di dolce.", "La mattina preferisco lo zucchero e il sale."], a: 0, why: "Sucré = dolce, salé = salato." },
            { t: "match", q: "Abbina", pairs: [["le fromage", "il formaggio"], ["la pomme", "la mela"], ["le goût", "il sapore"], ["délicieux", "delizioso"]] },
            { t: "order", q: "Riordina: «Adoro il formaggio, ma preferisco la mozzarella.»", words: ["J'adore", "le", "fromage,", "mais", "je", "préfère", "la", "mozzarella."], why: "Verbo di gusto + articolo determinativo." }
          ],
          test: [
            { t: "mcq", q: "Completa: «J'aime ___ chocolat noir.»", opts: ["le", "du", "un", "de"], a: 0, why: "Dopo aimer: articolo determinativo, j'aime le chocolat." },
            { t: "mcq", q: "«J'aime bien ce restaurant» significa…", opts: ["Questo ristorante mi piace abbastanza.", "Amo moltissimo questo ristorante.", "Questo ristorante non mi piace.", "Questo ristorante è molto buono."], a: 0, why: "J'aime bien è più debole di j'aime." },
            { t: "mcq", q: "Qualcuno dice «J'adore Paris !». Anche tu. Rispondi:", opts: ["Moi aussi !", "Moi non plus !", "Moi pas !", "Moi même !"], a: 0, why: "Dopo una frase positiva: moi aussi." },
            { t: "mcq", q: "Come si dice «una persona dolce»?", opts: ["une personne douce", "une personne sucrée", "une personne salée", "une personne délicieuse"], a: 0, why: "Sucré è solo per il cibo; per le persone: doux / douce." },
            { t: "listen", say: "Moi, je n'aime pas le roquefort : il est trop fort et trop salé.", q: "Perché a Léa non piace il roquefort?", opts: ["È troppo forte e troppo salato.", "È troppo dolce e troppo caro.", "È troppo morbido e troppo vecchio.", "Non l'ha mai assaggiato."], a: 0, why: "Trop fort, trop salé." },
            { t: "listen", say: "C'est exactement le goût de mon enfance. Bravo, Gigi, j'adore ta tarte.", q: "Cosa dice Françoise?", opts: ["È il sapore della sua infanzia e adora la torta.", "La torta è troppo dolce per lei.", "Preferisce la torta di sua madre.", "Vuole la ricetta della torta."], a: 0, why: "Le goût = il sapore; j'adore = adoro." },
            { t: "type", q: "Completa: «Je ___ le thé le matin.» (preferisco)", a: ["préfère", "prefere", "préfere"], why: "Je préfère, con la è aperta." },
            { t: "type", q: "Completa: «La tarte aux ___ de Zizì est parfaite.» (mele)", a: ["pommes"], why: "Pomme = mela, come il pomo di Adamo." },
            { t: "type", say: "Tu veux goûter ma tarte aux pommes ?", q: "Ascolta e completa: «Tu veux ___ ma tarte aux pommes ?» (assaggiare)", a: ["goûter", "gouter"], why: "Goûter = assaggiare." },
            { t: "order", q: "Riordina: «Non mi piace il metrò la mattina.»", words: ["Je", "n'aime", "pas", "le", "métro", "le", "matin."], why: "Ne… pas intorno al verbo, poi l'articolo." },
            { t: "match", q: "Abbina", pairs: [["sucré", "dolce"], ["salé", "salato"], ["trop", "troppo"], ["moi non plus", "neanch'io"]] },
            { t: "mcq", q: "In Francia il formaggio si mangia di solito…", opts: ["dopo il piatto principale e prima del dolce", "all'inizio del pasto, come antipasto", "solo a colazione", "dopo il dolce, con il caffè"], a: 0, why: "Plat principal → fromage → dessert." }
          ]
        }
      ]
    },
    {
      n: 4, arr: "4e", name: "En ville", it: "In città", level: "A1",
      lessons: [
        /* ---------------- LEZIONE 4-1 ---------------- */
        {
          id: "4-1", street: "Rue des Lieux", title: "I luoghi della città",
          goal: "Nominare i luoghi principali di una città e chiedere dove si trovano con «où est» e «il y a».",
          episode: {
            title: "La mappa di Zizì",
            intro: "Il caffè è chiuso per il giorno di riposo. Sul bancone Gigi, Léa e Françoise aprono la piantina disegnata da Zizì. La croce rossa è accanto a un fiume, tra una grande chiesa e un ponte. Croissant si sdraia proprio sopra la mappa, «per aiutare».",
            lines: [
              { who: "Léa", fr: "Regardez : ici, il y a un fleuve, et là, il y a un grand pont.", it: "Guardate: qui c'è un fiume, e là c'è un grande ponte." },
              { who: "Gigi", fr: "Le fleuve, c'est la Seine, bien sûr. Mais où est la croix exactement ?", it: "Il fiume è la Senna, certo. Ma dov'è esattamente la croce?" },
              { who: "Mme Lefèvre", fr: "Près d'une grande église avec deux tours. C'est sûrement Notre-Dame !", it: "Vicino a una grande chiesa con due torri. È sicuramente Notre-Dame!" },
              { who: "Gigi", fr: "Et ce petit dessin, à côté du pont, c'est une banque ou un musée ?", it: "E questo disegnino, accanto al ponte, è una banca o un museo?" },
              { who: "Léa", fr: "Ni l'un ni l'autre : on dirait une boîte verte, au bord de l'eau.", it: "Né l'una né l'altro: sembra una scatola verde, in riva all'acqua." },
              { who: "Croissant", fr: "Une boîte verte au bord de la Seine… Il y a des centaines de boîtes vertes !", it: "Una scatola verde in riva alla Senna… Ci sono centinaia di scatole verdi!" },
              { who: "Mme Lefèvre", fr: "Ce sont les boîtes des bouquinistes, les vendeurs de vieux livres sur les quais.", it: "Sono le cassette dei bouquinistes, i venditori di libri vecchi lungo i lungosenna." },
              { who: "Gigi", fr: "Alors demain matin, on va dans le quatrième arrondissement, à côté de Notre-Dame !", it: "Allora domattina andiamo nel quarto arrondissement, vicino a Notre-Dame!" }
            ],
            outro: "Gigi segna sul telefono: la stazione del metrò, la farmacia per i cerotti (non si sa mai), la panetteria per la colazione. Françoise sorride: «Zizì amava i libri. Se ha nascosto qualcosa, l'ha nascosto tra le pagine.»",
            you: "«{nome}, in città le parole più utili sono «Où est… ?» e «Il y a… ?». Con quelle due trovi la stazione, la farmacia e, soprattutto, la panetteria.»",
            mine: { fr: "Je m'appelle {nome}, et dans ma ville il y a une grande place, une église et un marché.", it: "Mi chiamo {nome}, e nella mia città c'è una grande piazza, una chiesa e un mercato." }
          },
          words: [
            { fr: "la gare", it: "la stazione (dei treni)", say: "la gar", hook: "LA GARE: alla stazione i treni fanno a GARA a chi parte prima. Per il metrò si dice «la station».",
              ex: { fr: "La gare de Lyon est très grande, et il y a toujours beaucoup de monde.", it: "La stazione di Lione è molto grande, e c'è sempre tanta gente." } },
            { fr: "l'église", it: "la chiesa", say: "leglìz", hook: "ÉGLISE somiglia a «ecclesia»: la É iniziale ha mangiato una S. Notre-Dame è la regina delle églises.",
              ex: { fr: "L'église du quartier est petite, mais elle a de très belles fenêtres colorées.", it: "La chiesa del quartiere è piccola, ma ha delle vetrate colorate bellissime." } },
            { fr: "le pont", it: "il ponte", say: "lə põ", hook: "PONT è «ponte» detto col naso chiuso: põ. A Parigi ce ne sono 37, e il più vecchio si chiama Pont-Neuf, cioè «ponte nuovo»!",
              ex: { fr: "Nous traversons le pont à pied pour regarder les bateaux sur la Seine.", it: "Attraversiamo il ponte a piedi per guardare i battelli sulla Senna." } },
            { fr: "la pharmacie", it: "la farmacia", say: "la farmasì", hook: "Cerca la croce verde luminosa: PHARMACIE, con PH che si legge F, come in «philosophie».",
              ex: { fr: "Excusez-moi, il y a une pharmacie ouverte près d'ici le dimanche ?", it: "Mi scusi, c'è una farmacia aperta qui vicino la domenica?" } },
            { fr: "la boulangerie", it: "la panetteria", say: "la bulãjrì", hook: "BOULANGERIE: il BOULANGER fa le palle (boules) di pasta che diventano pane. Il luogo più importante di ogni quartiere francese.",
              ex: { fr: "Tous les matins, j'achète une baguette chaude à la boulangerie du coin.", it: "Ogni mattina compro una baguette calda alla panetteria all'angolo." } },
            { fr: "le musée", it: "il museo", say: "lə müzé", hook: "MUSÉE è maschile anche se finisce in -ée, come un museo travestito. Il Louvre è le musée più visitato del mondo.",
              ex: { fr: "Le premier dimanche du mois, beaucoup de musées sont gratuits à Paris.", it: "La prima domenica del mese molti musei sono gratuiti a Parigi." } },
            { fr: "la place", it: "la piazza", say: "la plas", hook: "LA PLACE è la piazza: place de la Concorde, place des Vosges. Attenzione: «une place» vuol dire anche «un posto» (a sedere, al parcheggio). Il contesto ti salva!",
              ex: { fr: "Il y a un petit marché sur la place tous les mercredis matin.", it: "C'è un piccolo mercato in piazza ogni mercoledì mattina." } },
            { fr: "le quartier", it: "il quartiere", say: "lə kartjé", hook: "QUARTIER = quartiere, con la QU che si legge K. Ogni arrondissement di Parigi ha quattro quartiers.",
              ex: { fr: "J'adore mon quartier : il est calme, mais il y a beaucoup de cafés.", it: "Adoro il mio quartiere: è tranquillo, ma ci sono tanti caffè." } },
            { fr: "Où est… ?", it: "Dov'è…?", say: "u è", hook: "OÙ con l'accento è «dove»; OU senza accento è «o». L'accento è la freccia che indica il posto!",
              ex: { fr: "Pardon, madame, où est la station de métro la plus proche ?", it: "Scusi, signora, dov'è la stazione del metrò più vicina?" } },
            { fr: "la Seine", it: "la Senna", say: "la sèn", hook: "LA SEINE si dice «sèn», come la scena (scène) di un film: e infatti è il palcoscenico di Parigi.",
              ex: { fr: "Le soir, les Parisiens se promènent au bord de la Seine.", it: "La sera i parigini passeggiano lungo la Senna." } }
          ],
          tip: {
            title: "Il y a, où est, c'est: tre chiavi per la città",
            body: "<div class='tbl'><table><thead><tr><th>Vuoi…</th><th>Francese</th><th>Esempio</th></tr></thead><tbody><tr><td>sapere se esiste</td><td>Il y a… ?</td><td>Il y a une pharmacie ici ?</td></tr><tr><td>sapere dove si trova</td><td>Où est… ?</td><td>Où est la gare ?</td></tr><tr><td>più cose</td><td>Où sont… ?</td><td>Où sont les toilettes ?</td></tr><tr><td>identificare</td><td>C'est…</td><td>C'est le musée d'Orsay.</td></tr></tbody></table></div><ul><li><b>Il y a</b> + un / une / des (cosa nuova): il y a <b>une</b> boulangerie.</li><li><b>Où est</b> + le / la (cosa precisa): où est <b>la</b> boulangerie ?</li><li><b>Où</b> (dove) ha l'accento; <b>ou</b> (oppure) no.</li><li>Arrondissement: «le 4e» si legge «le quatrième». Il 1er è «le premier».</li></ul>",
            examples: [
              { fr: "Il y a une boulangerie dans votre rue ?", it: "C'è una panetteria nella vostra strada?" },
              { fr: "Où est le musée du Louvre, s'il vous plaît ?", it: "Dov'è il museo del Louvre, per favore?" },
              { fr: "Où sont les toilettes ? — Au fond, à droite.", it: "Dov'è il bagno? — In fondo, a destra." },
              { fr: "C'est la plus vieille église de Paris.", it: "È la chiesa più antica di Parigi." },
              { fr: "Dans mon quartier, il y a deux pharmacies et une gare.", it: "Nel mio quartiere ci sono due farmacie e una stazione." }
            ]
          },
          practice: [
            { t: "mcq", q: "Dove compri la baguette?", opts: ["à la boulangerie", "à la pharmacie", "à la gare", "au musée"], a: 0, why: "Boulangerie = panetteria." },
            { t: "mcq", q: "«Où» con l'accento significa…", opts: ["dove", "o / oppure", "quando", "chi"], a: 0, why: "Où = dove; ou = oppure." },
            { t: "listen", say: "Excusez-moi, il y a une pharmacie ouverte près d'ici le dimanche ?", q: "Cosa chiede la persona?", opts: ["Se c'è una farmacia aperta qui vicino la domenica.", "Dov'è la stazione la domenica.", "Se la farmacia chiude la domenica.", "Quanto costa una medicina."], a: 0, why: "Il y a… ? = c'è…?" },
            { t: "match", q: "Abbina", pairs: [["la gare", "la stazione"], ["le pont", "il ponte"], ["l'église", "la chiesa"], ["la place", "la piazza"]] },
            { t: "order", q: "Riordina: «Dov'è la stazione del metrò, per favore?»", words: ["Où", "est", "la", "station", "de", "métro,", "s'il", "vous", "plaît", "?"], why: "Où est + la cosa che cerchi." }
          ],
          test: [
            { t: "mcq", q: "Completa: «___ une pharmacie près d'ici ?»", opts: ["Il y a", "Où est", "C'est", "Il est"], a: 0, why: "Per chiedere se una cosa esiste: il y a." },
            { t: "mcq", q: "Completa: «___ la gare de Lyon ?»", opts: ["Où est", "Il y a", "Où sont", "Ou est"], a: 0, why: "Dov'è + cosa precisa: où est (con l'accento!)." },
            { t: "mcq", q: "«La place de la Concorde» è…", opts: ["una piazza", "un posto a sedere", "un palazzo", "una chiesa"], a: 0, why: "La place = la piazza." },
            { t: "mcq", q: "Come si legge «le 4e arrondissement»?", opts: ["le quatrième arrondissement", "le quatre arrondissement", "le quatrè arrondissement", "le quart arrondissement"], a: 0, why: "4e = quatrième." },
            { t: "listen", say: "Nous traversons le pont à pied pour regarder les bateaux sur la Seine.", q: "Cosa hai sentito?", opts: ["Attraversiamo il ponte a piedi per guardare i battelli sulla Senna.", "Prendiamo il battello per andare al ponte.", "Camminiamo lungo la Senna fino alla stazione.", "Guardiamo il ponte dalla finestra del museo."], a: 0, why: "Le pont = il ponte; à pied = a piedi." },
            { t: "listen", say: "Tous les matins, j'achète une baguette chaude à la boulangerie du coin.", q: "Cosa fa ogni mattina?", opts: ["Compra una baguette calda alla panetteria all'angolo.", "Beve un caffè al bar all'angolo.", "Va in farmacia a comprare medicine.", "Prende il metrò per andare al lavoro."], a: 0, why: "Boulangerie = panetteria; du coin = all'angolo." },
            { t: "type", q: "Completa: «Le soir, nous marchons au bord de la ___.» (Senna)", a: ["Seine"], why: "La Seine, si legge «sèn»." },
            { t: "type", q: "Completa: «Le Louvre est le ___ le plus visité du monde.» (museo)", a: ["musée", "musee"], why: "Le musée: maschile anche se finisce in -ée." },
            { t: "type", say: "J'adore mon quartier : il est calme, mais il y a beaucoup de cafés.", q: "Ascolta e completa: «J'adore mon ___ : il est calme.»", a: ["quartier"], why: "Quartier = quartiere." },
            { t: "order", q: "Riordina: «Nella mia città c'è una grande piazza.»", words: ["Dans", "ma", "ville,", "il", "y", "a", "une", "grande", "place."], why: "Il y a = c'è / ci sono." },
            { t: "match", q: "Abbina", pairs: [["la boulangerie", "la panetteria"], ["la pharmacie", "la farmacia"], ["le musée", "il museo"], ["le quartier", "il quartiere"]] },
            { t: "mcq", q: "Che cosa sono le «boîtes vertes» lungo la Senna?", opts: ["le cassette dei venditori di libri vecchi", "le cabine telefoniche", "i cestini dei rifiuti", "le biglietterie dei battelli"], a: 0, why: "Sono le cassette dei bouquinistes." }
          ],
          recap: {
            can: ["Nominare i luoghi della città: gare, église, pont, pharmacie, musée…", "Chiedere se un luogo esiste con «Il y a… ?»", "Chiedere dove si trova con «Où est… ?» e «Où sont… ?»", "Leggere i numeri degli arrondissement"],
            phrases: [{ fr: "Il y a une pharmacie près d'ici ?", it: "C'è una farmacia qui vicino?" }, { fr: "Où est la station de métro, s'il vous plaît ?", it: "Dov'è la stazione del metrò, per favore?" }, { fr: "Dans mon quartier, il y a une boulangerie et une église.", it: "Nel mio quartiere ci sono una panetteria e una chiesa." }],
            trap: "OÙ con l'accento = dove; OU senza accento = oppure. «Où est la gare ou la station ?» = Dov'è la stazione o la fermata?"
          }
        },
        /* ---------------- LEZIONE 4-2 ---------------- */
        {
          id: "4-2", street: "Rue du Chemin", title: "Chiedere e dare indicazioni",
          goal: "Chiedere la strada in modo gentile e capire indicazioni come «tout droit», «à gauche», «la deuxième rue à droite».",
          episode: {
            title: "Perduti sull'Île de la Cité",
            intro: "Usciti dal metrò, Gigi gira la piantina in tutte le direzioni. Léa guarda il telefono, che naturalmente è scarico. Croissant, nella sua borsa, sospira. Per fortuna all'angolo c'è una vigilessa con un sorriso paziente.",
            lines: [
              { who: "Gigi", fr: "Excusez-moi, madame, pour aller aux quais de la Seine, s'il vous plaît ?", it: "Mi scusi, signora, per andare ai lungosenna, per favore?" },
              { who: "Mme Martin", fr: "C'est facile. Allez tout droit jusqu'au feu, puis tournez à gauche.", it: "È facile. Andate dritto fino al semaforo, poi girate a sinistra." },
              { who: "Léa", fr: "Tout droit, puis à gauche. Et après, c'est loin d'ici ?", it: "Dritto, poi a sinistra. E dopo, è lontano da qui?" },
              { who: "Mme Martin", fr: "Non, c'est tout près : à cinq minutes à pied. Traversez le petit pont.", it: "No, è vicinissimo: a cinque minuti a piedi. Attraversate il ponticello." },
              { who: "Gigi", fr: "Et les bouquinistes ? Ils sont à droite ou à gauche du pont ?", it: "E i bouquinistes? Sono a destra o a sinistra del ponte?" },
              { who: "Mme Martin", fr: "Prenez la première rue à droite : les boîtes vertes sont en face de Notre-Dame.", it: "Prendete la prima strada a destra: le cassette verdi sono di fronte a Notre-Dame." },
              { who: "Croissant", fr: "Gauche, droite, tout droit… Moi, je propose de suivre l'odeur des croissants.", it: "Sinistra, destra, dritto… Io propongo di seguire l'odore dei croissant." },
              { who: "Léa", fr: "Merci beaucoup, madame, vous êtes très gentille. Bonne journée !", it: "Grazie mille, signora, è molto gentile. Buona giornata!" }
            ],
            outro: "Cinque minuti dopo sono davanti a una fila di cassette verdi, piene di libri ingialliti e vecchie cartoline. Ce ne sono tantissime. Ma su una sola, la numero diciassette, qualcuno ha dipinto un piccolo nastro blu.",
            you: "«{nome}, per chiedere la strada inizia sempre con «Excusez-moi» e finisci con «merci beaucoup». In mezzo basta «pour aller à… ?». I francesi ti aiuteranno volentieri, quasi tutti.»",
            mine: { fr: "Excusez-moi, je m'appelle {nome} et je cherche la gare. C'est loin d'ici ?", it: "Mi scusi, mi chiamo {nome} e cerco la stazione. È lontana da qui?" }
          },
          words: [
            { fr: "tout droit", it: "sempre dritto", say: "tu drwa", hook: "TOUT DROIT: «tutto diritto», come una freccia. Non confonderlo con «à droite» (a destra): la differenza è tutta in quella T finale che non si sente!",
              ex: { fr: "Allez tout droit pendant deux cents mètres, la gare est au bout de la rue.", it: "Andate dritto per duecento metri, la stazione è in fondo alla strada." } },
            { fr: "à gauche", it: "a sinistra", say: "a gòsh", hook: "GAUCHE suona come «goscia»: una goccia cade sempre a sinistra, dal lato del cuore. È anche «maldestro»: i mancini una volta erano «gauches»!",
              ex: { fr: "Au deuxième feu, tournez à gauche et continuez jusqu'à la place.", it: "Al secondo semaforo girate a sinistra e continuate fino alla piazza." } },
            { fr: "à droite", it: "a destra", say: "a drwat", hook: "DROITE: la mano «diritta», quella che molti usano per scrivere. Qui la T si sente: drwat.",
              ex: { fr: "La pharmacie est à droite, juste après la boulangerie.", it: "La farmacia è a destra, subito dopo la panetteria." } },
            { fr: "tourner", it: "girare, svoltare", say: "turné", hook: "TOURNER = girare, come un tornio che gira. Tournez à gauche = girate a sinistra (forma con vous).",
              ex: { fr: "Tournez à droite dans la rue de Rivoli, puis demandez encore.", it: "Girate a destra in rue de Rivoli, poi chiedete di nuovo." } },
            { fr: "traverser", it: "attraversare", say: "travèrsé", hook: "TRAVERSER = attraversare: hai una TRAVERSA da superare. Traversez sur le passage piéton (sulle strisce)!",
              ex: { fr: "Traversez la rue au feu rouge pour les voitures, c'est plus prudent.", it: "Attraversate la strada col rosso per le auto, è più prudente." } },
            { fr: "près de / loin de", it: "vicino a / lontano da", say: "prè də / lwẽ də", hook: "PRÈS: «presso», vicino. LOIN: lontano, con la nasale che si allontana: lwẽẽẽ.",
              ex: { fr: "Mon hôtel est près de la gare, mais loin du centre-ville.", it: "Il mio albergo è vicino alla stazione, ma lontano dal centro." } },
            { fr: "en face de", it: "di fronte a", say: "ã fas də", hook: "EN FACE: davanti alla tua FACCIA. La boulangerie est en face de l'église: la vedi appena esci dalla chiesa.",
              ex: { fr: "Le café de Gigi est juste en face de la boulangerie de Françoise.", it: "Il caffè di Gigi è proprio di fronte alla panetteria di Françoise." } },
            { fr: "le feu", it: "il semaforo", say: "lə fö", hook: "LE FEU è il fuoco, ma in strada è il semaforo: tre fuochi colorati che si accendono. Au feu rouge = al semaforo rosso.",
              ex: { fr: "Au premier feu, continuez tout droit, et au deuxième, tournez à gauche.", it: "Al primo semaforo continuate dritto, e al secondo girate a sinistra." } },
            { fr: "Pour aller à… ?", it: "Per andare a…?", say: "pur alé a", hook: "La formula magica di chi si è perso: «Pour aller à la gare ?». Non serve nemmeno un verbo: basta il tono della domanda.",
              ex: { fr: "Bonjour monsieur, pour aller au musée d'Orsay, c'est par où ?", it: "Buongiorno signore, per andare al museo d'Orsay, da che parte è?" } },
            { fr: "à pied", it: "a piedi", say: "a pjé", hook: "À PIED: con i piedi, a piedi. Ma in bici e in macchina si dice «à vélo» e «en voiture».",
              ex: { fr: "C'est à dix minutes à pied ou à deux arrêts de bus.", it: "È a dieci minuti a piedi o a due fermate di autobus." } }
          ],
          tip: {
            title: "La bussola di Croissant: chiedere e capire la strada",
            body: "<div class='tbl'><table><thead><tr><th>Indicazione</th><th>Significa</th></tr></thead><tbody><tr><td>Allez tout droit.</td><td>Andate dritto.</td></tr><tr><td>Tournez à gauche / à droite.</td><td>Girate a sinistra / a destra.</td></tr><tr><td>Prenez la première / deuxième rue.</td><td>Prendete la prima / seconda strada.</td></tr><tr><td>Traversez le pont / la place.</td><td>Attraversate il ponte / la piazza.</td></tr><tr><td>Continuez jusqu'à…</td><td>Continuate fino a…</td></tr><tr><td>C'est à cinq minutes à pied.</td><td>È a cinque minuti a piedi.</td></tr></tbody></table></div><ul><li><b>Tout droit</b> (dritto) ≠ <b>à droite</b> (a destra): ascolta bene la fine!</li><li>Le indicazioni usano l'imperativo con vous: <b>allez, tournez, prenez, traversez</b>. È la forma «vous» senza il pronome.</li><li><b>De + le = du</b>: près <b>du</b> pont, en face <b>du</b> musée. <b>De + la</b> resta: près <b>de la</b> gare.</li><li>Per chiedere: «Excusez-moi, <b>pour aller à</b>… ?» oppure «<b>C'est loin</b> ?».</li></ul>",
            examples: [
              { fr: "Excusez-moi, pour aller à la gare du Nord, s'il vous plaît ?", it: "Mi scusi, per andare alla Gare du Nord, per favore?" },
              { fr: "Prenez la deuxième rue à gauche, puis allez tout droit.", it: "Prendete la seconda strada a sinistra, poi andate dritto." },
              { fr: "Le musée est en face du jardin, à côté de la poste.", it: "Il museo è di fronte al giardino, accanto all'ufficio postale." },
              { fr: "C'est loin ? — Non, c'est tout près, à trois minutes.", it: "È lontano? — No, è vicinissimo, a tre minuti." },
              { fr: "Traversez la place et continuez jusqu'au pont.", it: "Attraversate la piazza e continuate fino al ponte." }
            ]
          },
          practice: [
            { t: "mcq", q: "«Tout droit» significa…", opts: ["sempre dritto", "a destra", "tutti a destra", "torna indietro"], a: 0, why: "Tout droit = dritto. A destra = à droite." },
            { t: "mcq", q: "Come chiedi la strada per la stazione?", opts: ["Pour aller à la gare, s'il vous plaît ?", "Où va la gare ?", "Je vais la gare ?", "La gare est quoi ?"], a: 0, why: "Pour aller à… ? = per andare a…?" },
            { t: "listen", say: "Au deuxième feu, tournez à gauche et continuez jusqu'à la place.", q: "Cosa devi fare?", opts: ["Al secondo semaforo girare a sinistra e continuare fino alla piazza.", "Al primo semaforo girare a destra.", "Al secondo semaforo andare dritto fino alla stazione.", "Attraversare la piazza e girare a sinistra."], a: 0, why: "Deuxième = secondo; à gauche = a sinistra." },
            { t: "match", q: "Abbina", pairs: [["à gauche", "a sinistra"], ["à droite", "a destra"], ["en face de", "di fronte a"], ["le feu", "il semaforo"]] },
            { t: "order", q: "Riordina: «Prendete la prima strada a destra.»", words: ["Prenez", "la", "première", "rue", "à", "droite."], why: "Prenez = prendete (imperativo con vous)." }
          ],
          test: [
            { t: "mcq", q: "Quale indicazione significa «girate a destra»?", opts: ["Tournez à droite.", "Allez tout droit.", "Tournez à gauche.", "Traversez la rue."], a: 0, why: "À droite = a destra." },
            { t: "mcq", q: "Completa: «La boulangerie est en face ___ musée.»", opts: ["du", "de le", "de la", "des"], a: 0, why: "De + le = du." },
            { t: "mcq", q: "«C'est à cinq minutes à pied» significa…", opts: ["È a cinque minuti a piedi.", "Ci vogliono cinque minuti in macchina.", "Ci sono cinque fermate.", "È a cinque chilometri."], a: 0, why: "À pied = a piedi." },
            { t: "mcq", q: "Nel traffico, «le feu» è…", opts: ["il semaforo", "il fuoco", "l'incrocio", "il marciapiede"], a: 0, why: "Le feu rouge = il semaforo rosso." },
            { t: "listen", say: "Allez tout droit pendant deux cents mètres, la gare est au bout de la rue.", q: "Dov'è la stazione?", opts: ["In fondo alla strada, dopo duecento metri dritto.", "A destra dopo duecento metri.", "Dietro la chiesa, a sinistra.", "Lontano, bisogna prendere l'autobus."], a: 0, why: "Tout droit = dritto; au bout = in fondo." },
            { t: "listen", say: "Mon hôtel est près de la gare, mais loin du centre-ville.", q: "Dov'è l'albergo?", opts: ["Vicino alla stazione, ma lontano dal centro.", "Lontano dalla stazione, ma vicino al centro.", "In centro, di fronte alla stazione.", "Vicino al centro e alla stazione."], a: 0, why: "Près de = vicino a; loin de = lontano da." },
            { t: "type", q: "Completa: «Allez tout ___, puis tournez à gauche.» (dritto)", a: ["droit"], why: "Tout droit: la T finale non si sente." },
            { t: "type", q: "Completa: «___ la rue au passage piéton.» (attraversate)", a: ["Traversez"], why: "Traversez = attraversate (vous)." },
            { t: "type", say: "Le café de Gigi est juste en face de la boulangerie.", q: "Ascolta e completa: «Le café de Gigi est juste en ___ de la boulangerie.»", a: ["face"], why: "En face de = di fronte a." },
            { t: "order", q: "Riordina: «Mi scusi, per andare alla stazione, per favore?»", words: ["Excusez-moi,", "pour", "aller", "à", "la", "gare,", "s'il", "vous", "plaît", "?"], why: "Excusez-moi + pour aller à… ?" },
            { t: "match", q: "Abbina", pairs: [["tourner", "girare"], ["traverser", "attraversare"], ["près de", "vicino a"], ["loin de", "lontano da"]] },
            { t: "mcq", q: "Qual è la differenza tra «tout droit» e «à droite»?", opts: ["Tout droit = dritto; à droite = a destra.", "Sono sinonimi.", "Tout droit = a destra; à droite = dritto.", "Tout droit = tutti a destra."], a: 0, why: "Attenzione: la confusione più comune per strada!" }
          ],
          recap: {
            can: ["Chiedere la strada con «Excusez-moi, pour aller à… ?»", "Capire tout droit, à gauche, à droite, la première rue…", "Dire se un posto è vicino, lontano o di fronte", "Usare du (de + le) con i luoghi"],
            phrases: [{ fr: "Excusez-moi, pour aller à la gare, s'il vous plaît ?", it: "Mi scusi, per andare alla stazione, per favore?" }, { fr: "Allez tout droit, puis prenez la première rue à gauche.", it: "Andate dritto, poi prendete la prima strada a sinistra." }, { fr: "C'est tout près, en face du musée.", it: "È vicinissimo, di fronte al museo." }],
            trap: "TOUT DROIT (dritto) e À DROITE (a destra) si somigliano: nel primo la T finale è muta, nel secondo si sente."
          }
        },
        /* ---------------- LEZIONE 4-3 ---------------- */
        {
          id: "4-3", street: "Rue du Mouvement", title: "Aller e venir: andare e venire",
          goal: "Coniugare «aller» e «venir» al presente e dire dove vai e da dove vieni con au, à la, aux, du, de la, des.",
          episode: {
            title: "La cassetta numero diciassette",
            intro: "Davanti alla cassetta col nastro blu c'è un bouquiniste con la barba bianca e una sciarpa rossa. Quando vede la chiave di Zizì, chiude il giornale di colpo. Accanto a lui, seduto su una sedia pieghevole, c'è… il signore col cappello grigio.",
            lines: [
              { who: "Gigi", fr: "Monsieur ! Vous êtes le client mystérieux du café ! Vous venez souvent ici ?", it: "Signore! Lei è il cliente misterioso del caffè! Viene spesso qui?" },
              { who: "M. Bernard", fr: "Je viens ici tous les jeudis. Et vous, vous venez de Montmartre ?", it: "Vengo qui tutti i giovedì. E voi, venite da Montmartre?" },
              { who: "Léa", fr: "Oui, nous venons du café en métro. Mais vous, où allez-vous après ?", it: "Sì, veniamo dal caffè in metrò. Ma lei, dove va dopo?" },
              { who: "M. Bernard", fr: "Je vais au marché aux fleurs, puis je vais à la bibliothèque.", it: "Vado al mercato dei fiori, poi vado in biblioteca." },
              { who: "Le bouquiniste", fr: "Tu vas leur dire la vérité, Henri ? Ils viennent de loin pour ça.", it: "Gli dici la verità, Henri? Vengono da lontano per questo." },
              { who: "M. Bernard", fr: "Oui, Paul. Gigi, ta grand-tante et moi, nous allions danser aux bals du samedi.", it: "Sì, Paul. Gigi, tua prozia e io andavamo a ballare ai balli del sabato." },
              { who: "Croissant", fr: "Je vais m'asseoir. Les histoires d'amour, ça me donne toujours faim.", it: "Vado a sedermi. Le storie d'amore mi fanno sempre venire fame." },
              { who: "M. Bernard", fr: "Ouvrez la boîte avec votre clé. Ce que Zizì a laissé, c'est pour vous.", it: "Aprite la cassetta con la vostra chiave. Quello che Zizì ha lasciato è per voi." }
            ],
            outro: "La piccola chiave entra perfettamente nel lucchetto della cassetta numero diciassette. Dentro, tra vecchi romanzi, c'è una scatola di latta con un nastro blu. M. Bernard si toglie il cappello: le mani gli tremano un po'.",
            you: "«{nome}, «aller» e «venir» sono irregolari, ma li userai ogni giorno: je vais au café, je viens de Rome. Imparali come una canzoncina e non li dimenticherai più.»",
            mine: { fr: "Je m'appelle {nome}, je viens d'Italie et cet été je vais à Paris avec mes amis.", it: "Mi chiamo {nome}, vengo dall'Italia e quest'estate vado a Parigi con i miei amici." }
          },
          words: [
            { fr: "je vais", it: "vado", say: "jə vè", hook: "JE VAIS sembra «io vado» col naso francese: vè. Je vais au cinéma, je vais bien (sto bene): aller serve anche per la salute!",
              ex: { fr: "Le samedi matin, je vais au marché avec ma voisine et son chien.", it: "Il sabato mattina vado al mercato con la mia vicina e il suo cane." } },
            { fr: "tu vas / il va", it: "vai / va", say: "tü va / il va", hook: "TU VAS e IL VA: come in italiano, «va»! Ça va? = come va? Lo conosci già.",
              ex: { fr: "Tu vas à la fête de Léa samedi soir ou tu restes à la maison ?", it: "Vai alla festa di Léa sabato sera o resti a casa?" } },
            { fr: "nous allons / vous allez / ils vont", it: "andiamo / andate / vanno", say: "nu zalõ / vu zalé / il võ", hook: "NOUS ALLONS e VOUS ALLEZ vengono da «aller» (cfr. «allez!», forza!). ILS VONT è il rimbalzo: vanno → vont.",
              ex: { fr: "Nous allons à la plage en août, et nos amis vont à la montagne.", it: "Andiamo al mare ad agosto, e i nostri amici vanno in montagna." } },
            { fr: "venir", it: "venire", say: "vənìr", hook: "VENIR = venire, con la R finale che si sente. Je viens, tu viens, il vient: sembra «vieni», ma col naso.",
              ex: { fr: "Tu viens au cinéma avec nous ce soir ? Le film commence à neuf heures.", it: "Vieni al cinema con noi stasera? Il film comincia alle nove." } },
            { fr: "je viens de…", it: "vengo da…", say: "jə vjẽ də", hook: "JE VIENS DE: il «de» indica la provenienza. Je viens de Naples, je viens d'Italie, je viens du Japon.",
              ex: { fr: "Je viens de Naples, mais j'habite à Paris depuis trois semaines.", it: "Vengo da Napoli, ma abito a Parigi da tre settimane." } },
            { fr: "nous venons / vous venez / ils viennent", it: "veniamo / venite / vengono", say: "nu vənõ / vu vəné / il vjèn", hook: "ILS VIENNENT: con la doppia N la nasale si «apre»: vjèn. Come una porta che si spalanca per farli entrare!",
              ex: { fr: "Mes parents viennent à Paris en décembre pour voir le café.", it: "I miei genitori vengono a Parigi a dicembre per vedere il caffè." } },
            { fr: "au / à la / aux", it: "al / alla / ai, alle", say: "ò / a la / ò", hook: "À + LE = AU, À + LES = AUX: due fusioni obbligatorie. Je vais AU cinéma, À LA plage, AUX toilettes.",
              ex: { fr: "Après le travail, je vais au supermarché, puis à la pharmacie.", it: "Dopo il lavoro vado al supermercato, poi in farmacia." } },
            { fr: "du / de la / des", it: "dal / dalla / dai, dalle", say: "dü / də la / dé", hook: "DE + LE = DU, DE + LES = DES: le stesse fusioni, ma per la provenienza. Je viens DU marché, DE LA gare.",
              ex: { fr: "Elle revient du marché avec des fleurs et des fruits pour la semaine.", it: "Torna dal mercato con fiori e frutta per la settimana." } },
            { fr: "en métro / en bus", it: "in metrò / in autobus", say: "ã métrò / ã büs", hook: "Con i mezzi in cui entri si usa EN: en métro, en bus, en train, en voiture. Ma À pied e À vélo, perché ci stai sopra!",
              ex: { fr: "Je vais au travail en métro, mais le dimanche je préfère marcher.", it: "Vado al lavoro in metrò, ma la domenica preferisco camminare." } },
            { fr: "tous les jours", it: "tutti i giorni", say: "tu lé jur", hook: "TOUS LES JOURS: «tutti i giorni». Con il giorno della settimana: tous les jeudis = ogni giovedì.",
              ex: { fr: "Monsieur Bernard vient au café tous les jours à huit heures précises.", it: "Il signor Bernard viene al caffè tutti i giorni alle otto in punto." } }
          ],
          tip: {
            title: "Aller e venir: la canzoncina dei verbi in movimento",
            body: "<div class='tbl'><table><thead><tr><th></th><th>aller (andare)</th><th>venir (venire)</th></tr></thead><tbody><tr><td>je</td><td>vais</td><td>viens</td></tr><tr><td>tu</td><td>vas</td><td>viens</td></tr><tr><td>il / elle</td><td>va</td><td>vient</td></tr><tr><td>nous</td><td>allons</td><td>venons</td></tr><tr><td>vous</td><td>allez</td><td>venez</td></tr><tr><td>ils / elles</td><td>vont</td><td>viennent</td></tr></tbody></table></div><ul><li><b>Aller + à</b> (destinazione): à + le = <b>au</b>, à + les = <b>aux</b>, à la e à l' restano.</li><li><b>Venir + de</b> (provenienza): de + le = <b>du</b>, de + les = <b>des</b>, de la e de l' restano.</li><li>Paesi: je vais <b>en</b> France / <b>au</b> Japon, ma je viens <b>de</b> France / <b>du</b> Japon.</li><li>Mezzi: <b>en</b> métro, en train, en voiture; <b>à</b> pied, à vélo.</li></ul>",
            examples: [
              { fr: "Je vais au café, et toi, tu vas où ?", it: "Io vado al caffè, e tu, dove vai?" },
              { fr: "Nous allons aux Galeries Lafayette en métro.", it: "Andiamo alle Galeries Lafayette in metrò." },
              { fr: "Vous venez d'Italie ? — Oui, nous venons de Rome.", it: "Venite dall'Italia? — Sì, veniamo da Roma." },
              { fr: "Ils viennent du marché aux fleurs, près de Notre-Dame.", it: "Vengono dal mercato dei fiori, vicino a Notre-Dame." },
              { fr: "Elle va à la gare à pied, parce qu'il fait beau.", it: "Va alla stazione a piedi, perché fa bel tempo." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Nous ___ au marché.» (andare)", opts: ["allons", "vont", "allez", "vais"], a: 0, why: "Nous allons." },
            { t: "mcq", q: "Completa: «Je vais ___ cinéma.»", opts: ["au", "à le", "à la", "aux"], a: 0, why: "À + le = au." },
            { t: "listen", say: "Je viens de Naples, mais j'habite à Paris depuis trois semaines.", q: "Cosa hai sentito?", opts: ["Vengo da Napoli, ma abito a Parigi da tre settimane.", "Vado a Napoli tra tre settimane.", "Abito a Napoli da tre settimane.", "Vengo da Parigi e vado a Napoli."], a: 0, why: "Je viens de = vengo da." },
            { t: "match", q: "Abbina", pairs: [["je vais", "vado"], ["ils vont", "vanno"], ["je viens", "vengo"], ["ils viennent", "vengono"]] },
            { t: "order", q: "Riordina: «Vado al lavoro in metrò.»", words: ["Je", "vais", "au", "travail", "en", "métro."], why: "Au travail; en métro." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Ils ___ à la plage en août.» (andare)", opts: ["vont", "allent", "vas", "allons"], a: 0, why: "Ils vont: irregolare!" },
            { t: "mcq", q: "Completa: «Elle revient ___ marché.»", opts: ["du", "de le", "au", "des"], a: 0, why: "De + le = du." },
            { t: "mcq", q: "Completa: «Mes parents ___ à Paris en décembre.» (venire)", opts: ["viennent", "venont", "vient", "venez"], a: 0, why: "Ils viennent, con la doppia N." },
            { t: "mcq", q: "Come si dice «vado al lavoro a piedi»?", opts: ["Je vais au travail à pied.", "Je vais au travail en pied.", "Je vais à le travail à pied.", "Je viens au travail en pied."], a: 0, why: "Au travail; à pied." },
            { t: "listen", say: "Tu viens au cinéma avec nous ce soir ? Le film commence à neuf heures.", q: "Cosa ti chiedono?", opts: ["Se vai al cinema con loro stasera alle nove.", "Se vieni a cena stasera alle nove.", "Se hai visto il film di stasera.", "Se il cinema apre alle nove."], a: 0, why: "Tu viens = vieni." },
            { t: "listen", say: "Nous allons à la plage en août, et nos amis vont à la montagne.", q: "Dove vanno gli amici?", opts: ["In montagna.", "Al mare.", "In città.", "Al lago."], a: 0, why: "Ils vont à la montagne." },
            { t: "type", q: "Completa: «Vous ___ d'Italie ?» (venite)", a: ["venez"], why: "Vous venez." },
            { t: "type", q: "Completa: «Je vais ___ toilettes.» (alle)", a: ["aux"], why: "À + les = aux." },
            { t: "type", say: "Je vais au travail en métro.", q: "Ascolta e completa: «Je vais au travail ___ métro.»", a: ["en"], why: "En métro, en bus, en train." },
            { t: "order", q: "Riordina: «Vengo da Napoli e vado a Parigi.»", words: ["Je", "viens", "de", "Naples", "et", "je", "vais", "à", "Paris."], why: "Venir de, aller à." },
            { t: "match", q: "Abbina", pairs: [["à + le", "au"], ["à + les", "aux"], ["de + le", "du"], ["de + les", "des"]] },
            { t: "mcq", q: "Chi è davvero M. Bernard?", opts: ["Un vecchio amico (e cavaliere) di Zizì", "Il fratello di Gigi", "Il padrone del caffè", "Un poliziotto in borghese"], a: 0, why: "Andava a ballare con Zizì: si chiama Henri." }
          ],
          recap: {
            can: ["Coniugare aller e venir al presente", "Dire dove vai con au, à la, aux", "Dire da dove vieni con du, de la, des", "Dire con quale mezzo: en métro, à pied…"],
            phrases: [{ fr: "Je vais au café en métro.", it: "Vado al caffè in metrò." }, { fr: "Nous venons du marché aux fleurs.", it: "Veniamo dal mercato dei fiori." }, { fr: "Ils viennent à Paris tous les étés.", it: "Vengono a Parigi tutte le estati." }],
            trap: "À + LE = AU, À + LES = AUX, DE + LE = DU, DE + LES = DES: mai «à le» o «de le»!"
          }
        },
        /* ---------------- LEZIONE 4-4 ---------------- */
        {
          id: "4-4", street: "Rue des Prépositions", title: "Dove sono le cose: sur, sous, dans, devant…",
          goal: "Descrivere dove si trovano persone e oggetti con le preposizioni di luogo, in frasi lunghe e precise.",
          episode: {
            title: "La scatola di latta",
            intro: "Seduti su una panchina davanti a Notre-Dame, aprono la scatola di latta. Dentro c'è un piccolo mondo: lettere, fotografie, un biglietto del cinema del 1965 e un bottone dorato. M. Bernard guarda tutto in silenzio.",
            lines: [
              { who: "Léa", fr: "Sur la photo, il y a Zizì devant un café, avec un jeune homme très élégant.", it: "Nella foto c'è Zizì davanti a un caffè, con un giovanotto molto elegante." },
              { who: "M. Bernard", fr: "Le jeune homme, c'est moi. Derrière nous, c'est le café de Montmartre.", it: "Il giovanotto sono io. Dietro di noi c'è il caffè di Montmartre." },
              { who: "Gigi", fr: "Et dans l'enveloppe, sous les photos, il y a une lettre pour vous !", it: "E nella busta, sotto le foto, c'è una lettera per lei!" },
              { who: "M. Bernard", fr: "Pour moi ? Après tant d'années… Lis-la, Gigi, mes yeux sont fatigués.", it: "Per me? Dopo tanti anni… Leggila tu, Gigi, i miei occhi sono stanchi." },
              { who: "Gigi", fr: "« Henri, je suis partie, mais mon cœur est resté entre le café et la Seine. »", it: "«Henri, sono partita, ma il mio cuore è rimasto tra il caffè e la Senna.»" },
              { who: "Croissant", fr: "Je suis à côté de vous, sous le banc. Personne ne pleure, d'accord ?", it: "Sono accanto a voi, sotto la panchina. Nessuno piange, d'accordo?" },
              { who: "Mme Lefèvre", fr: "Au fond de la boîte, entre deux cartes postales, il y a encore quelque chose.", it: "In fondo alla scatola, tra due cartoline, c'è ancora qualcosa." },
              { who: "Léa", fr: "Un petit carton avec une date et une heure : « Samedi, dix heures, au jardin du Luxembourg ».", it: "Un cartoncino con una data e un'ora: «Sabato, ore dieci, al giardino del Luxembourg»." }
            ],
            outro: "M. Bernard sorride per la prima volta: «Era il nostro appuntamento di ogni sabato. Zizì vuole che ci andiate voi.» Ma chi li aspetterà al Luxembourg, dopo tutti questi anni? Lo scoprirai nel 5° arrondissement, quando imparerai a dire l'ora.",
            you: "«{nome}, con sur, sous, dans, devant, derrière e entre puoi descrivere qualsiasi foto. Prova con la stanza dove sei adesso: dov'è il telefono? Sur la table? Dans ta main?»",
            mine: { fr: "Je m'appelle {nome} : mon téléphone est sur la table, et mon chat dort sous le lit.", it: "Mi chiamo {nome}: il mio telefono è sul tavolo, e il mio gatto dorme sotto il letto." }
          },
          words: [
            { fr: "sur", it: "su, sopra", say: "sür", hook: "SUR = su, con la U alla francese (labbra a bacio). Il gatto è SUR la table: sopra, da padrone.",
              ex: { fr: "Les clés sont sur la table de la cuisine, à côté du pain.", it: "Le chiavi sono sul tavolo della cucina, accanto al pane." } },
            { fr: "sous", it: "sotto", say: "su", hook: "SOUS = sotto, con OU che si legge «u»: su… ma vuol dire sotto! Trappola perfetta: SUR sopra, SOUS sotto.",
              ex: { fr: "Croissant dort sous le comptoir, là où il fait chaud et calme.", it: "Croissant dorme sotto il bancone, dove fa caldo ed è tranquillo." } },
            { fr: "dans", it: "dentro, in", say: "dã", hook: "DANS = dentro: suona come «danza», e in una scatola le cose danzano quando la scuoti!",
              ex: { fr: "Dans la boîte, il y a des lettres, des photos et un bouton doré.", it: "Nella scatola ci sono lettere, foto e un bottone dorato." } },
            { fr: "devant", it: "davanti a", say: "dəvã", hook: "DEVANT = davanti: le due parole iniziano uguali, de-va. Rendez-vous devant la gare!",
              ex: { fr: "On se retrouve devant l'entrée du musée à dix heures, d'accord ?", it: "Ci troviamo davanti all'ingresso del museo alle dieci, d'accordo?" } },
            { fr: "derrière", it: "dietro a", say: "dèrjèr", hook: "DERRIÈRE = dietro… e anche il sedere! «Le derrière» è quello che sta dietro di te.",
              ex: { fr: "Derrière l'église, il y a un petit jardin avec des bancs.", it: "Dietro la chiesa c'è un giardinetto con delle panchine." } },
            { fr: "entre", it: "tra, fra", say: "ãtr", hook: "ENTRE = tra. Somiglia a «entrare»: per stare TRA due cose devi ENTRARE in mezzo.",
              ex: { fr: "La pharmacie est entre la banque et la boulangerie.", it: "La farmacia è tra la banca e la panetteria." } },
            { fr: "à côté de", it: "accanto a", say: "a kòté də", hook: "À CÔTÉ: «a costato», al tuo fianco. La S scomparsa di «costa» è diventata il cappellino sulla Ô.",
              ex: { fr: "Je m'assieds à côté de la fenêtre pour regarder les passants.", it: "Mi siedo accanto alla finestra per guardare i passanti." } },
            { fr: "au fond de", it: "in fondo a", say: "ò fõ də", hook: "AU FOND = in fondo, sul fondo. Au fond de la boîte, au fond du couloir (in fondo al corridoio).",
              ex: { fr: "Les toilettes sont au fond du couloir, à gauche.", it: "Il bagno è in fondo al corridoio, a sinistra." } },
            { fr: "la boîte", it: "la scatola", say: "la bwat", hook: "BOÎTE: il cappellino sulla Î ricorda la S di «bossolo». E «la boîte» è anche la discoteca!",
              ex: { fr: "Zizì garde ses souvenirs dans une vieille boîte en métal.", it: "Zizì conserva i suoi ricordi in una vecchia scatola di metallo." } },
            { fr: "le banc", it: "la panchina", say: "lə bã", hook: "BANC = panca: pensa a un banco di scuola, ma all'aperto, nel parco. La C finale è muta.",
              ex: { fr: "Ils s'assoient sur un banc devant Notre-Dame pour ouvrir la boîte.", it: "Si siedono su una panchina davanti a Notre-Dame per aprire la scatola." } }
          ],
          tip: {
            title: "Le preposizioni di luogo: la scatola di Croissant",
            body: "<div class='tbl'><table><thead><tr><th>Preposizione</th><th>Significa</th><th>Esempio</th></tr></thead><tbody><tr><td>sur</td><td>su</td><td>sur la table</td></tr><tr><td>sous</td><td>sotto</td><td>sous le lit</td></tr><tr><td>dans</td><td>dentro</td><td>dans la boîte</td></tr><tr><td>devant</td><td>davanti a</td><td>devant la gare</td></tr><tr><td>derrière</td><td>dietro a</td><td>derrière l'église</td></tr><tr><td>entre</td><td>tra</td><td>entre le café et la Seine</td></tr><tr><td>à côté de</td><td>accanto a</td><td>à côté du pont</td></tr><tr><td>en face de</td><td>di fronte a</td><td>en face de la banque</td></tr><tr><td>au fond de</td><td>in fondo a</td><td>au fond du couloir</td></tr></tbody></table></div><ul><li><b>Sur</b> (sopra) e <b>sous</b> (sotto) si confondono facilmente: SUR ha la U delle labbra a bacio, SOUS il suono «u».</li><li>Sur, sous, dans, devant, derrière, entre vogliono l'articolo <b>direttamente</b>: devant la gare (non «devant de»).</li><li>À côté <b>de</b>, en face <b>de</b>, au fond <b>de</b>, près <b>de</b> vogliono DE: à côté <b>du</b> pont.</li></ul>",
            examples: [
              { fr: "Le chat est sur le canapé, et le chien est sous la table.", it: "Il gatto è sul divano, e il cane è sotto il tavolo." },
              { fr: "Mon téléphone est dans mon sac, à côté de mes clés.", it: "Il mio telefono è nella borsa, accanto alle chiavi." },
              { fr: "Rendez-vous devant la fontaine, entre le café et la poste.", it: "Appuntamento davanti alla fontana, tra il caffè e la posta." },
              { fr: "Derrière le musée, il y a un parc très tranquille.", it: "Dietro il museo c'è un parco molto tranquillo." },
              { fr: "La lettre est au fond de la boîte, sous les photos.", it: "La lettera è in fondo alla scatola, sotto le foto." }
            ]
          },
          practice: [
            { t: "mcq", q: "«Sous le lit» significa…", opts: ["sotto il letto", "sopra il letto", "accanto al letto", "dentro il letto"], a: 0, why: "Sous = sotto; sur = sopra." },
            { t: "mcq", q: "Completa: «La pharmacie est à côté ___ pont.»", opts: ["du", "de le", "le", "au"], a: 0, why: "À côté de + le = à côté du." },
            { t: "listen", say: "La pharmacie est entre la banque et la boulangerie.", q: "Dov'è la farmacia?", opts: ["Tra la banca e la panetteria.", "Dietro la banca.", "Di fronte alla panetteria.", "Sopra la banca."], a: 0, why: "Entre = tra." },
            { t: "match", q: "Abbina", pairs: [["sur", "sopra"], ["sous", "sotto"], ["devant", "davanti"], ["derrière", "dietro"]] },
            { t: "order", q: "Riordina: «Le chiavi sono sul tavolo della cucina.»", words: ["Les", "clés", "sont", "sur", "la", "table", "de", "la", "cuisine."], why: "Sur la table = sul tavolo." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Croissant dort ___ le comptoir.» (sotto)", opts: ["sous", "sur", "dans", "devant"], a: 0, why: "Sous = sotto." },
            { t: "mcq", q: "Quale frase è corretta?", opts: ["Rendez-vous devant la gare.", "Rendez-vous devant de la gare.", "Rendez-vous devant du gare.", "Rendez-vous à devant la gare."], a: 0, why: "Devant + articolo, senza de." },
            { t: "mcq", q: "«Au fond du couloir» significa…", opts: ["in fondo al corridoio", "davanti al corridoio", "sopra il corridoio", "fuori dal corridoio"], a: 0, why: "Au fond de = in fondo a." },
            { t: "mcq", q: "Completa: «Je m'assieds à côté ___ fenêtre.»", opts: ["de la", "du", "à la", "la"], a: 0, why: "À côté de + la fenêtre = de la (femminile non si fonde)." },
            { t: "listen", say: "Dans la boîte, il y a des lettres, des photos et un bouton doré.", q: "Cosa c'è nella scatola?", opts: ["Lettere, foto e un bottone dorato.", "Soldi, gioielli e una chiave.", "Libri, cartoline e un orologio.", "Solo una vecchia fotografia."], a: 0, why: "Dans = dentro." },
            { t: "listen", say: "Derrière l'église, il y a un petit jardin avec des bancs.", q: "Cosa c'è dietro la chiesa?", opts: ["Un giardinetto con delle panchine.", "Un grande parcheggio.", "Un caffè con la terrazza.", "Una stazione del metrò."], a: 0, why: "Derrière = dietro; le banc = la panchina." },
            { t: "type", q: "Completa: «Le chat est ___ le canapé.» (sopra)", a: ["sur"], why: "Sur = sopra." },
            { t: "type", q: "Completa: «La poste est ___ le café et la banque.» (tra)", a: ["entre"], why: "Entre = tra." },
            { t: "type", say: "On se retrouve devant l'entrée du musée à dix heures.", q: "Ascolta e completa: «On se retrouve ___ l'entrée du musée.»", a: ["devant"], why: "Devant = davanti a." },
            { t: "order", q: "Riordina: «La lettera è in fondo alla scatola, sotto le foto.»", words: ["La", "lettre", "est", "au", "fond", "de", "la", "boîte,", "sous", "les", "photos."], why: "Au fond de la boîte; sous les photos." },
            { t: "match", q: "Abbina", pairs: [["dans", "dentro"], ["entre", "tra"], ["à côté de", "accanto a"], ["la boîte", "la scatola"]] },
            { t: "mcq", q: "Cosa trovano in fondo alla scatola?", opts: ["Un cartoncino con un appuntamento al Luxembourg", "Una seconda chiave", "Un assegno", "La ricetta di un dolce"], a: 0, why: "«Samedi, dix heures, au jardin du Luxembourg»." }
          ],
          recap: {
            can: ["Dire dove si trova un oggetto: sur, sous, dans…", "Descrivere una foto o una stanza in modo preciso", "Dare appuntamenti: devant la gare, à côté du café", "Distinguere le preposizioni con e senza «de»"],
            phrases: [{ fr: "Mon téléphone est sur la table, à côté de mes clés.", it: "Il mio telefono è sul tavolo, accanto alle chiavi." }, { fr: "Rendez-vous devant la gare à dix heures.", it: "Appuntamento davanti alla stazione alle dieci." }, { fr: "La lettre est au fond de la boîte, sous les photos.", it: "La lettera è in fondo alla scatola, sotto le foto." }],
            trap: "SUR = sopra, SOUS = sotto: sembrano al contrario per un italiano! E devant / derrière non vogliono «de»."
          }
        }
      ]
    },
    {
      n: 5, arr: "5e", name: "Le temps", it: "Il tempo", level: "A1",
      lessons: [
        /* ---------------- LEZIONE 5-1 ---------------- */
        {
          id: "5-1", street: "Rue de l'Heure", title: "Che ore sono? L'ora in francese",
          goal: "Chiedere e dire l'ora, anche con «et quart», «et demie» e «moins le quart», e fissare un appuntamento.",
          episode: {
            title: "Appuntamento al Luxembourg",
            intro: "Sabato mattina. L'appuntamento è alle dieci al giardino del Luxembourg, nel 5° e 6° arrondissement. Gigi ha messo tre sveglie, ma ha dimenticato di cambiare l'ora del telefono. Léa lo aspetta davanti al cancello, guardando l'orologio ogni dieci secondi.",
            lines: [
              { who: "Léa", fr: "Gigi, enfin ! Tu sais quelle heure il est ? Il est dix heures et quart !", it: "Gigi, finalmente! Sai che ore sono? Sono le dieci e un quarto!" },
              { who: "Gigi", fr: "Pardon ! Mon réveil a sonné à huit heures, mais je me suis rendormi.", it: "Scusa! La sveglia è suonata alle otto, ma mi sono riaddormentato." },
              { who: "Croissant", fr: "Moi, je suis prêt depuis six heures et demie. Comme toujours.", it: "Io sono pronto dalle sei e mezza. Come sempre." },
              { who: "Léa", fr: "Le rendez-vous était à dix heures pile, devant la fontaine Médicis.", it: "L'appuntamento era alle dieci in punto, davanti alla fontana Medici." },
              { who: "Mme Lefèvre", fr: "Calmez-vous : je suis arrivée à dix heures moins cinq, et il n'y a personne.", it: "Calmatevi: sono arrivata alle dieci meno cinque, e non c'è nessuno." },
              { who: "Gigi", fr: "Le parc ferme à quelle heure ? Nous pouvons attendre jusqu'à midi.", it: "A che ora chiude il parco? Possiamo aspettare fino a mezzogiorno." },
              { who: "Léa", fr: "Regardez, là-bas : une vieille dame avec un chapeau bleu nous fait signe !", it: "Guardate, laggiù: un'anziana signora con un cappello blu ci fa segno!" },
              { who: "Mme Duval", fr: "Vous êtes en retard, les enfants. J'attends ce moment depuis presque quarante ans.", it: "Siete in ritardo, ragazzi. Aspetto questo momento da quasi quarant'anni." }
            ],
            outro: "La signora col cappello blu si chiama Odette Duval ed era la migliore amica di Zizì. Ogni sabato, da quasi quarant'anni, viene alla fontana Medici alle dieci, «perché una promessa è una promessa». Ha in borsa un quaderno pieno di date.",
            you: "«{nome}, in Francia gli orari ufficiali usano le 24 ore: il treno parte «à dix-sept heures trente». Tra amici invece si dice «cinq heures et demie». E soprattutto: non arrivare in ritardo come Gigi.»",
            mine: { fr: "Je m'appelle {nome}, et tous les jours je me réveille à sept heures et quart.", it: "Mi chiamo {nome}, e tutti i giorni mi sveglio alle sette e un quarto." }
          },
          words: [
            { fr: "Quelle heure est-il ?", it: "Che ore sono?", say: "kèl ör è til", hook: "In francese l'ora è al singolare: «quale ora è?». Più colloquiale: «Il est quelle heure ?».",
              ex: { fr: "Excusez-moi, quelle heure est-il ? Mon téléphone n'a plus de batterie.", it: "Mi scusi, che ore sono? Il mio telefono è scarico." } },
            { fr: "Il est… heures", it: "Sono le…", say: "il è … ör", hook: "IL EST deux heures = sono le due. Si dice sempre HEURES, anche quando in italiano non lo diciamo: il est huit heures.",
              ex: { fr: "Il est huit heures, et le café est déjà plein de clients pressés.", it: "Sono le otto, e il caffè è già pieno di clienti di fretta." } },
            { fr: "et quart / et demie", it: "e un quarto / e mezza", say: "e kar / e dəmì", hook: "QUART è un quarto, DEMIE è mezza. Dieci e mezza = dix heures ET DEMIE, con la E finale perché «heure» è femminile.",
              ex: { fr: "Le film commence à huit heures et demie, on mange avant ?", it: "Il film comincia alle otto e mezza, mangiamo prima?" } },
            { fr: "moins le quart", it: "meno un quarto", say: "mwẽ lə kar", hook: "MOINS = meno. Il est midi moins le quart = mezzogiorno meno un quarto. Con i minuti: dix heures moins cinq.",
              ex: { fr: "Le train part à six heures moins le quart, il ne faut pas être en retard.", it: "Il treno parte alle sei meno un quarto, non bisogna essere in ritardo." } },
            { fr: "midi / minuit", it: "mezzogiorno / mezzanotte", say: "midì / minüì", hook: "MIDI = metà del dì; MINUIT = metà della notte (nuit). Non si dice «douze heures» tra amici.",
              ex: { fr: "On déjeune à midi et on se couche rarement avant minuit.", it: "Pranziamo a mezzogiorno e raramente andiamo a letto prima di mezzanotte." } },
            { fr: "à … heures", it: "alle…", say: "a … ör", hook: "«Alle» si dice À: à trois heures. Vers trois heures = verso le tre (circa).",
              ex: { fr: "Rendez-vous à dix heures devant la fontaine du jardin.", it: "Appuntamento alle dieci davanti alla fontana del giardino." } },
            { fr: "en retard / à l'heure / en avance", it: "in ritardo / puntuale / in anticipo", say: "ã rətar / a lör / ã navãs", hook: "EN RETARD: il ritardatario è RITARDATO. À L'HEURE: «all'ora giusta». EN AVANCE: sei AVANTI.",
              ex: { fr: "Le train est à l'heure, mais Gigi, lui, est toujours en retard.", it: "Il treno è puntuale, ma Gigi, lui, è sempre in ritardo." } },
            { fr: "le matin / l'après-midi / le soir", it: "la mattina / il pomeriggio / la sera", say: "lə matẽ / laprèmidì / lə swar", hook: "MATIN = mattino. APRÈS-MIDI = dopo mezzogiorno. SOIR = sera (pensa alla «soirée», la serata).",
              ex: { fr: "Le matin je travaille, l'après-midi j'étudie, et le soir je me repose.", it: "La mattina lavoro, il pomeriggio studio, e la sera mi riposo." } },
            { fr: "une minute / une heure", it: "un minuto / un'ora", say: "ün minüt / ün ör", hook: "Attenzione al genere: UNE minute è femminile in francese! Une heure si lega: ü-nör.",
              ex: { fr: "Attends une minute, j'arrive dans un quart d'heure.", it: "Aspetta un minuto, arrivo tra un quarto d'ora." } },
            { fr: "pile", it: "in punto", say: "pil", hook: "À dix heures PILE: preciso come una PILA di monete perfettamente dritta.",
              ex: { fr: "Monsieur Bernard arrive au café à huit heures pile, tous les jours.", it: "Il signor Bernard arriva al caffè alle otto in punto, tutti i giorni." } }
          ],
          tip: {
            title: "L'orologio di Croissant",
            body: "<div class='tbl'><table><thead><tr><th>Ora</th><th>Tra amici</th><th>Ufficiale (24 h)</th></tr></thead><tbody><tr><td>8:00</td><td>huit heures</td><td>huit heures</td></tr><tr><td>8:15</td><td>huit heures et quart</td><td>huit heures quinze</td></tr><tr><td>8:30</td><td>huit heures et demie</td><td>huit heures trente</td></tr><tr><td>8:45</td><td>neuf heures moins le quart</td><td>huit heures quarante-cinq</td></tr><tr><td>8:50</td><td>neuf heures moins dix</td><td>huit heures cinquante</td></tr><tr><td>12:00</td><td>midi</td><td>douze heures</td></tr><tr><td>17:30</td><td>cinq heures et demie</td><td>dix-sept heures trente</td></tr><tr><td>0:00</td><td>minuit</td><td>zéro heure</td></tr></tbody></table></div><ul><li>Si dice sempre <b>heure(s)</b>: il est trois <b>heures</b>.</li><li>Dopo la mezz'ora si va «meno»: 8:50 = neuf heures <b>moins</b> dix.</li><li>Domanda: <b>Quelle heure est-il ?</b> / A che ora? <b>À quelle heure ?</b></li><li>Orari di treni, negozi e spettacoli: sempre <b>24 ore</b>.</li></ul>",
            examples: [
              { fr: "Quelle heure est-il ? — Il est onze heures et quart.", it: "Che ore sono? — Sono le undici e un quarto." },
              { fr: "Le musée ouvre à neuf heures et ferme à dix-huit heures.", it: "Il museo apre alle nove e chiude alle diciotto." },
              { fr: "On se voit à midi et demi devant le restaurant ?", it: "Ci vediamo a mezzogiorno e mezza davanti al ristorante?" },
              { fr: "Il est sept heures moins vingt, nous sommes en avance.", it: "Sono le sette meno venti, siamo in anticipo." },
              { fr: "Le dernier métro passe vers minuit et demi.", it: "L'ultimo metrò passa verso mezzanotte e mezza." }
            ]
          },
          practice: [
            { t: "mcq", q: "Come si dice «sono le otto e mezza»?", opts: ["Il est huit heures et demie.", "Il est huit et demie.", "Sont huit heures et demie.", "Il est huit heures et moitié."], a: 0, why: "Il est + heures + et demie." },
            { t: "mcq", q: "«Neuf heures moins le quart» è…", opts: ["8:45", "9:15", "9:45", "8:15"], a: 0, why: "Nove meno un quarto = 8:45." },
            { t: "listen", say: "Le film commence à huit heures et demie, on mange avant ?", q: "A che ora comincia il film?", opts: ["Alle 8:30", "Alle 8:15", "Alle 7:30", "Alle 9:30"], a: 0, why: "Huit heures et demie = 8:30." },
            { t: "match", q: "Abbina", pairs: [["midi", "mezzogiorno"], ["minuit", "mezzanotte"], ["en retard", "in ritardo"], ["le soir", "la sera"]] },
            { t: "order", q: "Riordina: «Appuntamento alle dieci davanti alla fontana.»", words: ["Rendez-vous", "à", "dix", "heures", "devant", "la", "fontaine."], why: "À + ora = alle." }
          ],
          test: [
            { t: "mcq", q: "Come chiedi l'ora?", opts: ["Quelle heure est-il ?", "Quelles heures sont ?", "Combien d'heures ?", "Qu'est-ce que l'heure ?"], a: 0, why: "Al singolare: quelle heure est-il?" },
            { t: "mcq", q: "Le 17:30 nell'orario di un treno si leggono…", opts: ["dix-sept heures trente", "cinq heures et demie du soir", "dix-sept et demie", "sept heures trente"], a: 0, why: "Orari ufficiali: 24 ore." },
            { t: "mcq", q: "Come si dice «sono le dieci meno cinque»?", opts: ["Il est dix heures moins cinq.", "Il est neuf heures moins cinq.", "Il est cinq moins dix.", "Il est dix heures cinq."], a: 0, why: "Dix heures moins cinq = 9:55." },
            { t: "mcq", q: "«Le train est à l'heure» significa…", opts: ["Il treno è puntuale.", "Il treno parte tra un'ora.", "Il treno è in ritardo di un'ora.", "Il treno arriva ogni ora."], a: 0, why: "À l'heure = puntuale." },
            { t: "listen", say: "Il est dix heures et quart !", q: "Che ore sono?", opts: ["10:15", "10:45", "10:30", "9:45"], a: 0, why: "Et quart = e un quarto." },
            { t: "listen", say: "Le train part à six heures moins le quart, il ne faut pas être en retard.", q: "A che ora parte il treno?", opts: ["5:45", "6:15", "6:45", "5:15"], a: 0, why: "Six heures moins le quart = 5:45." },
            { t: "listen", say: "On déjeune à midi et on se couche rarement avant minuit.", q: "Cosa hai sentito?", opts: ["Pranziamo a mezzogiorno e raramente andiamo a letto prima di mezzanotte.", "Ceniamo a mezzanotte e ci alziamo a mezzogiorno.", "Pranziamo all'una e andiamo a letto alle undici.", "Non pranziamo mai prima di mezzogiorno."], a: 0, why: "Midi = mezzogiorno; minuit = mezzanotte." },
            { t: "type", q: "Completa: «Il est trois heures et ___.» (e mezza)", a: ["demie"], why: "Et demie, con la E: heure è femminile." },
            { t: "type", q: "Completa: «Gigi est toujours en ___.» (ritardo)", a: ["retard"], why: "En retard = in ritardo." },
            { t: "type", say: "Monsieur Bernard arrive au café à huit heures pile.", q: "Ascolta e completa: «Monsieur Bernard arrive au café à huit heures ___.»", a: ["pile"], why: "Pile = in punto." },
            { t: "order", q: "Riordina: «Il museo apre alle nove e chiude alle diciotto.»", words: ["Le", "musée", "ouvre", "à", "neuf", "heures", "et", "ferme", "à", "dix-huit", "heures."], why: "Orari ufficiali a 24 ore." },
            { t: "match", q: "Abbina", pairs: [["8:15", "huit heures et quart"], ["8:30", "huit heures et demie"], ["8:45", "neuf heures moins le quart"], ["12:00", "midi"]] }
          ],
          recap: {
            can: ["Chiedere l'ora con «Quelle heure est-il ?»", "Dire l'ora con et quart, et demie, moins le quart", "Capire gli orari ufficiali a 24 ore", "Fissare un appuntamento e dire se sei in ritardo o puntuale"],
            phrases: [{ fr: "Quelle heure est-il ? — Il est dix heures et quart.", it: "Che ore sono? — Sono le dieci e un quarto." }, { fr: "Rendez-vous à midi devant la fontaine.", it: "Appuntamento a mezzogiorno davanti alla fontana." }, { fr: "Le train part à dix-sept heures trente.", it: "Il treno parte alle diciassette e trenta." }],
            trap: "Si dice sempre HEURES (il est huit heures) e dopo la mezz'ora si conta all'indietro: 8:50 = neuf heures moins dix."
          }
        },
        /* ---------------- LEZIONE 5-2 ---------------- */
        {
          id: "5-2", street: "Rue du Calendrier", title: "Giorni, mesi, stagioni e date",
          goal: "Dire i giorni, i mesi e le date (anche gli anni), e parlare di ieri, oggi e domani.",
          episode: {
            title: "Il quaderno delle date",
            intro: "Odette Duval invita tutti su una panchina al sole. Apre un quaderno rosso, consumato dagli anni: su ogni pagina c'è una data, scritta con una calligrafia elegante. «Sono i giorni importanti di Zizì», dice. «Li ho annotati tutti.»",
            lines: [
              { who: "Mme Duval", fr: "Le premier mai mille neuf cent soixante-cinq, Zizì arrive à Paris avec sa valise rouge.", it: "Il primo maggio 1965 Zizì arriva a Parigi con la sua valigia rossa." },
              { who: "Gigi", fr: "En mille neuf cent soixante-cinq ? Elle avait seulement dix-neuf ans !", it: "Nel 1965? Aveva solo diciannove anni!" },
              { who: "Mme Duval", fr: "Oui. Et le samedi quatorze juillet, au bal du quartier, elle rencontre Henri.", it: "Sì. E sabato 14 luglio, al ballo del quartiere, incontra Henri." },
              { who: "Léa", fr: "Le quatorze juillet, c'est la fête nationale : il y a des feux d'artifice partout !", it: "Il 14 luglio è la festa nazionale: ci sono fuochi d'artificio dappertutto!" },
              { who: "Mme Lefèvre", fr: "Et la dernière date du carnet ? Celle de la dernière page ?", it: "E l'ultima data del quaderno? Quella dell'ultima pagina?" },
              { who: "Mme Duval", fr: "Le mardi trois mars mille neuf cent quatre-vingt-sept. Ce jour-là, en hiver, Zizì part.", it: "Martedì 3 marzo 1987. Quel giorno, in inverno, Zizì parte." },
              { who: "Croissant", fr: "Mille neuf cent quatre-vingt-sept… Ces dates françaises sont plus longues qu'un dimanche sans croquettes.", it: "Millenovecentoottantasette… Queste date francesi sono più lunghe di una domenica senza crocchette." },
              { who: "Mme Duval", fr: "Elle part vers le sud, en Provence. Demain, je vous montre ses lettres de là-bas.", it: "Parte verso sud, in Provenza. Domani vi mostro le sue lettere da laggiù." }
            ],
            outro: "Françoise si fa scura in volto: il 3 marzo 1987 è anche il giorno in cui lei ha smesso di sorridere. Era una bambina, e la zia Zizì era partita senza salutarla. Ora, forse, capirà perché.",
            you: "«{nome}, in francese le date si dicono con il numero normale: le quatorze juillet, le trois mars. Solo il primo giorno del mese è speciale: le premier mai. E qual è la data del tuo compleanno?»",
            mine: { fr: "Je m'appelle {nome}, j'ai {eta} ans, et mon anniversaire est en été, au mois de juillet.", it: "Mi chiamo {nome}, ho {eta} anni, e il mio compleanno è in estate, nel mese di luglio." }
          },
          words: [
            { fr: "lundi, mardi, mercredi", it: "lunedì, martedì, mercoledì", say: "lẽdì, mardì, mèrkrədì", hook: "Uguali all'italiano senza l'accento: LUNdi (Luna), MARdi (Marte), MERCREdi (Mercurio). I giorni non hanno la maiuscola!",
              ex: { fr: "Le café est fermé le lundi, mais ouvert tous les autres jours.", it: "Il caffè è chiuso il lunedì, ma aperto tutti gli altri giorni." } },
            { fr: "jeudi, vendredi, samedi, dimanche", it: "giovedì, venerdì, sabato, domenica", say: "jödì, vãdrədì, samdì, dimãsh", hook: "JEUdi (Giove), VENDREdi (Venere), SAMEdi (sabato), DIMANCHE (il giorno del Signore, domenica). «Le samedi» con l'articolo = ogni sabato.",
              ex: { fr: "Le samedi matin, Odette attend devant la fontaine à dix heures.", it: "Il sabato mattina Odette aspetta davanti alla fontana alle dieci." } },
            { fr: "janvier, février, mars…", it: "gennaio, febbraio, marzo…", say: "jãvjé, févrijé, mars", hook: "Quasi come in italiano: avril, mai, juin, juillet, août (si dice «ut»!), septembre, octobre, novembre, décembre.",
              ex: { fr: "En août, beaucoup de Parisiens quittent la ville pour les vacances.", it: "Ad agosto molti parigini lasciano la città per le vacanze." } },
            { fr: "le premier", it: "il primo (del mese)", say: "lə prəmjé", hook: "Solo il primo giorno usa l'ordinale: LE PREMIER mai. Per gli altri: le deux mai, le trois mai… niente «secondo» o «terzo»!",
              ex: { fr: "Le premier mai, en France, on offre du muguet aux personnes qu'on aime.", it: "Il primo maggio in Francia si regala il mughetto alle persone care." } },
            { fr: "aujourd'hui", it: "oggi", say: "ojurdüì", hook: "AUJOURD'HUI: «al giorno di oggi», una parola lunghissima per dire «oggi». Pensa a «hui» come all'«hodie» latino.",
              ex: { fr: "Aujourd'hui, nous sommes le samedi douze octobre, et il fait beau.", it: "Oggi è sabato 12 ottobre, e fa bel tempo." } },
            { fr: "hier / demain", it: "ieri / domani", say: "jèr / dəmẽ", hook: "HIER sembra «ieri» detto in fretta. DEMAIN: il giorno DOPO la MANO di oggi… o semplicemente «domani» col naso.",
              ex: { fr: "Hier, j'étais fatigué, mais demain je commence à sept heures.", it: "Ieri ero stanco, ma domani comincio alle sette." } },
            { fr: "la semaine / le mois / l'année", it: "la settimana / il mese / l'anno", say: "la səmèn / lə mwa / lané", hook: "SEMAINE = settimana (sette giorni). MOIS = mese. ANNÉE = annata, l'anno intero vissuto.",
              ex: { fr: "Je vais à la piscine deux fois par semaine, le mardi et le jeudi.", it: "Vado in piscina due volte alla settimana, il martedì e il giovedì." } },
            { fr: "le printemps / l'été", it: "la primavera / l'estate", say: "lə prẽtã / leté", hook: "PRINTEMPS = «il primo tempo» dell'anno. ÉTÉ = estate: la S scomparsa è diventata É.",
              ex: { fr: "Au printemps, les jardins de Paris sont pleins de fleurs.", it: "In primavera i giardini di Parigi sono pieni di fiori." } },
            { fr: "l'automne / l'hiver", it: "l'autunno / l'inverno", say: "lotòn / livèr", hook: "AUTOMNE: la M è muta, «otòn». HIVER = inverno (hibernare!). Si dice «en été, en automne, en hiver», ma «AU printemps».",
              ex: { fr: "En hiver, il fait froid, mais les marchés de Noël sont magnifiques.", it: "In inverno fa freddo, ma i mercatini di Natale sono magnifici." } },
            { fr: "mille neuf cent…", it: "millenovecento…", say: "mil nöf sã", hook: "Gli anni si dicono come numeri interi: 1987 = mille neuf cent quatre-vingt-sept. Il 2025 è più facile: deux mille vingt-cinq.",
              ex: { fr: "Zizì est née en mille neuf cent quarante-six, à Naples.", it: "Zizì è nata nel 1946, a Napoli." } }
          ],
          tip: {
            title: "Il calendario di Odette: come si dice una data",
            body: "<div class='tbl'><table><thead><tr><th>Italiano</th><th>Francese</th></tr></thead><tbody><tr><td>lunedì 3 marzo</td><td><b>le</b> lundi trois mars</td></tr><tr><td>il 1° maggio</td><td>le <b>premier</b> mai</td></tr><tr><td>il 14 luglio</td><td>le quatorze juillet</td></tr><tr><td>nel 1987</td><td><b>en</b> mille neuf cent quatre-vingt-sept</td></tr><tr><td>a marzo</td><td><b>en</b> mars / au mois de mars</td></tr><tr><td>in estate</td><td><b>en</b> été (ma <b>au</b> printemps)</td></tr><tr><td>il lunedì (ogni)</td><td><b>le</b> lundi</td></tr></tbody></table></div><ul><li>Giorni e mesi <b>senza maiuscola</b>: lundi, mars.</li><li>La data vuole <b>le</b> davanti: le trois mars.</li><li>«Lundi» = questo lunedì; «<b>le</b> lundi» = tutti i lunedì.</li><li>Che giorno è? <b>Nous sommes quel jour ?</b> / <b>On est le combien ?</b></li></ul>",
            examples: [
              { fr: "Aujourd'hui, nous sommes le mercredi cinq juin.", it: "Oggi è mercoledì 5 giugno." },
              { fr: "Mon anniversaire est le premier avril : ce n'est pas une blague !", it: "Il mio compleanno è il primo aprile: non è uno scherzo!" },
              { fr: "Nous partons en vacances en août, et nous rentrons en septembre.", it: "Partiamo in vacanza ad agosto, e torniamo a settembre." },
              { fr: "Le dimanche, je dors jusqu'à dix heures.", it: "La domenica dormo fino alle dieci." },
              { fr: "Au printemps et en automne, Paris est vraiment magnifique.", it: "In primavera e in autunno Parigi è davvero magnifica." }
            ]
          },
          practice: [
            { t: "mcq", q: "Come si dice «il primo maggio»?", opts: ["le premier mai", "le un mai", "le première mai", "le mai premier"], a: 0, why: "Solo il primo usa l'ordinale: le premier." },
            { t: "mcq", q: "«Le lundi, le café est fermé» significa…", opts: ["Il lunedì (ogni lunedì) il caffè è chiuso.", "Questo lunedì il caffè è chiuso.", "Il caffè chiude lunedì prossimo.", "Il caffè apre il lunedì."], a: 0, why: "Le + giorno = abitudine." },
            { t: "listen", say: "En août, beaucoup de Parisiens quittent la ville pour les vacances.", q: "Quando i parigini lasciano la città?", opts: ["Ad agosto", "A ottobre", "A giugno", "A gennaio"], a: 0, why: "Août si pronuncia «ut»." },
            { t: "match", q: "Abbina", pairs: [["hier", "ieri"], ["demain", "domani"], ["aujourd'hui", "oggi"], ["la semaine", "la settimana"]] },
            { t: "order", q: "Riordina: «Oggi è sabato 12 ottobre.»", words: ["Aujourd'hui,", "nous", "sommes", "le", "samedi", "douze", "octobre."], why: "Nous sommes le + giorno + numero + mese." }
          ],
          test: [
            { t: "mcq", q: "Come si dice «a marzo»?", opts: ["en mars", "au mars", "à mars", "dans mars"], a: 0, why: "En + mese." },
            { t: "mcq", q: "Quale stagione vuole «au»?", opts: ["au printemps", "au été", "au hiver", "au automne"], a: 0, why: "Au printemps; en été, en automne, en hiver." },
            { t: "mcq", q: "Il 1987 si dice…", opts: ["mille neuf cent quatre-vingt-sept", "dix-neuf cent quatre-vingt-sept", "mille neuf cent huitante-sept", "un mille neuf quatre-vingt-sept"], a: 0, why: "Mille + neuf cent + quatre-vingt-sept." },
            { t: "mcq", q: "Quale frase ha un errore?", opts: ["Aujourd'hui, nous sommes Lundi.", "Le dimanche, je dors tard.", "Mon anniversaire est le deux mai.", "En hiver, il fait froid."], a: 0, why: "I giorni non vogliono la maiuscola: lundi." },
            { t: "listen", say: "Le premier mai, en France, on offre du muguet aux personnes qu'on aime.", q: "Cosa si regala il primo maggio?", opts: ["Il mughetto", "Le rose", "I cioccolatini", "Le uova"], a: 0, why: "Le muguet = il mughetto." },
            { t: "listen", say: "Le mardi trois mars mille neuf cent quatre-vingt-sept. Ce jour-là, Zizì part.", q: "Quando parte Zizì?", opts: ["Martedì 3 marzo 1987", "Lunedì 13 marzo 1987", "Martedì 3 maggio 1978", "Mercoledì 3 marzo 1997"], a: 0, why: "Trois mars; quatre-vingt-sept = 87." },
            { t: "listen", say: "Je vais à la piscine deux fois par semaine, le mardi et le jeudi.", q: "Quando va in piscina?", opts: ["Il martedì e il giovedì", "Il lunedì e il mercoledì", "Il sabato e la domenica", "Il martedì e il venerdì"], a: 0, why: "Mardi = martedì; jeudi = giovedì." },
            { t: "type", q: "Completa: «___, je commence à sept heures.» (domani)", a: ["Demain"], why: "Demain = domani." },
            { t: "type", q: "Scrivi in francese il mese di agosto.", a: ["août", "aout"], why: "Août, si pronuncia «ut»." },
            { t: "type", say: "En hiver, il fait froid, mais les marchés de Noël sont magnifiques.", q: "Ascolta e completa: «En ___, il fait froid.»", a: ["hiver"], why: "L'hiver = l'inverno." },
            { t: "order", q: "Riordina: «Il mio compleanno è il primo aprile.»", words: ["Mon", "anniversaire", "est", "le", "premier", "avril."], why: "Le premier + mese." },
            { t: "match", q: "Abbina", pairs: [["le printemps", "la primavera"], ["l'été", "l'estate"], ["l'automne", "l'autunno"], ["l'hiver", "l'inverno"]] }
          ],
          recap: {
            can: ["Dire i giorni della settimana e i mesi", "Dire una data completa, anche con l'anno", "Parlare di ieri, oggi e domani", "Usare le stagioni con en e au"],
            phrases: [{ fr: "Aujourd'hui, nous sommes le mardi trois mars.", it: "Oggi è martedì 3 marzo." }, { fr: "Mon anniversaire est le premier juillet.", it: "Il mio compleanno è il primo luglio." }, { fr: "Au printemps et en été, Paris est magnifique.", it: "In primavera e in estate Parigi è magnifica." }],
            trap: "Solo il primo del mese è «le premier»; gli altri giorni usano il numero normale: le deux, le trois… E niente maiuscole per giorni e mesi."
          }
        },
        /* ---------------- LEZIONE 5-3 ---------------- */
        {
          id: "5-3", street: "Rue de la Routine", title: "La giornata tipo: i verbi riflessivi",
          goal: "Raccontare la tua giornata con i verbi riflessivi (je me lève, je m'habille…) e i connettivi d'abord, ensuite, puis, enfin.",
          episode: {
            title: "La giornata di un pizzaiolo",
            intro: "Odette ha promesso di portare le lettere di Zizì al caffè, ma solo «dopo le sette di sera». Nel frattempo Gigi deve lavorare. Léa, curiosa, gli chiede come passa le sue giornate da quando è a Parigi. Croissant ascolta e prende appunti mentali.",
            lines: [
              { who: "Léa", fr: "Gigi, tu as toujours l'air fatigué. Tu te lèves à quelle heure le matin ?", it: "Gigi, sembri sempre stanco. A che ora ti alzi la mattina?" },
              { who: "Gigi", fr: "Je me réveille à cinq heures, mais je me lève à cinq heures et quart.", it: "Mi sveglio alle cinque, ma mi alzo alle cinque e un quarto." },
              { who: "Gigi", fr: "D'abord, je me douche ; ensuite, je m'habille et je prépare la pâte.", it: "Prima mi faccio la doccia; poi mi vesto e preparo l'impasto." },
              { who: "Léa", fr: "Et le soir ? Tu te reposes un peu, ou tu travailles encore ?", it: "E la sera? Ti riposi un po', o lavori ancora?" },
              { who: "Gigi", fr: "Le soir, je nettoie le café, puis je me couche vers onze heures.", it: "La sera pulisco il caffè, poi vado a letto verso le undici." },
              { who: "Croissant", fr: "Ma routine est plus simple : je me réveille, je mange, je me lave, je dors.", it: "La mia routine è più semplice: mi sveglio, mangio, mi lavo, dormo." },
              { who: "Léa", fr: "Et tu t'amuses quand, Gigi ? Il faut aussi se promener et voir des amis !", it: "E quando ti diverti, Gigi? Bisogna anche passeggiare e vedere degli amici!" },
              { who: "Gigi", fr: "Tu as raison. Dimanche, je me repose enfin : on se promène au bord de la Seine ?", it: "Hai ragione. Domenica finalmente mi riposo: passeggiamo lungo la Senna?" }
            ],
            outro: "Alle sette in punto Odette entra nel caffè con un pacchetto di lettere legate da un nastro blu. Le timbrature dicono tutte la stessa cosa: «Roussillon, Vaucluse». Un paesino della Provenza con le case color ocra. Zizì ha vissuto lì per vent'anni.",
            you: "«{nome}, nei verbi riflessivi c'è un pronome in più: je ME lève, tu TE lèves, il SE lève. Esattamente come in italiano: io MI alzo, tu TI alzi. Questa volta il francese ti fa un regalo.»",
            mine: { fr: "Je m'appelle {nome} : d'abord je me lève, ensuite je prends un café, puis je m'habille.", it: "Mi chiamo {nome}: prima mi alzo, poi prendo un caffè, poi mi vesto." }
          },
          words: [
            { fr: "se réveiller", it: "svegliarsi", say: "sə révèjé", hook: "SE RÉVEILLER: il RÉVEIL (la sveglia) suona e tu ti RISVEGLI. Je me réveille, tu te réveilles.",
              ex: { fr: "Je me réveille sans réveil, grâce au soleil qui entre par la fenêtre.", it: "Mi sveglio senza sveglia, grazie al sole che entra dalla finestra." } },
            { fr: "se lever", it: "alzarsi", say: "sə ləvé", hook: "SE LEVER = alzarsi, come una LEVA che ti solleva dal letto. Je me lève: con l'accento grave nelle forme brevi.",
              ex: { fr: "Le week-end, je me lève tard et je prends un long petit-déjeuner.", it: "Nel fine settimana mi alzo tardi e faccio una lunga colazione." } },
            { fr: "se doucher / se laver", it: "farsi la doccia / lavarsi", say: "sə dushé / sə lavé", hook: "SE DOUCHER: la DOCCIA, con OU = u. SE LAVER = lavarsi. Croissant si lava con la lingua, ovviamente.",
              ex: { fr: "Je me douche le matin, mais mon frère préfère se laver le soir.", it: "Io mi faccio la doccia la mattina, ma mio fratello preferisce lavarsi la sera." } },
            { fr: "s'habiller", it: "vestirsi", say: "sabijé", hook: "S'HABILLER: mettersi l'ABITO. Con la H muta il pronome si apostrofa: je m'habille, tu t'habilles.",
              ex: { fr: "Je m'habille vite, parce que je suis toujours en retard le lundi.", it: "Mi vesto in fretta, perché il lunedì sono sempre in ritardo." } },
            { fr: "se coucher", it: "andare a letto, coricarsi", say: "sə kushé", hook: "SE COUCHER: andare sul COUCH (divano-letto) e coricarsi. Le soleil se couche = il sole tramonta!",
              ex: { fr: "En semaine, je me couche vers onze heures pour être en forme.", it: "Nei giorni feriali vado a letto verso le undici per essere in forma." } },
            { fr: "se reposer", it: "riposarsi", say: "sə rəpozé", hook: "SE REPOSER = riposarsi: quasi identico. Il «repos» è il riposo, e il dimanche è le jour de repos.",
              ex: { fr: "Après le déjeuner, ma grand-mère se repose une heure sur le canapé.", it: "Dopo pranzo mia nonna si riposa un'ora sul divano." } },
            { fr: "se promener", it: "passeggiare", say: "sə promné", hook: "SE PROMENER: fare una PROMENADE, una passeggiata. On se promène? = facciamo due passi?",
              ex: { fr: "Le dimanche, nous nous promenons au jardin du Luxembourg.", it: "La domenica passeggiamo al giardino del Luxembourg." } },
            { fr: "d'abord / ensuite", it: "prima / poi, in seguito", say: "dabòr / ãsüìt", hook: "D'ABORD: «all'abbordaggio», si comincia! ENSUITE: «in seguito», la SUITE di una storia.",
              ex: { fr: "D'abord je bois un café, ensuite je lis les nouvelles sur mon téléphone.", it: "Prima bevo un caffè, poi leggo le notizie sul telefono." } },
            { fr: "puis / enfin", it: "poi / infine", say: "püì / ãfẽ", hook: "PUIS = poi, corto e veloce. ENFIN = infine… e anche «finalmente!» quando qualcosa arriva dopo tanto.",
              ex: { fr: "Je travaille, puis je fais les courses, et enfin je rentre à la maison.", it: "Lavoro, poi faccio la spesa, e infine torno a casa." } },
            { fr: "d'habitude", it: "di solito", say: "dabitüd", hook: "D'HABITUDE: per ABITUDINE, di solito. Comme d'habitude = come al solito (anche una canzone famosissima!).",
              ex: { fr: "D'habitude, je prends le métro, mais aujourd'hui je marche.", it: "Di solito prendo il metrò, ma oggi cammino." } }
          ],
          tip: {
            title: "I verbi riflessivi: il pronome specchio",
            body: "<div class='tbl'><table><thead><tr><th></th><th>se lever (alzarsi)</th><th>s'habiller (vestirsi)</th></tr></thead><tbody><tr><td>je</td><td>me lève</td><td>m'habille</td></tr><tr><td>tu</td><td>te lèves</td><td>t'habilles</td></tr><tr><td>il / elle</td><td>se lève</td><td>s'habille</td></tr><tr><td>nous</td><td>nous levons</td><td>nous habillons</td></tr><tr><td>vous</td><td>vous levez</td><td>vous habillez</td></tr><tr><td>ils / elles</td><td>se lèvent</td><td>s'habillent</td></tr></tbody></table></div><ul><li>Il pronome riflessivo va <b>prima del verbo</b>, come in italiano: je <b>me</b> lève = io <b>mi</b> alzo.</li><li>Davanti a vocale o H muta: <b>m', t', s'</b>.</li><li>Negazione: il <b>ne</b> va prima del pronome: je <b>ne</b> me lève <b>pas</b>.</li><li>Per raccontare in ordine: <b>d'abord → ensuite → puis → enfin</b>.</li></ul>",
            examples: [
              { fr: "Je me lève à sept heures et je me douche tout de suite.", it: "Mi alzo alle sette e mi faccio subito la doccia." },
              { fr: "Tu te couches toujours après minuit ?", it: "Vai sempre a letto dopo mezzanotte?" },
              { fr: "Nous nous promenons souvent au bord du canal.", it: "Passeggiamo spesso lungo il canale." },
              { fr: "Le dimanche, je ne me réveille pas avant dix heures.", it: "La domenica non mi sveglio prima delle dieci." },
              { fr: "D'abord ils s'habillent, puis ils prennent le petit-déjeuner.", it: "Prima si vestono, poi fanno colazione." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Je ___ lève à sept heures.»", opts: ["me", "se", "te", "m'"], a: 0, why: "Je me lève." },
            { t: "mcq", q: "Completa: «Tu ___ habilles vite.»", opts: ["t'", "te", "s'", "m'"], a: 0, why: "Davanti alla H muta: t'habilles." },
            { t: "listen", say: "En semaine, je me couche vers onze heures pour être en forme.", q: "A che ora va a letto?", opts: ["Verso le undici", "Verso mezzanotte", "Alle dieci in punto", "Verso le sette"], a: 0, why: "Je me couche = vado a letto." },
            { t: "match", q: "Abbina", pairs: [["se lever", "alzarsi"], ["s'habiller", "vestirsi"], ["se coucher", "andare a letto"], ["se promener", "passeggiare"]] },
            { t: "order", q: "Riordina: «Prima mi faccio la doccia, poi mi vesto.»", words: ["D'abord,", "je", "me", "douche,", "ensuite", "je", "m'habille."], why: "D'abord… ensuite…" }
          ],
          test: [
            { t: "mcq", q: "Completa: «Nous ___ promenons le dimanche.»", opts: ["nous", "se", "vous", "nos"], a: 0, why: "Nous nous promenons." },
            { t: "mcq", q: "Come si dice «non mi alzo»?", opts: ["Je ne me lève pas.", "Je me ne lève pas.", "Je ne lève me pas.", "Ne je me lève pas."], a: 0, why: "Ne prima del pronome, pas dopo il verbo." },
            { t: "mcq", q: "Completa: «Ils ___ couchent tard.»", opts: ["se", "me", "les", "s'"], a: 0, why: "Ils se couchent." },
            { t: "mcq", q: "Qual è l'ordine giusto dei connettivi?", opts: ["d'abord, ensuite, puis, enfin", "enfin, puis, d'abord, ensuite", "puis, d'abord, enfin, ensuite", "ensuite, enfin, d'abord, puis"], a: 0, why: "Prima, poi, poi, infine." },
            { t: "listen", say: "Je me réveille à cinq heures, mais je me lève à cinq heures et quart.", q: "A che ora si alza Gigi?", opts: ["Alle cinque e un quarto", "Alle cinque", "Alle sei meno un quarto", "Alle quattro e mezza"], a: 0, why: "Je me lève à cinq heures et quart." },
            { t: "listen", say: "D'habitude, je prends le métro, mais aujourd'hui je marche.", q: "Cosa fa oggi?", opts: ["Va a piedi", "Prende il metrò", "Prende l'autobus", "Resta a casa"], a: 0, why: "D'habitude = di solito; aujourd'hui je marche." },
            { t: "listen", say: "Après le déjeuner, ma grand-mère se repose une heure sur le canapé.", q: "Cosa fa la nonna dopo pranzo?", opts: ["Si riposa un'ora sul divano.", "Fa una passeggiata di un'ora.", "Si lava e si veste.", "Va a dormire fino a sera."], a: 0, why: "Se reposer = riposarsi." },
            { t: "type", q: "Completa: «Je ___ douche le matin.» (mi)", a: ["me"], why: "Je me douche." },
            { t: "type", q: "Completa: «___, je rentre à la maison.» (infine)", a: ["Enfin"], why: "Enfin = infine / finalmente." },
            { t: "type", say: "Le week-end, je me lève tard.", q: "Ascolta e completa: «Le week-end, je me ___ tard.»", a: ["lève", "leve"], why: "Je me lève, con l'accento grave." },
            { t: "order", q: "Riordina: «Di solito vado a letto verso le undici.»", words: ["D'habitude,", "je", "me", "couche", "vers", "onze", "heures."], why: "Se coucher = andare a letto." },
            { t: "match", q: "Abbina", pairs: [["d'abord", "prima"], ["ensuite", "poi"], ["enfin", "infine"], ["d'habitude", "di solito"]] }
          ],
          recap: {
            can: ["Coniugare i verbi riflessivi: je me lève, tu t'habilles…", "Raccontare la tua giornata dalla mattina alla sera", "Mettere in ordine le azioni con d'abord, ensuite, puis, enfin", "Fare la negazione con i riflessivi"],
            phrases: [{ fr: "Je me lève à sept heures et je me douche.", it: "Mi alzo alle sette e mi faccio la doccia." }, { fr: "D'abord je m'habille, ensuite je prends un café.", it: "Prima mi vesto, poi prendo un caffè." }, { fr: "Le dimanche, je ne me réveille pas avant dix heures.", it: "La domenica non mi sveglio prima delle dieci." }],
            trap: "Con la negazione, NE va prima del pronome riflessivo: je NE me lève PAS (non «je me ne lève pas»)."
          }
        },
        /* ---------------- LEZIONE 5-4 ---------------- */
        {
          id: "5-4", street: "Rue de la Météo", title: "Che tempo fa? Il meteo",
          goal: "Descrivere il tempo atmosferico con «il fait», «il pleut», «il neige» e fare progetti in base al meteo.",
          episode: {
            title: "Il picnic sotto la pioggia",
            intro: "Domenica, giorno di riposo. Léa ha organizzato un picnic al giardino del Luxembourg per festeggiare le lettere ritrovate. Cestino, tovaglia a quadri, una baguette per persona. Il cielo, però, ha altri programmi.",
            lines: [
              { who: "Léa", fr: "Quel beau temps ! Il fait soleil et il fait vingt-deux degrés : parfait pour un pique-nique.", it: "Che bel tempo! C'è il sole e ci sono ventidue gradi: perfetto per un picnic." },
              { who: "Gigi", fr: "Hmm… Regarde ces nuages gris là-bas. Il y a aussi beaucoup de vent.", it: "Mmh… Guarda quelle nuvole grigie laggiù. C'è anche molto vento." },
              { who: "Mme Lefèvre", fr: "La météo annonce de la pluie cet après-midi. Il va pleuvoir vers trois heures.", it: "Il meteo annuncia pioggia questo pomeriggio. Pioverà verso le tre." },
              { who: "Croissant", fr: "Je déteste la pluie. Un chat mouillé, c'est un chat sans dignité.", it: "Detesto la pioggia. Un gatto bagnato è un gatto senza dignità." },
              { who: "Léa", fr: "Oh non, il pleut ! Vite, sous les arbres ! Il fait froid tout à coup !", it: "Oh no, piove! Presto, sotto gli alberi! Fa freddo all'improvviso!" },
              { who: "Gigi", fr: "À Naples, en octobre, il fait encore chaud et le ciel est toujours bleu…", it: "A Napoli, a ottobre, fa ancora caldo e il cielo è sempre azzurro…" },
              { who: "Mme Lefèvre", fr: "Et en Provence aussi. Zizì écrit dans ses lettres : « Ici, il fait beau trois cents jours par an. »", it: "Anche in Provenza. Zizì scrive nelle sue lettere: «Qui fa bel tempo trecento giorni all'anno.»" },
              { who: "Gigi", fr: "Alors c'est décidé : la semaine prochaine, nous partons en Provence, à Roussillon !", it: "Allora è deciso: la settimana prossima partiamo per la Provenza, per Roussillon!" }
            ],
            outro: "Sotto un ombrellone del caffè dei giardini, bagnati fino alle ossa, decidono il viaggio. Françoise chiuderà la panetteria per tre giorni, Léa prenderà le ferie, Croissant viaggerà in una cesta «di prima classe». Il prossimo arrondissement è un viaggio: si va in treno verso il sud.",
            you: "«{nome}, per il tempo i francesi usano quasi sempre IL FAIT: il fait beau, il fait chaud, il fait froid. Ma per la pioggia e la neve hanno verbi tutti loro: il pleut, il neige. E da te, oggi, che tempo fa?»",
            mine: { fr: "Je m'appelle {nome} : chez moi, aujourd'hui, il fait beau, mais il fait un peu froid.", it: "Mi chiamo {nome}: da me, oggi, fa bel tempo, ma fa un po' freddo." }
          },
          words: [
            { fr: "Quel temps fait-il ?", it: "Che tempo fa?", say: "kèl tã fè til", hook: "LE TEMPS è sia il tempo che passa sia il tempo atmosferico, proprio come in italiano. «Fait-il» = fa.",
              ex: { fr: "Quel temps fait-il à Rome aujourd'hui ? Ici, à Paris, il pleut encore.", it: "Che tempo fa a Roma oggi? Qui a Parigi piove ancora." } },
            { fr: "il fait beau / il fait mauvais", it: "fa bel tempo / fa brutto tempo", say: "il fè bò / il fè movè", hook: "IL FAIT BEAU: «fa bello». MAUVAIS = cattivo, brutto (pensa a «malvagio»).",
              ex: { fr: "Quand il fait beau, nous mangeons sur la terrasse du café.", it: "Quando fa bel tempo mangiamo sulla terrazza del caffè." } },
            { fr: "il fait chaud / il fait froid", it: "fa caldo / fa freddo", say: "il fè shò / il fè frwa", hook: "Trappola! CHAUD vuol dire CALDO, anche se suona come «freddo» in inglese (cold). Sul rubinetto: C = chaud = caldo!",
              ex: { fr: "En juillet, il fait très chaud à Paris, et le métro est un four.", it: "A luglio fa molto caldo a Parigi, e il metrò è un forno." } },
            { fr: "il pleut / la pluie", it: "piove / la pioggia", say: "il plö / la plüì", hook: "IL PLEUT = piove, con EU che si legge «ö». LA PLUIE = la pioggia. Il verbo è «pleuvoir».",
              ex: { fr: "Il pleut depuis ce matin, alors je reste à la maison avec un bon livre.", it: "Piove da stamattina, quindi resto a casa con un buon libro." } },
            { fr: "il neige / la neige", it: "nevica / la neve", say: "il nèj / la nèj", hook: "NEIGE = neve: la G si legge «j» morbida, come la neve che cade piano.",
              ex: { fr: "Il neige rarement à Paris, mais quand il neige, la ville est magique.", it: "A Parigi nevica raramente, ma quando nevica la città è magica." } },
            { fr: "le soleil", it: "il sole", say: "lə solèj", hook: "SOLEIL = sole, con un finale «-èj» come un raggio che brilla. Il y a du soleil = c'è il sole.",
              ex: { fr: "Il y a du soleil, mais n'oublie pas ton parapluie : on ne sait jamais.", it: "C'è il sole, ma non dimenticare l'ombrello: non si sa mai." } },
            { fr: "le vent / le nuage", it: "il vento / la nuvola", say: "lə vã / lə nüàj", hook: "VENT = vento col naso. NUAGE = nuvola, ed è MASCHILE: un nuage gris.",
              ex: { fr: "Il y a beaucoup de vent et de gros nuages noirs sur la mer.", it: "C'è molto vento e grosse nuvole nere sul mare." } },
            { fr: "le parapluie", it: "l'ombrello", say: "lə paraplüì", hook: "PARA-PLUIE: «para-pioggia», come il parafulmine o il paracadute. Logico!",
              ex: { fr: "J'ai encore oublié mon parapluie dans le métro, c'est le troisième ce mois-ci !", it: "Ho di nuovo dimenticato l'ombrello nel metrò, è il terzo questo mese!" } },
            { fr: "… degrés", it: "… gradi", say: "dəgré", hook: "Il fait vingt DEGRÉS = ci sono venti gradi. Sotto zero: il fait moins cinq.",
              ex: { fr: "Aujourd'hui, il fait vingt-cinq degrés à l'ombre : allons à la piscine !", it: "Oggi ci sono venticinque gradi all'ombra: andiamo in piscina!" } },
            { fr: "la météo", it: "le previsioni del tempo", say: "la météò", hook: "LA MÉTÉO: il meteo, ma femminile in francese. «Selon la météo…» = secondo le previsioni…",
              ex: { fr: "Selon la météo, il va faire beau tout le week-end en Provence.", it: "Secondo le previsioni, farà bel tempo tutto il fine settimana in Provenza." } }
          ],
          tip: {
            title: "Il fait, il pleut, il y a: il meteo in tre mosse",
            body: "<div class='tbl'><table><thead><tr><th>Struttura</th><th>Esempi</th></tr></thead><tbody><tr><td><b>Il fait</b> + aggettivo</td><td>il fait beau, chaud, froid, mauvais, doux</td></tr><tr><td><b>Il fait</b> + gradi</td><td>il fait vingt degrés, il fait moins deux</td></tr><tr><td>Verbo da solo</td><td>il pleut, il neige</td></tr><tr><td><b>Il y a</b> + du / des</td><td>il y a du soleil, du vent, des nuages</td></tr><tr><td>Il cielo</td><td>le ciel est bleu / gris / couvert</td></tr><tr><td>Previsioni</td><td>il va pleuvoir, il va faire beau</td></tr></tbody></table></div><ul><li>Il soggetto è sempre <b>il</b>, impersonale: il fait, il pleut (come «piove» senza soggetto in italiano).</li><li><b>Chaud</b> = caldo, non freddo! Freddo = <b>froid</b>.</li><li>Per il futuro immediato: <b>il va</b> + infinito (il va pleuvoir = pioverà). Lo approfondirai nel prossimo modulo.</li></ul>",
            examples: [
              { fr: "Quel temps fait-il chez toi ? — Il fait beau et doux.", it: "Che tempo fa da te? — Fa bello ed è mite." },
              { fr: "Il y a du vent et des nuages, mais il ne pleut pas.", it: "C'è vento e ci sono nuvole, ma non piove." },
              { fr: "En hiver, à Strasbourg, il fait souvent moins cinq.", it: "In inverno, a Strasburgo, ci sono spesso meno cinque gradi." },
              { fr: "Prends ton parapluie : il va pleuvoir cet après-midi.", it: "Prendi l'ombrello: pioverà questo pomeriggio." },
              { fr: "En Provence, le ciel est bleu presque toute l'année.", it: "In Provenza il cielo è azzurro quasi tutto l'anno." }
            ]
          },
          practice: [
            { t: "mcq", q: "«Il fait chaud» significa…", opts: ["fa caldo", "fa freddo", "fa bello", "c'è vento"], a: 0, why: "Chaud = caldo (C come sul rubinetto)." },
            { t: "mcq", q: "Come si dice «piove»?", opts: ["Il pleut.", "Il fait pluie.", "Il y a pleut.", "Il est pluie."], a: 0, why: "Il pleut, dal verbo pleuvoir." },
            { t: "listen", say: "Il neige rarement à Paris, mais quand il neige, la ville est magique.", q: "Cosa hai sentito?", opts: ["A Parigi nevica raramente, ma quando nevica la città è magica.", "A Parigi nevica spesso e la città è bianca.", "A Parigi piove raramente, ma quando piove è triste.", "A Parigi non nevica mai."], a: 0, why: "Il neige = nevica." },
            { t: "match", q: "Abbina", pairs: [["le soleil", "il sole"], ["le vent", "il vento"], ["la pluie", "la pioggia"], ["le parapluie", "l'ombrello"]] },
            { t: "order", q: "Riordina: «Quando fa bel tempo mangiamo in terrazza.»", words: ["Quand", "il", "fait", "beau,", "nous", "mangeons", "sur", "la", "terrasse."], why: "Il fait beau = fa bel tempo." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Il y a ___ soleil.»", opts: ["du", "le", "un", "de"], a: 0, why: "Il y a du soleil, du vent." },
            { t: "mcq", q: "Come chiedi che tempo fa?", opts: ["Quel temps fait-il ?", "Quelle météo est-il ?", "Comment est le temps fait ?", "Quel temps il y a ?"], a: 0, why: "Quel temps fait-il?" },
            { t: "mcq", q: "«Il va pleuvoir» significa…", opts: ["Pioverà.", "Sta piovendo.", "Ha piovuto.", "Non piove."], a: 0, why: "Aller + infinito = futuro vicino." },
            { t: "mcq", q: "Quale frase è sbagliata?", opts: ["Il fait pluie.", "Il fait froid.", "Il pleut.", "Il y a du vent."], a: 0, why: "Per la pioggia si usa il verbo: il pleut." },
            { t: "listen", say: "Il fait soleil et il fait vingt-deux degrés : parfait pour un pique-nique.", q: "Quanti gradi ci sono?", opts: ["22", "12", "32", "20"], a: 0, why: "Vingt-deux = 22." },
            { t: "listen", say: "Il pleut depuis ce matin, alors je reste à la maison avec un bon livre.", q: "Perché resta a casa?", opts: ["Perché piove da stamattina.", "Perché fa troppo caldo.", "Perché nevica.", "Perché è stanco."], a: 0, why: "Il pleut = piove." },
            { t: "listen", say: "En juillet, il fait très chaud à Paris, et le métro est un four.", q: "Com'è il tempo a luglio?", opts: ["Fa molto caldo.", "Fa molto freddo.", "Piove sempre.", "C'è molto vento."], a: 0, why: "Chaud = caldo." },
            { t: "type", q: "Completa: «Il fait ___, prends ton manteau !» (freddo)", a: ["froid"], why: "Froid = freddo." },
            { t: "type", q: "Completa: «N'oublie pas ton ___ : il pleut !» (ombrello)", a: ["parapluie"], why: "Para-pluie = para-pioggia." },
            { t: "type", say: "Selon la météo, il va faire beau tout le week-end.", q: "Ascolta e completa: «Selon la ___, il va faire beau tout le week-end.»", a: ["météo", "meteo"], why: "La météo = le previsioni." },
            { t: "order", q: "Riordina: «C'è molto vento e ci sono nuvole grigie.»", words: ["Il", "y", "a", "beaucoup", "de", "vent", "et", "des", "nuages", "gris."], why: "Il y a + vento, nuvole." },
            { t: "match", q: "Abbina", pairs: [["il fait beau", "fa bel tempo"], ["il fait chaud", "fa caldo"], ["il neige", "nevica"], ["le nuage", "la nuvola"]] }
          ],
          recap: {
            can: ["Chiedere e dire che tempo fa", "Usare il fait, il pleut, il neige, il y a du…", "Dire la temperatura in gradi", "Capire una previsione: il va pleuvoir, il va faire beau"],
            phrases: [{ fr: "Quel temps fait-il ? — Il fait beau et chaud.", it: "Che tempo fa? — Fa bello e caldo." }, { fr: "Il pleut, prends ton parapluie !", it: "Piove, prendi l'ombrello!" }, { fr: "Il y a du vent, mais il fait vingt degrés.", it: "C'è vento, ma ci sono venti gradi." }],
            trap: "CHAUD = caldo (non freddo!). E per la pioggia non si dice «il fait pluie», ma «il pleut»."
          }
        }
      ]
    },
    {
      n: 6, arr: "6e", name: "Voyager", it: "Viaggiare", level: "A2",
      lessons: [
        /* ---------------- LEZIONE 6-1 ---------------- */
        {
          id: "6-1", street: "Rue de la Gare", title: "Alla stazione: biglietti e treni",
          goal: "Comprare un biglietto del treno, chiedere orari e binari e capire gli annunci di partenza e di ritardo.",
          episode: {
            title: "Gare de Lyon, binario 11",
            intro: "Sette e mezza del mattino alla Gare de Lyon. Sotto il grande orologio, migliaia di persone corrono con le valigie. Gigi ha in mano la cesta di Croissant, Léa le lettere di Zizì, Françoise un sacchetto di croissant «per il viaggio». Nessuno ha ancora il biglietto.",
            lines: [
              { who: "Gigi", fr: "Bonjour madame. Je voudrais trois billets aller-retour pour Avignon, s'il vous plaît.", it: "Buongiorno signora. Vorrei tre biglietti di andata e ritorno per Avignone, per favore." },
              { who: "Mme Girard", fr: "Pour aujourd'hui ? Le prochain TGV part à huit heures douze, voie onze.", it: "Per oggi? Il prossimo TGV parte alle otto e dodici, binario undici." },
              { who: "Léa", fr: "Le voyage dure combien de temps ? Et il faut changer de train ?", it: "Quanto dura il viaggio? E bisogna cambiare treno?" },
              { who: "Mme Girard", fr: "Non, c'est direct : environ deux heures quarante. Vous préférez la première ou la deuxième classe ?", it: "No, è diretto: circa due ore e quaranta. Preferite la prima o la seconda classe?" },
              { who: "Gigi", fr: "La deuxième classe, côté fenêtre si possible. Ça fait combien en tout ?", it: "La seconda classe, lato finestrino se possibile. Quanto fa in tutto?" },
              { who: "Mme Girard", fr: "Deux cent dix euros. Et pour le chat, il faut un billet animal à sept euros.", it: "Duecentodieci euro. E per il gatto serve un biglietto per animali da sette euro." },
              { who: "Croissant", fr: "Sept euros ? J'exige au moins une place en première classe pour ce prix.", it: "Sette euro? Per questo prezzo esigo almeno un posto in prima classe." },
              { who: "Annonce", fr: "Le TGV à destination d'Avignon partira avec un retard de quinze minutes. Nous vous prions de nous excuser.", it: "Il TGV diretto ad Avignone partirà con un ritardo di quindici minuti. Ci scusiamo per il disagio." }
            ],
            outro: "Quindici minuti di ritardo bastano a Françoise per comprare altri croissant e a Gigi per perdere i biglietti due volte (erano nella sua tasca). Alle otto e ventisette il treno parte. Fuori dal finestrino Parigi diventa campagna, poi colline, poi cielo azzurro.",
            you: "«{nome}, in stazione le parole magiche sono «un aller simple» (solo andata) e «un aller-retour» (andata e ritorno). E non dimenticare: «la voie» è il binario. Bon voyage!»",
            mine: { fr: "Bonjour, je m'appelle {nome} et je voudrais un aller-retour pour Paris en deuxième classe, s'il vous plaît.", it: "Buongiorno, mi chiamo {nome} e vorrei un'andata e ritorno per Parigi in seconda classe, per favore." }
          },
          words: [
            { fr: "le billet", it: "il biglietto", say: "lə bijè", hook: "BILLET = biglietto, con la doppia L che si legge «i». Attenzione: anche la banconota è «un billet» (un billet de vingt euros).",
              ex: { fr: "J'achète toujours mon billet de train sur internet, c'est moins cher.", it: "Compro sempre il biglietto del treno su internet, costa meno." } },
            { fr: "un aller simple / un aller-retour", it: "solo andata / andata e ritorno", say: "ẽ nalé sẽpl / ẽ nalé rətur", hook: "ALLER = andare, RETOUR = ritorno. Un aller simple: «un'andata semplice», senza ritorno.",
              ex: { fr: "Un aller-retour pour Lyon, départ vendredi et retour dimanche soir.", it: "Un'andata e ritorno per Lione, partenza venerdì e ritorno domenica sera." } },
            { fr: "la voie / le quai", it: "il binario / la banchina", say: "la vwa / lə kè", hook: "LA VOIE: la «via» del treno, cioè il binario. LE QUAI è la banchina dove aspetti (lo stesso quai dei bouquinistes sulla Senna).",
              ex: { fr: "Le train pour Marseille part de la voie sept : dépêchons-nous !", it: "Il treno per Marsiglia parte dal binario sette: sbrighiamoci!" } },
            { fr: "partir / arriver", it: "partire / arrivare", say: "partìr / arivé", hook: "Uguali all'italiano! Le départ = la partenza, l'arrivée = l'arrivo: li leggi sui tabelloni.",
              ex: { fr: "Le train part à huit heures et arrive à Avignon vers onze heures.", it: "Il treno parte alle otto e arriva ad Avignone verso le undici." } },
            { fr: "le retard", it: "il ritardo", say: "lə rətar", hook: "LE RETARD l'hai già visto con «en retard». Negli annunci: «un retard de dix minutes». Sospiro collettivo garantito.",
              ex: { fr: "À cause de la neige, tous les trains ont une heure de retard.", it: "A causa della neve, tutti i treni hanno un'ora di ritardo." } },
            { fr: "changer (de train)", it: "cambiare (treno)", say: "shãjé", hook: "CHANGER DE TRAIN: cambiare treno. Con «changer» si usa DE senza articolo: changer de place, changer d'avis.",
              ex: { fr: "Pour aller à Roussillon, il faut changer de train à Avignon et prendre un bus.", it: "Per andare a Roussillon bisogna cambiare treno ad Avignone e prendere un autobus." } },
            { fr: "combien de temps", it: "quanto tempo", say: "kõbjẽ də tã", hook: "COMBIEN DE TEMPS ? = quanto tempo? Il viaggio «dure» (dura) due ore. Combien = quanto, come al mercato.",
              ex: { fr: "Combien de temps dure le trajet entre Paris et Marseille en TGV ?", it: "Quanto dura il tragitto tra Parigi e Marsiglia in TGV?" } },
            { fr: "la place / côté fenêtre", it: "il posto / lato finestrino", say: "la plas / kòté fənètr", hook: "Sul treno LA PLACE è il posto a sedere. Côté fenêtre (finestrino) o côté couloir (corridoio).",
              ex: { fr: "Excusez-moi, je crois que vous êtes à ma place : j'ai le siège quarante-deux.", it: "Mi scusi, credo che lei sia al mio posto: ho il sedile quarantadue." } },
            { fr: "la valise / le sac à dos", it: "la valigia / lo zaino", say: "la valìz / lə sak a dò", hook: "LA VALISE la conosci (quella rossa di Zizì!). Il SAC À DOS è il «sacco sulla schiena».",
              ex: { fr: "Je voyage avec un petit sac à dos, parce que les grosses valises m'énervent.", it: "Viaggio con un piccolo zaino, perché le valigie grosse mi innervosiscono." } },
            { fr: "le voyage", it: "il viaggio", say: "lə vwajaj", hook: "VOYAGE: «Bon voyage!» lo conosci già. Il verbo è voyager: nous voyageons (con la E, come mangeons).",
              ex: { fr: "Le voyage en train est long, mais le paysage est magnifique.", it: "Il viaggio in treno è lungo, ma il paesaggio è magnifico." } }
          ],
          tip: {
            title: "Biglietto in mano: le frasi della stazione",
            body: "<div class='tbl'><table><thead><tr><th>Vuoi…</th><th>Dici</th></tr></thead><tbody><tr><td>comprare il biglietto</td><td>Je voudrais un aller simple / un aller-retour pour Lyon.</td></tr><tr><td>sapere l'orario</td><td>Le prochain train pour Lyon part à quelle heure ?</td></tr><tr><td>sapere il binario</td><td>Il part de quelle voie ?</td></tr><tr><td>sapere la durata</td><td>Le voyage dure combien de temps ?</td></tr><tr><td>sapere se cambi</td><td>C'est direct ? Il faut changer ?</td></tr><tr><td>scegliere il posto</td><td>Côté fenêtre / côté couloir, s'il vous plaît.</td></tr></tbody></table></div><ul><li>Sul tabellone: <b>départ</b> (partenza), <b>arrivée</b> (arrivo), <b>voie</b> (binario), <b>retard</b> (ritardo), <b>supprimé</b> (cancellato).</li><li><b>Le prochain train</b> = il prossimo treno; <b>le dernier train</b> = l'ultimo treno.</li><li><b>Il faut</b> + infinito = bisogna: il faut changer à Lyon.</li><li>TGV = Train à Grande Vitesse, il treno ad alta velocità.</li></ul>",
            examples: [
              { fr: "Je voudrais un aller simple pour Marseille, en deuxième classe.", it: "Vorrei un biglietto di sola andata per Marsiglia, in seconda classe." },
              { fr: "Le prochain train pour Lyon part de quelle voie ?", it: "Il prossimo treno per Lione parte da quale binario?" },
              { fr: "Le voyage dure trois heures, et il faut changer à Dijon.", it: "Il viaggio dura tre ore, e bisogna cambiare a Digione." },
              { fr: "Attention, le train de dix heures est supprimé.", it: "Attenzione, il treno delle dieci è cancellato." },
              { fr: "Nous arrivons à Avignon avec vingt minutes de retard.", it: "Arriviamo ad Avignone con venti minuti di ritardo." }
            ]
          },
          practice: [
            { t: "mcq", q: "«Un aller-retour» è…", opts: ["un biglietto di andata e ritorno", "un biglietto di sola andata", "un treno che torna indietro", "un rimborso"], a: 0, why: "Aller = andata, retour = ritorno." },
            { t: "mcq", q: "Sul tabellone «voie 11» significa…", opts: ["binario 11", "vagone 11", "posto 11", "uscita 11"], a: 0, why: "La voie = il binario." },
            { t: "listen", say: "Le train part à huit heures et arrive à Avignon vers onze heures.", q: "A che ora arriva il treno?", opts: ["Verso le undici", "Alle otto", "Verso mezzogiorno", "Alle nove"], a: 0, why: "Arrive vers onze heures." },
            { t: "match", q: "Abbina", pairs: [["le billet", "il biglietto"], ["le retard", "il ritardo"], ["la valise", "la valigia"], ["le départ", "la partenza"]] },
            { t: "order", q: "Riordina: «Vorrei un biglietto di andata e ritorno per Avignone.»", words: ["Je", "voudrais", "un", "aller-retour", "pour", "Avignon."], why: "Je voudrais + biglietto + pour + città." }
          ],
          test: [
            { t: "mcq", q: "Come chiedi quanto dura il viaggio?", opts: ["Le voyage dure combien de temps ?", "Le voyage est combien ?", "Combien coûte le voyage ?", "Le voyage part quand ?"], a: 0, why: "Combien de temps = quanto tempo." },
            { t: "mcq", q: "Sul tabellone leggi «supprimé». Il treno è…", opts: ["cancellato", "in ritardo", "in anticipo", "pieno"], a: 0, why: "Supprimé = soppresso, cancellato." },
            { t: "mcq", q: "Completa: «Il faut changer ___ train à Lyon.»", opts: ["de", "le", "du", "un"], a: 0, why: "Changer de + nome, senza articolo." },
            { t: "mcq", q: "Vuoi il posto vicino al finestrino. Dici:", opts: ["Côté fenêtre, s'il vous plaît.", "Côté couloir, s'il vous plaît.", "Près de la porte, merci.", "En première fenêtre."], a: 0, why: "Côté fenêtre = lato finestrino." },
            { t: "listen", say: "Le prochain TGV part à huit heures douze, voie onze.", q: "Da quale binario parte il TGV?", opts: ["11", "12", "8", "2"], a: 0, why: "Voie onze = binario 11." },
            { t: "listen", say: "Le TGV à destination d'Avignon partira avec un retard de quinze minutes.", q: "Di quanto è in ritardo il treno?", opts: ["15 minuti", "50 minuti", "5 minuti", "1 ora"], a: 0, why: "Quinze = 15." },
            { t: "listen", say: "Pour aller à Roussillon, il faut changer de train à Avignon et prendre un bus.", q: "Come si arriva a Roussillon?", opts: ["Cambiando treno ad Avignone e poi in autobus", "Con un treno diretto da Parigi", "Solo in macchina", "In aereo fino a Marsiglia"], a: 0, why: "Changer de train + prendre un bus." },
            { t: "type", q: "Completa: «Je voudrais un aller ___ pour Lyon.» (solo andata)", a: ["simple"], why: "Un aller simple = sola andata." },
            { t: "type", q: "Completa: «Le train part de quelle ___ ?» (binario)", a: ["voie"], why: "La voie = il binario." },
            { t: "type", say: "J'achète toujours mon billet de train sur internet.", q: "Ascolta e completa: «J'achète toujours mon ___ de train sur internet.»", a: ["billet"], why: "Le billet = il biglietto." },
            { t: "order", q: "Riordina: «Il viaggio dura tre ore ed è diretto.»", words: ["Le", "voyage", "dure", "trois", "heures", "et", "c'est", "direct."], why: "Durer = durare." },
            { t: "match", q: "Abbina", pairs: [["partir", "partire"], ["arriver", "arrivare"], ["le quai", "la banchina"], ["le sac à dos", "lo zaino"]] }
          ],
          recap: {
            can: ["Comprare un biglietto: aller simple o aller-retour", "Chiedere orario, binario, durata e cambi", "Capire tabelloni e annunci: retard, supprimé, voie", "Scegliere classe e posto"],
            phrases: [{ fr: "Je voudrais un aller-retour pour Avignon, s'il vous plaît.", it: "Vorrei un'andata e ritorno per Avignone, per favore." }, { fr: "Le prochain train part à quelle heure et de quelle voie ?", it: "A che ora e da quale binario parte il prossimo treno?" }, { fr: "Le train a vingt minutes de retard.", it: "Il treno ha venti minuti di ritardo." }],
            trap: "LA VOIE è il binario, LE QUAI la banchina. E «changer DE train» si dice senza articolo."
          }
        },
        /* ---------------- LEZIONE 6-2 ---------------- */
        {
          id: "6-2", street: "Rue de l'Hôtel", title: "In albergo: prenotare e fare il check-in",
          goal: "Prenotare una camera, fare il check-in, chiedere i servizi dell'albergo e segnalare un problema in modo cortese.",
          episode: {
            title: "Hôtel des Ocres",
            intro: "Roussillon è un paesino arroccato su una collina color arancio, rosso e giallo: sono le famose ocre. L'unico albergo ha le persiane azzurre e un gatto rosso addormentato sul gradino. Croissant lo guarda con sospetto. La receptionist ha gli occhiali sulla punta del naso.",
            lines: [
              { who: "Gigi", fr: "Bonjour madame, nous avons réservé deux chambres pour trois nuits, au nom de Esposito.", it: "Buongiorno signora, abbiamo prenotato due camere per tre notti, a nome Esposito." },
              { who: "Mme Garnier", fr: "Bienvenue à Roussillon ! Oui : une chambre double et une chambre simple, avec salle de bains.", it: "Benvenuti a Roussillon! Sì: una camera doppia e una singola, con bagno." },
              { who: "Léa", fr: "Le petit-déjeuner est compris ? Et à quelle heure est-ce qu'il est servi ?", it: "La colazione è inclusa? E a che ora viene servita?" },
              { who: "Mme Garnier", fr: "Oui, il est compris. Il est servi de sept heures à dix heures, sur la terrasse.", it: "Sì, è inclusa. Viene servita dalle sette alle dieci, sulla terrazza." },
              { who: "Gigi", fr: "Est-ce qu'il y a le wifi dans les chambres ? Et un ascenseur pour les valises ?", it: "C'è il wifi nelle camere? E un ascensore per le valigie?" },
              { who: "Mme Garnier", fr: "Le wifi, oui. L'ascenseur, non : c'est une maison du dix-septième siècle. Voici vos clés.", it: "Il wifi sì. L'ascensore no: è una casa del Seicento. Ecco le vostre chiavi." },
              { who: "Mme Lefèvre", fr: "Excusez-moi, madame, dans ma chambre, la douche ne marche pas et il n'y a pas de serviettes.", it: "Mi scusi, signora, nella mia camera la doccia non funziona e non ci sono asciugamani." },
              { who: "Mme Garnier", fr: "Je suis désolée ! J'envoie quelqu'un tout de suite. Vous êtes… de la famille de Zizì ? Vous avez ses yeux.", it: "Mi dispiace! Mando subito qualcuno. Lei è… della famiglia di Zizì? Ha i suoi occhi." }
            ],
            outro: "Madame Garnier si toglie gli occhiali e si siede sul gradino accanto al gatto rosso. «Zizì? Tutto il paese la conosceva. Aveva una piccola bottega di dolci in place de la Mairie. Domani vi accompagno a vederla.»",
            you: "«{nome}, in albergo tre domande ti salvano la vacanza: «Le petit-déjeuner est compris ?», «Il y a le wifi ?» e «À quelle heure faut-il libérer la chambre ?». E se qualcosa non funziona: «… ne marche pas».»",
            mine: { fr: "Bonjour, je m'appelle {nome} et j'ai réservé une chambre simple pour deux nuits.", it: "Buongiorno, mi chiamo {nome} e ho prenotato una camera singola per due notti." }
          },
          words: [
            { fr: "réserver / la réservation", it: "prenotare / la prenotazione", say: "rézèrvé / la rézèrvasjõ", hook: "RÉSERVER: «riservare» un posto solo per te. J'ai réservé = ho prenotato (passato, lo studierai presto).",
              ex: { fr: "J'ai une réservation pour deux personnes au nom de Martin.", it: "Ho una prenotazione per due persone a nome Martin." } },
            { fr: "la chambre", it: "la camera", say: "la shãbr", hook: "CHAMBRE = camera (da letto). Trappola: «la camera» fotografica è «l'appareil photo»! Une chambre double / simple.",
              ex: { fr: "Notre chambre est petite, mais elle a une vue magnifique sur les collines.", it: "La nostra camera è piccola, ma ha una vista magnifica sulle colline." } },
            { fr: "la nuit", it: "la notte", say: "la nüì", hook: "NUIT = notte: la UI scivola via come chi si addormenta. «Pour trois nuits» = per tre notti. Bonne nuit!",
              ex: { fr: "La chambre coûte quatre-vingt-dix euros la nuit, petit-déjeuner compris.", it: "La camera costa novanta euro a notte, colazione inclusa." } },
            { fr: "compris / inclus", it: "compreso, incluso", say: "kõprì / ẽklü", hook: "COMPRIS = compreso nel prezzo (e anche «capito!»: «C'est compris?» = è chiaro?).",
              ex: { fr: "Est-ce que le petit-déjeuner est compris dans le prix de la chambre ?", it: "La colazione è compresa nel prezzo della camera?" } },
            { fr: "le petit-déjeuner", it: "la colazione", say: "lə pəti déjöné", hook: "PETIT-DÉJEUNER: il «piccolo pranzo» del mattino. Le déjeuner = il pranzo, le dîner = la cena.",
              ex: { fr: "Au petit-déjeuner, il y a des croissants, du pain frais et de la confiture.", it: "A colazione ci sono croissant, pane fresco e marmellata." } },
            { fr: "la clé", it: "la chiave", say: "la klé", hook: "LA CLÉ la conosci benissimo: la chiave col nastro blu! In albergo spesso è una carta: «la carte».",
              ex: { fr: "N'oubliez pas de laisser la clé à la réception quand vous sortez.", it: "Non dimenticate di lasciare la chiave alla reception quando uscite." } },
            { fr: "l'ascenseur", it: "l'ascensore", say: "lasãsör", hook: "ASCENSEUR = ascensore, con «-eur» finale. È maschile: l'ascenseur est en panne (è guasto).",
              ex: { fr: "L'ascenseur est en panne, alors nous montons au cinquième étage à pied.", it: "L'ascensore è guasto, quindi saliamo al quinto piano a piedi." } },
            { fr: "la salle de bains", it: "il bagno", say: "la sal də bẽ", hook: "SALLE DE BAINS: la «sala dei bagni». Le toilettes (sempre plurale!) sono il WC.",
              ex: { fr: "La salle de bains est grande, avec une baignoire et une douche.", it: "Il bagno è grande, con una vasca e una doccia." } },
            { fr: "… ne marche pas", it: "… non funziona", say: "nə marsh pa", hook: "MARCHER = camminare, ma anche funzionare: una macchina che «cammina» funziona! La télé ne marche pas = la tv non funziona.",
              ex: { fr: "Excusez-moi, le chauffage ne marche pas et il fait très froid dans la chambre.", it: "Mi scusi, il riscaldamento non funziona e fa molto freddo in camera." } },
            { fr: "la serviette", it: "l'asciugamano", say: "la sèrvjèt", hook: "Trappola: LA SERVIETTE è l'asciugamano (o il tovagliolo), non la «salvietta» struccante. Pour la plage: une serviette de plage.",
              ex: { fr: "Pourriez-vous nous apporter deux serviettes propres, s'il vous plaît ?", it: "Potrebbe portarci due asciugamani puliti, per favore?" } }
          ],
          tip: {
            title: "Check-in senza panico: le frasi dell'albergo",
            body: "<div class='tbl'><table><thead><tr><th>Situazione</th><th>Frase</th></tr></thead><tbody><tr><td>Arrivo</td><td>J'ai réservé une chambre au nom de…</td></tr><tr><td>Senza prenotazione</td><td>Vous avez une chambre libre pour ce soir ?</td></tr><tr><td>Prezzo</td><td>C'est combien la nuit ?</td></tr><tr><td>Servizi</td><td>Le petit-déjeuner est compris ? Il y a le wifi ?</td></tr><tr><td>Partenza</td><td>À quelle heure faut-il libérer la chambre ?</td></tr><tr><td>Problema</td><td>La douche ne marche pas. / Il n'y a pas de serviettes.</td></tr></tbody></table></div><ul><li><b>Est-ce que</b> + frase = domanda (sì/no) più formale: <b>Est-ce que</b> le petit-déjeuner est compris ?</li><li>Dopo la negazione, un / une / des diventano <b>de</b>: il n'y a pas <b>de</b> serviettes.</li><li><b>Pourriez-vous… ?</b> (potrebbe…?) è la formula più gentile per chiedere un favore.</li><li>Il piano terra è <b>le rez-de-chaussée</b>; il primo piano <b>le premier étage</b>.</li></ul>",
            examples: [
              { fr: "Bonsoir, vous avez une chambre double pour deux nuits ?", it: "Buonasera, avete una camera doppia per due notti?" },
              { fr: "Est-ce que le parking est gratuit pour les clients ?", it: "Il parcheggio è gratuito per i clienti?" },
              { fr: "À quelle heure faut-il libérer la chambre ? — Avant onze heures.", it: "A che ora bisogna lasciare la camera? — Prima delle undici." },
              { fr: "Il n'y a pas de papier toilette dans la salle de bains.", it: "Non c'è carta igienica nel bagno." },
              { fr: "Pourriez-vous me réveiller à six heures demain matin ?", it: "Potrebbe svegliarmi alle sei domattina?" }
            ]
          },
          practice: [
            { t: "mcq", q: "«Le petit-déjeuner est compris» significa…", opts: ["La colazione è inclusa.", "La colazione è piccola.", "La colazione è finita.", "La colazione si paga a parte."], a: 0, why: "Compris = compreso, incluso." },
            { t: "mcq", q: "«La télé ne marche pas» significa…", opts: ["La tv non funziona.", "La tv non cammina.", "La tv non c'è.", "La tv è spenta."], a: 0, why: "Marcher = anche funzionare." },
            { t: "listen", say: "La chambre coûte quatre-vingt-dix euros la nuit, petit-déjeuner compris.", q: "Quanto costa la camera?", opts: ["90 € a notte, colazione inclusa", "80 € a notte, senza colazione", "19 € a notte", "90 € per tre notti"], a: 0, why: "Quatre-vingt-dix = 90." },
            { t: "match", q: "Abbina", pairs: [["la chambre", "la camera"], ["la nuit", "la notte"], ["l'ascenseur", "l'ascensore"], ["la serviette", "l'asciugamano"]] },
            { t: "order", q: "Riordina: «Ho prenotato una camera singola per due notti.»", words: ["J'ai", "réservé", "une", "chambre", "simple", "pour", "deux", "nuits."], why: "J'ai réservé = ho prenotato." }
          ],
          test: [
            { t: "mcq", q: "Arrivi in albergo senza prenotazione. Chiedi:", opts: ["Vous avez une chambre libre pour ce soir ?", "J'ai réservé une chambre libre.", "Où est ma chambre réservée ?", "La chambre est compris ?"], a: 0, why: "Une chambre libre = una camera libera." },
            { t: "mcq", q: "Completa: «Il n'y a pas ___ serviettes.»", opts: ["de", "des", "les", "du"], a: 0, why: "Dopo la negazione: pas de." },
            { t: "mcq", q: "«L'appareil photo» è…", opts: ["la macchina fotografica", "la camera da letto", "il televisore", "il telefono"], a: 0, why: "La camera da letto è la chambre." },
            { t: "mcq", q: "Qual è il modo più gentile per chiedere un favore?", opts: ["Pourriez-vous m'apporter une serviette ?", "Donnez-moi une serviette.", "Je veux une serviette.", "Une serviette, vite !"], a: 0, why: "Pourriez-vous… ? = potrebbe…?" },
            { t: "listen", say: "Le petit-déjeuner est servi de sept heures à dix heures, sur la terrasse.", q: "Quando e dove viene servita la colazione?", opts: ["Dalle 7 alle 10, sulla terrazza", "Dalle 8 alle 11, in sala", "Alle 7 in punto, in camera", "Dalle 6 alle 9, sulla terrazza"], a: 0, why: "De sept heures à dix heures." },
            { t: "listen", say: "L'ascenseur est en panne, alors nous montons au cinquième étage à pied.", q: "Perché salgono a piedi?", opts: ["Perché l'ascensore è guasto.", "Perché la camera è al primo piano.", "Perché non c'è l'ascensore.", "Perché vogliono fare sport."], a: 0, why: "En panne = guasto." },
            { t: "listen", say: "Excusez-moi, le chauffage ne marche pas et il fait très froid dans la chambre.", q: "Qual è il problema?", opts: ["Il riscaldamento non funziona e fa freddo.", "La doccia non funziona.", "La camera è troppo calda.", "La finestra non si chiude."], a: 0, why: "Le chauffage = il riscaldamento." },
            { t: "type", q: "Completa: «J'ai une ___ au nom de Martin.» (prenotazione)", a: ["réservation", "reservation"], why: "La réservation." },
            { t: "type", q: "Completa: «La ___ de bains est au fond du couloir.» (sala)", a: ["salle"], why: "La salle de bains = il bagno." },
            { t: "type", say: "N'oubliez pas de laisser la clé à la réception.", q: "Ascolta e completa: «N'oubliez pas de laisser la ___ à la réception.»", a: ["clé", "cle"], why: "La clé = la chiave." },
            { t: "order", q: "Riordina: «A che ora bisogna lasciare la camera?»", words: ["À", "quelle", "heure", "faut-il", "libérer", "la", "chambre", "?"], why: "Libérer la chambre = lasciare la camera." },
            { t: "match", q: "Abbina", pairs: [["réserver", "prenotare"], ["compris", "incluso"], ["le petit-déjeuner", "la colazione"], ["en panne", "guasto"]] }
          ],
          recap: {
            can: ["Fare il check-in e chiedere una camera libera", "Chiedere prezzo, colazione, wifi e orari", "Segnalare un problema: … ne marche pas, il n'y a pas de…", "Chiedere un favore con «Pourriez-vous… ?»"],
            phrases: [{ fr: "J'ai réservé une chambre double au nom de Rossi.", it: "Ho prenotato una camera doppia a nome Rossi." }, { fr: "Le petit-déjeuner est compris ?", it: "La colazione è inclusa?" }, { fr: "La douche ne marche pas et il n'y a pas de serviettes.", it: "La doccia non funziona e non ci sono asciugamani." }],
            trap: "LA CHAMBRE è la camera da letto, LA SERVIETTE l'asciugamano: falsi amici da hotel!"
          }
        },
        /* ---------------- LEZIONE 6-3 ---------------- */
        {
          id: "6-3", street: "Rue des Projets", title: "Il futuro prossimo: aller + infinito",
          goal: "Parlare dei tuoi progetti e di quello che sta per succedere con «aller + infinito», anche in frase negativa.",
          episode: {
            title: "La bottega in place de la Mairie",
            intro: "La mattina dopo, Madame Garnier li accompagna in place de la Mairie. All'angolo, sotto un platano enorme, c'è una vetrina chiusa da anni. Sopra la porta, scolorita dal sole, si legge ancora una scritta: «Les Douceurs de Zizì». Tutti restano in silenzio.",
            lines: [
              { who: "Mme Garnier", fr: "Voilà la boutique de Zizì. Le propriétaire va la vendre le mois prochain.", it: "Ecco la bottega di Zizì. Il proprietario la venderà il mese prossimo." },
              { who: "Gigi", fr: "La vendre ? Non ! Je vais téléphoner au propriétaire tout de suite.", it: "Venderla? No! Telefono subito al proprietario." },
              { who: "Léa", fr: "Attends, Gigi. Qu'est-ce que tu vas faire avec une boutique en Provence ?", it: "Aspetta, Gigi. Cosa farai con una bottega in Provenza?" },
              { who: "Gigi", fr: "Je ne vais pas l'acheter, mais je vais demander les vieilles recettes et les photos.", it: "Non la comprerò, ma chiederò le vecchie ricette e le foto." },
              { who: "Mme Lefèvre", fr: "Et cet après-midi, nous allons visiter le village et parler avec les anciens.", it: "E questo pomeriggio visiteremo il paese e parleremo con gli anziani." },
              { who: "Croissant", fr: "Moi, je vais dormir sous ce platane. Les projets, ça fatigue.", it: "Io dormirò sotto questo platano. I progetti stancano." },
              { who: "Mme Garnier", fr: "Allez voir Madame Pons, au café de la place. Elle va tout vous raconter.", it: "Andate a trovare Madame Pons, al caffè della piazza. Vi racconterà tutto." },
              { who: "Léa", fr: "Parfait ! Ce soir, on va manger sur la place et on va enfin comprendre le secret de Zizì.", it: "Perfetto! Stasera mangeremo in piazza e finalmente capiremo il segreto di Zizì." }
            ],
            outro: "Attraverso il vetro impolverato si vedono ancora i barattoli vuoti, una bilancia di ottone e, appesa al muro, una fotografia: Zizì sorridente, con in braccio una bambina dai capelli ricci. Françoise si avvicina al vetro e trattiene il fiato: «Quella bambina… sono io.»",
            you: "«{nome}, per parlare del futuro vicino basta il verbo «aller» che conosci già, più un verbo all'infinito: je vais manger, tu vas voir. È come l'italiano «sto per», ma lo usi per tutto: domani, stasera, l'anno prossimo.»",
            mine: { fr: "Je m'appelle {nome}, et l'année prochaine je vais visiter la France et parler français.", it: "Mi chiamo {nome}, e l'anno prossimo visiterò la Francia e parlerò francese." }
          },
          words: [
            { fr: "je vais + infinitif", it: "farò, sto per…", say: "jə vè", hook: "JE VAIS MANGER: «vado a mangiare» = mangerò. Il futuro più facile del mondo: aller (che sai già) + verbo all'infinito.",
              ex: { fr: "Ce soir, je vais préparer des lasagnes pour toute la famille.", it: "Stasera preparerò le lasagne per tutta la famiglia." } },
            { fr: "demain matin / ce soir", it: "domattina / stasera", say: "dəmẽ matẽ / sə swar", hook: "CE SOIR = «questa sera». Ce matin, cet après-midi, ce soir: CE/CET + parte della giornata = oggi.",
              ex: { fr: "Demain matin, nous allons prendre le bus de huit heures pour Gordes.", it: "Domattina prenderemo l'autobus delle otto per Gordes." } },
            { fr: "la semaine prochaine", it: "la settimana prossima", say: "la səmèn proshèn", hook: "PROCHAIN(E) = prossimo/a: le mois prochain, l'année prochaine. Viene sempre DOPO il nome.",
              ex: { fr: "La semaine prochaine, je vais commencer un cours de cuisine provençale.", it: "La settimana prossima comincerò un corso di cucina provenzale." } },
            { fr: "visiter", it: "visitare", say: "vizité", hook: "VISITER si usa per i LUOGHI: visiter un musée. Per le persone si dice «rendre visite à» (fare visita a).",
              ex: { fr: "Cet après-midi, nous allons visiter les carrières d'ocre du village.", it: "Questo pomeriggio visiteremo le cave d'ocra del paese." } },
            { fr: "acheter / vendre", it: "comprare / vendere", say: "ashté / vãdr", hook: "ACHETER = comprare: pensa a «acquisto». VENDRE = vendere, con la D finale che si sente appena.",
              ex: { fr: "Le propriétaire va vendre la boutique, mais personne ne veut l'acheter.", it: "Il proprietario venderà la bottega, ma nessuno vuole comprarla." } },
            { fr: "téléphoner à", it: "telefonare a", say: "téléfoné a", hook: "TÉLÉPHONER À quelqu'un: come in italiano, «telefonare a». Il telefono si chiama anche «le portable» (il cellulare).",
              ex: { fr: "Je vais téléphoner à ma mère ce soir pour lui raconter le voyage.", it: "Stasera telefonerò a mia madre per raccontarle il viaggio." } },
            { fr: "raconter", it: "raccontare", say: "rakõté", hook: "RACONTER = raccontare: un racconto è «un conte» (una fiaba). Raconte-moi! = raccontami!",
              ex: { fr: "Madame Pons va nous raconter toute l'histoire de Zizì.", it: "Madame Pons ci racconterà tutta la storia di Zizì." } },
            { fr: "le projet", it: "il progetto", say: "lə projè", hook: "PROJET = progetto, con la J dolce. Tu as des projets pour le week-end? = hai programmi per il weekend?",
              ex: { fr: "Gigi a un nouveau projet : rouvrir la confiserie de Zizì à Paris.", it: "Gigi ha un nuovo progetto: riaprire la confetteria di Zizì a Parigi." } },
            { fr: "bientôt", it: "presto, a breve", say: "bjẽtò", hook: "BIENTÔT = «ben presto». À bientôt! = a presto! Lo conosci dalla lezione dei saluti.",
              ex: { fr: "Nous allons bientôt rentrer à Paris, mais je vais revenir ici.", it: "Presto torneremo a Parigi, ma io tornerò qui." } },
            { fr: "le village", it: "il paese, il villaggio", say: "lə vilaj", hook: "VILLAGE: il paesino, il borgo. Roussillon è classificato tra «les plus beaux villages de France».",
              ex: { fr: "Le village est petit, mais il y a un marché tous les jeudis matin.", it: "Il paese è piccolo, ma c'è un mercato tutti i giovedì mattina." } }
          ],
          tip: {
            title: "Il futuro prossimo: aller + infinito",
            body: "<div class='tbl'><table><thead><tr><th></th><th>aller</th><th>+ infinito</th></tr></thead><tbody><tr><td>je</td><td>vais</td><td>manger</td></tr><tr><td>tu</td><td>vas</td><td>partir</td></tr><tr><td>il / elle / on</td><td>va</td><td>visiter</td></tr><tr><td>nous</td><td>allons</td><td>voir</td></tr><tr><td>vous</td><td>allez</td><td>acheter</td></tr><tr><td>ils / elles</td><td>vont</td><td>dormir</td></tr></tbody></table></div><ul><li>Si usa per i <b>progetti</b> e per quello che <b>sta per succedere</b>: il va pleuvoir.</li><li>Negazione intorno ad <b>aller</b>: je <b>ne</b> vais <b>pas</b> partir.</li><li>Espressioni di tempo: ce soir, demain, la semaine <b>prochaine</b>, le mois <b>prochain</b>, l'année <b>prochaine</b>, bientôt.</li><li><b>On</b> = noi (familiare), con il verbo alla 3ª persona: <b>on va</b> manger = mangeremo.</li></ul>",
            examples: [
              { fr: "Demain, je vais visiter le musée et je vais acheter des cartes postales.", it: "Domani visiterò il museo e comprerò delle cartoline." },
              { fr: "Attention, tu vas tomber !", it: "Attento, stai per cadere!" },
              { fr: "Nous n'allons pas rentrer tard ce soir.", it: "Non torneremo tardi stasera." },
              { fr: "L'année prochaine, mes parents vont venir à Paris.", it: "L'anno prossimo i miei genitori verranno a Parigi." },
              { fr: "On va manger une pizza ? — Bonne idée !", it: "Mangiamo una pizza? — Buona idea!" }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Ce soir, nous ___ manger au restaurant.»", opts: ["allons", "vont", "allez", "vais"], a: 0, why: "Nous allons + infinito." },
            { t: "mcq", q: "«Il va pleuvoir» significa…", opts: ["Sta per piovere / pioverà.", "Va a piovere altrove.", "Ha appena piovuto.", "Piove sempre."], a: 0, why: "Aller + infinito = futuro vicino." },
            { t: "listen", say: "Ce soir, je vais préparer des lasagnes pour toute la famille.", q: "Cosa farà stasera?", opts: ["Preparerà le lasagne per tutta la famiglia.", "Mangerà le lasagne al ristorante.", "Comprerà le lasagne al supermercato.", "Ha preparato le lasagne ieri."], a: 0, why: "Je vais préparer = preparerò." },
            { t: "match", q: "Abbina", pairs: [["acheter", "comprare"], ["vendre", "vendere"], ["raconter", "raccontare"], ["bientôt", "presto"]] },
            { t: "order", q: "Riordina: «Domani visiteremo il paese.»", words: ["Demain,", "nous", "allons", "visiter", "le", "village."], why: "Nous allons visiter." }
          ],
          test: [
            { t: "mcq", q: "Come si dice «non partirò»?", opts: ["Je ne vais pas partir.", "Je vais ne pas partir.", "Je ne vais partir pas.", "Je vais partir pas."], a: 0, why: "Ne… pas intorno ad aller." },
            { t: "mcq", q: "Completa: «L'année ___, je vais apprendre l'espagnol.»", opts: ["prochaine", "prochain", "dernière", "passée"], a: 0, why: "L'année è femminile: prochaine." },
            { t: "mcq", q: "Completa: «Ils ___ vendre la boutique.»", opts: ["vont", "vais", "allons", "va"], a: 0, why: "Ils vont + infinito." },
            { t: "mcq", q: "Per «fare visita a un amico» si dice…", opts: ["rendre visite à un ami", "visiter un ami", "aller visiter à un ami", "faire visite un ami"], a: 0, why: "Visiter è per i luoghi." },
            { t: "listen", say: "Demain matin, nous allons prendre le bus de huit heures pour Gordes.", q: "Cosa faranno domattina?", opts: ["Prenderanno l'autobus delle otto per Gordes.", "Hanno preso l'autobus per Gordes.", "Andranno a Gordes a piedi alle otto.", "Prenderanno il treno delle otto."], a: 0, why: "Nous allons prendre = prenderemo." },
            { t: "listen", say: "Le propriétaire va vendre la boutique, mais personne ne veut l'acheter.", q: "Cosa succede alla bottega?", opts: ["Il proprietario la venderà, ma nessuno vuole comprarla.", "Il proprietario l'ha già venduta.", "Gigi la comprerà domani.", "La bottega riaprirà presto."], a: 0, why: "Va vendre = venderà." },
            { t: "listen", say: "Nous allons bientôt rentrer à Paris, mais je vais revenir ici.", q: "Cosa dice la persona?", opts: ["Presto torneranno a Parigi, ma lui tornerà qui.", "Resteranno qui per sempre.", "Non torneranno mai a Parigi.", "Sono appena arrivati da Parigi."], a: 0, why: "Bientôt = presto." },
            { t: "type", q: "Completa: «Je vais ___ à ma mère ce soir.» (telefonare)", a: ["téléphoner", "telephoner"], why: "Aller + infinito." },
            { t: "type", q: "Completa: «Tu ___ voir, c'est magnifique !» (vai a / vedrai)", a: ["vas"], why: "Tu vas + infinito." },
            { t: "type", say: "Madame Pons va nous raconter toute l'histoire.", q: "Ascolta e completa: «Madame Pons va nous ___ toute l'histoire.»", a: ["raconter"], why: "Raconter = raccontare." },
            { t: "order", q: "Riordina: «La settimana prossima comincerò un corso di cucina.»", words: ["La", "semaine", "prochaine,", "je", "vais", "commencer", "un", "cours", "de", "cuisine."], why: "Je vais commencer." },
            { t: "match", q: "Abbina", pairs: [["ce soir", "stasera"], ["demain matin", "domattina"], ["le mois prochain", "il mese prossimo"], ["le projet", "il progetto"]] }
          ],
          recap: {
            can: ["Parlare dei tuoi progetti con aller + infinito", "Dire cosa sta per succedere: il va pleuvoir", "Usare ce soir, demain, la semaine prochaine…", "Fare la negazione del futuro prossimo"],
            phrases: [{ fr: "Ce soir, nous allons manger sur la place.", it: "Stasera mangeremo in piazza." }, { fr: "Je ne vais pas acheter la boutique.", it: "Non comprerò la bottega." }, { fr: "L'année prochaine, je vais visiter la France.", it: "L'anno prossimo visiterò la Francia." }],
            trap: "La negazione va intorno ad ALLER, non all'infinito: je NE vais PAS partir."
          }
        },
        /* ---------------- LEZIONE 6-4 ---------------- */
        {
          id: "6-4", street: "Rue des Imprévus", title: "Imprevisti: pouvoir, vouloir, devoir",
          goal: "Gestire gli imprevisti di viaggio, chiedere aiuto e usare i verbi pouvoir, vouloir e devoir.",
          episode: {
            title: "Il segreto di Madame Pons",
            intro: "Al caffè della piazza, Madame Pons ha novant'anni, una treccia bianca e la voce di una cantante. Racconta, e tutti ascoltano. Ma intanto il cielo diventa nero, e la loro giornata sta per riempirsi di imprevisti.",
            lines: [
              { who: "Mme Pons", fr: "Zizì est partie de Paris parce qu'elle était malade. Elle ne voulait pas inquiéter Henri.", it: "Zizì è partita da Parigi perché era malata. Non voleva far preoccupare Henri." },
              { who: "Mme Lefèvre", fr: "Malade ? Et elle ne pouvait pas nous le dire ? Je voulais seulement lui dire au revoir…", it: "Malata? E non poteva dircelo? Volevo solo salutarla…" },
              { who: "Mme Pons", fr: "Ici, au soleil, elle a guéri. Mais elle devait rester loin, elle avait promis à son médecin.", it: "Qui, al sole, è guarita. Ma doveva restare lontano, l'aveva promesso al suo medico." },
              { who: "Léa", fr: "Oh non ! Gigi, on a un problème : il y a une grève, il n'y a plus de bus ce soir !", it: "Oh no! Gigi, abbiamo un problema: c'è uno sciopero, stasera non ci sono più autobus!" },
              { who: "Gigi", fr: "Et notre train part d'Avignon demain à sept heures. Comment est-ce qu'on peut y aller ?", it: "E il nostro treno parte da Avignone domani alle sette. Come possiamo andarci?" },
              { who: "Mme Pons", fr: "Mon petit-fils peut vous emmener en voiture. Vous voulez partir à quelle heure ?", it: "Mio nipote può accompagnarvi in macchina. A che ora volete partire?" },
              { who: "Croissant", fr: "Je ne veux pas voyager en voiture. Je dois protester. Formellement.", it: "Non voglio viaggiare in macchina. Devo protestare. Formalmente." },
              { who: "Mme Pons", fr: "Avant de partir, vous devez prendre ceci : c'est le dernier carnet de recettes de Zizì.", it: "Prima di partire dovete prendere questo: è l'ultimo quaderno di ricette di Zizì." }
            ],
            outro: "Il quaderno è pieno di ricette provenzali e, sull'ultima pagina, di una frase: «Pour la petite Françoise, quand elle sera grande. Pardonne-moi.» Françoise piange e ride insieme. Il viaggio è finito; nel prossimo arrondissement, tornati a Parigi, ognuno racconterà quello che ha vissuto.",
            you: "«{nome}, in viaggio gli imprevisti capitano: «J'ai perdu mon billet», «Le train est supprimé». Ricorda tre verbi d'oro: je peux (posso), je veux (voglio), je dois (devo). E soprattutto: «Vous pouvez m'aider ?»»",
            mine: { fr: "Excusez-moi, je m'appelle {nome}, j'ai perdu mon billet : vous pouvez m'aider, s'il vous plaît ?", it: "Mi scusi, mi chiamo {nome}, ho perso il biglietto: può aiutarmi, per favore?" }
          },
          words: [
            { fr: "pouvoir (je peux)", it: "potere (posso)", say: "puvwar (jə pö)", hook: "JE PEUX = posso, con EU = ö. «Je peux?» da solo = posso? (entrare, sedermi…). Vous pouvez m'aider? = può aiutarmi?",
              ex: { fr: "Est-ce que je peux payer par carte, ou seulement en espèces ?", it: "Posso pagare con la carta, o solo in contanti?" } },
            { fr: "vouloir (je veux)", it: "volere (voglio)", say: "vulwar (jə vö)", hook: "JE VEUX = voglio, diretto (ricordi? al bar meglio «je voudrais»). Ils veulent = vogliono.",
              ex: { fr: "Les enfants veulent rester à la plage jusqu'au coucher du soleil.", it: "I bambini vogliono restare in spiaggia fino al tramonto." } },
            { fr: "devoir (je dois)", it: "dovere (devo)", say: "dəvwar (jə dwa)", hook: "JE DOIS = devo: pensa a un «dovere» con la bocca a cuore: dwa. Tu dois, il doit, nous devons, ils doivent.",
              ex: { fr: "Je dois partir tôt demain, parce que mon train est à sept heures.", it: "Devo partire presto domani, perché il mio treno è alle sette." } },
            { fr: "perdre / j'ai perdu", it: "perdere / ho perso", say: "pèrdr / jé pèrdü", hook: "PERDRE = perdere. J'AI PERDU mon passeport: la frase che non vorresti mai dire, ma che devi sapere.",
              ex: { fr: "J'ai perdu mon portefeuille dans le train : qu'est-ce que je dois faire ?", it: "Ho perso il portafoglio sul treno: cosa devo fare?" } },
            { fr: "la grève", it: "lo sciopero", say: "la grèv", hook: "LA GRÈVE: lo sciopero, sport nazionale francese! Viene dalla place de Grève di Parigi, dove si radunavano i lavoratori.",
              ex: { fr: "À cause de la grève, il n'y a pas de métro ni de bus aujourd'hui.", it: "A causa dello sciopero oggi non c'è né metrò né autobus." } },
            { fr: "en panne", it: "guasto", say: "ã pan", hook: "EN PANNE: guasto, in avaria. Une voiture en panne, un ascenseur en panne. Pensa a una «panna» che si è rovinata.",
              ex: { fr: "Notre voiture est en panne au milieu de la campagne, sans réseau.", it: "La nostra macchina è guasta in mezzo alla campagna, senza campo." } },
            { fr: "aider / l'aide", it: "aiutare / l'aiuto", say: "èdé / lèd", hook: "AIDER = aiutare. Au secours! = aiuto! (in un'emergenza). Vous pouvez m'aider? = può aiutarmi?",
              ex: { fr: "Merci beaucoup de nous aider, vous êtes vraiment très gentil.", it: "Grazie mille per averci aiutato, lei è davvero molto gentile." } },
            { fr: "annulé", it: "annullato, cancellato", say: "anülé", hook: "ANNULÉ = annullato. Mon vol est annulé = il mio volo è cancellato. Sinonimo per i treni: supprimé.",
              ex: { fr: "Le vol pour Nice est annulé à cause du mauvais temps.", it: "Il volo per Nizza è cancellato a causa del maltempo." } },
            { fr: "il n'y a plus de…", it: "non c'è più…", say: "il nja plü də", hook: "NE… PLUS = non… più: il n'y a plus de bus = non ci sono più autobus. Come ne… pas, ma con «più».",
              ex: { fr: "Désolé, il n'y a plus de chambres libres ce soir dans l'hôtel.", it: "Mi dispiace, stasera non ci sono più camere libere in albergo." } },
            { fr: "emmener", it: "accompagnare, portare (qualcuno)", say: "ãmné", hook: "EMMENER: «portare con sé» una persona. Je t'emmène à la gare = ti accompagno alla stazione.",
              ex: { fr: "Mon voisin peut nous emmener à l'aéroport demain matin.", it: "Il mio vicino può accompagnarci all'aeroporto domattina." } }
          ],
          tip: {
            title: "Pouvoir, vouloir, devoir: i tre verbi del viaggiatore",
            body: "<div class='tbl'><table><thead><tr><th></th><th>pouvoir</th><th>vouloir</th><th>devoir</th></tr></thead><tbody><tr><td>je</td><td>peux</td><td>veux</td><td>dois</td></tr><tr><td>tu</td><td>peux</td><td>veux</td><td>dois</td></tr><tr><td>il / elle</td><td>peut</td><td>veut</td><td>doit</td></tr><tr><td>nous</td><td>pouvons</td><td>voulons</td><td>devons</td></tr><tr><td>vous</td><td>pouvez</td><td>voulez</td><td>devez</td></tr><tr><td>ils / elles</td><td>peuvent</td><td>veulent</td><td>doivent</td></tr></tbody></table></div><ul><li>Tutti e tre vogliono un <b>infinito</b> dopo: je peux partir, je veux dormir, je dois travailler.</li><li><b>Vous pouvez m'aider ?</b> = può aiutarmi? La frase più utile in caso di problemi.</li><li><b>Ne… plus</b> = non… più: il n'y a <b>plus de</b> bus.</li><li>Emergenze: <b>Au secours !</b> (aiuto!), il 112 è il numero europeo.</li></ul>",
            examples: [
              { fr: "Vous pouvez m'aider ? J'ai perdu mon passeport.", it: "Può aiutarmi? Ho perso il passaporto." },
              { fr: "Nous voulons changer notre billet pour le train de midi.", it: "Vogliamo cambiare il biglietto per il treno di mezzogiorno." },
              { fr: "Vous devez valider votre billet avant de monter.", it: "Dovete convalidare il biglietto prima di salire." },
              { fr: "Mon train est supprimé : est-ce que je peux prendre le suivant ?", it: "Il mio treno è cancellato: posso prendere il successivo?" },
              { fr: "Il n'y a plus de taxis à la gare, nous devons attendre.", it: "Non ci sono più taxi alla stazione, dobbiamo aspettare." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Vous ___ m'aider, s'il vous plaît ?» (potere)", opts: ["pouvez", "peux", "pouvons", "peuvent"], a: 0, why: "Vous pouvez." },
            { t: "mcq", q: "«La grève» è…", opts: ["lo sciopero", "il treno", "la stazione", "il ritardo"], a: 0, why: "Grève = sciopero." },
            { t: "listen", say: "J'ai perdu mon portefeuille dans le train : qu'est-ce que je dois faire ?", q: "Cosa ha perso?", opts: ["Il portafoglio", "Il biglietto", "Il passaporto", "La valigia"], a: 0, why: "Le portefeuille = il portafoglio." },
            { t: "match", q: "Abbina", pairs: [["je peux", "posso"], ["je veux", "voglio"], ["je dois", "devo"], ["en panne", "guasto"]] },
            { t: "order", q: "Riordina: «Devo partire presto domani.»", words: ["Je", "dois", "partir", "tôt", "demain."], why: "Devoir + infinito." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Les enfants ___ rester à la plage.» (volere)", opts: ["veulent", "voulent", "veut", "voulez"], a: 0, why: "Ils veulent: irregolare." },
            { t: "mcq", q: "Completa: «Nous ___ valider le billet.» (dovere)", opts: ["devons", "doivons", "doit", "devez"], a: 0, why: "Nous devons." },
            { t: "mcq", q: "«Il n'y a plus de bus» significa…", opts: ["Non ci sono più autobus.", "Ci sono più autobus.", "Non c'è nessun autobus in più.", "C'è un solo autobus."], a: 0, why: "Ne… plus = non… più." },
            { t: "mcq", q: "In un'emergenza gridi:", opts: ["Au secours !", "À bientôt !", "Bon voyage !", "Pas de problème !"], a: 0, why: "Au secours = aiuto!" },
            { t: "listen", say: "À cause de la grève, il n'y a pas de métro ni de bus aujourd'hui.", q: "Perché non ci sono mezzi?", opts: ["Per uno sciopero", "Per la neve", "Per un guasto", "Perché è domenica"], a: 0, why: "La grève = lo sciopero." },
            { t: "listen", say: "Notre voiture est en panne au milieu de la campagne, sans réseau.", q: "Qual è il problema?", opts: ["La macchina è guasta in campagna e non c'è campo.", "Hanno perso la strada in città.", "Non c'è benzina vicino alla stazione.", "Il treno si è fermato in campagna."], a: 0, why: "En panne = guasta; sans réseau = senza campo." },
            { t: "listen", say: "Le vol pour Nice est annulé à cause du mauvais temps.", q: "Cosa è successo al volo?", opts: ["È cancellato per il maltempo.", "È in ritardo per uno sciopero.", "È partito in anticipo.", "È pieno."], a: 0, why: "Annulé = cancellato." },
            { t: "type", q: "Completa: «J'ai ___ mon passeport !» (perso)", a: ["perdu"], why: "J'ai perdu = ho perso." },
            { t: "type", q: "Completa: «Est-ce que je ___ payer par carte ?» (posso)", a: ["peux"], why: "Je peux." },
            { t: "type", say: "Mon voisin peut nous emmener à l'aéroport demain matin.", q: "Ascolta e completa: «Mon voisin peut nous ___ à l'aéroport.»", a: ["emmener"], why: "Emmener = accompagnare qualcuno." },
            { t: "order", q: "Riordina: «Può aiutarmi? Ho perso il biglietto.»", words: ["Vous", "pouvez", "m'aider", "?", "J'ai", "perdu", "mon", "billet."], why: "Vous pouvez m'aider ?" },
            { t: "match", q: "Abbina", pairs: [["la grève", "lo sciopero"], ["annulé", "cancellato"], ["aider", "aiutare"], ["perdre", "perdere"]] }
          ],
          recap: {
            can: ["Coniugare pouvoir, vouloir e devoir", "Chiedere aiuto: «Vous pouvez m'aider ?»", "Spiegare un problema: j'ai perdu…, … est en panne, … est annulé", "Usare ne… plus (non… più)"],
            phrases: [{ fr: "Vous pouvez m'aider ? J'ai perdu mon billet.", it: "Può aiutarmi? Ho perso il biglietto." }, { fr: "Il y a une grève, il n'y a plus de bus.", it: "C'è uno sciopero, non ci sono più autobus." }, { fr: "Nous devons partir tôt, notre train est à sept heures.", it: "Dobbiamo partire presto, il nostro treno è alle sette." }],
            trap: "Pouvoir, vouloir e devoir cambiano molto al plurale: ils PEUVENT, ils VEULENT, ils DOIVENT."
          }
        }
      ]
    },
    {
      n: 7, arr: "7e", name: "Raconter", it: "Raccontare", level: "A2",
      lessons: [
        /* ---------------- LEZIONE 7-1 ---------------- */
        {
          id: "7-1", street: "Rue du Passé", title: "Il passé composé con avoir",
          goal: "Raccontare cosa hai fatto con il passé composé dei verbi in -er (j'ai mangé, nous avons visité), anche in frase negativa.",
          episode: {
            title: "Il ritorno a Montmartre",
            intro: "Di nuovo a Parigi, il caffè riapre il lunedì mattina. Alle otto in punto entra M. Bernard, cappello grigio e ombrello. Ma questa volta non si siede vicino alla vetrina: si siede al bancone, davanti a Gigi, e chiede: «Allora? Raccontatemi tutto.»",
            lines: [
              { who: "M. Bernard", fr: "Alors, mes amis ? Qu'est-ce que vous avez fait en Provence ?", it: "Allora, amici miei? Cosa avete fatto in Provenza?" },
              { who: "Gigi", fr: "Nous avons visité Roussillon et nous avons trouvé la boutique de Zizì.", it: "Abbiamo visitato Roussillon e abbiamo trovato la bottega di Zizì." },
              { who: "Léa", fr: "J'ai parlé avec Madame Pons pendant trois heures. Elle a tout raconté.", it: "Ho parlato con Madame Pons per tre ore. Ha raccontato tutto." },
              { who: "M. Bernard", fr: "Et vous avez mangé la fameuse tarte au citron du café de la place ?", it: "E avete mangiato la famosa torta al limone del caffè della piazza?" },
              { who: "Gigi", fr: "Non, nous n'avons pas mangé de tarte : il y a eu une grève et un orage !", it: "No, non abbiamo mangiato la torta: c'è stato uno sciopero e un temporale!" },
              { who: "Croissant", fr: "J'ai voyagé en train, en bus, en voiture. J'ai beaucoup souffert. Personne n'a écouté mes plaintes.", it: "Ho viaggiato in treno, in autobus, in macchina. Ho sofferto molto. Nessuno ha ascoltato le mie lamentele." },
              { who: "Léa", fr: "Monsieur Bernard, Zizì a quitté Paris parce qu'elle était malade. Elle a beaucoup pensé à vous.", it: "Signor Bernard, Zizì ha lasciato Parigi perché era malata. Ha pensato molto a lei." },
              { who: "M. Bernard", fr: "J'ai attendu des années sans comprendre. Maintenant, j'ai enfin trouvé la paix.", it: "Ho aspettato per anni senza capire. Adesso ho finalmente trovato la pace." }
            ],
            outro: "M. Bernard finisce il suo café crème, lascia cinque euro sul bancone e, per la prima volta, non dice «gardez la monnaie». Dice invece: «Domani torno. E porto delle fotografie.»",
            you: "«{nome}, per raccontare il passato il francese usa AVOIR + participio, proprio come l'italiano «ho mangiato»: j'ai mangé. Per i verbi in -ER il participio è facilissimo: -er diventa -é, e si pronuncia uguale!»",
            mine: { fr: "Je m'appelle {nome} et hier j'ai étudié le français, puis j'ai regardé un film.", it: "Mi chiamo {nome} e ieri ho studiato francese, poi ho guardato un film." }
          },
          words: [
            { fr: "j'ai mangé", it: "ho mangiato", say: "jé mãjé", hook: "J'AI + MANGÉ: come «ho mangiato». Il participio dei verbi in -ER finisce in -É e si pronuncia come l'infinito: manger / mangé.",
              ex: { fr: "Hier soir, j'ai mangé une soupe à l'oignon dans un petit bistrot.", it: "Ieri sera ho mangiato una zuppa di cipolle in un piccolo bistrot." } },
            { fr: "nous avons visité", it: "abbiamo visitato", say: "nu zavõ vizité", hook: "NOUS AVONS: «abbiamo», con la liaison nu-za-võ. Visiter → visité.",
              ex: { fr: "L'été dernier, nous avons visité la Bretagne en vélo.", it: "L'estate scorsa abbiamo visitato la Bretagna in bici." } },
            { fr: "hier / hier soir", it: "ieri / ieri sera", say: "jèr / jèr swar", hook: "HIER è la parola-chiave del passato. Hier matin, hier après-midi, hier soir: tutta la giornata di ieri.",
              ex: { fr: "Hier soir, j'ai téléphoné à mes parents pendant une heure.", it: "Ieri sera ho telefonato ai miei genitori per un'ora." } },
            { fr: "la semaine dernière", it: "la settimana scorsa", say: "la səmèn dèrnjèr", hook: "DERNIER/DERNIÈRE = ultimo, scorso. La semaine dernière, le mois dernier, l'année dernière. Contrario di «prochain».",
              ex: { fr: "La semaine dernière, Léa a travaillé tous les jours au café.", it: "La settimana scorsa Léa ha lavorato tutti i giorni al caffè." } },
            { fr: "trouver / trouvé", it: "trovare / trovato", say: "truvé", hook: "J'ai trouvé = ho trovato. Sul tavolo degli oggetti smarriti: «objets trouvés».",
              ex: { fr: "J'ai trouvé un vieux portefeuille dans le métro, je l'ai donné à la police.", it: "Ho trovato un vecchio portafoglio nel metrò, l'ho dato alla polizia." } },
            { fr: "attendre / attendu", it: "aspettare / aspettato", say: "atãdr / atãdü", hook: "Trappola! ATTENDRE = aspettare, non «attendere» nel senso di «fare attenzione». I verbi in -RE fanno il participio in -U: attendu.",
              ex: { fr: "J'ai attendu le bus pendant quarante minutes sous la pluie.", it: "Ho aspettato l'autobus per quaranta minuti sotto la pioggia." } },
            { fr: "quitter", it: "lasciare (un luogo, una persona)", say: "kité", hook: "QUITTER = lasciare: «quitter Paris», «quitter son travail». Al telefono: «Ne quittez pas» = resti in linea!",
              ex: { fr: "Zizì a quitté Paris un matin d'hiver, sans dire au revoir.", it: "Zizì ha lasciato Parigi una mattina d'inverno, senza salutare." } },
            { fr: "pendant", it: "durante, per (tempo)", say: "pãdã", hook: "PENDANT = durante: pendant les vacances. Con una durata: pendant trois heures = per tre ore.",
              ex: { fr: "Pendant les vacances, nous avons beaucoup marché et beaucoup mangé.", it: "Durante le vacanze abbiamo camminato e mangiato molto." } },
            { fr: "déjà / pas encore", it: "già / non ancora", say: "déja / pa zãkòr", hook: "DÉJÀ = già (come il «déjà vu»!). PAS ENCORE = non ancora: je n'ai pas encore mangé.",
              ex: { fr: "Tu as déjà visité le Louvre ? — Non, pas encore, mais je vais y aller.", it: "Hai già visitato il Louvre? — No, non ancora, ma ci andrò." } },
            { fr: "il y a (+ tempo)", it: "fa (tempo fa)", say: "il ja", hook: "IL Y A + tempo = «fa»: il y a deux jours = due giorni fa. Lo stesso «il y a» di «c'è», ma col tempo!",
              ex: { fr: "Je suis arrivé à Paris il y a trois mois, et j'adore déjà la ville.", it: "Sono arrivato a Parigi tre mesi fa, e adoro già la città." } }
          ],
          tip: {
            title: "Il passé composé con avoir: la ricetta",
            body: "<div class='tbl'><table><thead><tr><th></th><th>avoir</th><th>+ participio</th></tr></thead><tbody><tr><td>j'</td><td>ai</td><td>parlé</td></tr><tr><td>tu</td><td>as</td><td>mangé</td></tr><tr><td>il / elle / on</td><td>a</td><td>visité</td></tr><tr><td>nous</td><td>avons</td><td>trouvé</td></tr><tr><td>vous</td><td>avez</td><td>écouté</td></tr><tr><td>ils / elles</td><td>ont</td><td>travaillé</td></tr></tbody></table></div><ul><li>Participio: verbi in <b>-er → -é</b> (parler → parlé); in <b>-ir → -i</b> (finir → fini); in <b>-re → -u</b> (attendre → attendu).</li><li>Negazione intorno ad <b>avoir</b>: je <b>n'</b>ai <b>pas</b> mangé.</li><li>Dopo la negazione, un / une / des / du diventano <b>de</b>: je n'ai pas mangé <b>de</b> tarte.</li><li>Parole del passato: <b>hier, la semaine dernière, il y a deux jours, déjà, pendant</b>.</li></ul>",
            examples: [
              { fr: "Hier, j'ai travaillé jusqu'à minuit.", it: "Ieri ho lavorato fino a mezzanotte." },
              { fr: "Tu as fini tes devoirs ? — Oui, j'ai fini il y a une heure.", it: "Hai finito i compiti? — Sì, ho finito un'ora fa." },
              { fr: "Nous n'avons pas trouvé la rue, alors nous avons demandé.", it: "Non abbiamo trovato la strada, così abbiamo chiesto." },
              { fr: "Ils ont attendu le train pendant une heure.", it: "Hanno aspettato il treno per un'ora." },
              { fr: "Vous avez déjà mangé des escargots ?", it: "Avete già mangiato le lumache?" }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Hier, j'___ mangé une pizza.»", opts: ["ai", "as", "a", "suis"], a: 0, why: "J'ai + participio." },
            { t: "mcq", q: "Qual è il participio di «attendre»?", opts: ["attendu", "attendé", "attendi", "attendre"], a: 0, why: "Verbi in -re → -u." },
            { t: "listen", say: "Hier soir, j'ai téléphoné à mes parents pendant une heure.", q: "Cosa ha fatto ieri sera?", opts: ["Ha telefonato ai genitori per un'ora.", "Ha visitato i genitori per un'ora.", "Telefonerà ai genitori stasera.", "Ha aspettato i genitori per un'ora."], a: 0, why: "J'ai téléphoné = ho telefonato." },
            { t: "match", q: "Abbina", pairs: [["hier", "ieri"], ["déjà", "già"], ["pendant", "durante"], ["il y a deux jours", "due giorni fa"]] },
            { t: "order", q: "Riordina: «Abbiamo visitato Roussillon e abbiamo trovato la bottega.»", words: ["Nous", "avons", "visité", "Roussillon", "et", "nous", "avons", "trouvé", "la", "boutique."], why: "Nous avons + participio." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Ils ___ travaillé tout le week-end.»", opts: ["ont", "sont", "avons", "a"], a: 0, why: "Ils ont + participio." },
            { t: "mcq", q: "Come si dice «non ho mangiato»?", opts: ["Je n'ai pas mangé.", "Je n'ai mangé pas.", "Je ne pas ai mangé.", "Je n'ai pas manger."], a: 0, why: "Ne… pas intorno ad avoir; poi il participio." },
            { t: "mcq", q: "«Il y a trois mois» significa…", opts: ["tre mesi fa", "ci sono tre mesi", "tra tre mesi", "per tre mesi"], a: 0, why: "Il y a + tempo = fa." },
            { t: "mcq", q: "Qual è il participio di «finir»?", opts: ["fini", "finé", "finu", "finit"], a: 0, why: "Verbi in -ir → -i." },
            { t: "listen", say: "Nous avons visité Roussillon et nous avons trouvé la boutique de Zizì.", q: "Cosa hanno fatto?", opts: ["Hanno visitato Roussillon e trovato la bottega di Zizì.", "Visiteranno Roussillon domani.", "Hanno comprato la bottega di Zizì.", "Hanno cercato Roussillon senza trovarlo."], a: 0, why: "Nous avons visité, nous avons trouvé." },
            { t: "listen", say: "J'ai attendu le bus pendant quarante minutes sous la pluie.", q: "Quanto ha aspettato l'autobus?", opts: ["40 minuti", "14 minuti", "4 minuti", "Un'ora"], a: 0, why: "Quarante = 40; j'ai attendu = ho aspettato." },
            { t: "listen", say: "Tu as déjà visité le Louvre ? Non, pas encore.", q: "Ha già visitato il Louvre?", opts: ["No, non ancora.", "Sì, già due volte.", "Sì, ieri.", "Non vuole visitarlo."], a: 0, why: "Pas encore = non ancora." },
            { t: "type", q: "Completa: «Nous avons ___ la Bretagne.» (visitato)", a: ["visité", "visite"], why: "Visiter → visité." },
            { t: "type", q: "Completa: «La semaine ___, j'ai beaucoup travaillé.» (scorsa)", a: ["dernière", "derniere"], why: "La semaine dernière." },
            { t: "type", say: "Zizì a quitté Paris un matin d'hiver.", q: "Ascolta e completa: «Zizì a ___ Paris un matin d'hiver.»", a: ["quitté", "quitte"], why: "Quitter = lasciare." },
            { t: "order", q: "Riordina: «Non abbiamo mangiato la torta.»", words: ["Nous", "n'avons", "pas", "mangé", "de", "tarte."], why: "Ne… pas + de dopo la negazione." },
            { t: "match", q: "Abbina", pairs: [["parler", "parlé"], ["finir", "fini"], ["attendre", "attendu"], ["quitter", "quitté"]] }
          ],
          recap: {
            can: ["Raccontare cosa hai fatto con avoir + participio", "Formare il participio: -é, -i, -u", "Fare la negazione al passato", "Usare hier, la semaine dernière, il y a, déjà, pendant"],
            phrases: [{ fr: "Hier, j'ai mangé dans un petit bistrot.", it: "Ieri ho mangiato in un piccolo bistrot." }, { fr: "Nous avons visité Roussillon il y a une semaine.", it: "Abbiamo visitato Roussillon una settimana fa." }, { fr: "Je n'ai pas encore trouvé la réponse.", it: "Non ho ancora trovato la risposta." }],
            trap: "IL Y A + tempo = «fa» (il y a deux jours = due giorni fa). E ATTENDRE = aspettare, non «fare attenzione»."
          }
        },
        /* ---------------- LEZIONE 7-2 ---------------- */
        {
          id: "7-2", street: "Rue des Participes", title: "I participi irregolari: fait, pris, vu…",
          goal: "Usare i participi irregolari più frequenti (fait, pris, vu, eu, été, bu, lu, écrit, mis, dit, ouvert) per raccontare esperienze.",
          episode: {
            title: "Le fotografie di Henri",
            intro: "Martedì mattina, come promesso, M. Bernard arriva con una scatola di scarpe piena di fotografie. Le sparge sul bancone. Ognuna ha una data scritta dietro, a matita. Françoise, Léa e Gigi le guardano una per una, e lui racconta.",
            lines: [
              { who: "M. Bernard", fr: "Cette photo, je l'ai prise en soixante-six, le jour où nous avons ouvert le café.", it: "Questa foto l'ho scattata nel sessantasei, il giorno in cui abbiamo aperto il caffè." },
              { who: "Léa", fr: "Vous avez ouvert le café ensemble ? Vous ne l'avez jamais dit !", it: "Avete aperto il caffè insieme? Non l'ha mai detto!" },
              { who: "M. Bernard", fr: "J'ai fait les tables et les chaises de mes mains. Zizì a mis des fleurs partout.", it: "Ho fatto i tavoli e le sedie con le mie mani. Zizì ha messo fiori dappertutto." },
              { who: "Gigi", fr: "Et ici ? Vous avez bu du champagne… C'était une fête ?", it: "E qui? Avete bevuto champagne… Era una festa?" },
              { who: "M. Bernard", fr: "Oui. Ce soir-là, j'ai eu le courage de lui écrire une lettre d'amour.", it: "Sì. Quella sera ho avuto il coraggio di scriverle una lettera d'amore." },
              { who: "Mme Lefèvre", fr: "Et elle l'a lue ? Qu'est-ce qu'elle a répondu ?", it: "E lei l'ha letta? Cosa ha risposto?" },
              { who: "M. Bernard", fr: "Elle a lu la lettre, elle a ri, et elle a dit : « Tu as mis trois ans pour écrire ça ? »", it: "Ha letto la lettera, ha riso, e ha detto: «Ci hai messo tre anni per scrivere questo?»" },
              { who: "Croissant", fr: "J'ai vu beaucoup d'histoires d'amour dans ce café. Celle-ci est la meilleure. Ne le répétez pas.", it: "Ho visto molte storie d'amore in questo caffè. Questa è la migliore. Non ripetetelo." }
            ],
            outro: "Sotto l'ultima fotografia c'è un foglio piegato in quattro: è la lettera d'amore del 1968, ingiallita, con la risposta di Zizì scritta in fondo con un rossetto: «Oui.» M. Bernard la tiene in mano come un tesoro e, per un po', nessuno dice niente.",
            you: "«{nome}, i verbi più usati hanno participi strani: faire → fait, prendre → pris, voir → vu, boire → bu. Non c'è una regola: impariamoli come le facce degli amici, una alla volta.»",
            mine: { fr: "Je m'appelle {nome} : l'année dernière, j'ai vu Paris, j'ai pris beaucoup de photos et j'ai bu un vrai café crème.", it: "Mi chiamo {nome}: l'anno scorso ho visto Parigi, ho fatto molte foto e ho bevuto un vero café crème." }
          },
          words: [
            { fr: "faire → fait", it: "fare → fatto", say: "fè", hook: "FAIT = fatto: quasi identico! J'ai fait les courses, j'ai fait du sport. La T finale è muta.",
              ex: { fr: "Qu'est-ce que tu as fait ce week-end ? — J'ai fait une longue balade à vélo.", it: "Cosa hai fatto questo weekend? — Ho fatto un lungo giro in bici." } },
            { fr: "prendre → pris", it: "prendere → preso", say: "prì", hook: "PRIS = preso, come una «presa». J'ai pris le métro, j'ai pris une photo (ho scattato una foto).",
              ex: { fr: "Nous avons pris le dernier métro et nous sommes rentrés à une heure.", it: "Abbiamo preso l'ultimo metrò e siamo rientrati all'una." } },
            { fr: "voir → vu", it: "vedere → visto", say: "vü", hook: "VU = visto: come il «déjà vu», qualcosa di già visto! Tu as vu le dernier film de Spielberg?",
              ex: { fr: "J'ai vu la tour Eiffel illuminée pour la première fois hier soir.", it: "Ieri sera ho visto la Torre Eiffel illuminata per la prima volta." } },
            { fr: "avoir → eu / être → été", it: "avere → avuto / essere → stato", say: "ü / été", hook: "EU si pronuncia «ü»: j'ai eu = ho avuto. ÉTÉ = stato (e anche l'estate!): j'ai été malade.",
              ex: { fr: "J'ai eu de la chance : j'ai été le premier client de la journée.", it: "Ho avuto fortuna: sono stato il primo cliente della giornata." } },
            { fr: "boire → bu", it: "bere → bevuto", say: "bü", hook: "BU = bevuto, cortissimo come un sorso. J'ai bu un café, nous avons bu du champagne.",
              ex: { fr: "Au mariage de mon cousin, nous avons bu du champagne jusqu'à l'aube.", it: "Al matrimonio di mio cugino abbiamo bevuto champagne fino all'alba." } },
            { fr: "lire → lu / écrire → écrit", it: "leggere → letto / scrivere → scritto", say: "lü / ekrì", hook: "LU = letto; ÉCRIT = scritto (come in italiano «scritto», senza la S). Tu as lu le livre? Elle a écrit une lettre.",
              ex: { fr: "J'ai lu toutes les lettres de Zizì, et j'ai écrit une réponse à Madame Pons.", it: "Ho letto tutte le lettere di Zizì, e ho scritto una risposta a Madame Pons." } },
            { fr: "mettre → mis", it: "mettere → messo", say: "mì", hook: "MIS = messo. J'ai mis mon manteau. E «mettre du temps» = metterci tempo: tu as mis trois ans!",
              ex: { fr: "Où est-ce que tu as mis mes clés ? Je les cherche depuis une heure !", it: "Dove hai messo le mie chiavi? Le cerco da un'ora!" } },
            { fr: "dire → dit", it: "dire → detto", say: "dì", hook: "DIT = detto. Il a dit oui! = ha detto sì! La T si sente solo con la liaison.",
              ex: { fr: "Elle m'a dit la vérité, et maintenant je comprends tout.", it: "Mi ha detto la verità, e adesso capisco tutto." } },
            { fr: "ouvrir → ouvert", it: "aprire → aperto", say: "uvèr", hook: "OUVERT = aperto, lo conosci dai cartelli dei negozi! J'ai ouvert la fenêtre. Anche offrir → offert.",
              ex: { fr: "Nous avons ouvert la boîte et nous avons trouvé une lettre d'amour.", it: "Abbiamo aperto la scatola e abbiamo trovato una lettera d'amore." } },
            { fr: "jamais", it: "mai", say: "jamè", hook: "NE… JAMAIS = non… mai: je n'ai jamais vu la mer. Come ne… pas, ma per sempre!",
              ex: { fr: "Je n'ai jamais pris l'avion, mais j'ai fait beaucoup de voyages en train.", it: "Non ho mai preso l'aereo, ma ho fatto molti viaggi in treno." } }
          ],
          tip: {
            title: "I participi ribelli: impara le loro facce",
            body: "<div class='tbl'><table><thead><tr><th>Infinito</th><th>Participio</th><th>Esempio</th></tr></thead><tbody><tr><td>faire</td><td>fait</td><td>j'ai fait</td></tr><tr><td>prendre</td><td>pris</td><td>j'ai pris</td></tr><tr><td>mettre</td><td>mis</td><td>j'ai mis</td></tr><tr><td>dire</td><td>dit</td><td>j'ai dit</td></tr><tr><td>écrire</td><td>écrit</td><td>j'ai écrit</td></tr><tr><td>voir</td><td>vu</td><td>j'ai vu</td></tr><tr><td>lire</td><td>lu</td><td>j'ai lu</td></tr><tr><td>boire</td><td>bu</td><td>j'ai bu</td></tr><tr><td>avoir</td><td>eu</td><td>j'ai eu</td></tr><tr><td>être</td><td>été</td><td>j'ai été</td></tr><tr><td>ouvrir</td><td>ouvert</td><td>j'ai ouvert</td></tr></tbody></table></div><ul><li>Trucco: raggruppali per suono. <b>-it/-is</b>: fait, dit, écrit, pris, mis. <b>-u</b>: vu, lu, bu, eu. <b>-ert</b>: ouvert, offert.</li><li><b>Être</b> al passato usa avoir: j'<b>ai été</b> = sono stato.</li><li><b>Ne… jamais</b> = non… mai: je <b>n'</b>ai <b>jamais</b> vu.</li></ul>",
            examples: [
              { fr: "Qu'est-ce que vous avez fait hier ? — Nous avons vu un film.", it: "Cosa avete fatto ieri? — Abbiamo visto un film." },
              { fr: "J'ai pris le train de sept heures et j'ai lu un roman.", it: "Ho preso il treno delle sette e ho letto un romanzo." },
              { fr: "Il a écrit une lettre et il l'a mise dans une enveloppe.", it: "Ha scritto una lettera e l'ha messa in una busta." },
              { fr: "Je n'ai jamais bu de vin de Provence.", it: "Non ho mai bevuto vino della Provenza." },
              { fr: "Elle a été très malade, mais elle a eu de la chance.", it: "È stata molto malata, ma ha avuto fortuna." }
            ]
          },
          practice: [
            { t: "mcq", q: "Qual è il participio di «prendre»?", opts: ["pris", "prendu", "prendé", "prit"], a: 0, why: "Prendre → pris." },
            { t: "mcq", q: "Completa: «Tu as ___ la tour Eiffel ?» (visto)", opts: ["vu", "voi", "vois", "voyé"], a: 0, why: "Voir → vu." },
            { t: "listen", say: "J'ai vu la tour Eiffel illuminée pour la première fois hier soir.", q: "Cosa ha visto ieri sera?", opts: ["La Torre Eiffel illuminata", "Un film sulla Torre Eiffel", "I fuochi d'artificio", "Il Louvre di notte"], a: 0, why: "J'ai vu = ho visto." },
            { t: "match", q: "Abbina", pairs: [["faire", "fait"], ["boire", "bu"], ["écrire", "écrit"], ["mettre", "mis"]] },
            { t: "order", q: "Riordina: «Non ho mai preso l'aereo.»", words: ["Je", "n'ai", "jamais", "pris", "l'avion."], why: "Ne… jamais intorno ad avoir." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Elle a ___ une lettre d'amour.» (scritto)", opts: ["écrit", "écrivé", "écri", "écrite"], a: 0, why: "Écrire → écrit." },
            { t: "mcq", q: "Come si dice «sono stato malato»?", opts: ["J'ai été malade.", "Je suis été malade.", "J'ai être malade.", "J'étais été malade."], a: 0, why: "Être al passato: j'ai été." },
            { t: "mcq", q: "Qual è il participio di «avoir»?", opts: ["eu", "avu", "avé", "ai"], a: 0, why: "Avoir → eu (si pronuncia «ü»)." },
            { t: "mcq", q: "«Je n'ai jamais lu ce livre» significa…", opts: ["Non ho mai letto questo libro.", "Non leggerò mai questo libro.", "Ho già letto questo libro.", "Non ho letto il libro ieri."], a: 0, why: "Ne… jamais = non… mai." },
            { t: "listen", say: "Nous avons pris le dernier métro et nous sommes rentrés à une heure.", q: "Cosa hanno fatto?", opts: ["Hanno preso l'ultimo metrò e sono rientrati all'una.", "Hanno perso l'ultimo metrò.", "Hanno preso un taxi all'una.", "Sono rimasti fuori tutta la notte."], a: 0, why: "Nous avons pris = abbiamo preso." },
            { t: "listen", say: "Où est-ce que tu as mis mes clés ? Je les cherche depuis une heure !", q: "Cosa cerca la persona?", opts: ["Le sue chiavi", "Il suo telefono", "Il suo portafoglio", "I suoi occhiali"], a: 0, why: "Tu as mis = hai messo." },
            { t: "listen", say: "Elle m'a dit la vérité, et maintenant je comprends tout.", q: "Cosa è successo?", opts: ["Lei gli ha detto la verità.", "Lei gli ha scritto una lettera.", "Lei non ha detto niente.", "Lei ha mentito."], a: 0, why: "Elle a dit = ha detto." },
            { t: "type", q: "Completa: «Qu'est-ce que tu as ___ ce week-end ?» (fatto)", a: ["fait"], why: "Faire → fait." },
            { t: "type", q: "Completa: «Nous avons ___ du champagne.» (bevuto)", a: ["bu"], why: "Boire → bu." },
            { t: "type", say: "Nous avons ouvert la boîte et nous avons trouvé une lettre.", q: "Ascolta e completa: «Nous avons ___ la boîte.»", a: ["ouvert"], why: "Ouvrir → ouvert." },
            { t: "order", q: "Riordina: «Ho letto la lettera e ho detto sì.»", words: ["J'ai", "lu", "la", "lettre", "et", "j'ai", "dit", "oui."], why: "Lire → lu; dire → dit." },
            { t: "match", q: "Abbina", pairs: [["voir", "vu"], ["lire", "lu"], ["dire", "dit"], ["ouvrir", "ouvert"]] }
          ],
          recap: {
            can: ["Usare i participi irregolari più frequenti", "Raccontare esperienze: j'ai vu, j'ai pris, j'ai fait…", "Dire «non ho mai» con ne… jamais", "Usare être al passato: j'ai été"],
            phrases: [{ fr: "Qu'est-ce que tu as fait hier ? — J'ai vu un film.", it: "Cosa hai fatto ieri? — Ho visto un film." }, { fr: "J'ai pris le métro et j'ai lu un livre.", it: "Ho preso il metrò e ho letto un libro." }, { fr: "Je n'ai jamais bu de champagne.", it: "Non ho mai bevuto champagne." }],
            trap: "ÊTRE al passato si coniuga con AVOIR: j'ai été (sono stato), mai «je suis été»."
          }
        },
        /* ---------------- LEZIONE 7-3 ---------------- */
        {
          id: "7-3", street: "Rue de la Maison d'Être", title: "Il passé composé con être",
          goal: "Usare il passé composé con être per i verbi di movimento (aller, venir, partir, arriver…) e accordare il participio.",
          episode: {
            title: "La vita di Zizì",
            intro: "Mercoledì sera, a caffè chiuso, Odette Duval arriva con il suo quaderno rosso. Ha deciso di raccontare la vita di Zizì dall'inizio alla fine, come una storia. Le luci sono basse, il caffè profuma di cannella. Croissant si mette in prima fila.",
            lines: [
              { who: "Mme Duval", fr: "Zizì est née à Naples en mille neuf cent quarante-six, dans une famille de pâtissiers.", it: "Zizì è nata a Napoli nel 1946, in una famiglia di pasticcieri." },
              { who: "Mme Duval", fr: "À dix-neuf ans, elle est partie seule et elle est arrivée à Paris avec sa valise rouge.", it: "A diciannove anni è partita da sola ed è arrivata a Parigi con la sua valigia rossa." },
              { who: "Gigi", fr: "Et ma famille ? Elle est restée en contact avec mon grand-père ?", it: "E la mia famiglia? È rimasta in contatto con mio nonno?" },
              { who: "Mme Duval", fr: "Oui. Ton grand-père est venu à Paris deux fois. Ils sont allés danser ensemble au bal.", it: "Sì. Tuo nonno è venuto a Parigi due volte. Sono andati a ballare insieme al ballo." },
              { who: "Léa", fr: "Et après la Provence, elle est revenue à Paris, à la fin ?", it: "E dopo la Provenza, è tornata a Parigi, alla fine?" },
              { who: "Mme Duval", fr: "Elle est rentrée il y a cinq ans, en secret. Elle est montée au café une seule fois.", it: "È rientrata cinque anni fa, in segreto. È salita al caffè una volta sola." },
              { who: "Croissant", fr: "Ce jour-là, je suis descendu de mon fauteuil pour elle. Je ne descends jamais pour personne.", it: "Quel giorno sono sceso dalla mia poltrona per lei. Io non scendo mai per nessuno." },
              { who: "Mme Duval", fr: "Elle est morte l'hiver dernier, tranquille. Et elle a laissé le café à Gigi, avec Croissant.", it: "È morta lo scorso inverno, serena. E ha lasciato il caffè a Gigi, insieme a Croissant." }
            ],
            outro: "Nel silenzio, Croissant salta sulle ginocchia di Françoise, cosa che non ha mai fatto. «Era lei», sussurra Gigi, «era lei che ti aveva portato qui.» Il gatto chiude gli occhi. Nella sua lingua, che solo il pubblico capisce, dice: «Finalmente avete capito.»",
            you: "«{nome}, alcuni verbi, soprattutto di movimento, usano ÊTRE al passato, come in italiano: je suis allé = sono andato. E come in italiano il participio si accorda: elle est partiE, ils sont partiS. Il francese e l'italiano qui sono gemelli!»",
            mine: { fr: "Je m'appelle {nome} : je suis né en Italie et l'été dernier je suis allé à la mer.", it: "Mi chiamo {nome}: sono nato in Italia e l'estate scorsa sono andato al mare." }
          },
          words: [
            { fr: "je suis allé(e)", it: "sono andato/a", say: "jə süì zalé", hook: "JE SUIS ALLÉ: «sono andato», con ÊTRE come in italiano. Se sei una donna aggiungi una E (muta): je suis allée.",
              ex: { fr: "Samedi dernier, je suis allé au marché aux puces de Saint-Ouen.", it: "Sabato scorso sono andato al mercato delle pulci di Saint-Ouen." } },
            { fr: "partir / arriver", it: "partire / arrivare", say: "partì / arivé", hook: "Elle est partie, elle est arrivée: la coppia del viaggio. Il participio si accorda con il soggetto: partiE per lei.",
              ex: { fr: "Nous sommes partis à six heures et nous sommes arrivés à midi.", it: "Siamo partiti alle sei e siamo arrivati a mezzogiorno." } },
            { fr: "venir → venu / revenir", it: "venire → venuto / tornare", say: "vənü / rəvənìr", hook: "VENU = venuto. REVENIR = «ri-venire», tornare: elle est revenue = è tornata.",
              ex: { fr: "Mes cousins sont venus de Naples pour l'ouverture du café.", it: "I miei cugini sono venuti da Napoli per l'inaugurazione del caffè." } },
            { fr: "naître → né / mourir → mort", it: "nascere → nato / morire → morto", say: "né / mòr", hook: "NÉ = nato (je suis né à Rome). MORT = morto. L'inizio e la fine della vita usano ÊTRE.",
              ex: { fr: "Mon grand-père est né en mille neuf cent trente, dans un petit village.", it: "Mio nonno è nato nel 1930, in un piccolo paese." } },
            { fr: "rester", it: "restare, rimanere", say: "rèsté", hook: "Trappola: RESTER = restare (non «riposare»!). Je suis resté à la maison = sono rimasto a casa.",
              ex: { fr: "Il a plu tout le week-end, alors nous sommes restés à la maison.", it: "Ha piovuto tutto il weekend, così siamo rimasti a casa." } },
            { fr: "entrer / sortir", it: "entrare / uscire", say: "ãtré / sortìr", hook: "Come in italiano: «sono entrato», «sono uscito». Sur les portes: ENTRÉE (ingresso), SORTIE (uscita).",
              ex: { fr: "Elle est entrée dans le café, elle a regardé partout, puis elle est sortie.", it: "È entrata nel caffè, si è guardata intorno, poi è uscita." } },
            { fr: "monter / descendre", it: "salire / scendere", say: "mõté / desãdr", hook: "MONTER: salire sul MONTE. DESCENDRE = discendere, scendere. Je suis monté au 5e étage.",
              ex: { fr: "Nous sommes montés au sommet de Montmartre, puis nous sommes descendus à pied.", it: "Siamo saliti in cima a Montmartre, poi siamo scesi a piedi." } },
            { fr: "rentrer", it: "rientrare, tornare a casa", say: "rãtré", hook: "RENTRER = rientrare a casa. Je suis rentré tard = sono tornato tardi. Anche «la rentrée» = il ritorno a scuola a settembre!",
              ex: { fr: "Hier soir, je suis rentré à minuit, et ce matin je suis très fatigué.", it: "Ieri sera sono rientrato a mezzanotte, e stamattina sono stanchissimo." } },
            { fr: "tomber", it: "cadere", say: "tõbé", hook: "TOMBER = cadere: pensa a una TOMBOLA… di oggetti che cadono! Je suis tombé dans l'escalier. E «tomber amoureux» = innamorarsi.",
              ex: { fr: "Elle est tombée amoureuse de Paris dès le premier jour.", it: "Si è innamorata di Parigi fin dal primo giorno." } },
            { fr: "seul(e)", it: "solo/a, da solo/a", say: "söl", hook: "SEUL = solo, da solo, con EU = ö. Elle est partie seule = è partita da sola (con la E).",
              ex: { fr: "À dix-neuf ans, elle est partie seule dans une ville inconnue.", it: "A diciannove anni è partita da sola per una città sconosciuta." } }
          ],
          tip: {
            title: "La casa di Être: i verbi che usano être",
            body: "<div class='tbl'><table><thead><tr><th>Coppia</th><th>Participio</th><th>Esempio</th></tr></thead><tbody><tr><td>aller / venir</td><td>allé / venu</td><td>elle est allée</td></tr><tr><td>arriver / partir</td><td>arrivé / parti</td><td>nous sommes partis</td></tr><tr><td>entrer / sortir</td><td>entré / sorti</td><td>il est sorti</td></tr><tr><td>monter / descendre</td><td>monté / descendu</td><td>je suis monté</td></tr><tr><td>naître / mourir</td><td>né / mort</td><td>elle est née</td></tr><tr><td>rester / tomber</td><td>resté / tombé</td><td>ils sont restés</td></tr><tr><td>(re)venir, rentrer, retourner</td><td>revenu, rentré, retourné</td><td>elle est rentrée</td></tr></tbody></table></div><ul><li>Immagina una <b>casa</b>: si nasce, si entra, si sale, si scende, si esce, si parte, si cade, si muore… Tutti questi movimenti usano <b>être</b>.</li><li>Il participio si <b>accorda</b> col soggetto: elle est part<b>ie</b>, ils sont part<b>is</b>, elles sont part<b>ies</b>.</li><li>Anche i verbi riflessivi usano être: je <b>me suis</b> levé.</li><li>Quasi sempre come in italiano: se dici «sono andato», in francese è <b>être</b>.</li></ul>",
            examples: [
              { fr: "Je suis né à Milan, mais je suis venu à Paris à vingt ans.", it: "Sono nato a Milano, ma sono venuto a Parigi a vent'anni." },
              { fr: "Elle est partie lundi et elle est rentrée vendredi.", it: "È partita lunedì ed è tornata venerdì." },
              { fr: "Nous sommes allés au cinéma, puis nous sommes restés au café.", it: "Siamo andati al cinema, poi siamo rimasti al caffè." },
              { fr: "Les enfants sont tombés dans la neige en riant.", it: "I bambini sono caduti nella neve ridendo." },
              { fr: "Ce matin, je me suis levé à six heures.", it: "Stamattina mi sono alzato alle sei." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Hier, je ___ allé au cinéma.»", opts: ["suis", "ai", "es", "étais"], a: 0, why: "Aller usa être: je suis allé." },
            { t: "mcq", q: "Completa: «Elle est ___ à Paris.» (arrivata)", opts: ["arrivée", "arrivé", "arrivés", "arriver"], a: 0, why: "Accordo col soggetto femminile: arrivée." },
            { t: "listen", say: "Nous sommes partis à six heures et nous sommes arrivés à midi.", q: "A che ora sono arrivati?", opts: ["A mezzogiorno", "Alle sei", "A mezzanotte", "Alle dieci"], a: 0, why: "Nous sommes arrivés à midi." },
            { t: "match", q: "Abbina", pairs: [["naître", "né"], ["mourir", "mort"], ["venir", "venu"], ["partir", "parti"]] },
            { t: "order", q: "Riordina: «Siamo rimasti a casa tutto il weekend.»", words: ["Nous", "sommes", "restés", "à", "la", "maison", "tout", "le", "week-end."], why: "Rester usa être; accordo plurale." }
          ],
          test: [
            { t: "mcq", q: "Quale verbo usa «être» al passé composé?", opts: ["partir", "manger", "voir", "faire"], a: 0, why: "Partir è un verbo di movimento della «casa di être»." },
            { t: "mcq", q: "Completa: «Mes cousins sont ___ de Naples.» (venuti)", opts: ["venus", "venu", "venue", "venir"], a: 0, why: "Soggetto maschile plurale: venus." },
            { t: "mcq", q: "Come dice una donna «sono nata a Roma»?", opts: ["Je suis née à Rome.", "J'ai née à Rome.", "Je suis né à Rome.", "J'ai été née à Rome."], a: 0, why: "Naître + être + accordo: née." },
            { t: "mcq", q: "«Rester» significa…", opts: ["restare", "riposare", "tornare", "riposarsi"], a: 0, why: "Rester = restare; se reposer = riposarsi." },
            { t: "listen", say: "À dix-neuf ans, elle est partie seule et elle est arrivée à Paris avec sa valise rouge.", q: "Come è arrivata Zizì a Parigi?", opts: ["Da sola, a diciannove anni, con la valigia rossa.", "Con la famiglia, a nove anni.", "Con Henri, in macchina.", "Da sola, a ventinove anni, senza valigia."], a: 0, why: "Elle est partie seule." },
            { t: "listen", say: "Il a plu tout le week-end, alors nous sommes restés à la maison.", q: "Perché sono rimasti a casa?", opts: ["Perché ha piovuto tutto il weekend.", "Perché erano malati.", "Perché c'era uno sciopero.", "Perché faceva troppo caldo."], a: 0, why: "Nous sommes restés = siamo rimasti." },
            { t: "listen", say: "Elle est tombée amoureuse de Paris dès le premier jour.", q: "Cosa è successo?", opts: ["Si è innamorata di Parigi fin dal primo giorno.", "È caduta il primo giorno a Parigi.", "Ha lasciato Parigi dopo un giorno.", "Ha odiato Parigi il primo giorno."], a: 0, why: "Tomber amoureux = innamorarsi." },
            { t: "type", q: "Completa: «Ils ___ allés danser au bal.» (sono)", a: ["sont"], why: "Ils sont allés." },
            { t: "type", q: "Completa: «Hier soir, je suis ___ à minuit.» (rientrato)", a: ["rentré", "rentre"], why: "Rentrer usa être: je suis rentré." },
            { t: "type", say: "Nous sommes montés au sommet de Montmartre.", q: "Ascolta e completa: «Nous sommes ___ au sommet de Montmartre.»", a: ["montés", "montes"], why: "Monter + être, plurale: montés." },
            { t: "order", q: "Riordina: «È entrata nel caffè, poi è uscita.»", words: ["Elle", "est", "entrée", "dans", "le", "café,", "puis", "elle", "est", "sortie."], why: "Entrer / sortir + être, femminile." },
            { t: "match", q: "Abbina", pairs: [["monter", "salire"], ["descendre", "scendere"], ["tomber", "cadere"], ["rester", "restare"]] }
          ],
          recap: {
            can: ["Usare être al passé composé con i verbi di movimento", "Accordare il participio: allé, allée, allés, allées", "Raccontare una vita: naître, partir, arriver, mourir", "Riconoscere i verbi della «casa di être»"],
            phrases: [{ fr: "Je suis né en Italie et je suis venu à Paris.", it: "Sono nato in Italia e sono venuto a Parigi." }, { fr: "Elle est partie seule et elle est arrivée à Paris.", it: "È partita da sola ed è arrivata a Parigi." }, { fr: "Nous sommes restés à la maison tout le week-end.", it: "Siamo rimasti a casa tutto il weekend." }],
            trap: "Con être il participio si accorda: elle est allÉE, ils sont allÉS. Con avoir, di norma, no: elle a mangÉ."
          }
        },
        /* ---------------- LEZIONE 7-4 ---------------- */
        {
          id: "7-4", street: "Rue du Récit", title: "Raccontare un weekend: avoir o être?",
          goal: "Raccontare un'esperienza passata dall'inizio alla fine, scegliendo avoir o être e collegando le frasi con i connettivi.",
          episode: {
            title: "La versione di Croissant",
            intro: "Giovedì, giornata tranquilla. Léa scrive un lungo messaggio alla sua amica Camille per raccontarle il viaggio in Provenza. Gigi la aiuta. Croissant, offeso perché nessuno ha chiesto la SUA versione, decide di raccontarla lo stesso, ad alta voce.",
            lines: [
              { who: "Léa", fr: "Bon, j'écris à Camille. D'abord, nous sommes partis de la gare de Lyon samedi matin.", it: "Bene, scrivo a Camille. Prima di tutto, siamo partiti dalla Gare de Lyon sabato mattina." },
              { who: "Gigi", fr: "Ensuite, nous sommes arrivés à Roussillon et nous avons dormi dans un hôtel charmant.", it: "Poi siamo arrivati a Roussillon e abbiamo dormito in un albergo delizioso." },
              { who: "Léa", fr: "Le lendemain, nous avons rencontré Madame Pons, et elle nous a raconté le secret de Zizì.", it: "Il giorno dopo abbiamo incontrato Madame Pons, e lei ci ha raccontato il segreto di Zizì." },
              { who: "Gigi", fr: "Après, il y a eu une grève, mais son petit-fils nous a emmenés à Avignon.", it: "Dopo c'è stato uno sciopero, ma suo nipote ci ha accompagnato ad Avignone." },
              { who: "Croissant", fr: "Ma version : on m'a mis dans une cage. J'ai vu un chat roux vulgaire. J'ai mangé des croquettes provençales. Fin.", it: "La mia versione: mi hanno messo in una gabbia. Ho visto un gatto rosso volgare. Ho mangiato crocchette provenzali. Fine." },
              { who: "Léa", fr: "Finalement, nous sommes rentrés lundi soir, fatigués mais très heureux.", it: "Alla fine siamo rientrati lunedì sera, stanchi ma felicissimi." },
              { who: "Gigi", fr: "Ajoute aussi : « Françoise a souri pendant tout le voyage. » C'est le plus important.", it: "Aggiungi anche: «Françoise ha sorriso per tutto il viaggio.» È la cosa più importante." },
              { who: "Léa", fr: "Envoyé ! Camille a déjà répondu : « Quand est-ce que vous ouvrez la confiserie ? »", it: "Inviato! Camille ha già risposto: «Quando aprite la confetteria?»" }
            ],
            outro: "La domanda di Camille resta nell'aria. Riaprire la confetteria di Zizì, qui a Parigi, nel caffè? Gigi guarda Françoise, Françoise guarda il quaderno di ricette, M. Bernard (appena entrato) guarda tutti. «Allora», dice Gigi, «domani si va a fare la spesa.» Benvenuti nell'8° arrondissement.",
            you: "«{nome}, per raccontare come un francese usa i connettivi: d'abord, ensuite, le lendemain, après, finalement. E ricorda la regola d'oro: movimento e riflessivi con ÊTRE, quasi tutto il resto con AVOIR.»",
            mine: { fr: "Je m'appelle {nome} : le week-end dernier, je suis allé au cinéma, puis j'ai mangé une pizza avec des amis.", it: "Mi chiamo {nome}: lo scorso weekend sono andato al cinema, poi ho mangiato una pizza con degli amici." }
          },
          words: [
            { fr: "le week-end dernier", it: "lo scorso weekend", say: "lə wikènd dèrnjè", hook: "WEEK-END: i francesi hanno adottato la parola inglese, ma la dicono alla francese. Dernier = scorso.",
              ex: { fr: "Le week-end dernier, nous sommes allés à la campagne chez mes grands-parents.", it: "Lo scorso weekend siamo andati in campagna dai miei nonni." } },
            { fr: "le lendemain", it: "il giorno dopo", say: "lə lãdmẽ", hook: "LE LENDEMAIN: «l'indomani». Si usa nei racconti al passato, invece di «demain».",
              ex: { fr: "Nous sommes arrivés le soir, et le lendemain nous avons visité le village.", it: "Siamo arrivati la sera, e il giorno dopo abbiamo visitato il paese." } },
            { fr: "après / ensuite", it: "dopo / poi", say: "aprè / ãsüìt", hook: "APRÈS = dopo: après le déjeuner. ENSUITE = poi, in seguito. Alternali per non ripetere sempre la stessa parola.",
              ex: { fr: "Après le dîner, nous avons fait une promenade, ensuite nous sommes rentrés.", it: "Dopo cena abbiamo fatto una passeggiata, poi siamo rientrati." } },
            { fr: "finalement", it: "alla fine", say: "finalmã", hook: "Trappola gentile: FINALEMENT = alla fine (in conclusione), non sempre «finalmente!». Per «finalmente!» si dice «enfin!».",
              ex: { fr: "Nous avons cherché un hôtel pendant deux heures, et finalement nous avons trouvé.", it: "Abbiamo cercato un albergo per due ore, e alla fine l'abbiamo trovato." } },
            { fr: "rencontrer", it: "incontrare, conoscere", say: "rãkõtré", hook: "RENCONTRER = incontrare, anche per la prima volta (conoscere qualcuno). J'ai rencontré ma femme à Paris.",
              ex: { fr: "Pendant le voyage, j'ai rencontré des gens très sympathiques.", it: "Durante il viaggio ho conosciuto persone molto simpatiche." } },
            { fr: "dormir → dormi", it: "dormire → dormito", say: "dormì", hook: "DORMI = dormito: come i verbi in -ir, participio in -i. J'ai bien dormi = ho dormito bene.",
              ex: { fr: "Cette nuit, j'ai très mal dormi à cause du bruit de la rue.", it: "Stanotte ho dormito malissimo a causa del rumore della strada." } },
            { fr: "heureux / heureuse", it: "felice", say: "örö / öröz", hook: "HEUREUX: felice, «a buon'ora» (heure). Il contrario è malheureux, infelice.",
              ex: { fr: "Nous sommes rentrés fatigués, mais vraiment heureux de ce voyage.", it: "Siamo rientrati stanchi, ma davvero felici di questo viaggio." } },
            { fr: "envoyer", it: "inviare, mandare", say: "ãvwajé", hook: "ENVOYER = inviare: «en-voyer», mandare in viaggio. J'ai envoyé un message, une carte postale.",
              ex: { fr: "J'ai envoyé une carte postale à ma grand-mère depuis la Provence.", it: "Ho mandato una cartolina a mia nonna dalla Provenza." } },
            { fr: "s'amuser", it: "divertirsi", say: "samüzé", hook: "S'AMUSER = divertirsi: le MUSE ti fanno divertire. Al passato: je me suis bien amusé (riflessivo → être!).",
              ex: { fr: "À la fête, nous nous sommes bien amusés jusqu'à deux heures du matin.", it: "Alla festa ci siamo divertiti un sacco fino alle due di notte." } },
            { fr: "la fin", it: "la fine", say: "la fẽ", hook: "LA FIN: la fine, come alla fine dei film francesi (FIN). À la fin = alla fine; enfin = finalmente.",
              ex: { fr: "À la fin du film, tout le monde a pleuré dans la salle.", it: "Alla fine del film tutti hanno pianto in sala." } }
          ],
          tip: {
            title: "Avoir o être? La bussola del racconto",
            body: "<div class='tbl'><table><thead><tr><th>Usa ÊTRE con</th><th>Usa AVOIR con</th></tr></thead><tbody><tr><td>i verbi della «casa»: aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, rentrer…</td><td>quasi tutti gli altri verbi: manger, faire, voir, prendre, dormir, rencontrer…</td></tr><tr><td>tutti i verbi riflessivi: se lever, s'amuser, se promener…</td><td>être e avoir stessi: j'ai été, j'ai eu</td></tr><tr><td>→ participio <b>accordato</b>: elle est partie</td><td>→ participio <b>invariabile</b>: elle a mangé</td></tr></tbody></table></div><ul><li><b>Ordine del racconto:</b> d'abord → ensuite / après → le lendemain → finalement.</li><li>Nei racconti al passato: <b>la veille</b> (il giorno prima), <b>le lendemain</b> (il giorno dopo), non hier/demain.</li><li><b>On</b> (= noi) usa la 3ª persona: on est partis, on a mangé.</li></ul>",
            examples: [
              { fr: "D'abord, on est allés à la plage, ensuite on a mangé des moules.", it: "Prima siamo andati in spiaggia, poi abbiamo mangiato le cozze." },
              { fr: "Le lendemain, nous nous sommes levés tôt pour voir le lever du soleil.", it: "Il giorno dopo ci siamo alzati presto per vedere l'alba." },
              { fr: "Elle est sortie avec ses amies et elle a dansé toute la nuit.", it: "È uscita con le sue amiche e ha ballato tutta la notte." },
              { fr: "Finalement, nous sommes rentrés en taxi, parce qu'il pleuvait.", it: "Alla fine siamo rientrati in taxi, perché pioveva." },
              { fr: "Je me suis bien amusé et j'ai rencontré des gens formidables.", it: "Mi sono divertito tanto e ho conosciuto persone fantastiche." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Le week-end dernier, nous ___ allés à la mer.»", opts: ["sommes", "avons", "êtes", "allons"], a: 0, why: "Aller usa être." },
            { t: "mcq", q: "Completa: «Hier, j'___ très bien dormi.»", opts: ["ai", "suis", "as", "es"], a: 0, why: "Dormir usa avoir." },
            { t: "listen", say: "Nous sommes arrivés le soir, et le lendemain nous avons visité le village.", q: "Quando hanno visitato il paese?", opts: ["Il giorno dopo l'arrivo", "La sera stessa", "Il giorno prima", "Mai"], a: 0, why: "Le lendemain = il giorno dopo." },
            { t: "match", q: "Abbina", pairs: [["le lendemain", "il giorno dopo"], ["finalement", "alla fine"], ["rencontrer", "incontrare"], ["envoyer", "inviare"]] },
            { t: "order", q: "Riordina: «Prima siamo partiti, poi siamo arrivati a Roussillon.»", words: ["D'abord,", "nous", "sommes", "partis,", "ensuite", "nous", "sommes", "arrivés", "à", "Roussillon."], why: "Partir / arriver + être, plurale." }
          ],
          test: [
            { t: "mcq", q: "Quale frase è corretta?", opts: ["Je me suis bien amusé.", "Je m'ai bien amusé.", "J'ai me bien amusé.", "Je suis bien m'amusé."], a: 0, why: "Riflessivi → être: je me suis amusé." },
            { t: "mcq", q: "Completa: «Elle ___ rencontré Paul à Paris.»", opts: ["a", "est", "as", "s'est"], a: 0, why: "Rencontrer usa avoir." },
            { t: "mcq", q: "Nei racconti al passato «il giorno dopo» si dice…", opts: ["le lendemain", "demain", "après-demain", "hier"], a: 0, why: "Le lendemain." },
            { t: "mcq", q: "Completa: «Elles sont ___ avec leurs amies.» (uscite)", opts: ["sorties", "sorti", "sortis", "sortie"], a: 0, why: "Femminile plurale: sorties." },
            { t: "listen", say: "Après, il y a eu une grève, mais son petit-fils nous a emmenés à Avignon.", q: "Come sono arrivati ad Avignone?", opts: ["Li ha accompagnati il nipote di Madame Pons.", "In autobus, nonostante lo sciopero.", "In treno.", "A piedi."], a: 0, why: "Son petit-fils nous a emmenés." },
            { t: "listen", say: "Nous avons cherché un hôtel pendant deux heures, et finalement nous avons trouvé.", q: "Cosa è successo alla fine?", opts: ["Hanno trovato un albergo.", "Hanno dormito in macchina.", "Sono tornati a casa.", "Hanno cercato ancora."], a: 0, why: "Finalement = alla fine." },
            { t: "listen", say: "Cette nuit, j'ai très mal dormi à cause du bruit de la rue.", q: "Perché ha dormito male?", opts: ["Per il rumore della strada", "Per il caldo", "Per un brutto sogno", "Per il letto scomodo"], a: 0, why: "Le bruit = il rumore." },
            { t: "type", q: "Completa: «J'ai ___ une carte postale à ma grand-mère.» (mandato)", a: ["envoyé", "envoye"], why: "Envoyer → envoyé." },
            { t: "type", q: "Completa: «Nous sommes rentrés fatigués, mais très ___.» (felici)", a: ["heureux"], why: "Heureux, maschile plurale invariato." },
            { t: "type", say: "À la fin du film, tout le monde a pleuré.", q: "Ascolta e completa: «À la ___ du film, tout le monde a pleuré.»", a: ["fin"], why: "La fin = la fine." },
            { t: "order", q: "Riordina: «Alla festa ci siamo divertiti molto.»", words: ["À", "la", "fête,", "nous", "nous", "sommes", "bien", "amusés."], why: "S'amuser: riflessivo → être." },
            { t: "match", q: "Abbina", pairs: [["je suis allé", "être"], ["j'ai mangé", "avoir"], ["je me suis levé", "être (riflessivo)"], ["j'ai été", "avoir (être al passato)"]] }
          ],
          recap: {
            can: ["Raccontare un weekend o un viaggio dall'inizio alla fine", "Scegliere tra avoir ed être", "Usare d'abord, ensuite, le lendemain, finalement", "Usare i riflessivi al passato: je me suis amusé"],
            phrases: [{ fr: "Le week-end dernier, nous sommes partis en Provence.", it: "Lo scorso weekend siamo partiti per la Provenza." }, { fr: "Le lendemain, nous avons rencontré Madame Pons.", it: "Il giorno dopo abbiamo incontrato Madame Pons." }, { fr: "Finalement, nous sommes rentrés fatigués mais heureux.", it: "Alla fine siamo rientrati stanchi ma felici." }],
            trap: "FINALEMENT = alla fine (conclusione); ENFIN = finalmente! E i riflessivi vogliono sempre ÊTRE."
          }
        }
      ]
    },
    {
      n: 8, arr: "8e", name: "Faire les courses", it: "Fare la spesa", level: "A2",
      lessons: [
        /* ---------------- LEZIONE 8-1 ---------------- */
        {
          id: "8-1", street: "Rue des Commerces", title: "I negozi: chez le boulanger, à la fromagerie",
          goal: "Riconoscere i negozi tradizionali francesi, dire dove compri cosa e usare «chez» con le persone.",
          episode: {
            title: "La lista della spesa",
            intro: "È deciso: tra due settimane, dentro il caffè, riaprirà la confetteria di Zizì, «Au Petit Bonheur». Françoise ha scritto una lista lunghissima. Gigi, Léa e Croissant (nel carrello della spesa, come un re) partono per i negozi di rue Lepic.",
            lines: [
              { who: "Mme Lefèvre", fr: "Pour le pain, ne cherchez pas : vous allez chez moi, à la boulangerie, évidemment.", it: "Per il pane non cercate: venite da me, in panetteria, ovviamente." },
              { who: "Léa", fr: "Le beurre et la crème, on les achète à la crèmerie, ou chez le fromager ?", it: "Il burro e la panna li compriamo alla latteria o dal formaggiaio?" },
              { who: "Gigi", fr: "Chez le fromager : il a le meilleur beurre de Normandie de tout le quartier.", it: "Dal formaggiaio: ha il miglior burro di Normandia di tutto il quartiere." },
              { who: "Léa", fr: "Et les amandes, le miel, les fruits confits ? Ça, c'est à l'épicerie fine.", it: "E le mandorle, il miele, la frutta candita? Quello è alla drogheria fine." },
              { who: "Croissant", fr: "Je propose une petite visite à la poissonnerie. Pour l'inspiration, bien sûr.", it: "Propongo una piccola visita alla pescheria. Per l'ispirazione, s'intende." },
              { who: "Gigi", fr: "Non, Croissant. Et pour les boîtes et les rubans bleus, on va dans une papeterie.", it: "No, Croissant. E per le scatole e i nastri blu andiamo in una cartoleria." },
              { who: "Léa", fr: "Pourquoi ne pas tout acheter au supermarché ? C'est plus rapide et moins cher.", it: "Perché non compriamo tutto al supermercato? È più veloce e costa meno." },
              { who: "Mme Lefèvre", fr: "Parce que Zizì achetait tout chez les petits commerçants. C'est ça, le secret du goût.", it: "Perché Zizì comprava tutto dai piccoli negozianti. È questo il segreto del sapore." }
            ],
            outro: "Due ore dopo tornano carichi come muli: dieci chili di mandorle, sei vasetti di miele di lavanda, burro, zucchero, nastri blu. Il formaggiaio ha regalato un pezzo di comté «per la signora Françoise», e il pescivendolo una sardina «per il signor gatto». Croissant ha deciso che i piccoli negozi sono una civiltà superiore.",
            you: "«{nome}, in Francia molti negozi prendono il nome dal mestiere: le boulanger lavora nella boulangerie, le boucher nella boucherie. E per dire «dal panettiere» si usa CHEZ: je vais chez le boulanger.»",
            mine: { fr: "Je m'appelle {nome} et le samedi je vais chez le boulanger, puis au marché pour acheter des fruits.", it: "Mi chiamo {nome} e il sabato vado dal panettiere, poi al mercato a comprare la frutta." }
          },
          words: [
            { fr: "la boucherie / le boucher", it: "la macelleria / il macellaio", say: "la bushrì / lə bushé", hook: "BOUCHER: in origine vendeva carne di caprone (bouc). Oggi vende bistecche: un steak, du poulet, du bœuf.",
              ex: { fr: "Chez le boucher, j'achète un poulet fermier pour le repas du dimanche.", it: "Dal macellaio compro un pollo ruspante per il pranzo della domenica." } },
            { fr: "la fromagerie / le fromager", it: "la formaggeria / il formaggiaio", say: "la fromajrì / lə fromajé", hook: "FROMAGERIE: il regno del FROMAGE. Il fromager ti fa assaggiare tutto prima di comprare: approfittane!",
              ex: { fr: "Le fromager m'a fait goûter un camembert vraiment délicieux.", it: "Il formaggiaio mi ha fatto assaggiare un camembert davvero delizioso." } },
            { fr: "l'épicerie", it: "la drogheria, l'alimentari", say: "lepisrì", hook: "ÉPICERIE: in origine vendeva spezie (épices). Oggi è il piccolo alimentari sotto casa; l'épicerie fine vende prodotti di lusso.",
              ex: { fr: "L'épicerie du coin est ouverte jusqu'à minuit, même le dimanche.", it: "L'alimentari all'angolo è aperto fino a mezzanotte, anche la domenica." } },
            { fr: "la poissonnerie", it: "la pescheria", say: "la pwasonrì", hook: "POISSON = pesce (con due S, si legge «pwasõ»). Attenzione: «poison» con una S sola è il veleno!",
              ex: { fr: "À la poissonnerie, il y a des huîtres, des moules et du saumon frais.", it: "In pescheria ci sono ostriche, cozze e salmone fresco." } },
            { fr: "le supermarché", it: "il supermercato", say: "lə süpèrmarshé", hook: "SUPERMARCHÉ: il super-mercato. Più piccolo è la «supérette», più grande «l'hypermarché».",
              ex: { fr: "Je fais les grosses courses au supermarché une fois par semaine.", it: "Faccio la spesa grossa al supermercato una volta alla settimana." } },
            { fr: "chez le / la…", it: "da (una persona)", say: "shé", hook: "CHEZ = da, presso una persona: chez le boulanger, chez moi, chez Françoise. Con il negozio si usa à: à la boulangerie.",
              ex: { fr: "Ce soir, nous dînons chez des amis qui habitent à côté du canal.", it: "Stasera ceniamo da amici che abitano vicino al canale." } },
            { fr: "faire les courses", it: "fare la spesa", say: "fèr lé kurs", hook: "FAIRE LES COURSES: «fare le corse»… e infatti al supermercato il sabato si corre! Le shopping (vestiti) è «faire les magasins».",
              ex: { fr: "Le samedi matin, nous faisons les courses au marché du quartier.", it: "Il sabato mattina facciamo la spesa al mercato del quartiere." } },
            { fr: "le commerçant", it: "il negoziante", say: "lə komèrsã", hook: "COMMERÇANT: chi fa COMMERCIO. «Les petits commerçants» sono i piccoli negozi di quartiere.",
              ex: { fr: "Dans mon quartier, les commerçants connaissent tous les habitants par leur prénom.", it: "Nel mio quartiere i negozianti conoscono tutti gli abitanti per nome." } },
            { fr: "la liste de courses", it: "la lista della spesa", say: "la list də kurs", hook: "Senza lista si torna sempre con tre cose inutili e senza il latte. LA LISTE DE COURSES salva la vita.",
              ex: { fr: "J'ai oublié ma liste de courses à la maison, et je ne me souviens de rien.", it: "Ho dimenticato la lista della spesa a casa, e non mi ricordo niente." } },
            { fr: "Et avec ceci ?", it: "Altro? (in negozio)", say: "e avèk səsì", hook: "In negozio è il cugino di «Et avec ça ?». Risposta: «Ce sera tout, merci» (sarà tutto, grazie).",
              ex: { fr: "Et avec ceci, madame ? — Ce sera tout, merci. Je vous dois combien ?", it: "Desidera altro, signora? — È tutto, grazie. Quanto le devo?" } }
          ],
          tip: {
            title: "Mestiere, negozio e «chez»: la mappa della spesa",
            body: "<div class='tbl'><table><thead><tr><th>Negozio (à la…)</th><th>Persona (chez le…)</th><th>Cosa compri</th></tr></thead><tbody><tr><td>la boulangerie</td><td>le boulanger</td><td>pain, baguette, croissants</td></tr><tr><td>la pâtisserie</td><td>le pâtissier</td><td>gâteaux, tartes, éclairs</td></tr><tr><td>la boucherie</td><td>le boucher</td><td>viande, poulet</td></tr><tr><td>la fromagerie</td><td>le fromager</td><td>fromage, beurre</td></tr><tr><td>la poissonnerie</td><td>le poissonnier</td><td>poisson, fruits de mer</td></tr><tr><td>l'épicerie</td><td>l'épicier</td><td>un peu de tout</td></tr><tr><td>la pharmacie</td><td>le pharmacien</td><td>médicaments</td></tr></tbody></table></div><ul><li>Con il <b>negozio</b>: à la boulangerie, au supermarché.</li><li>Con la <b>persona</b>: <b>chez</b> le boulanger, chez le boucher.</li><li><b>Chez moi / chez toi</b> = a casa mia / a casa tua.</li><li>Faire <b>les courses</b> = fare la spesa; faire <b>les magasins</b> = fare shopping.</li></ul>",
            examples: [
              { fr: "Je vais à la boulangerie, ou plutôt chez le boulanger de la rue Lepic.", it: "Vado in panetteria, o meglio dal panettiere di rue Lepic." },
              { fr: "On achète le poisson à la poissonnerie du marché.", it: "Compriamo il pesce alla pescheria del mercato." },
              { fr: "Tu viens chez moi ce soir ? Je fais une raclette.", it: "Vieni da me stasera? Faccio una raclette." },
              { fr: "Le samedi, je fais les courses ; le dimanche, je fais les magasins.", it: "Il sabato faccio la spesa; la domenica faccio shopping." },
              { fr: "Et avec ceci ? — Ce sera tout, merci beaucoup.", it: "Altro? — È tutto, grazie mille." }
            ]
          },
          practice: [
            { t: "mcq", q: "Dove compri la carne?", opts: ["à la boucherie", "à la poissonnerie", "à la fromagerie", "à la papeterie"], a: 0, why: "Boucherie = macelleria." },
            { t: "mcq", q: "Completa: «Je vais ___ le boulanger.»", opts: ["chez", "à", "au", "dans"], a: 0, why: "Con la persona: chez." },
            { t: "listen", say: "À la poissonnerie, il y a des huîtres, des moules et du saumon frais.", q: "Cosa c'è in pescheria?", opts: ["Ostriche, cozze e salmone fresco", "Pollo, manzo e salsicce", "Formaggi, burro e panna", "Pane, croissant e torte"], a: 0, why: "Poissonnerie = pescheria." },
            { t: "match", q: "Abbina", pairs: [["la boucherie", "la macelleria"], ["la fromagerie", "la formaggeria"], ["l'épicerie", "l'alimentari"], ["la poissonnerie", "la pescheria"]] },
            { t: "order", q: "Riordina: «Il sabato faccio la spesa al mercato.»", words: ["Le", "samedi,", "je", "fais", "les", "courses", "au", "marché."], why: "Faire les courses = fare la spesa." }
          ],
          test: [
            { t: "mcq", q: "«Faire les courses» significa…", opts: ["fare la spesa", "fare una corsa", "fare shopping di vestiti", "fare le pulizie"], a: 0, why: "Faire les courses = fare la spesa." },
            { t: "mcq", q: "Completa: «Ce soir, nous dînons ___ des amis.»", opts: ["chez", "à", "aux", "dans"], a: 0, why: "Chez + persone." },
            { t: "mcq", q: "«Poisson» e «poison» significano…", opts: ["pesce / veleno", "veleno / pesce", "pesce / pesca", "pozione / pesce"], a: 0, why: "Poisson (due S) = pesce; poison = veleno!" },
            { t: "mcq", q: "Il negoziante ti chiede «Et avec ceci ?». Hai finito. Rispondi:", opts: ["Ce sera tout, merci.", "Avec ceci, merci.", "Oui, avec ça.", "Je fais les courses."], a: 0, why: "Ce sera tout = sarà tutto." },
            { t: "listen", say: "Chez le boucher, j'achète un poulet fermier pour le repas du dimanche.", q: "Cosa compra dal macellaio?", opts: ["Un pollo ruspante", "Una bistecca", "Del pesce", "Del formaggio"], a: 0, why: "Le poulet = il pollo." },
            { t: "listen", say: "L'épicerie du coin est ouverte jusqu'à minuit, même le dimanche.", q: "Fino a che ora è aperto l'alimentari?", opts: ["Fino a mezzanotte, anche la domenica", "Fino alle otto, tranne la domenica", "Solo la domenica", "Fino a mezzogiorno"], a: 0, why: "Jusqu'à minuit = fino a mezzanotte." },
            { t: "listen", say: "J'ai oublié ma liste de courses à la maison, et je ne me souviens de rien.", q: "Qual è il problema?", opts: ["Ha dimenticato la lista della spesa a casa.", "Ha perso il portafoglio.", "Il negozio è chiuso.", "Non ha abbastanza soldi."], a: 0, why: "La liste de courses." },
            { t: "type", q: "Completa: «J'achète le pain à la ___.» (panetteria)", a: ["boulangerie"], why: "La boulangerie." },
            { t: "type", q: "Completa: «Tu viens ___ moi ce soir ?» (da)", a: ["chez"], why: "Chez moi = a casa mia." },
            { t: "type", say: "Le fromager m'a fait goûter un camembert délicieux.", q: "Ascolta e completa: «Le ___ m'a fait goûter un camembert délicieux.»", a: ["fromager"], why: "Le fromager = il formaggiaio." },
            { t: "order", q: "Riordina: «Faccio la spesa grossa al supermercato.»", words: ["Je", "fais", "les", "grosses", "courses", "au", "supermarché."], why: "Au supermarché." },
            { t: "match", q: "Abbina", pairs: [["le boulanger", "il panettiere"], ["le boucher", "il macellaio"], ["le commerçant", "il negoziante"], ["le supermarché", "il supermercato"]] }
          ],
          recap: {
            can: ["Riconoscere i negozi tradizionali francesi", "Dire dove compri cosa", "Usare chez con le persone e à con i negozi", "Rispondere in negozio: «Ce sera tout, merci»"],
            phrases: [{ fr: "Je vais chez le boulanger, puis à la fromagerie.", it: "Vado dal panettiere, poi in formaggeria." }, { fr: "Le samedi, je fais les courses au marché.", it: "Il sabato faccio la spesa al mercato." }, { fr: "Et avec ceci ? — Ce sera tout, merci.", it: "Altro? — È tutto, grazie." }],
            trap: "CHEZ si usa con le persone (chez le boucher), À con i negozi (à la boucherie). E poisson (pesce) ≠ poison (veleno)!"
          }
        },
        /* ---------------- LEZIONE 8-2 ---------------- */
        {
          id: "8-2", street: "Rue du Partitif", title: "Du, de la, des: il partitivo e le quantità",
          goal: "Usare il partitivo (du, de la, de l', des) per le quantità non precise e «de» dopo le quantità e la negazione.",
          episode: {
            title: "La prima ricetta",
            intro: "Sabato pomeriggio, cucina del caffè. Françoise legge ad alta voce il quaderno di Zizì: la prima ricetta da rifare sono i calissons, dolcetti provenzali di mandorle e melone candito. Léa pesa, Gigi mescola, Croissant sorveglia il burro.",
            lines: [
              { who: "Mme Lefèvre", fr: "Alors : il faut de la poudre d'amandes, du sucre, du melon confit et de l'eau de fleur d'oranger.", it: "Allora: ci vuole farina di mandorle, zucchero, melone candito e acqua di fiori d'arancio." },
              { who: "Léa", fr: "Combien de sucre ? Zizì écrit seulement « un peu de sucre ». Ce n'est pas très précis !", it: "Quanto zucchero? Zizì scrive solo «un po' di zucchero». Non è molto preciso!" },
              { who: "Gigi", fr: "Ma nonna faisait pareil : « un peu de farine, beaucoup d'amour ». Mettons deux cents grammes.", it: "Mia nonna faceva lo stesso: «un po' di farina, tanto amore». Mettiamo duecento grammi." },
              { who: "Mme Lefèvre", fr: "Il n'y a pas de beurre dans les calissons. Croissant, arrête de regarder le beurre.", it: "Nei calissons non c'è burro. Croissant, smettila di guardare il burro." },
              { who: "Croissant", fr: "Je ne regarde pas le beurre. Le beurre me regarde. C'est différent.", it: "Non sono io che guardo il burro. È il burro che guarda me. È diverso." },
              { who: "Léa", fr: "Oh non, nous n'avons plus d'œufs ! Il faut un blanc d'œuf pour le glaçage.", it: "Oh no, non abbiamo più uova! Serve un albume per la glassa." },
              { who: "Gigi", fr: "Je descends chez Françoise : elle a toujours une douzaine d'œufs et un pot de miel.", it: "Scendo da Françoise: ha sempre una dozzina di uova e un vasetto di miele." },
              { who: "Mme Lefèvre", fr: "Prends aussi une bouteille de lait et un paquet de farine. Demain, on fait des madeleines !", it: "Prendi anche una bottiglia di latte e un pacco di farina. Domani facciamo le madeleine!" }
            ],
            outro: "A mezzanotte, sul bancone ci sono quaranta calissons perfetti, a forma di piccole barche bianche. Françoise ne assaggia uno, chiude gli occhi e non dice niente per un lungo momento. Poi sorride: «È lei. È esattamente il sapore di zia Zizì.»",
            you: "«{nome}, il partitivo è il «po' di» invisibile: in italiano dici «compro pane», in francese «j'achète DU pain». Ma con le quantità precise e con la negazione torna il piccolo DE: beaucoup de sucre, pas de beurre.»",
            mine: { fr: "Je m'appelle {nome} et au petit-déjeuner je prends du pain, de la confiture et beaucoup de café.", it: "Mi chiamo {nome} e a colazione prendo pane, marmellata e tanto caffè." }
          },
          words: [
            { fr: "du / de la / de l'", it: "del / della / dell' (un po' di)", say: "dü / də la / də l", hook: "Il PARTITIVO è una «parte» di qualcosa che non si conta: du pain, de la confiture, de l'eau. In italiano spesso non lo diciamo nemmeno!",
              ex: { fr: "Je voudrais du pain, de la confiture et de l'eau, s'il vous plaît.", it: "Vorrei del pane, della marmellata e dell'acqua, per favore." } },
            { fr: "des", it: "dei, delle", say: "dé", hook: "DES per le cose al plurale: des amandes, des œufs. È lo stesso «des» degli articoli indeterminativi.",
              ex: { fr: "Pour la recette, il faut des amandes, des œufs et des fruits confits.", it: "Per la ricetta servono mandorle, uova e frutta candita." } },
            { fr: "un peu de", it: "un po' di", say: "ẽ pö də", hook: "UN PEU DE = un po' di. Dopo le quantità sempre DE da solo: un peu DE sucre (non «un peu du sucre»).",
              ex: { fr: "Tu veux un peu de lait dans ton café, ou tu le prends noir ?", it: "Vuoi un po' di latte nel caffè, o lo prendi nero?" } },
            { fr: "beaucoup de", it: "molto, tanto", say: "boku də", hook: "BEAUCOUP DE = molto/tanti, sempre con DE: beaucoup DE gens, beaucoup D'amour.",
              ex: { fr: "Il y a beaucoup de monde au marché le dimanche matin.", it: "C'è tantissima gente al mercato la domenica mattina." } },
            { fr: "pas de", it: "niente, nessun", say: "pa də", hook: "Dopo la negazione, du / de la / des diventano DE: je ne mange pas DE viande. Il partitivo «sparisce»!",
              ex: { fr: "Je suis végétarien : je ne mange pas de viande ni de poisson.", it: "Sono vegetariano: non mangio né carne né pesce." } },
            { fr: "une bouteille de", it: "una bottiglia di", say: "ün butèj də", hook: "BOUTEILLE = bottiglia, con -EILLE che si legge «èj». Une bouteille de vin, d'eau, de lait.",
              ex: { fr: "Nous avons apporté une bouteille de vin de Provence pour le dîner.", it: "Abbiamo portato una bottiglia di vino della Provenza per la cena." } },
            { fr: "un pot / un paquet de", it: "un vasetto / un pacco di", say: "ẽ pò / ẽ pakè də", hook: "UN POT: un vasetto (de miel, de confiture). UN PAQUET: un pacco, una confezione (de farine, de biscuits).",
              ex: { fr: "Achète un paquet de farine et un pot de miel de lavande, s'il te plaît.", it: "Compra un pacco di farina e un vasetto di miele di lavanda, per favore." } },
            { fr: "une douzaine de", it: "una dozzina di", say: "ün duzèn də", hook: "DOUZAINE = dozzina (douze = 12). Le uova in Francia si comprano a dozzine o a mezze dozzine.",
              ex: { fr: "Une douzaine d'œufs bien frais, s'il vous plaît, et une demi-baguette.", it: "Una dozzina di uova freschissime, per favore, e mezza baguette." } },
            { fr: "il faut", it: "ci vuole, serve, bisogna", say: "il fò", hook: "IL FAUT: «serve», «ci vuole» (in ricetta) oppure «bisogna» + infinito. Il faut du sucre = ci vuole zucchero.",
              ex: { fr: "Pour faire une bonne crêpe, il faut de la farine, du lait et des œufs.", it: "Per fare una buona crêpe ci vogliono farina, latte e uova." } },
            { fr: "… grammes", it: "… grammi", say: "gram", hook: "Deux cents GRAMMES de sucre: come in italiano. Mezzo chilo = un demi-kilo, o cinq cents grammes.",
              ex: { fr: "Il faut deux cents grammes de sucre et cent grammes de beurre.", it: "Servono duecento grammi di zucchero e cento grammi di burro." } }
          ],
          tip: {
            title: "Il partitivo: il «po' di» invisibile",
            body: "<div class='tbl'><table><thead><tr><th>Caso</th><th>Forma</th><th>Esempio</th></tr></thead><tbody><tr><td>maschile</td><td><b>du</b></td><td>du pain, du sucre</td></tr><tr><td>femminile</td><td><b>de la</b></td><td>de la farine, de la confiture</td></tr><tr><td>davanti a vocale</td><td><b>de l'</b></td><td>de l'eau, de l'huile</td></tr><tr><td>plurale</td><td><b>des</b></td><td>des œufs, des amandes</td></tr><tr><td>dopo una quantità</td><td><b>de / d'</b></td><td>beaucoup de sucre, un kilo d'amandes</td></tr><tr><td>dopo la negazione</td><td><b>de / d'</b></td><td>pas de beurre, plus d'œufs</td></tr></tbody></table></div><ul><li>Partitivo = quantità <b>non precisa</b> di una cosa non contabile: <b>du</b> pain (un po' di pane).</li><li>Con i verbi di gusto si usa l'articolo determinativo: j'aime <b>le</b> pain, ma j'achète <b>du</b> pain.</li><li>Quantità: un peu <b>de</b>, beaucoup <b>de</b>, un kilo <b>de</b>, une bouteille <b>de</b>, assez <b>de</b>, trop <b>de</b>.</li><li>Negazione: je n'ai pas <b>de</b> sucre (mai «pas du sucre»).</li></ul>",
            examples: [
              { fr: "Le matin, je bois du café et je mange de la brioche.", it: "La mattina bevo caffè e mangio brioche." },
              { fr: "J'aime le fromage, alors j'achète du fromage tous les jours.", it: "Mi piace il formaggio, quindi compro formaggio tutti i giorni." },
              { fr: "Il n'y a plus de lait dans le frigo.", it: "Non c'è più latte nel frigo." },
              { fr: "Tu as mis trop de sel dans la soupe !", it: "Hai messo troppo sale nella zuppa!" },
              { fr: "Pour la fête, il faut des bouteilles d'eau et beaucoup de gâteaux.", it: "Per la festa servono bottiglie d'acqua e tante torte." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Je voudrais ___ pain.»", opts: ["du", "de la", "des", "le"], a: 0, why: "Pain è maschile: du pain." },
            { t: "mcq", q: "Completa: «Je ne mange pas ___ viande.»", opts: ["de", "de la", "du", "la"], a: 0, why: "Dopo la negazione: de." },
            { t: "listen", say: "Pour faire une bonne crêpe, il faut de la farine, du lait et des œufs.", q: "Cosa serve per le crêpe?", opts: ["Farina, latte e uova", "Zucchero, burro e sale", "Farina, acqua e lievito", "Latte, cioccolato e uova"], a: 0, why: "De la farine, du lait, des œufs." },
            { t: "match", q: "Abbina", pairs: [["un peu de", "un po' di"], ["beaucoup de", "molto"], ["une bouteille de", "una bottiglia di"], ["un pot de", "un vasetto di"]] },
            { t: "order", q: "Riordina: «Vorrei dell'acqua e della marmellata.»", words: ["Je", "voudrais", "de", "l'eau", "et", "de", "la", "confiture."], why: "De l'eau (vocale), de la confiture (femminile)." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Il faut ___ eau de fleur d'oranger.»", opts: ["de l'", "du", "de la", "des"], a: 0, why: "Davanti a vocale: de l'." },
            { t: "mcq", q: "Completa: «Il y a beaucoup ___ monde.»", opts: ["de", "du", "des", "le"], a: 0, why: "Beaucoup de + nome." },
            { t: "mcq", q: "Quale frase è corretta?", opts: ["J'aime le fromage et j'achète du fromage.", "J'aime du fromage et j'achète le fromage.", "J'aime de fromage et j'achète du fromage.", "J'aime le fromage et j'achète le du fromage."], a: 0, why: "Gusti → le; acquisto non preciso → du." },
            { t: "mcq", q: "Completa: «Nous n'avons plus ___ œufs.»", opts: ["d'", "des", "les", "de les"], a: 0, why: "Ne… plus + de (d' davanti a vocale)." },
            { t: "listen", say: "Tu veux un peu de lait dans ton café, ou tu le prends noir ?", q: "Cosa ti chiedono?", opts: ["Se vuoi un po' di latte nel caffè.", "Se vuoi un caffè lungo.", "Se vuoi lo zucchero.", "Se vuoi un tè nero."], a: 0, why: "Un peu de lait = un po' di latte." },
            { t: "listen", say: "Je suis végétarien : je ne mange pas de viande ni de poisson.", q: "Cosa non mangia?", opts: ["Né carne né pesce", "Né formaggio né uova", "Solo la carne", "Né pane né pasta"], a: 0, why: "Pas de viande ni de poisson." },
            { t: "listen", say: "Il faut deux cents grammes de sucre et cent grammes de beurre.", q: "Quanto zucchero serve?", opts: ["200 grammi", "100 grammi", "2 chili", "20 grammi"], a: 0, why: "Deux cents grammes = 200 g." },
            { t: "type", q: "Completa: «Achète un paquet ___ farine.»", a: ["de"], why: "Quantità + de." },
            { t: "type", q: "Completa: «Le matin, je bois ___ café.»", a: ["du"], why: "Café è maschile: du café." },
            { t: "type", say: "Une douzaine d'œufs bien frais, s'il vous plaît.", q: "Ascolta e completa: «Une ___ d'œufs bien frais, s'il vous plaît.»", a: ["douzaine"], why: "Douzaine = dozzina." },
            { t: "order", q: "Riordina: «Non c'è più latte nel frigo.»", words: ["Il", "n'y", "a", "plus", "de", "lait", "dans", "le", "frigo."], why: "Ne… plus + de." },
            { t: "match", q: "Abbina", pairs: [["du sucre", "maschile"], ["de la farine", "femminile"], ["de l'huile", "davanti a vocale"], ["des œufs", "plurale"]] }
          ],
          recap: {
            can: ["Usare du, de la, de l', des per le quantità non precise", "Usare de dopo le quantità: beaucoup de, un kilo de…", "Usare de dopo la negazione: pas de, plus de", "Leggere e scrivere una ricetta semplice"],
            phrases: [{ fr: "Il faut de la farine, du lait et des œufs.", it: "Servono farina, latte e uova." }, { fr: "Un peu de sucre et beaucoup d'amour.", it: "Un po' di zucchero e tanto amore." }, { fr: "Il n'y a pas de beurre dans les calissons.", it: "Nei calissons non c'è burro." }],
            trap: "J'AIME LE pain (gusto: articolo determinativo), ma J'ACHÈTE DU pain (quantità: partitivo). E dopo la negazione: pas DE pain."
          }
        },
        /* ---------------- LEZIONE 8-3 ---------------- */
        {
          id: "8-3", street: "Rue de la Mode", title: "Vestiti, taglie e colori",
          goal: "Comprare un vestito: chiedere la taglia, provarlo, dire se va bene, e accordare i colori con i nomi.",
          episode: {
            title: "Un vestito per l'inaugurazione",
            intro: "L'inaugurazione si avvicina e Léa ha deciso: Gigi non può presentarsi con il grembiule sporco di farina. Lo trascina in un grande magazzino vicino all'Opéra. Françoise viene «solo per guardare». Croissant viene perché ha sentito parlare di papillon.",
            lines: [
              { who: "Mme Laurent", fr: "Bonjour, je peux vous aider ? Vous cherchez quelque chose de particulier ?", it: "Buongiorno, posso aiutarvi? Cercate qualcosa in particolare?" },
              { who: "Léa", fr: "Oui : une chemise blanche et une veste bleue pour lui. C'est pour une inauguration.", it: "Sì: una camicia bianca e una giacca blu per lui. È per un'inaugurazione." },
              { who: "Mme Laurent", fr: "Très bien. Vous faites quelle taille ? Du quarante-huit, peut-être ?", it: "Benissimo. Che taglia porta? Una quarantotto, forse?" },
              { who: "Gigi", fr: "Je ne sais pas… En Italie, je fais du cinquante. Je peux essayer ?", it: "Non so… In Italia porto la cinquanta. Posso provarla?" },
              { who: "Mme Laurent", fr: "Bien sûr, les cabines d'essayage sont au fond, à droite.", it: "Certo, i camerini sono in fondo, a destra." },
              { who: "Gigi", fr: "La veste est un peu trop petite, et les manches sont trop courtes.", it: "La giacca è un po' troppo piccola, e le maniche sono troppo corte." },
              { who: "Mme Lefèvre", fr: "Essaie celle-ci, la grise. Ah, voilà : elle te va très bien, Gigi !", it: "Prova questa, quella grigia. Ah, ecco: ti sta benissimo, Gigi!" },
              { who: "Croissant", fr: "Et pour moi, un nœud papillon rouge. Taille unique : je suis unique.", it: "E per me un papillon rosso. Taglia unica: io sono unico." }
            ],
            outro: "Escono con una camicia bianca, una giacca grigia, un vestito blu per Françoise (che doveva «solo guardare») e un minuscolo papillon rosso. Alla cassa, Gigi guarda lo scontrino e impallidisce. Léa gli batte una mano sulla spalla: «Si apre una confetteria una volta sola nella vita.»",
            you: "«{nome}, in negozio ti servono tre frasi: «Je fais du 42» (porto la 42), «Je peux l'essayer ?» (posso provarlo?) e «Ça me va» (mi sta bene). E ricorda: in francese anche i colori si accordano!»",
            mine: { fr: "Je m'appelle {nome} : aujourd'hui je porte un pantalon noir, une chemise blanche et des chaussures marron.", it: "Mi chiamo {nome}: oggi porto pantaloni neri, una camicia bianca e scarpe marroni." }
          },
          words: [
            { fr: "la chemise / le pantalon", it: "la camicia / i pantaloni", say: "la shəmìz / lə pãtalõ", hook: "Trappola! LA CHEMISE è la camicia (non la «chemisier» da donna). LE PANTALON è SINGOLARE in francese: un pantalon.",
              ex: { fr: "Pour l'entretien, il a mis une chemise blanche et un pantalon noir.", it: "Per il colloquio ha messo una camicia bianca e dei pantaloni neri." } },
            { fr: "la veste / le manteau", it: "la giacca / il cappotto", say: "la vèst / lə mãtò", hook: "Trappola: LA VESTE è la giacca, non la «veste»! LE MANTEAU è il cappotto (il «mantello»).",
              ex: { fr: "En novembre, il fait froid : prends ton manteau, pas seulement ta veste.", it: "A novembre fa freddo: prendi il cappotto, non solo la giacca." } },
            { fr: "la robe / la jupe", it: "il vestito (da donna) / la gonna", say: "la ròb / la jüp", hook: "LA ROBE: il vestito da donna (pensa alla «roba» elegante). LA JUPE: la gonna, che salta (jump) quando balli.",
              ex: { fr: "Françoise a acheté une robe bleue pour la fête, avec des chaussures assorties.", it: "Françoise ha comprato un vestito blu per la festa, con le scarpe abbinate." } },
            { fr: "les chaussures", it: "le scarpe", say: "lé shosür", hook: "CHAUSSURES: le scarpe CALZATE (chausser = calzare). Les chaussettes sono i calzini, le «piccole scarpe».",
              ex: { fr: "Ces chaussures sont belles, mais elles me font mal aux pieds.", it: "Queste scarpe sono belle, ma mi fanno male ai piedi." } },
            { fr: "la taille / la pointure", it: "la taglia / il numero (di scarpe)", say: "la taj / la pwẽtür", hook: "LA TAILLE per i vestiti (Vous faites quelle taille ?); LA POINTURE per le scarpe (Vous chaussez du combien ?).",
              ex: { fr: "Vous avez cette robe dans une taille plus grande ? Je fais du quarante.", it: "Avete questo vestito in una taglia più grande? Porto la quaranta." } },
            { fr: "essayer / la cabine d'essayage", it: "provare / il camerino", say: "esèjé / la kabìn desèjaj", hook: "ESSAYER = provare, fare un saggio (essai). La cabine d'essayage è il camerino dove si prova.",
              ex: { fr: "Je peux essayer ce pantalon ? — Oui, les cabines sont au fond du magasin.", it: "Posso provare questi pantaloni? — Sì, i camerini sono in fondo al negozio." } },
            { fr: "Ça me va", it: "Mi sta bene", say: "sa mə va", hook: "ÇA ME VA: «mi va», mi sta bene. Elle te va bien = ti sta bene. Anche «ça me va» = mi va bene (d'accordo!).",
              ex: { fr: "Cette couleur ne me va pas du tout, je préfère le vert.", it: "Questo colore non mi sta per niente bene, preferisco il verde." } },
            { fr: "trop grand / trop petit", it: "troppo grande / troppo piccolo", say: "tro grã / tro pəti", hook: "TROP = troppo. Al femminile: trop grande, trop petite. Il juste milieu: «c'est parfait!».",
              ex: { fr: "Ce manteau est trop grand pour moi : vous avez la taille en dessous ?", it: "Questo cappotto è troppo grande per me: avete la taglia sotto?" } },
            { fr: "blanc / noir / gris", it: "bianco / nero / grigio", say: "blã / nwar / grì", hook: "Femminili: blanCHE, noirE, griSE. Una chemise blanche, une veste grise, une robe noire.",
              ex: { fr: "Il porte toujours un pull gris et une écharpe noire en hiver.", it: "In inverno porta sempre un maglione grigio e una sciarpa nera." } },
            { fr: "bleu / vert / rouge / marron", it: "blu / verde / rosso / marrone", say: "blö / vèr / ruj / marõ", hook: "BLEU → bleue, VERT → verte, ROUGE resta uguale. MARRON e ORANGE non cambiano mai (sono nomi di frutti!).",
              ex: { fr: "J'ai acheté des chaussures marron et une cravate verte pour le mariage.", it: "Ho comprato scarpe marroni e una cravatta verde per il matrimonio." } }
          ],
          tip: {
            title: "Colori e taglie: le regole della boutique",
            body: "<div class='tbl'><table><thead><tr><th>Maschile</th><th>Femminile</th><th>Plurale</th></tr></thead><tbody><tr><td>un pull noir</td><td>une robe noire</td><td>des chaussures noires</td></tr><tr><td>un pantalon vert</td><td>une veste verte</td><td>des jupes vertes</td></tr><tr><td>un manteau blanc</td><td>une chemise blanche</td><td>des chemises blanches</td></tr><tr><td>un pull gris</td><td>une veste grise</td><td>des vestes grises</td></tr><tr><td>un sac rouge</td><td>une robe rouge</td><td>des robes rouges</td></tr><tr><td>un sac marron</td><td>une veste marron</td><td>des chaussures marron</td></tr></tbody></table></div><ul><li>Il colore va <b>dopo</b> il nome: une veste <b>bleue</b>.</li><li><b>Marron</b> e <b>orange</b> non cambiano mai.</li><li>Taglia: <b>Je fais du</b> 42. Scarpe: <b>Je chausse du</b> 39.</li><li>Provare: <b>Je peux l'essayer ?</b> Va bene? <b>Ça me va.</b> / <b>Ça ne me va pas.</b></li><li>Per un'altra taglia: <b>la taille au-dessus</b> (più grande) / <b>en dessous</b> (più piccola).</li></ul>",
            examples: [
              { fr: "Je cherche une veste noire, en taille quarante-deux.", it: "Cerco una giacca nera, taglia quarantadue." },
              { fr: "Je peux essayer cette robe rouge ?", it: "Posso provare questo vestito rosso?" },
              { fr: "Elle est trop petite : vous avez la taille au-dessus ?", it: "È troppo piccola: avete la taglia sopra?" },
              { fr: "Ces chaussures marron vous vont très bien.", it: "Queste scarpe marroni le stanno molto bene." },
              { fr: "Je vais prendre la chemise blanche, s'il vous plaît.", it: "Prendo la camicia bianca, per favore." }
            ]
          },
          practice: [
            { t: "mcq", q: "«La veste» è…", opts: ["la giacca", "il vestito", "la veste da camera", "la gonna"], a: 0, why: "Falso amico: la veste = la giacca." },
            { t: "mcq", q: "Completa: «une chemise ___» (bianca)", opts: ["blanche", "blanc", "blance", "blanches"], a: 0, why: "Blanc → blanche." },
            { t: "listen", say: "Ces chaussures sont belles, mais elles me font mal aux pieds.", q: "Qual è il problema?", opts: ["Le scarpe fanno male ai piedi.", "Le scarpe sono troppo care.", "Le scarpe sono brutte.", "Le scarpe sono troppo grandi."], a: 0, why: "Elles me font mal = mi fanno male." },
            { t: "match", q: "Abbina", pairs: [["la chemise", "la camicia"], ["la robe", "il vestito da donna"], ["la jupe", "la gonna"], ["le manteau", "il cappotto"]] },
            { t: "order", q: "Riordina: «Posso provare questi pantaloni?»", words: ["Je", "peux", "essayer", "ce", "pantalon", "?"], why: "Le pantalon è singolare in francese." }
          ],
          test: [
            { t: "mcq", q: "Come chiedi «posso provarlo?»", opts: ["Je peux l'essayer ?", "Je peux le prouver ?", "Je peux l'éprouver ?", "Je peux le tester ?"], a: 0, why: "Essayer = provare (un vestito)." },
            { t: "mcq", q: "Completa: «des chaussures ___» (marroni)", opts: ["marron", "marrons", "marronnes", "marrone"], a: 0, why: "Marron non cambia mai." },
            { t: "mcq", q: "«Elle te va très bien» significa…", opts: ["Ti sta benissimo.", "Va benissimo per te.", "Ti va di andare?", "È molto buona."], a: 0, why: "Aller bien à quelqu'un = stare bene." },
            { t: "mcq", q: "Per le scarpe, «il numero» si dice…", opts: ["la pointure", "la taille", "le numéro", "la mesure"], a: 0, why: "La pointure = il numero di scarpe." },
            { t: "listen", say: "Vous avez cette robe dans une taille plus grande ? Je fais du quarante.", q: "Cosa chiede la cliente?", opts: ["Il vestito in una taglia più grande; porta la 40.", "Il vestito in un altro colore.", "Una gonna taglia 40.", "Il prezzo del vestito."], a: 0, why: "Une taille plus grande; je fais du 40." },
            { t: "listen", say: "Ce manteau est trop grand pour moi : vous avez la taille en dessous ?", q: "Cosa vuole?", opts: ["Una taglia più piccola del cappotto", "Una taglia più grande", "Un altro colore", "Un altro modello"], a: 0, why: "En dessous = sotto, più piccola." },
            { t: "listen", say: "Il porte toujours un pull gris et une écharpe noire en hiver.", q: "Cosa porta in inverno?", opts: ["Un maglione grigio e una sciarpa nera", "Un cappotto nero e un cappello grigio", "Una giacca grigia e dei guanti neri", "Un maglione nero e una sciarpa grigia"], a: 0, why: "Pull gris, écharpe noire." },
            { t: "type", q: "Completa: «une veste ___» (verde)", a: ["verte"], why: "Vert → verte." },
            { t: "type", q: "Completa: «Les cabines d'___ sont au fond.» (prova)", a: ["essayage"], why: "La cabine d'essayage = il camerino." },
            { t: "type", say: "Cette couleur ne me va pas du tout.", q: "Ascolta e completa: «Cette couleur ne me ___ pas du tout.»", a: ["va"], why: "Ça me va / ça ne me va pas." },
            { t: "order", q: "Riordina: «Porto la quarantadue, avete la taglia sopra?»", words: ["Je", "fais", "du", "quarante-deux,", "vous", "avez", "la", "taille", "au-dessus", "?"], why: "Je fais du + taglia." },
            { t: "match", q: "Abbina", pairs: [["blanc", "blanche"], ["vert", "verte"], ["gris", "grise"], ["bleu", "bleue"]] }
          ],
          recap: {
            can: ["Nominare i vestiti principali", "Chiedere la taglia e il numero di scarpe", "Provare un capo e dire se va bene", "Accordare i colori con i nomi"],
            phrases: [{ fr: "Je fais du quarante-deux. Je peux l'essayer ?", it: "Porto la quarantadue. Posso provarlo?" }, { fr: "Elle est trop petite : vous avez la taille au-dessus ?", it: "È troppo piccola: avete la taglia sopra?" }, { fr: "Cette veste grise te va très bien.", it: "Questa giacca grigia ti sta benissimo." }],
            trap: "LA VESTE = la giacca, LE PANTALON è singolare, e MARRON e ORANGE non cambiano mai."
          }
        },
        /* ---------------- LEZIONE 8-4 ---------------- */
        {
          id: "8-4", street: "Rue des Pronoms", title: "I pronomi le, la, les: je le prends!",
          goal: "Usare i pronomi complemento diretto (le, la, l', les) per non ripetere i nomi, anche al passato e con i verbi all'infinito.",
          episode: {
            title: "I preparativi",
            intro: "Mancano tre giorni all'inaugurazione. Il caffè è un cantiere: scatole ovunque, nastri blu sui tavoli, l'insegna nuova appoggiata al muro. Françoise dirige le operazioni come un generale. Tutti corrono, tranne Croissant, che «supervisiona».",
            lines: [
              { who: "Mme Lefèvre", fr: "L'enseigne « Au Petit Bonheur » ? Gigi, tu la mets au-dessus du comptoir, s'il te plaît.", it: "L'insegna «Au Petit Bonheur»? Gigi, la metti sopra il bancone, per favore." },
              { who: "Gigi", fr: "D'accord, je la mets là. Et les bocaux de bonbons, je les place où ?", it: "D'accordo, la metto lì. E i barattoli di caramelle, dove li metto?" },
              { who: "Léa", fr: "Dans la vitrine ! Comme ça, les clients les voient de la rue.", it: "In vetrina! Così i clienti li vedono dalla strada." },
              { who: "Mme Lefèvre", fr: "Et le portrait de Zizì ? Je veux le mettre à côté de la caisse.", it: "E il ritratto di Zizì? Voglio metterlo accanto alla cassa." },
              { who: "Gigi", fr: "Les invitations, tu les as envoyées, Léa ? Monsieur Bernard l'a reçue ?", it: "Gli inviti, li hai mandati, Léa? Il signor Bernard l'ha ricevuto?" },
              { who: "Léa", fr: "Oui, je les ai toutes envoyées hier. Odette et Madame Pons, je les ai appelées aussi.", it: "Sì, li ho mandati tutti ieri. Odette e Madame Pons, le ho anche chiamate." },
              { who: "Croissant", fr: "Mon nœud papillon ? Personne ne le trouve ? Je le veux pour la photo officielle.", it: "Il mio papillon? Nessuno lo trova? Lo voglio per la foto ufficiale." },
              { who: "Gigi", fr: "Ton nœud papillon ? Tu dors dessus depuis ce matin, Croissant !", it: "Il tuo papillon? Ci dormi sopra da stamattina, Croissant!" }
            ],
            outro: "La sera, quando tutto è pronto, Françoise spegne le luci e accende solo l'insegna: «Au Petit Bonheur» brilla di blu sopra il bancone, come cinquant'anni fa. Ma proprio quella notte Gigi si sveglia con la febbre e la gola in fiamme. Riuscirà a stare in piedi per l'inaugurazione? Si va al 9° arrondissement: la salute.",
            you: "«{nome}, i pronomi le, la, les ti evitano di ripetere tutto: «Tu prends la veste ? Oui, je LA prends.» Vanno PRIMA del verbo, come in italiano: la prendo. Facile, no?»",
            mine: { fr: "Je m'appelle {nome} : le français, je l'étudie tous les jours et je le parle de mieux en mieux.", it: "Mi chiamo {nome}: il francese lo studio tutti i giorni e lo parlo sempre meglio." }
          },
          words: [
            { fr: "le (l')", it: "lo, lo (l')", say: "lə", hook: "LE sostituisce un nome maschile: le gâteau → je LE mange. Davanti a vocale: je L'achète.",
              ex: { fr: "Ce gâteau au chocolat ? Je le prends, il a l'air délicieux.", it: "Questa torta al cioccolato? La prendo, sembra deliziosa." } },
            { fr: "la (l')", it: "la (l')", say: "la", hook: "LA sostituisce un nome femminile: la robe → je LA prends. Davanti a vocale: je L'essaie.",
              ex: { fr: "Cette robe bleue, je la trouve magnifique, mais elle est trop chère.", it: "Questo vestito blu lo trovo magnifico, ma è troppo caro." } },
            { fr: "les", it: "li, le", say: "lé", hook: "LES sostituisce un plurale, maschile o femminile: les bonbons, les chaussures → je LES prends.",
              ex: { fr: "Tes clés ? Je les ai vues sur la table de la cuisine.", it: "Le tue chiavi? Le ho viste sul tavolo della cucina." } },
            { fr: "je le prends", it: "lo prendo", say: "jə lə prã", hook: "La frase magica del negozio: JE LE PRENDS (lo prendo) o JE LA PRENDS (la prendo). Affare fatto!",
              ex: { fr: "Il vous va très bien, ce manteau. — Oui, je le prends !", it: "Le sta molto bene, questo cappotto. — Sì, lo prendo!" } },
            { fr: "mettre", it: "mettere", say: "mètr", hook: "METTRE = mettere: je mets, tu mets, il met, nous mettons, vous mettez, ils mettent. Participio: mis.",
              ex: { fr: "Où est-ce que je mets les fleurs ? — Mets-les sur la table, près de la fenêtre.", it: "Dove metto i fiori? — Mettili sul tavolo, vicino alla finestra." } },
            { fr: "l'invitation", it: "l'invito", say: "lẽvitasjõ", hook: "L'INVITATION è femminile in francese: une invitation. Il verbo è inviter, invitare.",
              ex: { fr: "Nous avons envoyé cent invitations pour la fête d'ouverture.", it: "Abbiamo mandato cento inviti per la festa d'apertura." } },
            { fr: "appeler", it: "chiamare", say: "aplé", hook: "APPELER = chiamare (al telefono o per nome). Je m'appelle = «io mi chiamo»! J'appelle, nous appelons.",
              ex: { fr: "Appelle-moi quand tu arrives à la gare, je viens te chercher.", it: "Chiamami quando arrivi in stazione, vengo a prenderti." } },
            { fr: "la vitrine", it: "la vetrina", say: "la vitrìn", hook: "VITRINE = vetrina, la «vetrata» del negozio. Faire du lèche-vitrines = guardare le vetrine (letteralmente «leccare le vetrine»!).",
              ex: { fr: "Le samedi, j'adore faire du lèche-vitrines sur les grands boulevards.", it: "Il sabato adoro guardare le vetrine sui grandi viali." } },
            { fr: "la caisse", it: "la cassa", say: "la kès", hook: "LA CAISSE = la cassa, dove si paga. Le caissier / la caissière = il cassiere / la cassiera.",
              ex: { fr: "Vous pouvez payer à la caisse numéro trois, il n'y a personne.", it: "Può pagare alla cassa numero tre, non c'è nessuno." } },
            { fr: "recevoir / reçu", it: "ricevere / ricevuto", say: "rəsəvwar / rəsü", hook: "RECEVOIR = ricevere. La Ç (c con la cediglia) si legge S: reçu. Le reçu = anche lo scontrino!",
              ex: { fr: "Tu as reçu mon message ? Je t'ai écrit ce matin.", it: "Hai ricevuto il mio messaggio? Ti ho scritto stamattina." } }
          ],
          tip: {
            title: "Le, la, les: i pronomi che evitano le ripetizioni",
            body: "<div class='tbl'><table><thead><tr><th>Tempo</th><th>Posizione</th><th>Esempio</th></tr></thead><tbody><tr><td>presente</td><td>prima del verbo</td><td>Je <b>le</b> prends.</td></tr><tr><td>negazione</td><td>ne + pronome + verbo + pas</td><td>Je ne <b>la</b> prends pas.</td></tr><tr><td>con infinito</td><td>prima dell'infinito</td><td>Je veux <b>les</b> voir.</td></tr><tr><td>passé composé</td><td>prima di avoir</td><td>Je <b>l'</b>ai vu.</td></tr><tr><td>imperativo +</td><td>dopo, con il trattino</td><td>Prends-<b>le</b> !</td></tr></tbody></table></div><ul><li><b>le</b> (maschile), <b>la</b> (femminile), <b>l'</b> (davanti a vocale), <b>les</b> (plurale).</li><li>Al passé composé il participio si accorda con il pronome che sta prima: la lettre → je l'ai écrit<b>e</b>; les invitations → je les ai envoyé<b>es</b>.</li><li>Come in italiano: «la prendo», «li ho visti».</li></ul>",
            examples: [
              { fr: "Tu aimes cette chemise ? — Oui, je l'aime beaucoup.", it: "Ti piace questa camicia? — Sì, mi piace molto." },
              { fr: "Le pain ? Je ne le trouve pas, il n'y en a plus.", it: "Il pane? Non lo trovo, non ce n'è più." },
              { fr: "Les enfants ? Je vais les chercher à l'école à quatre heures.", it: "I bambini? Vado a prenderli a scuola alle quattro." },
              { fr: "La lettre de Zizì ? Je l'ai lue cent fois.", it: "La lettera di Zizì? L'ho letta cento volte." },
              { fr: "Les gâteaux sont prêts : mange-les tant qu'ils sont chauds !", it: "Le torte sono pronte: mangiale finché sono calde!" }
            ]
          },
          practice: [
            { t: "mcq", q: "«Tu prends la veste ?» — «Oui, je ___ prends.»", opts: ["la", "le", "les", "lui"], a: 0, why: "La veste è femminile: la." },
            { t: "mcq", q: "«Tu as vu mes clés ?» — «Oui, je ___ ai vues.»", opts: ["les", "le", "la", "l'"], a: 0, why: "Plurale: les." },
            { t: "listen", say: "Ce gâteau au chocolat ? Je le prends, il a l'air délicieux.", q: "Cosa fa la persona?", opts: ["Prende la torta al cioccolato.", "Non prende la torta.", "Prepara la torta.", "Regala la torta."], a: 0, why: "Je le prends = lo prendo." },
            { t: "match", q: "Abbina", pairs: [["la vitrine", "la vetrina"], ["la caisse", "la cassa"], ["l'invitation", "l'invito"], ["appeler", "chiamare"]] },
            { t: "order", q: "Riordina: «Voglio metterlo accanto alla cassa.»", words: ["Je", "veux", "le", "mettre", "à", "côté", "de", "la", "caisse."], why: "Il pronome va prima dell'infinito." }
          ],
          test: [
            { t: "mcq", q: "Come si dice «non la prendo»?", opts: ["Je ne la prends pas.", "Je la ne prends pas.", "Je ne prends la pas.", "Je ne prends pas la."], a: 0, why: "Ne + pronome + verbo + pas." },
            { t: "mcq", q: "«La lettre ? Je l'ai ___.» (scritta)", opts: ["écrite", "écrit", "écrits", "écrites"], a: 0, why: "Accordo con il pronome femminile prima di avoir." },
            { t: "mcq", q: "«Le manteau ? Je ___ achète.»", opts: ["l'", "le", "la", "les"], a: 0, why: "Davanti a vocale: l'achète." },
            { t: "mcq", q: "Imperativo: «Mangia le torte!» con il pronome…", opts: ["Mange-les !", "Les mange !", "Mange les !", "Les-mange !"], a: 0, why: "Imperativo affermativo: pronome dopo, con trattino." },
            { t: "listen", say: "Tes clés ? Je les ai vues sur la table de la cuisine.", q: "Dove sono le chiavi?", opts: ["Sul tavolo della cucina", "Nella borsa", "Sotto il letto", "Vicino alla porta"], a: 0, why: "Je les ai vues sur la table." },
            { t: "listen", say: "Oui, je les ai toutes envoyées hier. Odette et Madame Pons, je les ai appelées aussi.", q: "Cosa ha fatto Léa?", opts: ["Ha mandato tutti gli inviti e chiamato Odette e Madame Pons.", "Ha dimenticato gli inviti.", "Manderà gli inviti domani.", "Ha chiamato solo M. Bernard."], a: 0, why: "Je les ai envoyées, je les ai appelées." },
            { t: "listen", say: "Il vous va très bien, ce manteau. Oui, je le prends !", q: "Cosa decide il cliente?", opts: ["Prende il cappotto.", "Prova un altro cappotto.", "Non compra niente.", "Chiede uno sconto."], a: 0, why: "Je le prends." },
            { t: "type", q: "«Tu regardes le film ?» — «Oui, je ___ regarde.»", a: ["le"], why: "Le film è maschile: le." },
            { t: "type", q: "Completa: «Tu as ___ mon message ?» (ricevuto)", a: ["reçu", "recu"], why: "Recevoir → reçu." },
            { t: "type", say: "Appelle-moi quand tu arrives à la gare.", q: "Ascolta e completa: «___-moi quand tu arrives à la gare.»", a: ["Appelle"], why: "Appeler → appelle-moi (chiamami)." },
            { t: "order", q: "Riordina: «Le invitazioni, le ho mandate ieri.»", words: ["Les", "invitations,", "je", "les", "ai", "envoyées", "hier."], why: "Les prima di avoir; accordo -ées." },
            { t: "match", q: "Abbina", pairs: [["le gâteau", "je le mange"], ["la robe", "je la prends"], ["les bonbons", "je les aime"], ["l'enseigne", "je l'installe"]] }
          ],
          recap: {
            can: ["Sostituire un nome con le, la, l', les", "Mettere il pronome al posto giusto (presente, negazione, infinito)", "Usare il pronome al passé composé con l'accordo", "Dire in negozio: «Je le prends !»"],
            phrases: [{ fr: "Cette veste ? Je la prends !", it: "Questa giacca? La prendo!" }, { fr: "Les invitations, je les ai envoyées hier.", it: "Gli inviti li ho mandati ieri." }, { fr: "Je veux le mettre à côté de la caisse.", it: "Voglio metterlo accanto alla cassa." }],
            trap: "Il pronome va PRIMA del verbo (je LA prends), ma con un infinito va prima dell'infinito: je veux LA prendre."
          }
        }
      ]
    },
    {
      n: 9, arr: "9e", name: "Santé", it: "Salute", level: "A2",
      lessons: [
        /* ---------------- LEZIONE 9-1 ---------------- */
        {
          id: "9-1", street: "Rue du Corps", title: "Il corpo e «avoir mal à»",
          goal: "Nominare le parti del corpo e dire dove ti fa male con «j'ai mal à la / au / aux».",
          episode: {
            title: "Gigi sta male",
            intro: "Mancano due giorni all'inaugurazione. Alle sei del mattino Léa trova Gigi seduto al bancone, pallido come la farina, avvolto in una coperta. Croissant lo osserva da vicino con l'aria di un medico molto preoccupato e poco qualificato.",
            lines: [
              { who: "Léa", fr: "Gigi, tu es tout blanc ! Qu'est-ce que tu as ? Tu as mal quelque part ?", it: "Gigi, sei bianchissimo! Cos'hai? Ti fa male da qualche parte?" },
              { who: "Gigi", fr: "J'ai mal à la tête, j'ai mal à la gorge, et j'ai mal partout.", it: "Mi fa male la testa, mi fa male la gola, e mi fa male dappertutto." },
              { who: "Léa", fr: "Tu as mal au ventre aussi ? Tu as mangé tous les calissons d'hier ?", it: "Ti fa male anche la pancia? Hai mangiato tutti i calissons di ieri?" },
              { who: "Gigi", fr: "Non, seulement trois… ou quatre. Mais j'ai très mal au dos et aux jambes.", it: "No, solo tre… o quattro. Ma ho molto male alla schiena e alle gambe." },
              { who: "Croissant", fr: "Moi, j'ai mal au cœur quand je vois cette couverture. Elle n'est pas à toi, elle est à moi.", it: "A me si spezza il cuore quando vedo questa coperta. Non è tua, è mia." },
              { who: "Léa", fr: "Montre-moi ta main… Tu es brûlant ! Tu as sûrement de la fièvre.", it: "Fammi vedere la mano… Scotti! Avrai sicuramente la febbre." },
              { who: "Gigi", fr: "Ce n'est rien, je vais bien. Je dois préparer les gâteaux pour samedi.", it: "Non è niente, sto bene. Devo preparare i dolci per sabato." },
              { who: "Léa", fr: "Pas question. Tu retournes au lit, et moi je vais tout de suite à la pharmacie.", it: "Non se ne parla. Torni a letto, e io vado subito in farmacia." }
            ],
            outro: "Gigi protesta, ma le gambe non lo reggono. Torna su per le scale, una mano sulla fronte e l'altra sulla ringhiera. Croissant lo segue, si stende sui suoi piedi e non si muove più: per una volta, la coperta la divide.",
            you: "«{nome}, per dire dove fa male basta «j'ai mal à» + parte del corpo: j'ai mal à la tête, au dos, aux pieds. Attenzione alle fusioni: à + le = au, à + les = aux. Le conosci già!»",
            mine: { fr: "Je m'appelle {nome}, et quand je travaille trop à l'ordinateur, j'ai mal aux yeux et au dos.", it: "Mi chiamo {nome}, e quando lavoro troppo al computer mi fanno male gli occhi e la schiena." }
          },
          words: [
            { fr: "la tête", it: "la testa", say: "la tèt", hook: "TÊTE = testa: il cappellino sulla Ê ricorda la S scomparsa (testa → tête). Che coincidenza: un cappello sulla testa!",
              ex: { fr: "J'ai mal à la tête depuis ce matin, à cause du bruit des travaux.", it: "Mi fa male la testa da stamattina, per colpa del rumore dei lavori." } },
            { fr: "la gorge", it: "la gola", say: "la gòrj", hook: "GORGE = gola (pensa alla «gorgia» toscana o ai gargarismi). J'ai mal à la gorge = ho mal di gola.",
              ex: { fr: "J'ai mal à la gorge et je n'arrive presque plus à parler.", it: "Ho mal di gola e non riesco quasi più a parlare." } },
            { fr: "le ventre", it: "la pancia", say: "lə vãtr", hook: "VENTRE = ventre, pancia. J'ai mal au ventre = ho mal di pancia (spesso dopo troppi calissons).",
              ex: { fr: "Les enfants ont mangé trop de bonbons, maintenant ils ont mal au ventre.", it: "I bambini hanno mangiato troppe caramelle, adesso hanno mal di pancia." } },
            { fr: "le dos", it: "la schiena", say: "lə dò", hook: "LE DOS = il dorso, la schiena. Il sac à dos è lo zaino! J'ai mal au dos = ho mal di schiena.",
              ex: { fr: "Après dix heures de travail debout, j'ai toujours mal au dos.", it: "Dopo dieci ore di lavoro in piedi ho sempre mal di schiena." } },
            { fr: "le bras / la main", it: "il braccio / la mano", say: "lə bra / la mẽ", hook: "BRAS = braccio (la S è muta). MAIN = mano, con la nasale: «mẽ». Gli innamorati camminano «main dans la main», mano nella mano.",
              ex: { fr: "Je me suis coupé la main en préparant le dîner.", it: "Mi sono tagliato la mano preparando la cena." } },
            { fr: "la jambe / le pied", it: "la gamba / il piede", say: "la jãb / lə pjé", hook: "JAMBE = gamba, con la J dolce: jãb. PIED = piede (ricordi «à pied»?).",
              ex: { fr: "J'ai marché toute la journée dans Paris, j'ai mal aux pieds et aux jambes.", it: "Ho camminato tutto il giorno per Parigi, mi fanno male i piedi e le gambe." } },
            { fr: "les yeux / l'œil", it: "gli occhi / l'occhio", say: "lé zjö / löj", hook: "Plurale stranissimo: un ŒIL, des YEUX (lé-zjö). Come se gli occhi cambiassero faccia quando sono in due!",
              ex: { fr: "Elle a de très beaux yeux verts, comme sa grand-mère.", it: "Ha degli occhi verdi bellissimi, come sua nonna." } },
            { fr: "le cœur", it: "il cuore", say: "lə kör", hook: "CŒUR = cuore. Par cœur = a memoria (col cuore!). «J'ai mal au cœur» = ho la nausea, non mal di cuore!",
              ex: { fr: "Dans le bateau, j'ai eu mal au cœur pendant tout le voyage.", it: "Sulla barca ho avuto la nausea per tutto il viaggio." } },
            { fr: "avoir mal à", it: "avere male a", say: "avwar mal a", hook: "J'AI MAL À + la / au / aux: j'ai mal à la tête, au dos, aux dents. Mai «j'ai mal de»!",
              ex: { fr: "J'ai mal aux dents : je dois prendre rendez-vous chez le dentiste.", it: "Ho mal di denti: devo prendere appuntamento dal dentista." } },
            { fr: "la fièvre", it: "la febbre", say: "la fjèvr", hook: "FIÈVRE = febbre, con IÈ al posto della E italiana. J'ai de la fièvre = ho la febbre (partitivo!).",
              ex: { fr: "Il a trente-neuf de fièvre, il doit rester au lit trois jours.", it: "Ha trentanove di febbre, deve restare a letto tre giorni." } }
          ],
          tip: {
            title: "Avoir mal à: dove fa male?",
            body: "<div class='tbl'><table><thead><tr><th>Parte del corpo</th><th>Genere</th><th>Ho mal di…</th></tr></thead><tbody><tr><td>la tête, la gorge, la jambe</td><td>femminile</td><td>j'ai mal <b>à la</b> tête</td></tr><tr><td>le dos, le ventre, le bras, le pied</td><td>maschile</td><td>j'ai mal <b>au</b> dos</td></tr><tr><td>l'oreille, l'épaule</td><td>vocale</td><td>j'ai mal <b>à l'</b>oreille</td></tr><tr><td>les dents, les yeux, les pieds</td><td>plurale</td><td>j'ai mal <b>aux</b> dents</td></tr></tbody></table></div><ul><li>Struttura: <b>avoir mal à</b> + articolo determinativo (au, à la, à l', aux).</li><li><b>J'ai mal au cœur</b> = ho la nausea (non dolore al cuore!).</li><li>Domande: <b>Qu'est-ce que tu as ?</b> (cos'hai?), <b>Où as-tu mal ?</b> (dove ti fa male?)</li><li>Plurali irregolari: un œil → des <b>yeux</b>.</li></ul>",
            examples: [
              { fr: "Qu'est-ce que tu as ? — J'ai mal à la tête et au ventre.", it: "Cos'hai? — Mi fanno male la testa e la pancia." },
              { fr: "Après le sport, j'ai mal aux jambes et aux bras.", it: "Dopo lo sport mi fanno male le gambe e le braccia." },
              { fr: "J'ai mal à l'oreille droite depuis deux jours.", it: "Mi fa male l'orecchio destro da due giorni." },
              { fr: "Elle a de la fièvre et elle a mal à la gorge.", it: "Ha la febbre e ha mal di gola." },
              { fr: "Où as-tu mal exactement ? Montre-moi.", it: "Dove ti fa male esattamente? Fammi vedere." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «J'ai mal ___ tête.»", opts: ["à la", "au", "aux", "de la"], a: 0, why: "La tête è femminile: à la." },
            { t: "mcq", q: "Completa: «J'ai mal ___ dos.»", opts: ["au", "à la", "aux", "à le"], a: 0, why: "À + le = au." },
            { t: "listen", say: "J'ai marché toute la journée dans Paris, j'ai mal aux pieds et aux jambes.", q: "Cosa gli fa male?", opts: ["I piedi e le gambe", "La testa e la schiena", "Le braccia e le mani", "Gli occhi"], a: 0, why: "Aux pieds, aux jambes." },
            { t: "match", q: "Abbina", pairs: [["la tête", "la testa"], ["le dos", "la schiena"], ["la gorge", "la gola"], ["le ventre", "la pancia"]] },
            { t: "order", q: "Riordina: «Ho mal di gola e ho la febbre.»", words: ["J'ai", "mal", "à", "la", "gorge", "et", "j'ai", "de", "la", "fièvre."], why: "Avoir mal à + avoir de la fièvre." }
          ],
          test: [
            { t: "mcq", q: "Completa: «J'ai mal ___ dents.»", opts: ["aux", "au", "à les", "des"], a: 0, why: "À + les = aux." },
            { t: "mcq", q: "Il plurale di «un œil» è…", opts: ["des yeux", "des œils", "des œux", "des yeils"], a: 0, why: "Plurale irregolare: des yeux." },
            { t: "mcq", q: "«J'ai mal au cœur» significa…", opts: ["Ho la nausea.", "Ho un dolore al petto.", "Sono innamorato.", "Ho il cuore spezzato."], a: 0, why: "Avoir mal au cœur = avere la nausea." },
            { t: "mcq", q: "Come chiedi a un amico «cos'hai?»", opts: ["Qu'est-ce que tu as ?", "Qu'est-ce que tu es ?", "Où tu es mal ?", "Tu as quoi mal ?"], a: 0, why: "Qu'est-ce que tu as ?" },
            { t: "listen", say: "J'ai mal à la gorge et je n'arrive presque plus à parler.", q: "Qual è il problema?", opts: ["Ha mal di gola e quasi non riesce a parlare.", "Ha mal di testa e non riesce a dormire.", "Ha mal di pancia e non mangia.", "Ha perso la voce per aver cantato."], a: 0, why: "Mal à la gorge." },
            { t: "listen", say: "Il a trente-neuf de fièvre, il doit rester au lit trois jours.", q: "Quanta febbre ha?", opts: ["39", "38", "37", "40"], a: 0, why: "Trente-neuf = 39." },
            { t: "listen", say: "Après dix heures de travail debout, j'ai toujours mal au dos.", q: "Quando gli fa male la schiena?", opts: ["Dopo dieci ore di lavoro in piedi", "La mattina appena sveglio", "Dopo lo sport", "Quando dorme male"], a: 0, why: "J'ai mal au dos." },
            { t: "type", q: "Completa: «J'ai mal ___ ventre.»", a: ["au"], why: "Le ventre → au." },
            { t: "type", q: "Completa: «Elle a de beaux ___ verts.» (occhi)", a: ["yeux"], why: "Des yeux." },
            { t: "type", say: "J'ai mal à la tête depuis ce matin.", q: "Ascolta e completa: «J'ai mal à la ___ depuis ce matin.»", a: ["tête", "tete"], why: "La tête = la testa." },
            { t: "order", q: "Riordina: «Dopo lo sport mi fanno male le gambe.»", words: ["Après", "le", "sport,", "j'ai", "mal", "aux", "jambes."], why: "Aux jambes (plurale)." },
            { t: "match", q: "Abbina", pairs: [["le bras", "il braccio"], ["la main", "la mano"], ["le pied", "il piede"], ["la jambe", "la gamba"]] }
          ],
          recap: {
            can: ["Nominare le principali parti del corpo", "Dire dove fa male con j'ai mal à la / au / aux", "Dire che hai la febbre", "Chiedere a qualcuno cos'ha e dove ha male"],
            phrases: [{ fr: "J'ai mal à la tête et à la gorge.", it: "Mi fanno male la testa e la gola." }, { fr: "J'ai mal au dos et aux jambes.", it: "Mi fanno male la schiena e le gambe." }, { fr: "Tu as de la fièvre ? Qu'est-ce que tu as ?", it: "Hai la febbre? Cos'hai?" }],
            trap: "«J'ai mal AU CŒUR» vuol dire «ho la nausea», non mal di cuore. E un œil, ma des YEUX!"
          }
        },
        /* ---------------- LEZIONE 9-2 ---------------- */
        {
          id: "9-2", street: "Rue de la Pharmacie", title: "In farmacia",
          goal: "Spiegare i sintomi al farmacista, chiedere un medicinale e capire come prenderlo.",
          episode: {
            title: "La croce verde",
            intro: "La farmacia all'angolo ha l'insegna a croce verde che lampeggia anche di giorno. La farmacista, Madame Petit, conosce tutti nel quartiere e sa già che il nuovo padrone del caffè «lavora troppo». Léa entra di corsa con una lista di sintomi scritta sul telefono.",
            lines: [
              { who: "Léa", fr: "Bonjour madame. Je voudrais quelque chose contre la fièvre et le mal de gorge, s'il vous plaît.", it: "Buongiorno signora. Vorrei qualcosa contro la febbre e il mal di gola, per favore." },
              { who: "Mme Petit", fr: "C'est pour vous ? Il a d'autres symptômes ? Il tousse ? Il a le nez qui coule ?", it: "È per lei? Ha altri sintomi? Tossisce? Ha il naso che cola?" },
              { who: "Léa", fr: "C'est pour mon ami. Il tousse un peu, il a mal partout et il est très fatigué.", it: "È per il mio amico. Tossisce un po', ha male dappertutto ed è molto stanco." },
              { who: "Mme Petit", fr: "Ça ressemble à une grosse grippe. Je vous donne du paracétamol et un sirop pour la toux.", it: "Sembra una brutta influenza. Le do del paracetamolo e uno sciroppo per la tosse." },
              { who: "Léa", fr: "Il doit prendre combien de comprimés par jour ? Avant ou après les repas ?", it: "Quante compresse deve prendere al giorno? Prima o dopo i pasti?" },
              { who: "Mme Petit", fr: "Un comprimé toutes les six heures, maximum quatre par jour. Le sirop, trois fois par jour, après les repas.", it: "Una compressa ogni sei ore, massimo quattro al giorno. Lo sciroppo tre volte al giorno, dopo i pasti." },
              { who: "Mme Petit", fr: "Et si la fièvre ne baisse pas dans deux jours, il faut aller chez le médecin.", it: "E se la febbre non scende entro due giorni, bisogna andare dal medico." },
              { who: "Croissant", fr: "Vous avez quelque chose pour un chat stressé par la maladie de son humain ?", it: "Avete qualcosa per un gatto stressato dalla malattia del suo umano?" }
            ],
            outro: "Léa torna con un sacchetto di medicine, un termometro e una tisana al timo «della ricetta di mia nonna», regalo di Madame Petit. Ma la sera la febbre di Gigi sale a trentanove e mezzo. Françoise prende il telefono: «Domattina chiamo il dottor Dubois.»",
            you: "«{nome}, in Francia i farmacisti sono bravissimi a consigliare. Spiega i sintomi con «j'ai mal à…», «je tousse», «j'ai de la fièvre», e chiedi: «Je dois en prendre combien par jour ?»»",
            mine: { fr: "Bonjour, je m'appelle {nome}, j'ai un rhume et je voudrais quelque chose pour le nez, s'il vous plaît.", it: "Buongiorno, mi chiamo {nome}, ho il raffreddore e vorrei qualcosa per il naso, per favore." }
          },
          words: [
            { fr: "le médicament", it: "il medicinale, la medicina", say: "lə médikamã", hook: "MÉDICAMENT = medicamento, medicina. La médecine invece è la scienza medica (e anche… le medicine in senso generale).",
              ex: { fr: "Ce médicament est en vente libre, vous n'avez pas besoin d'ordonnance.", it: "Questo medicinale è da banco, non le serve la ricetta." } },
            { fr: "le comprimé", it: "la compressa", say: "lə kõprimé", hook: "COMPRIMÉ: una polvere COMPRESSA in pastiglia. Prendre un comprimé avec un verre d'eau.",
              ex: { fr: "Prenez un comprimé le matin et un comprimé le soir, pendant cinq jours.", it: "Prenda una compressa la mattina e una la sera, per cinque giorni." } },
            { fr: "le sirop", it: "lo sciroppo", say: "lə sirò", hook: "SIROP = sciroppo, quasi identico. Un sirop contre la toux. E il «sirop de menthe» è una bibita!",
              ex: { fr: "Le sirop pour la toux a un goût horrible, mais il marche bien.", it: "Lo sciroppo per la tosse ha un sapore orribile, ma funziona bene." } },
            { fr: "l'ordonnance", it: "la ricetta medica", say: "lordonãs", hook: "Trappola: L'ORDONNANCE è la ricetta del medico (ordina le medicine). La ricetta di cucina è «la recette»!",
              ex: { fr: "Pour cet antibiotique, il faut une ordonnance du médecin.", it: "Per questo antibiotico serve la ricetta del medico." } },
            { fr: "tousser / la toux", it: "tossire / la tosse", say: "tusé / la tu", hook: "TOUSSER = tossire, con OU = u. LA TOUX = la tosse, con la X muta: «tu».",
              ex: { fr: "Il tousse toute la nuit, il ne peut pas dormir.", it: "Tossisce tutta la notte, non riesce a dormire." } },
            { fr: "le rhume", it: "il raffreddore", say: "lə rüm", hook: "RHUME = raffreddore, dal greco «rheuma» (flusso): il naso che cola! Être enrhumé = essere raffreddato.",
              ex: { fr: "J'ai un gros rhume : j'ai le nez bouché et j'éternue sans arrêt.", it: "Ho un brutto raffreddore: ho il naso chiuso e starnutisco di continuo." } },
            { fr: "la grippe", it: "l'influenza", say: "la grip", hook: "LA GRIPPE: l'influenza, che ti «aggrappa» (gripper) e non ti lascia. Avoir la grippe.",
              ex: { fr: "Chaque hiver, beaucoup de gens attrapent la grippe au bureau.", it: "Ogni inverno molte persone si prendono l'influenza in ufficio." } },
            { fr: "contre / pour", it: "contro / per", say: "kõtr / pur", hook: "Quelque chose CONTRE la fièvre o POUR la gorge: tutti e due vanno bene in farmacia.",
              ex: { fr: "Vous avez quelque chose contre les piqûres de moustique ?", it: "Avete qualcosa contro le punture di zanzara?" } },
            { fr: "… fois par jour", it: "… volte al giorno", say: "fwa par jur", hook: "UNE FOIS, DEUX FOIS: una volta, due volte. Par jour = al giorno, par semaine = alla settimana.",
              ex: { fr: "Prenez ce sirop trois fois par jour, après les repas.", it: "Prenda questo sciroppo tre volte al giorno, dopo i pasti." } },
            { fr: "le nez", it: "il naso", say: "lə né", hook: "NEZ = naso: la Z finale è muta, «né». Avoir le nez qui coule = avere il naso che cola.",
              ex: { fr: "Mon fils a le nez qui coule depuis trois jours.", it: "Mio figlio ha il naso che cola da tre giorni." } }
          ],
          tip: {
            title: "In farmacia: spiegare i sintomi e capire la posologia",
            body: "<div class='tbl'><table><thead><tr><th>Vuoi dire</th><th>In francese</th></tr></thead><tbody><tr><td>Vorrei qualcosa per…</td><td>Je voudrais quelque chose contre / pour…</td></tr><tr><td>Ho la febbre</td><td>J'ai de la fièvre.</td></tr><tr><td>Tossisco</td><td>Je tousse. / J'ai de la toux.</td></tr><tr><td>Ho il raffreddore</td><td>J'ai un rhume. / Je suis enrhumé(e).</td></tr><tr><td>Ho l'influenza</td><td>J'ai la grippe.</td></tr><tr><td>Quante al giorno?</td><td>Combien de fois par jour ?</td></tr><tr><td>Serve la ricetta?</td><td>Il faut une ordonnance ?</td></tr></tbody></table></div><ul><li><b>Posologia:</b> un comprimé <b>toutes les</b> six heures (ogni sei ore), deux fois <b>par</b> jour, <b>avant / après</b> les repas.</li><li><b>L'ordonnance</b> = ricetta medica; <b>la recette</b> = ricetta di cucina.</li><li>La farmacia di turno si chiama <b>la pharmacie de garde</b>.</li></ul>",
            examples: [
              { fr: "Je voudrais quelque chose contre le mal de tête, s'il vous plaît.", it: "Vorrei qualcosa contro il mal di testa, per favore." },
              { fr: "Je suis enrhumée et j'ai un peu de fièvre depuis hier.", it: "Sono raffreddata e ho un po' di febbre da ieri." },
              { fr: "Prenez deux comprimés toutes les huit heures.", it: "Prenda due compresse ogni otto ore." },
              { fr: "Il faut une ordonnance pour ce médicament ?", it: "Serve la ricetta per questo medicinale?" },
              { fr: "La pharmacie de garde est ouverte toute la nuit.", it: "La farmacia di turno è aperta tutta la notte." }
            ]
          },
          practice: [
            { t: "mcq", q: "«L'ordonnance» è…", opts: ["la ricetta del medico", "la ricetta di cucina", "l'ordine di arrivo", "lo scontrino"], a: 0, why: "Ricetta medica = ordonnance; di cucina = recette." },
            { t: "mcq", q: "«Je tousse» significa…", opts: ["tossisco", "starnutisco", "ho la febbre", "ho sete"], a: 0, why: "Tousser = tossire." },
            { t: "listen", say: "Prenez ce sirop trois fois par jour, après les repas.", q: "Come si prende lo sciroppo?", opts: ["Tre volte al giorno, dopo i pasti", "Una volta al giorno, prima di dormire", "Tre volte al giorno, prima dei pasti", "Ogni tre ore"], a: 0, why: "Trois fois par jour, après les repas." },
            { t: "match", q: "Abbina", pairs: [["le comprimé", "la compressa"], ["le sirop", "lo sciroppo"], ["le rhume", "il raffreddore"], ["la grippe", "l'influenza"]] },
            { t: "order", q: "Riordina: «Vorrei qualcosa contro la febbre, per favore.»", words: ["Je", "voudrais", "quelque", "chose", "contre", "la", "fièvre,", "s'il", "vous", "plaît."], why: "Quelque chose contre…" }
          ],
          test: [
            { t: "mcq", q: "«Un comprimé toutes les six heures» significa…", opts: ["una compressa ogni sei ore", "sei compresse al giorno", "una compressa alle sei", "una compressa per sei giorni"], a: 0, why: "Toutes les + ore = ogni." },
            { t: "mcq", q: "La farmacia aperta di notte si chiama…", opts: ["la pharmacie de garde", "la pharmacie de nuit ouverte", "la pharmacie libre", "la pharmacie d'urgence"], a: 0, why: "Pharmacie de garde." },
            { t: "mcq", q: "«Je suis enrhumé» significa…", opts: ["Sono raffreddato.", "Sono ubriaco.", "Sono stanco.", "Sono guarito."], a: 0, why: "Enrhumé = raffreddato." },
            { t: "mcq", q: "Completa: «J'ai ___ fièvre.»", opts: ["de la", "la", "une", "du"], a: 0, why: "Avoir de la fièvre (partitivo)." },
            { t: "listen", say: "Un comprimé toutes les six heures, maximum quatre par jour.", q: "Quante compresse al massimo al giorno?", opts: ["4", "6", "2", "8"], a: 0, why: "Maximum quatre par jour." },
            { t: "listen", say: "J'ai un gros rhume : j'ai le nez bouché et j'éternue sans arrêt.", q: "Cos'ha?", opts: ["Un brutto raffreddore con naso chiuso e starnuti", "Mal di pancia e nausea", "Mal di schiena", "Un'allergia agli occhi"], a: 0, why: "Rhume, nez bouché, éternuer." },
            { t: "listen", say: "Pour cet antibiotique, il faut une ordonnance du médecin.", q: "Cosa serve per l'antibiotico?", opts: ["La ricetta del medico", "Un documento d'identità", "Pagare in contanti", "Niente"], a: 0, why: "Il faut une ordonnance." },
            { t: "type", q: "Completa: «Il ___ toute la nuit.» (tossisce)", a: ["tousse"], why: "Tousser → il tousse." },
            { t: "type", q: "Completa: «Prenez ce sirop deux ___ par jour.» (volte)", a: ["fois"], why: "Deux fois par jour." },
            { t: "type", say: "Mon fils a le nez qui coule depuis trois jours.", q: "Ascolta e completa: «Mon fils a le ___ qui coule.»", a: ["nez"], why: "Le nez = il naso." },
            { t: "order", q: "Riordina: «Serve la ricetta per questo medicinale?»", words: ["Il", "faut", "une", "ordonnance", "pour", "ce", "médicament", "?"], why: "Il faut une ordonnance ?" },
            { t: "match", q: "Abbina", pairs: [["le médicament", "il medicinale"], ["l'ordonnance", "la ricetta medica"], ["la toux", "la tosse"], ["le nez", "il naso"]] }
          ],
          recap: {
            can: ["Spiegare i sintomi in farmacia", "Chiedere un medicinale contro o per qualcosa", "Capire la posologia: toutes les six heures, deux fois par jour", "Sapere cosa sono l'ordonnance e la pharmacie de garde"],
            phrases: [{ fr: "Je voudrais quelque chose contre la fièvre et la toux.", it: "Vorrei qualcosa contro la febbre e la tosse." }, { fr: "Je dois en prendre combien par jour ?", it: "Quante ne devo prendere al giorno?" }, { fr: "Un comprimé toutes les six heures, après les repas.", it: "Una compressa ogni sei ore, dopo i pasti." }],
            trap: "L'ORDONNANCE è la ricetta del medico; LA RECETTE è la ricetta di cucina. Non chiedere una «recette» in farmacia!"
          }
        },
        /* ---------------- LEZIONE 9-3 ---------------- */
        {
          id: "9-3", street: "Rue du Médecin", title: "Dal medico: prendere appuntamento e spiegare",
          goal: "Prendere un appuntamento dal medico, rispondere alle sue domande e capire i suoi consigli con «il faut» e «devoir».",
          episode: {
            title: "Il dottor Dubois",
            intro: "Venerdì mattina, il giorno prima dell'inaugurazione. Françoise ha ottenuto un appuntamento d'urgenza dal dottor Dubois, un medico anziano con la barba bianca che cura il quartiere da trent'anni. Gigi entra nello studio appoggiato a Léa, con Croissant nella cesta «per sostegno morale».",
            lines: [
              { who: "M. Dubois", fr: "Bonjour, asseyez-vous. Alors, qu'est-ce qui ne va pas, jeune homme ?", it: "Buongiorno, si sieda. Allora, cosa c'è che non va, giovanotto?" },
              { who: "Gigi", fr: "J'ai de la fièvre, je tousse et j'ai mal partout. Je suis très fatigué.", it: "Ho la febbre, tossisco e ho male dappertutto. Sono stanchissimo." },
              { who: "M. Dubois", fr: "Depuis quand avez-vous ces symptômes ? Et combien de fièvre ?", it: "Da quando ha questi sintomi? E quanta febbre?" },
              { who: "Gigi", fr: "Depuis mercredi. Hier soir, j'avais trente-neuf et demi.", it: "Da mercoledì. Ieri sera avevo trentanove e mezzo." },
              { who: "M. Dubois", fr: "Respirez profondément… Toussez… Ouvrez la bouche. Hmm, c'est la grippe.", it: "Respiri profondamente… Tossisca… Apra la bocca. Mmh, è l'influenza." },
              { who: "M. Dubois", fr: "Vous devez rester au lit trois jours et boire beaucoup d'eau. Il ne faut pas travailler.", it: "Deve restare a letto tre giorni e bere molta acqua. Non deve lavorare." },
              { who: "Gigi", fr: "Trois jours ? Impossible, docteur : demain, j'ouvre une confiserie !", it: "Tre giorni? Impossibile, dottore: domani apro una confetteria!" },
              { who: "M. Dubois", fr: "La confiserie de Zizì ? Alors… vous pouvez venir une heure, assis, avec un masque. Pas plus.", it: "La confetteria di Zizì? Allora… può venire un'ora, seduto, con la mascherina. Non di più." }
            ],
            outro: "Il dottor Dubois scrive la ricetta e poi, sul retro, aggiunge una riga: «Je serai là demain. J'achetais mes bonbons chez Zizì quand j'avais six ans.» Sembra che tutto il quartiere abbia una storia con Zizì. Gigi esce un po' più leggero, nonostante la febbre.",
            you: "«{nome}, dal medico la prima domanda è sempre «Qu'est-ce qui ne va pas ?» e la seconda «Depuis quand ?». Prepara le risposte: i sintomi con «j'ai mal à…» e la durata con «depuis + tempo».»",
            mine: { fr: "Bonjour, je m'appelle {nome}, je voudrais prendre rendez-vous avec le médecin, le plus tôt possible.", it: "Buongiorno, mi chiamo {nome}, vorrei prendere un appuntamento con il medico, il prima possibile." }
          },
          words: [
            { fr: "le médecin / le docteur", it: "il medico / il dottore", say: "lə médsẽ / lə doktör", hook: "LE MÉDECIN è la professione (anche per una donna: elle est médecin). DOCTEUR si usa per chiamarlo: «Bonjour, docteur».",
              ex: { fr: "Mon médecin est très gentil, et il prend toujours le temps d'écouter.", it: "Il mio medico è molto gentile, e si prende sempre il tempo di ascoltare." } },
            { fr: "prendre rendez-vous", it: "prendere appuntamento", say: "prãdr rãdévu", hook: "RENDEZ-VOUS: «rendetevi» in un luogo! Prendre rendez-vous chez le médecin, chez le coiffeur.",
              ex: { fr: "J'ai pris rendez-vous chez le dentiste pour mardi à quinze heures.", it: "Ho preso appuntamento dal dentista per martedì alle quindici." } },
            { fr: "Qu'est-ce qui ne va pas ?", it: "Cosa c'è che non va?", say: "kèskì nə va pa", hook: "La domanda classica del medico (e degli amici preoccupati): «cosa non va?». Rispondi con i sintomi.",
              ex: { fr: "Tu as l'air triste : qu'est-ce qui ne va pas ? Tu veux en parler ?", it: "Sembri triste: cosa c'è che non va? Vuoi parlarne?" } },
            { fr: "Depuis quand… ?", it: "Da quando…?", say: "dəpüì kã", hook: "DEPUIS QUAND ? = da quando? Risposta: depuis mercredi, depuis trois jours. Con il presente, come in italiano.",
              ex: { fr: "Depuis quand avez-vous mal au dos ? — Depuis une semaine, environ.", it: "Da quando ha mal di schiena? — Da una settimana, circa." } },
            { fr: "le symptôme", it: "il sintomo", say: "lə sẽptòm", hook: "SYMPTÔME: sintomo, con la Ô col cappellino. Les symptômes de la grippe: fièvre, toux, fatigue.",
              ex: { fr: "Si les symptômes continuent après trois jours, rappelez-moi.", it: "Se i sintomi continuano dopo tre giorni, mi richiami." } },
            { fr: "respirer", it: "respirare", say: "rèspiré", hook: "RESPIRER = respirare, identico. «Respirez profondément» = respiri profondamente: lo dicono tutti i medici del mondo.",
              ex: { fr: "Respirez profondément par le nez, puis soufflez lentement.", it: "Respiri profondamente dal naso, poi soffi lentamente." } },
            { fr: "il faut / il ne faut pas", it: "bisogna / non bisogna", say: "il fò / il nə fò pa", hook: "IL FAUT + infinito = bisogna. IL NE FAUT PAS = non bisogna, non si deve (un divieto gentile).",
              ex: { fr: "Il faut boire beaucoup d'eau, et il ne faut pas sortir pendant trois jours.", it: "Bisogna bere molta acqua, e non bisogna uscire per tre giorni." } },
            { fr: "malade / guéri", it: "malato / guarito", say: "malad / gérì", hook: "MALADE = malato (la maladie = la malattia). GUÉRIR = guarire, con GU che si legge «g» dura: guéri.",
              ex: { fr: "J'ai été malade une semaine, mais maintenant je suis complètement guéri.", it: "Sono stato malato una settimana, ma adesso sono completamente guarito." } },
            { fr: "fatigué(e)", it: "stanco/a", say: "fatigé", hook: "FATIGUÉ = stanco, affaticato. Con la GU dura. Je suis crevé (familiare) = sono distrutto!",
              ex: { fr: "Je suis très fatigué ces jours-ci, je dors mal à cause du stress.", it: "Sono molto stanco in questi giorni, dormo male per lo stress." } },
            { fr: "les urgences", it: "il pronto soccorso", say: "lé zürjãs", hook: "LES URGENCES (sempre plurale): il pronto soccorso. Il numero per l'ambulanza in Francia è il 15 (o il 112 europeo).",
              ex: { fr: "Il s'est cassé la jambe au ski, on l'a emmené aux urgences.", it: "Si è rotto la gamba sciando, l'hanno portato al pronto soccorso." } }
          ],
          tip: {
            title: "Dal medico: le domande e le risposte",
            body: "<div class='tbl'><table><thead><tr><th>Il medico chiede</th><th>Tu rispondi</th></tr></thead><tbody><tr><td>Qu'est-ce qui ne va pas ?</td><td>J'ai mal à la gorge et je tousse.</td></tr><tr><td>Depuis quand ?</td><td>Depuis trois jours. / Depuis mercredi.</td></tr><tr><td>Vous avez de la fièvre ?</td><td>Oui, j'ai trente-neuf.</td></tr><tr><td>Vous prenez des médicaments ?</td><td>Oui, du paracétamol. / Non, rien.</td></tr><tr><td>Vous êtes allergique ?</td><td>Je suis allergique à la pénicilline.</td></tr></tbody></table></div><ul><li><b>Il faut</b> + infinito = bisogna: il faut rester au lit.</li><li><b>Il ne faut pas</b> + infinito = non bisogna / non si deve.</li><li><b>Vous devez</b> + infinito = deve (più personale).</li><li><b>Depuis</b> + presente: j'ai mal <b>depuis</b> trois jours (ho male da tre giorni).</li><li>Emergenze: <b>le 15</b> (SAMU, ambulanza), <b>le 112</b> (numero europeo), <b>les urgences</b>.</li></ul>",
            examples: [
              { fr: "Bonjour, je voudrais prendre rendez-vous avec le docteur Dubois.", it: "Buongiorno, vorrei prendere appuntamento con il dottor Dubois." },
              { fr: "J'ai mal au ventre depuis hier soir.", it: "Ho mal di pancia da ieri sera." },
              { fr: "Il faut vous reposer et il ne faut pas faire de sport.", it: "Deve riposarsi e non deve fare sport." },
              { fr: "Vous devez prendre ces médicaments pendant une semaine.", it: "Deve prendere queste medicine per una settimana." },
              { fr: "Je suis allergique aux arachides.", it: "Sono allergico alle arachidi." }
            ]
          },
          practice: [
            { t: "mcq", q: "Il medico ti chiede «Depuis quand ?». Rispondi:", opts: ["Depuis trois jours.", "Pendant trois jours.", "Dans trois jours.", "Il y a trois jours que."], a: 0, why: "Depuis + durata." },
            { t: "mcq", q: "«Il ne faut pas sortir» significa…", opts: ["Non bisogna uscire.", "Non serve uscire.", "Bisogna uscire.", "Non si può entrare."], a: 0, why: "Il ne faut pas = non bisogna." },
            { t: "listen", say: "J'ai pris rendez-vous chez le dentiste pour mardi à quinze heures.", q: "Quando è l'appuntamento?", opts: ["Martedì alle 15", "Mercoledì alle 15", "Martedì alle 5", "Giovedì alle 13"], a: 0, why: "Mardi à quinze heures." },
            { t: "match", q: "Abbina", pairs: [["le médecin", "il medico"], ["le symptôme", "il sintomo"], ["respirer", "respirare"], ["les urgences", "il pronto soccorso"]] },
            { t: "order", q: "Riordina: «Vorrei prendere appuntamento con il medico.»", words: ["Je", "voudrais", "prendre", "rendez-vous", "avec", "le", "médecin."], why: "Prendre rendez-vous." }
          ],
          test: [
            { t: "mcq", q: "Il medico ti chiede «Qu'est-ce qui ne va pas ?». Significa…", opts: ["Cosa c'è che non va?", "Dove va?", "Cosa non le piace?", "Perché non viene?"], a: 0, why: "Domanda classica del medico." },
            { t: "mcq", q: "Completa: «J'ai mal à la tête ___ hier.»", opts: ["depuis", "pendant", "il y a", "dans"], a: 0, why: "Depuis + punto di inizio." },
            { t: "mcq", q: "In Francia, il numero dell'ambulanza (SAMU) è…", opts: ["il 15", "il 118", "il 911", "il 17"], a: 0, why: "15 = SAMU; 112 = numero europeo." },
            { t: "mcq", q: "Una donna medico dice:", opts: ["Je suis médecin.", "Je suis médecine.", "Je suis médecinne.", "Je suis la docteure."], a: 0, why: "Médecin si usa anche per le donne." },
            { t: "listen", say: "Depuis quand avez-vous mal au dos ? Depuis une semaine, environ.", q: "Da quanto ha mal di schiena?", opts: ["Da circa una settimana", "Da ieri", "Da un mese", "Da tre giorni"], a: 0, why: "Depuis une semaine." },
            { t: "listen", say: "Vous devez rester au lit trois jours et boire beaucoup d'eau. Il ne faut pas travailler.", q: "Cosa consiglia il medico?", opts: ["Restare a letto tre giorni, bere molta acqua e non lavorare.", "Lavorare meno e fare sport.", "Prendere un antibiotico per una settimana.", "Andare al pronto soccorso."], a: 0, why: "Rester au lit, boire de l'eau, ne pas travailler." },
            { t: "listen", say: "J'ai été malade une semaine, mais maintenant je suis complètement guéri.", q: "Come sta adesso?", opts: ["È completamente guarito.", "È ancora malato.", "Sta peggiorando.", "Deve tornare dal medico."], a: 0, why: "Guéri = guarito." },
            { t: "type", q: "Completa: «Respirez ___.» (profondamente)", a: ["profondément", "profondement"], why: "Respirez profondément." },
            { t: "type", q: "Completa: «Il ___ boire beaucoup d'eau.» (bisogna)", a: ["faut"], why: "Il faut + infinito." },
            { t: "type", say: "Je suis très fatigué ces jours-ci, je dors mal.", q: "Ascolta e completa: «Je suis très ___ ces jours-ci.»", a: ["fatigué", "fatigue"], why: "Fatigué = stanco." },
            { t: "order", q: "Riordina: «Da quando ha questi sintomi?»", words: ["Depuis", "quand", "avez-vous", "ces", "symptômes", "?"], why: "Depuis quand + presente." },
            { t: "match", q: "Abbina", pairs: [["malade", "malato"], ["guéri", "guarito"], ["fatigué", "stanco"], ["prendre rendez-vous", "prendere appuntamento"]] }
          ],
          recap: {
            can: ["Prendere un appuntamento dal medico", "Rispondere a «Qu'est-ce qui ne va pas ?» e «Depuis quand ?»", "Capire i consigli con il faut, il ne faut pas, vous devez", "Conoscere i numeri d'emergenza francesi"],
            phrases: [{ fr: "Je voudrais prendre rendez-vous, le plus tôt possible.", it: "Vorrei prendere un appuntamento, il prima possibile." }, { fr: "J'ai de la fièvre et je tousse depuis mercredi.", it: "Ho la febbre e tossisco da mercoledì." }, { fr: "Il faut rester au lit et il ne faut pas travailler.", it: "Bisogna restare a letto e non bisogna lavorare." }],
            trap: "DEPUIS + presente: «j'ai mal depuis trois jours» (ho male da tre giorni), non «j'ai eu mal depuis»."
          }
        },
        /* ---------------- LEZIONE 9-4 ---------------- */
        {
          id: "9-4", street: "Rue des Conseils", title: "Dare consigli: l'imperativo",
          goal: "Dare consigli e istruzioni con l'imperativo (prends, prenez, repose-toi), anche in forma negativa.",
          episode: {
            title: "Tutti i consigli del mondo",
            intro: "Venerdì sera, nella camera sopra il caffè. Gigi è a letto con la febbre e una tisana. Uno dopo l'altro, tutti salgono le scale per dargli un consiglio. Gigi ne riceve così tanti che comincia a sentirsi meglio solo per farli smettere.",
            lines: [
              { who: "Léa", fr: "Bois ta tisane, prends ton médicament et dors. Ne regarde pas ton téléphone !", it: "Bevi la tua tisana, prendi la medicina e dormi. Non guardare il telefono!" },
              { who: "Mme Lefèvre", fr: "Repose-toi, Gigi. Ne t'inquiète pas pour demain : je m'occupe de tout.", it: "Riposati, Gigi. Non preoccuparti per domani: mi occupo di tutto io." },
              { who: "M. Bernard", fr: "Mange un peu de soupe, mon garçon. Zizì disait toujours : « Une bonne soupe guérit tout. »", it: "Mangia un po' di zuppa, ragazzo mio. Zizì diceva sempre: «Una buona zuppa guarisce tutto.»" },
              { who: "Mme Duval", fr: "Mettez un pull, fermez la fenêtre et ne prenez pas de douche froide !", it: "Si metta un maglione, chiuda la finestra e non faccia la doccia fredda!" },
              { who: "Gigi", fr: "Merci, merci à tous… Mais s'il vous plaît, laissez-moi dormir un peu !", it: "Grazie, grazie a tutti… Ma per favore, lasciatemi dormire un po'!" },
              { who: "Croissant", fr: "Écoutez-moi tous : sortez de cette chambre. Le seul bon remède, c'est un chat sur les pieds.", it: "Ascoltatemi tutti: uscite da questa camera. L'unico vero rimedio è un gatto sui piedi." },
              { who: "Léa", fr: "Bon, Croissant a raison. Venez, on descend. Dors bien, Gigi, à demain !", it: "Va bene, Croissant ha ragione. Venite, scendiamo. Dormi bene, Gigi, a domani!" },
              { who: "Gigi", fr: "Réveillez-moi à huit heures… et n'ouvrez pas sans moi, promettez-le !", it: "Svegliatemi alle otto… e non aprite senza di me, promettetelo!" }
            ],
            outro: "La mattina dopo, miracolo: la febbre è scesa a trentasette e mezzo. Gigi si alza, si fa la doccia (calda), si mette la camicia bianca e la giacca grigia. Croissant ha già il papillon rosso. Di sotto si sentono già le voci dei primi invitati. È arrivato il grande giorno: benvenuti nel 10° arrondissement, l'ultimo.",
            you: "«{nome}, l'imperativo è la forma dei consigli: prends, bois, dors (tu) e prenez, buvez, dormez (vous). È il verbo senza il soggetto. Ecco il mio consiglio per te: révise un peu chaque jour!»",
            mine: { fr: "{nome}, écoute bien : bois beaucoup d'eau, dors huit heures et parle français tous les jours !", it: "{nome}, ascolta bene: bevi molta acqua, dormi otto ore e parla francese tutti i giorni!" }
          },
          words: [
            { fr: "prends / prenez", it: "prendi / prenda, prendete", say: "prã / prəné", hook: "L'imperativo è il verbo SENZA soggetto: tu prends → PRENDS! vous prenez → PRENEZ! Semplicissimo.",
              ex: { fr: "Prends ton parapluie, il va pleuvoir cet après-midi.", it: "Prendi l'ombrello, pioverà questo pomeriggio." } },
            { fr: "bois / buvez", it: "bevi / beva, bevete", say: "bwa / büvé", hook: "BOIRE è irregolare: bois (tu), buvez (vous). Buvez de l'eau! = bevete acqua! Il consiglio di ogni medico.",
              ex: { fr: "Il fait très chaud : buvez beaucoup d'eau et restez à l'ombre.", it: "Fa molto caldo: bevete molta acqua e restate all'ombra." } },
            { fr: "repose-toi / reposez-vous", it: "riposati / si riposi", say: "rəpòz twa / rəpozé vu", hook: "Con i riflessivi il pronome va DOPO, col trattino: repose-TOI, reposez-VOUS. Come in italiano: riposaTI!",
              ex: { fr: "Tu travailles trop : repose-toi un peu ce week-end.", it: "Lavori troppo: riposati un po' questo weekend." } },
            { fr: "ne t'inquiète pas", it: "non preoccuparti", say: "nə tẽkjèt pa", hook: "S'INQUIÉTER = preoccuparsi (inquietarsi). Al negativo il pronome torna PRIMA: ne T'inquiète pas.",
              ex: { fr: "Ne t'inquiète pas, tout va bien se passer demain.", it: "Non preoccuparti, domani andrà tutto bene." } },
            { fr: "mange / mangez", it: "mangia / mangi, mangiate", say: "mãj / mãjé", hook: "Con i verbi in -ER la forma «tu» perde la S: tu manges → MANGE! tu parles → PARLE!",
              ex: { fr: "Mange tes légumes, sinon pas de dessert !", it: "Mangia le verdure, altrimenti niente dolce!" } },
            { fr: "fais / faites", it: "fai / faccia, fate", say: "fè / fèt", hook: "FAIRE all'imperativo: fais (tu), faites (vous). Faites attention! = fate attenzione!",
              ex: { fr: "Faites attention en traversant, il y a beaucoup de voitures.", it: "Fate attenzione quando attraversate, ci sono tante macchine." } },
            { fr: "laisse / laissez", it: "lascia / lasci, lasciate", say: "lès / lèsé", hook: "LAISSER = lasciare. Laissez-moi dormir! = lasciatemi dormire! Con «moi» dopo il verbo.",
              ex: { fr: "Laissez-moi vous aider avec vos valises, elles ont l'air lourdes.", it: "Mi lasci aiutarla con le valigie, sembrano pesanti." } },
            { fr: "le conseil", it: "il consiglio", say: "lə kõsèj", hook: "CONSEIL = consiglio, con -EIL che si legge «èj». Donner un conseil = dare un consiglio.",
              ex: { fr: "Je peux te donner un conseil ? Ne pars pas sans réservation en août.", it: "Posso darti un consiglio? Non partire senza prenotazione ad agosto." } },
            { fr: "le remède", it: "il rimedio", say: "lə rəmèd", hook: "REMÈDE = rimedio. Un remède de grand-mère = un rimedio della nonna (tisana, miele, limone…).",
              ex: { fr: "Le miel et le citron, c'est le meilleur remède contre le mal de gorge.", it: "Miele e limone sono il miglior rimedio contro il mal di gola." } },
            { fr: "aller mieux", it: "stare meglio", say: "alé mjö", hook: "ALLER MIEUX = andare meglio, stare meglio. Je vais mieux = sto meglio. Ça va mieux? = va meglio?",
              ex: { fr: "Merci pour la soupe, je vais beaucoup mieux ce matin !", it: "Grazie per la zuppa, stamattina sto molto meglio!" } }
          ],
          tip: {
            title: "L'imperativo: la forma dei consigli",
            body: "<div class='tbl'><table><thead><tr><th>Verbo</th><th>tu</th><th>nous</th><th>vous</th></tr></thead><tbody><tr><td>prendre</td><td>prends</td><td>prenons</td><td>prenez</td></tr><tr><td>manger</td><td>mange</td><td>mangeons</td><td>mangez</td></tr><tr><td>boire</td><td>bois</td><td>buvons</td><td>buvez</td></tr><tr><td>faire</td><td>fais</td><td>faisons</td><td>faites</td></tr><tr><td>aller</td><td>va</td><td>allons</td><td>allez</td></tr><tr><td>être</td><td>sois</td><td>soyons</td><td>soyez</td></tr><tr><td>se reposer</td><td>repose-toi</td><td>reposons-nous</td><td>reposez-vous</td></tr></tbody></table></div><ul><li>Imperativo = presente <b>senza soggetto</b>: tu prends → prends!</li><li>Verbi in <b>-er</b> (e aller): la forma «tu» <b>perde la S</b>: mange, parle, va.</li><li>Negativo: <b>ne</b> + verbo + <b>pas</b>: ne mange pas, ne buvez pas.</li><li>Riflessivi: affermativo repose-<b>toi</b>; negativo ne <b>te</b> repose pas.</li><li><b>Nous</b> = proposta: allons-y! (andiamo!), mangeons! (mangiamo!).</li></ul>",
            examples: [
              { fr: "Prends ce médicament et repose-toi.", it: "Prendi questa medicina e riposati." },
              { fr: "Ne mangez pas trop de sucre avant de dormir.", it: "Non mangiate troppi zuccheri prima di dormire." },
              { fr: "Soyez patients, le médecin arrive dans cinq minutes.", it: "Siate pazienti, il medico arriva tra cinque minuti." },
              { fr: "Allons-y, le film commence à huit heures !", it: "Andiamo, il film comincia alle otto!" },
              { fr: "Ne t'inquiète pas et dors bien.", it: "Non preoccuparti e dormi bene." }
            ]
          },
          practice: [
            { t: "mcq", q: "Imperativo di «tu manges»:", opts: ["Mange !", "Manges !", "Tu mange !", "Mangez !"], a: 0, why: "Verbi in -er: la forma tu perde la S." },
            { t: "mcq", q: "Come si dice «riposati!»?", opts: ["Repose-toi !", "Te repose !", "Repose-te !", "Tu te reposes !"], a: 0, why: "Riflessivo affermativo: pronome dopo, toi." },
            { t: "listen", say: "Il fait très chaud : buvez beaucoup d'eau et restez à l'ombre.", q: "Quali consigli dà?", opts: ["Bere molta acqua e restare all'ombra.", "Fare una doccia fredda.", "Restare a casa e dormire.", "Mangiare frutta e verdura."], a: 0, why: "Buvez, restez." },
            { t: "match", q: "Abbina", pairs: [["prends", "prendi"], ["bois", "bevi"], ["fais", "fai"], ["va", "vai"]] },
            { t: "order", q: "Riordina: «Non preoccuparti, va tutto bene.»", words: ["Ne", "t'inquiète", "pas,", "tout", "va", "bien."], why: "Negativo: ne + te + verbo + pas." }
          ],
          test: [
            { t: "mcq", q: "Imperativo «vous» di «faire»:", opts: ["Faites !", "Faisez !", "Fais !", "Faitez !"], a: 0, why: "Faire → faites (irregolare)." },
            { t: "mcq", q: "Come si dice «non bevete!»?", opts: ["Ne buvez pas !", "Buvez pas ne !", "Ne bois pas vous !", "Pas buvez !"], a: 0, why: "Ne + verbo + pas." },
            { t: "mcq", q: "Imperativo «tu» di «aller»:", opts: ["Va !", "Vas !", "Allez !", "Aller !"], a: 0, why: "Aller → va (senza S)." },
            { t: "mcq", q: "«Je vais mieux» significa…", opts: ["Sto meglio.", "Vado meglio a piedi.", "Andrò meglio.", "Vado al meglio."], a: 0, why: "Aller mieux = stare meglio." },
            { t: "listen", say: "Bois ta tisane, prends ton médicament et dors. Ne regarde pas ton téléphone !", q: "Cosa NON deve fare Gigi?", opts: ["Guardare il telefono", "Bere la tisana", "Prendere la medicina", "Dormire"], a: 0, why: "Ne regarde pas ton téléphone." },
            { t: "listen", say: "Mettez un pull, fermez la fenêtre et ne prenez pas de douche froide !", q: "Quale consiglio dà Odette?", opts: ["Mettersi un maglione e chiudere la finestra", "Aprire la finestra e fare una doccia fredda", "Togliersi il maglione", "Uscire a prendere aria"], a: 0, why: "Mettez un pull, fermez la fenêtre." },
            { t: "listen", say: "Le miel et le citron, c'est le meilleur remède contre le mal de gorge.", q: "Qual è il miglior rimedio contro il mal di gola?", opts: ["Miele e limone", "Latte caldo", "Una zuppa", "Lo sciroppo"], a: 0, why: "Le miel et le citron." },
            { t: "type", q: "Completa: «___ attention en traversant !» (fate)", a: ["Faites"], why: "Faire → faites." },
            { t: "type", q: "Completa: «Reposez-___, vous êtes fatigué.»", a: ["vous"], why: "Reposez-vous." },
            { t: "type", say: "Merci pour la soupe, je vais beaucoup mieux ce matin !", q: "Ascolta e completa: «Je vais beaucoup ___ ce matin !»", a: ["mieux"], why: "Aller mieux = stare meglio." },
            { t: "order", q: "Riordina: «Prendi questa medicina e riposati.»", words: ["Prends", "ce", "médicament", "et", "repose-toi."], why: "Prends! Repose-toi!" },
            { t: "match", q: "Abbina", pairs: [["le conseil", "il consiglio"], ["le remède", "il rimedio"], ["laissez-moi", "lasciatemi"], ["ne t'inquiète pas", "non preoccuparti"]] }
          ],
          recap: {
            can: ["Dare consigli con l'imperativo (tu, nous, vous)", "Formare l'imperativo negativo", "Usare l'imperativo dei riflessivi: repose-toi", "Dire che stai meglio: je vais mieux"],
            phrases: [{ fr: "Prends ton médicament et repose-toi.", it: "Prendi la medicina e riposati." }, { fr: "Ne t'inquiète pas, je m'occupe de tout.", it: "Non preoccuparti, mi occupo di tutto io." }, { fr: "Buvez beaucoup d'eau et ne sortez pas.", it: "Bevete molta acqua e non uscite." }],
            trap: "Con i verbi in -ER l'imperativo «tu» perde la S: MANGE! (non «manges!»). E il riflessivo: repose-TOI, ma ne TE repose pas."
          }
        }
      ]
    },
    {
      n: 10, arr: "10e", name: "Vers le B1", it: "Verso il B1", level: "A2",
      lessons: [
        /* ---------------- LEZIONE 10-1 ---------------- */
        {
          id: "10-1", street: "Rue de l'Imparfait", title: "L'imparfait: com'era una volta",
          goal: "Descrivere il passato e le abitudini di una volta con l'imparfait, e distinguerlo dal passé composé.",
          episode: {
            title: "Il discorso di Henri",
            intro: "Sabato, ore undici. Il caffè è pieno: vicini, negozianti, il dottor Dubois, Madame Petit, Odette, perfino Madame Garnier arrivata da Roussillon. Sopra il bancone brilla l'insegna blu. Françoise batte un cucchiaino su un bicchiere: M. Bernard vuole dire qualche parola.",
            lines: [
              { who: "M. Bernard", fr: "Quand j'étais jeune, ce café était le cœur du quartier. Tout le monde venait ici.", it: "Quando ero giovane, questo caffè era il cuore del quartiere. Tutti venivano qui." },
              { who: "M. Bernard", fr: "Le matin, Zizì préparait les bonbons, et l'odeur du sucre remplissait toute la rue.", it: "La mattina Zizì preparava le caramelle, e il profumo dello zucchero riempiva tutta la strada." },
              { who: "M. Bernard", fr: "Les enfants attendaient devant la vitrine. Elle leur donnait toujours un bonbon de plus.", it: "I bambini aspettavano davanti alla vetrina. Lei regalava sempre una caramella in più." },
              { who: "M. Dubois", fr: "C'est vrai ! J'avais six ans, et je venais tous les jeudis avec dix centimes.", it: "È vero! Avevo sei anni, e venivo tutti i giovedì con dieci centesimi." },
              { who: "M. Bernard", fr: "Le samedi soir, nous dansions ici, entre les tables. Il y avait de la musique et beaucoup de rires.", it: "Il sabato sera ballavamo qui, tra i tavoli. C'era musica e tante risate." },
              { who: "M. Bernard", fr: "Un jour, Zizì est partie. Et ce café est devenu silencieux pendant très longtemps.", it: "Un giorno Zizì è partita. E questo caffè è diventato silenzioso per moltissimo tempo." },
              { who: "Croissant", fr: "J'étais là aussi, bien sûr. Mais personne ne m'écoutait. Comme d'habitude.", it: "C'ero anch'io, naturalmente. Ma nessuno mi ascoltava. Come al solito." },
              { who: "M. Bernard", fr: "Aujourd'hui, grâce à Gigi, le café rit de nouveau. À Zizì, et au Petit Bonheur !", it: "Oggi, grazie a Gigi, il caffè ride di nuovo. A Zizì, e al Petit Bonheur!" }
            ],
            outro: "Tutti alzano i bicchieri: «À Zizì!» Françoise piange, Odette piange, perfino il dottor Dubois si soffia il naso. Poi Gigi apre la vetrina e i bambini del quartiere entrano di corsa. Ognuno, naturalmente, riceve una caramella in più.",
            you: "«{nome}, l'imparfait è il tempo dei ricordi e delle descrizioni: «c'era», «ero», «facevamo sempre». Il passé composé invece racconta i fatti: «è partita». Insieme sono come la scenografia e l'azione di un film.»",
            mine: { fr: "Je m'appelle {nome} : quand j'étais petit, je passais les étés chez mes grands-parents et je jouais dehors.", it: "Mi chiamo {nome}: quando ero piccolo passavo le estati dai nonni e giocavo fuori." }
          },
          words: [
            { fr: "j'étais", it: "ero", say: "jetè", hook: "J'ÉTAIS = ero: «ét» come «essere», più la desinenza -ais (che si legge «è»). Quand j'étais petit = quando ero piccolo.",
              ex: { fr: "Quand j'étais enfant, j'habitais dans un petit village près de la mer.", it: "Quando ero bambino abitavo in un paesino vicino al mare." } },
            { fr: "il y avait", it: "c'era, c'erano", say: "il javè", hook: "IL Y AVAIT = c'era: l'imparfait di «il y a». La formula d'inizio di ogni favola: «Il était une fois…» (c'era una volta).",
              ex: { fr: "Autrefois, il y avait un cinéma dans cette rue, mais il a fermé.", it: "Una volta c'era un cinema in questa strada, ma ha chiuso." } },
            { fr: "j'avais", it: "avevo", say: "javè", hook: "J'AVAIS = avevo. Si usa per l'età nel passato: j'avais six ans = avevo sei anni.",
              ex: { fr: "J'avais dix ans quand j'ai vu la mer pour la première fois.", it: "Avevo dieci anni quando ho visto il mare per la prima volta." } },
            { fr: "-ais, -ait, -ions, -iez, -aient", it: "le desinenze dell'imparfait", say: "è, è, jõ, jé, è", hook: "Una sola serie per TUTTI i verbi! Cinque forme su sei suonano «è»: je parlais, tu parlais, il parlait, ils parlaient.",
              ex: { fr: "Nous parlions italien à la maison, mais nos parents parlaient aussi français.", it: "A casa parlavamo italiano, ma i nostri genitori parlavano anche francese." } },
            { fr: "autrefois / avant", it: "una volta / prima", say: "otrəfwa / avã", hook: "AUTREFOIS: «un'altra volta», cioè una volta, in passato. AVANT = prima. Avant, c'était mieux? Chissà!",
              ex: { fr: "Avant, je fumais beaucoup, mais maintenant je fais du sport.", it: "Prima fumavo molto, ma adesso faccio sport." } },
            { fr: "tous les jeudis", it: "tutti i giovedì", say: "tu lé jödì", hook: "Le abitudini del passato vogliono l'imparfait: tous les jours, chaque été, d'habitude, souvent… → je venais.",
              ex: { fr: "Chaque été, nous allions en vacances chez ma tante en Bretagne.", it: "Ogni estate andavamo in vacanza da mia zia in Bretagna." } },
            { fr: "un jour", it: "un giorno", say: "ẽ jur", hook: "UN JOUR introduce un fatto improvviso: passé composé! «Tout était calme… Un jour, elle est partie.»",
              ex: { fr: "Tout allait bien, et puis un jour, il a décidé de partir en Australie.", it: "Andava tutto bene, e poi un giorno ha deciso di partire per l'Australia." } },
            { fr: "le souvenir", it: "il ricordo", say: "lə suvnìr", hook: "SOUVENIR = ricordo (e anche l'oggetto ricordo). Se souvenir de = ricordarsi di.",
              ex: { fr: "J'ai de très beaux souvenirs de mes vacances en Provence.", it: "Ho dei bellissimi ricordi delle mie vacanze in Provenza." } },
            { fr: "devenir", it: "diventare", say: "dəvnìr", hook: "DEVENIR = diventare: si coniuga come venir e usa ÊTRE al passato: il est devenu célèbre.",
              ex: { fr: "Ce petit café est devenu l'endroit préféré de tout le quartier.", it: "Questo piccolo caffè è diventato il posto preferito di tutto il quartiere." } },
            { fr: "de nouveau", it: "di nuovo", say: "də nuvò", hook: "DE NOUVEAU = di nuovo, ancora una volta. Sinonimo: encore une fois. «Le café rit de nouveau.»",
              ex: { fr: "Après la pluie, le soleil brille de nouveau sur Paris.", it: "Dopo la pioggia, il sole splende di nuovo su Parigi." } }
          ],
          tip: {
            title: "Imparfait o passé composé? La scenografia e l'azione",
            body: "<div class='tbl'><table><thead><tr><th></th><th>parler</th><th>être</th><th>avoir</th></tr></thead><tbody><tr><td>je</td><td>parlais</td><td>étais</td><td>avais</td></tr><tr><td>tu</td><td>parlais</td><td>étais</td><td>avais</td></tr><tr><td>il / elle</td><td>parlait</td><td>était</td><td>avait</td></tr><tr><td>nous</td><td>parlions</td><td>étions</td><td>avions</td></tr><tr><td>vous</td><td>parliez</td><td>étiez</td><td>aviez</td></tr><tr><td>ils / elles</td><td>parlaient</td><td>étaient</td><td>avaient</td></tr></tbody></table></div><ul><li><b>Formazione:</b> prendi «nous» al presente (nous parl<b>ons</b>), togli -ons, aggiungi -ais, -ais, -ait, -ions, -iez, -aient. Unica eccezione: être → <b>ét</b>-.</li><li><b>Imparfait</b> = descrizioni, abitudini, situazioni: il faisait beau, je venais tous les jeudis.</li><li><b>Passé composé</b> = azioni concluse, fatti: un jour, elle <b>est partie</b>.</li><li>Come in italiano: «ero / c'era / facevo» = imparfait; «sono stato / è successo / ho fatto» = passé composé.</li></ul>",
            examples: [
              { fr: "Il faisait beau, les enfants jouaient, et tout à coup il a commencé à pleuvoir.", it: "Faceva bel tempo, i bambini giocavano, e all'improvviso ha cominciato a piovere." },
              { fr: "Quand j'avais vingt ans, je travaillais dans un restaurant.", it: "Quando avevo vent'anni lavoravo in un ristorante." },
              { fr: "Nous allions à la plage tous les dimanches.", it: "Andavamo al mare tutte le domeniche." },
              { fr: "Elle lisait un livre quand le téléphone a sonné.", it: "Leggeva un libro quando è squillato il telefono." },
              { fr: "Autrefois, il y avait beaucoup de petits commerces dans le quartier.", it: "Una volta c'erano tanti piccoli negozi nel quartiere." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Quand j'___ petit, j'habitais à Naples.»", opts: ["étais", "ai été", "suis", "serai"], a: 0, why: "Descrizione nel passato: imparfait." },
            { t: "mcq", q: "«Il y avait» significa…", opts: ["c'era", "c'è", "ci sarà", "c'è stato"], a: 0, why: "Imparfait di il y a." },
            { t: "listen", say: "Chaque été, nous allions en vacances chez ma tante en Bretagne.", q: "Cosa facevano ogni estate?", opts: ["Andavano in vacanza dalla zia in Bretagna.", "Andavano al mare in Provenza.", "Restavano a casa.", "Visitavano la nonna a Parigi."], a: 0, why: "Nous allions = andavamo (abitudine)." },
            { t: "match", q: "Abbina", pairs: [["j'étais", "ero"], ["j'avais", "avevo"], ["il y avait", "c'era"], ["nous dansions", "ballavamo"]] },
            { t: "order", q: "Riordina: «Quando avevo sei anni, venivo qui tutti i giovedì.»", words: ["Quand", "j'avais", "six", "ans,", "je", "venais", "ici", "tous", "les", "jeudis."], why: "Età e abitudine nel passato: imparfait." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Nous ___ souvent au cinéma.» (andavamo)", opts: ["allions", "sommes allés", "allons", "irons"], a: 0, why: "Abitudine: imparfait." },
            { t: "mcq", q: "Quale frase usa correttamente i due tempi?", opts: ["Il pleuvait quand je suis sorti.", "Il a plu quand je sortais toujours.", "Il pleuvait quand je sortais un jour.", "Il a plu quand j'étais sorti hier."], a: 0, why: "Situazione (imparfait) + azione (passé composé)." },
            { t: "mcq", q: "L'imparfait di «être» alla 3ª persona plurale è…", opts: ["étaient", "étions", "était", "sont été"], a: 0, why: "Ils étaient." },
            { t: "mcq", q: "«Un jour, elle est partie.» Perché il passé composé?", opts: ["È un'azione precisa e conclusa.", "È una descrizione.", "È un'abitudine.", "È una situazione che dura."], a: 0, why: "«Un jour» introduce un fatto." },
            { t: "listen", say: "Quand j'étais jeune, ce café était le cœur du quartier. Tout le monde venait ici.", q: "Cosa ricorda M. Bernard?", opts: ["Il caffè era il cuore del quartiere e tutti venivano qui.", "Il caffè era sempre vuoto.", "Il caffè era chiuso il sabato.", "Il caffè era in un altro quartiere."], a: 0, why: "Était, venait: descrizione e abitudine." },
            { t: "listen", say: "J'avais dix ans quand j'ai vu la mer pour la première fois.", q: "Quanti anni aveva quando ha visto il mare?", opts: ["10", "6", "12", "20"], a: 0, why: "J'avais dix ans." },
            { t: "listen", say: "Elle lisait un livre quand le téléphone a sonné.", q: "Cosa è successo?", opts: ["Mentre leggeva un libro, è squillato il telefono.", "Ha letto un libro al telefono.", "Ha chiamato per parlare di un libro.", "Il telefono squillava e lei non rispondeva."], a: 0, why: "Lisait (situazione) + a sonné (azione)." },
            { t: "type", q: "Completa: «Autrefois, il y ___ un cinéma ici.» (c'era)", a: ["avait"], why: "Il y avait." },
            { t: "type", q: "Completa: «Le samedi soir, nous ___ entre les tables.» (ballavamo)", a: ["dansions"], why: "Nous dansions." },
            { t: "type", say: "Ce petit café est devenu l'endroit préféré du quartier.", q: "Ascolta e completa: «Ce petit café est ___ l'endroit préféré du quartier.»", a: ["devenu"], why: "Devenir → devenu (con être)." },
            { t: "order", q: "Riordina: «Faceva bel tempo e i bambini giocavano in piazza.»", words: ["Il", "faisait", "beau", "et", "les", "enfants", "jouaient", "sur", "la", "place."], why: "Descrizione: imparfait." },
            { t: "match", q: "Abbina", pairs: [["je parlais", "parlavo"], ["il faisait", "faceva"], ["ils venaient", "venivano"], ["vous aviez", "avevate"]] }
          ],
          recap: {
            can: ["Formare l'imparfait di tutti i verbi", "Descrivere com'era una persona, un luogo, un'epoca", "Raccontare le abitudini del passato", "Distinguere imparfait (scenario) e passé composé (azione)"],
            phrases: [{ fr: "Quand j'étais petit, j'habitais près de la mer.", it: "Quando ero piccolo abitavo vicino al mare." }, { fr: "Autrefois, il y avait beaucoup de petits commerces.", it: "Una volta c'erano tanti piccoli negozi." }, { fr: "Il faisait beau quand elle est partie.", it: "Faceva bel tempo quando è partita." }],
            trap: "Imparfait per descrivere e per le abitudini (j'allais, il faisait), passé composé per i fatti (je suis allé, il a fait). Come «andavo» e «sono andato» in italiano."
          }
        },
        /* ---------------- LEZIONE 10-2 ---------------- */
        {
          id: "10-2", street: "Rue des Opinions", title: "Dare la propria opinione",
          goal: "Esprimere e motivare un'opinione (je pense que, à mon avis, parce que), dire se sei d'accordo e reagire alle idee degli altri.",
          episode: {
            title: "Il grande dibattito",
            intro: "Primo pomeriggio. La festa continua e, come in ogni festa francese che si rispetti, comincia un dibattito appassionato. Argomento: il futuro del Petit Bonheur. Tutti hanno un'opinione. Croissant ne ha almeno tre.",
            lines: [
              { who: "Léa", fr: "À mon avis, la confiserie doit ouvrir tous les jours, parce que les gens adorent les bonbons.", it: "Secondo me la confetteria deve aprire tutti i giorni, perché la gente adora le caramelle." },
              { who: "Gigi", fr: "Je ne suis pas d'accord : je pense qu'il faut aussi garder du temps pour vivre !", it: "Non sono d'accordo: penso che bisogna anche tenersi del tempo per vivere!" },
              { who: "Mme Lefèvre", fr: "Je trouve que Gigi a raison. Le dimanche, on ferme, et on va se promener.", it: "Trovo che Gigi abbia ragione. La domenica si chiude, e si va a passeggiare." },
              { who: "Mme Duval", fr: "Et pourquoi ne pas faire aussi des pizzas le vendredi soir ? Ce serait une excellente idée.", it: "E perché non fare anche le pizze il venerdì sera? Sarebbe un'ottima idea." },
              { who: "M. Bernard", fr: "Des pizzas dans une confiserie ? Franchement, je ne crois pas que ce soit possible…", it: "Pizze in una confetteria? Francamente non credo che sia possibile…" },
              { who: "Gigi", fr: "Moi, je pense que c'est génial ! Un café, des bonbons de Zizì et des pizzas de Naples.", it: "Io penso che sia geniale! Un caffè, le caramelle di Zizì e le pizze di Napoli." },
              { who: "Croissant", fr: "D'après moi, il manque l'essentiel : un menu spécial pour les chats. Qui est d'accord ?", it: "Secondo me manca l'essenziale: un menù speciale per gatti. Chi è d'accordo?" },
              { who: "Léa", fr: "Bon, on vote ! Qui est pour les pizzas du vendredi ? … Tout le monde, sauf Monsieur Bernard !", it: "Bene, votiamo! Chi è a favore delle pizze del venerdì? … Tutti, tranne il signor Bernard!" }
            ],
            outro: "M. Bernard sbuffa, poi sorride: «Va bene. Ma la prima pizza la voglio io, con le acciughe.» Il Petit Bonheur avrà dunque le caramelle tutti i giorni tranne la domenica, e la pizza il venerdì sera. Croissant ha ottenuto una ciotola d'argento con il suo nome: non era il menù, ma è un inizio.",
            you: "«{nome}, al livello B1 ti chiederanno spesso la tua opinione. Prepara le formule: «à mon avis», «je pense que», «je trouve que», e soprattutto motiva sempre con «parce que». Un'opinione senza «parce que» è come un croissant senza burro.»",
            mine: { fr: "Je m'appelle {nome} et, à mon avis, apprendre le français est utile parce que c'est une langue parlée dans le monde entier.", it: "Mi chiamo {nome} e, secondo me, imparare il francese è utile perché è una lingua parlata in tutto il mondo." }
          },
          words: [
            { fr: "à mon avis", it: "secondo me", say: "a mõ navì", hook: "À MON AVIS: «al mio avviso». Il modo più naturale per iniziare un'opinione. Mai «selon moi je pense» (doppione!).",
              ex: { fr: "À mon avis, Paris est plus belle au printemps qu'en été.", it: "Secondo me Parigi è più bella in primavera che in estate." } },
            { fr: "je pense que / je trouve que", it: "penso che / trovo che", say: "jə pãs kə / jə truv kə", hook: "Dopo JE PENSE QUE e JE TROUVE QUE si usa il normale indicativo: je pense que c'est vrai (non il congiuntivo, come in italiano!).",
              ex: { fr: "Je trouve que ce film est trop long, mais les acteurs sont excellents.", it: "Trovo che questo film sia troppo lungo, ma gli attori sono eccellenti." } },
            { fr: "être d'accord", it: "essere d'accordo", say: "ètr dakòr", hook: "D'ACCORD = d'accordo, con la D e senza la seconda D. Je suis d'accord avec toi. E «d'accord!» da solo = ok!",
              ex: { fr: "Je suis d'accord avec toi : il faut protéger les petits commerces.", it: "Sono d'accordo con te: bisogna proteggere i piccoli negozi." } },
            { fr: "avoir raison / avoir tort", it: "avere ragione / avere torto", say: "avwar rèzõ / avwar tòr", hook: "Con AVOIR, come in italiano: tu as raison, il a tort. Tort = torto (la T finale è muta).",
              ex: { fr: "Tu as raison, j'ai eu tort de partir sans dire au revoir.", it: "Hai ragione, ho avuto torto a partire senza salutare." } },
            { fr: "parce que", it: "perché (risposta)", say: "parskə", hook: "PARCE QUE risponde; POURQUOI chiede. Pourquoi tu ris? — Parce que c'est drôle!",
              ex: { fr: "Je préfère le train parce que c'est plus écologique et plus confortable.", it: "Preferisco il treno perché è più ecologico e più comodo." } },
            { fr: "pour / contre", it: "a favore / contro", say: "pur / kõtr", hook: "Être POUR = essere a favore; être CONTRE = essere contro. Le pour et le contre = i pro e i contro.",
              ex: { fr: "Je suis pour les pizzas du vendredi, mais contre les anchois !", it: "Sono a favore delle pizze del venerdì, ma contro le acciughe!" } },
            { fr: "franchement", it: "francamente, sinceramente", say: "frãshmã", hook: "FRANCHEMENT: con FRANCHEZZA. Molto usato in conversazione: «Franchement, c'est nul!» (francamente, fa schifo!).",
              ex: { fr: "Franchement, je ne comprends pas pourquoi ce restaurant est si cher.", it: "Francamente non capisco perché questo ristorante sia così caro." } },
            { fr: "une bonne idée", it: "una buona idea", say: "ün bòn idé", hook: "C'EST UNE BONNE IDÉE! oppure, se sei entusiasta: c'est génial! Se no: ce n'est pas une bonne idée.",
              ex: { fr: "Faire un pique-nique au bord de la Seine ? C'est une très bonne idée !", it: "Fare un picnic lungo la Senna? È un'ottima idea!" } },
            { fr: "d'après moi / selon moi", it: "secondo me", say: "daprè mwa / səlõ mwa", hook: "Sinonimi di «à mon avis»: d'après moi, selon moi. Variare le formule fa salire il voto all'esame!",
              ex: { fr: "Selon moi, le plus important dans la vie, c'est l'amitié.", it: "Secondo me la cosa più importante nella vita è l'amicizia." } },
            { fr: "génial / nul", it: "geniale / pessimo", say: "jénjal / nül", hook: "Registro familiare: GÉNIAL! (fantastico) e NUL (pessimo, zero). Il film? Génial! Il dessert? Nul!",
              ex: { fr: "Le concert était génial, mais le son était vraiment nul.", it: "Il concerto era fantastico, ma l'audio era davvero pessimo." } }
          ],
          tip: {
            title: "Esprimere un'opinione come al B1",
            body: "<div class='tbl'><table><thead><tr><th>Vuoi…</th><th>Formule</th></tr></thead><tbody><tr><td>dare un'opinione</td><td>À mon avis… / Je pense que… / Je trouve que… / Selon moi…</td></tr><tr><td>motivare</td><td>… parce que… / … car… (più formale)</td></tr><tr><td>essere d'accordo</td><td>Je suis d'accord. / Tu as raison. / Exactement !</td></tr><tr><td>non essere d'accordo</td><td>Je ne suis pas d'accord. / Je ne pense pas. / Tu as tort.</td></tr><tr><td>essere a metà</td><td>Oui, mais… / Ça dépend. / C'est vrai, mais…</td></tr><tr><td>chiedere un'opinione</td><td>Qu'est-ce que tu en penses ? / Tu es d'accord ?</td></tr></tbody></table></div><ul><li>Dopo <b>je pense que</b> / <b>je trouve que</b> si usa l'<b>indicativo</b>: je pense que c'<b>est</b> vrai.</li><li>Al negativo (<b>je ne pense pas que</b>) si usa il congiuntivo: lo vedrai al B1.</li><li>Struttura vincente all'esame: <b>opinione + parce que + esempio</b>.</li></ul>",
            examples: [
              { fr: "À mon avis, il faut apprendre une langue en voyageant.", it: "Secondo me bisogna imparare una lingua viaggiando." },
              { fr: "Je pense que tu as raison, mais c'est difficile.", it: "Penso che tu abbia ragione, ma è difficile." },
              { fr: "Je ne suis pas d'accord, parce que le métro est plus rapide.", it: "Non sono d'accordo, perché il metrò è più veloce." },
              { fr: "Qu'est-ce que tu en penses ? — Ça dépend du prix.", it: "Cosa ne pensi? — Dipende dal prezzo." },
              { fr: "Je trouve que les Parisiens sont plus gentils qu'on dit.", it: "Trovo che i parigini siano più gentili di quanto si dica." }
            ]
          },
          practice: [
            { t: "mcq", q: "Come inizi un'opinione?", opts: ["À mon avis…", "À mon avis je pense…", "Pour mon avis…", "Dans mon avis…"], a: 0, why: "À mon avis = secondo me." },
            { t: "mcq", q: "«Tu as tort» significa…", opts: ["Hai torto.", "Hai ragione.", "Hai una torta.", "Sei stanco."], a: 0, why: "Avoir tort = avere torto." },
            { t: "listen", say: "Je préfère le train parce que c'est plus écologique et plus confortable.", q: "Perché preferisce il treno?", opts: ["Perché è più ecologico e comodo.", "Perché è più veloce.", "Perché costa meno.", "Perché ha paura dell'aereo."], a: 0, why: "Parce que c'est plus écologique." },
            { t: "match", q: "Abbina", pairs: [["à mon avis", "secondo me"], ["être d'accord", "essere d'accordo"], ["avoir raison", "avere ragione"], ["parce que", "perché"]] },
            { t: "order", q: "Riordina: «Non sono d'accordo con te.»", words: ["Je", "ne", "suis", "pas", "d'accord", "avec", "toi."], why: "Être d'accord avec quelqu'un." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Je pense que c'___ une bonne idée.»", opts: ["est", "soit", "sera", "être"], a: 0, why: "Dopo je pense que: indicativo." },
            { t: "mcq", q: "Come chiedi l'opinione di un amico?", opts: ["Qu'est-ce que tu en penses ?", "Qu'est-ce que tu penses de ça en ?", "Tu penses quoi de ?", "Comment tu penses ?"], a: 0, why: "Qu'est-ce que tu en penses ?" },
            { t: "mcq", q: "Sei parzialmente d'accordo. Dici:", opts: ["Oui, mais ça dépend.", "Exactement !", "Tu as tort.", "Pas du tout !"], a: 0, why: "Oui, mais… / ça dépend." },
            { t: "mcq", q: "«Être pour les pizzas» significa…", opts: ["essere a favore delle pizze", "essere per le pizze (destinatario)", "mangiare le pizze", "essere contro le pizze"], a: 0, why: "Être pour = essere a favore." },
            { t: "listen", say: "À mon avis, la confiserie doit ouvrir tous les jours, parce que les gens adorent les bonbons.", q: "Cosa pensa Léa?", opts: ["La confetteria deve aprire tutti i giorni perché la gente adora le caramelle.", "La confetteria deve chiudere la domenica.", "La confetteria deve vendere pizze.", "La confetteria è troppo piccola."], a: 0, why: "À mon avis… parce que…" },
            { t: "listen", say: "Je suis d'accord avec toi : il faut protéger les petits commerces.", q: "Su cosa è d'accordo?", opts: ["Bisogna proteggere i piccoli negozi.", "Bisogna andare al supermercato.", "I piccoli negozi sono troppo cari.", "Bisogna chiudere i piccoli negozi."], a: 0, why: "Je suis d'accord." },
            { t: "listen", say: "Le concert était génial, mais le son était vraiment nul.", q: "Com'era il concerto?", opts: ["Fantastico, ma con un audio pessimo.", "Pessimo, ma con un ottimo audio.", "Fantastico in tutto.", "Noioso e troppo lungo."], a: 0, why: "Génial / nul." },
            { t: "type", q: "Completa: «Tu as ___, c'est une excellente idée !» (ragione)", a: ["raison"], why: "Avoir raison." },
            { t: "type", q: "Completa: «Je suis ___ accord avec toi.»", a: ["d'"], why: "Être d'accord." },
            { t: "type", say: "Franchement, je ne comprends pas pourquoi ce restaurant est si cher.", q: "Ascolta e completa: «___, je ne comprends pas pourquoi ce restaurant est si cher.»", a: ["Franchement"], why: "Franchement = francamente." },
            { t: "order", q: "Riordina: «Secondo me Parigi è più bella in primavera.»", words: ["À", "mon", "avis,", "Paris", "est", "plus", "belle", "au", "printemps."], why: "À mon avis + opinione." },
            { t: "match", q: "Abbina", pairs: [["pour", "a favore"], ["contre", "contro"], ["génial", "fantastico"], ["nul", "pessimo"]] }
          ],
          recap: {
            can: ["Dare la tua opinione con varie formule", "Motivare con parce que", "Dire se sei d'accordo, in disaccordo o a metà", "Chiedere l'opinione degli altri"],
            phrases: [{ fr: "À mon avis, c'est une très bonne idée.", it: "Secondo me è un'ottima idea." }, { fr: "Je ne suis pas d'accord, parce que c'est trop cher.", it: "Non sono d'accordo, perché è troppo caro." }, { fr: "Qu'est-ce que tu en penses ? — Tu as raison.", it: "Cosa ne pensi? — Hai ragione." }],
            trap: "Dopo JE PENSE QUE si usa l'indicativo (je pense que c'EST vrai), non il congiuntivo come in italiano («penso che SIA vero»)."
          }
        },
        /* ---------------- LEZIONE 10-3 ---------------- */
        {
          id: "10-3", street: "Rue des Comparaisons", title: "Confrontare: plus, moins, aussi, meilleur",
          goal: "Confrontare persone, cose e luoghi con plus / moins / aussi… que, usare meilleur e mieux e il superlativo.",
          episode: {
            title: "La sfida dei dolci",
            intro: "Tardo pomeriggio. Madame Pons, arrivata in treno da Roussillon con un cesto di dolci provenzali, lancia una sfida: i calissons di Zizì contro le sfogliatelle napoletane di Gigi. Giuria: tutto il quartiere. Croissant si autoproclama presidente.",
            lines: [
              { who: "Mme Pons", fr: "Les calissons de Provence sont plus délicats que tous les gâteaux d'Italie !", it: "I calissons della Provenza sono più delicati di tutti i dolci d'Italia!" },
              { who: "Gigi", fr: "Peut-être, mais la sfogliatella est plus croustillante et beaucoup moins sucrée.", it: "Forse, ma la sfogliatella è più croccante e molto meno dolce." },
              { who: "Léa", fr: "Moi, je trouve les deux aussi bons. Le calisson est aussi parfumé que la sfogliatella.", it: "Io li trovo buoni allo stesso modo. Il calisson è profumato quanto la sfogliatella." },
              { who: "M. Dubois", fr: "En tant que médecin, je dis que le meilleur gâteau, c'est le plus petit !", it: "Da medico, dico che il dolce migliore è il più piccolo!" },
              { who: "Mme Lefèvre", fr: "Gigi fait la sfogliatella mieux que tous les pâtissiers de Paris. C'est la meilleure !", it: "Gigi fa la sfogliatella meglio di tutti i pasticcieri di Parigi. È la migliore!" },
              { who: "Mme Pons", fr: "Et Paris ? C'est plus grand que Roussillon, mais c'est beaucoup moins calme.", it: "E Parigi? È più grande di Roussillon, ma molto meno tranquilla." },
              { who: "Croissant", fr: "Verdict du président : le meilleur dessert, c'est le beurre. Le plus intelligent du café, c'est moi.", it: "Verdetto del presidente: il dolce migliore è il burro. Il più intelligente del caffè sono io." },
              { who: "Gigi", fr: "Égalité, alors ! Le calisson et la sfogliatella seront vendus ensemble, comme Paris et Naples.", it: "Pareggio, allora! Il calisson e la sfogliatella saranno venduti insieme, come Parigi e Napoli." }
            ],
            outro: "La sfida finisce in pareggio e in un grande applauso. Da domani, nella vetrina del Petit Bonheur ci saranno calissons e sfogliatelle uno accanto all'altro, con un cartellino scritto da Françoise: «Le meilleur de deux pays». La festa sta per finire. Gigi ha ancora una cosa da fare: scrivere una lettera.",
            you: "«{nome}, per confrontare bastano tre parole: PLUS (più), MOINS (meno), AUSSI (tanto), sempre con QUE: plus grand que. Attenzione solo a «bon»: non si dice «plus bon», ma MEILLEUR. Proprio come in italiano «migliore»!»",
            mine: { fr: "Je m'appelle {nome} et, à mon avis, le français est plus élégant que l'anglais, mais il est aussi plus difficile.", it: "Mi chiamo {nome} e secondo me il francese è più elegante dell'inglese, ma è anche più difficile." }
          },
          words: [
            { fr: "plus… que", it: "più… di", say: "plü… kə", hook: "PLUS + aggettivo + QUE = più… di. Paris est plus grand QUE Lyon. La S di plus è muta davanti a consonante.",
              ex: { fr: "Le TGV est beaucoup plus rapide que la voiture pour aller à Marseille.", it: "Il TGV è molto più veloce della macchina per andare a Marsiglia." } },
            { fr: "moins… que", it: "meno… di", say: "mwẽ… kə", hook: "MOINS = meno (ricordi «midi moins le quart»?). Le métro est moins cher QUE le taxi.",
              ex: { fr: "La vie à la campagne est moins chère et moins stressante qu'en ville.", it: "La vita in campagna è meno cara e meno stressante che in città." } },
            { fr: "aussi… que", it: "tanto… quanto", say: "osì… kə", hook: "AUSSI = anche, ma nei confronti significa «tanto quanto»: il est aussi grand QUE moi.",
              ex: { fr: "Mon frère est aussi grand que mon père, mais il est plus mince.", it: "Mio fratello è alto quanto mio padre, ma è più magro." } },
            { fr: "meilleur(e)", it: "migliore", say: "mèjör", hook: "BON → MEILLEUR (mai «plus bon»!), come buono → migliore. Il meglio di tutti: le meilleur, la meilleure.",
              ex: { fr: "Ce croissant est meilleur que celui de la boulangerie d'en face.", it: "Questo croissant è migliore di quello della panetteria di fronte." } },
            { fr: "mieux", it: "meglio", say: "mjö", hook: "MIEUX = meglio: è il comparativo di BIEN (avverbio). Elle chante mieux que moi. Je vais mieux = sto meglio.",
              ex: { fr: "Gigi parle français beaucoup mieux qu'il y a trois mois.", it: "Gigi parla francese molto meglio di tre mesi fa." } },
            { fr: "le plus / le moins", it: "il più / il meno", say: "lə plü / lə mwẽ", hook: "SUPERLATIVO: le / la / les + plus + aggettivo. La tour Eiffel est le monument le plus visité de Paris.",
              ex: { fr: "C'est le quartier le plus animé et le moins cher de la ville.", it: "È il quartiere più vivace e meno caro della città." } },
            { fr: "beaucoup plus", it: "molto più", say: "boku plü", hook: "Per rinforzare: BEAUCOUP plus, BEAUCOUP moins. Mai «très plus»!",
              ex: { fr: "Ce restaurant est beaucoup plus cher, mais la cuisine est incroyable.", it: "Questo ristorante è molto più caro, ma la cucina è incredibile." } },
            { fr: "le / la même", it: "lo stesso / la stessa", say: "lə / la mèm", hook: "MÊME = stesso (e anche «perfino»). Nous avons le même âge = abbiamo la stessa età.",
              ex: { fr: "Léa et moi avons le même âge et les mêmes goûts.", it: "Léa e io abbiamo la stessa età e gli stessi gusti." } },
            { fr: "croustillant", it: "croccante", say: "krustijã", hook: "CROUSTILLANT: fa «crusc» sotto i denti! Il pane francese perfetto è croustillant fuori e morbido (moelleux) dentro.",
              ex: { fr: "J'aime le pain croustillant à l'extérieur et moelleux à l'intérieur.", it: "Mi piace il pane croccante fuori e morbido dentro." } },
            { fr: "la différence", it: "la differenza", say: "la diférãs", hook: "DIFFÉRENCE = differenza. Quelle est la différence entre… ? = qual è la differenza tra…? Domanda utilissima!",
              ex: { fr: "Quelle est la différence entre un croissant et un pain au chocolat ?", it: "Qual è la differenza tra un croissant e un pain au chocolat?" } }
          ],
          tip: {
            title: "Plus, moins, aussi: la bilancia dei confronti",
            body: "<div class='tbl'><table><thead><tr><th>Confronto</th><th>Struttura</th><th>Esempio</th></tr></thead><tbody><tr><td>superiorità</td><td>plus + agg. + que</td><td>Paris est plus grand que Naples.</td></tr><tr><td>inferiorità</td><td>moins + agg. + que</td><td>Le bus est moins rapide que le métro.</td></tr><tr><td>uguaglianza</td><td>aussi + agg. + que</td><td>Léa est aussi gentille que Gigi.</td></tr><tr><td>superlativo</td><td>le / la / les plus + agg.</td><td>C'est la rue la plus belle.</td></tr><tr><td>bon (agg.)</td><td>meilleur(e)(s)</td><td>Ce gâteau est meilleur.</td></tr><tr><td>bien (avv.)</td><td>mieux</td><td>Il cuisine mieux que moi.</td></tr></tbody></table></div><ul><li><b>Bon → meilleur</b> (aggettivo: un meilleur gâteau); <b>bien → mieux</b> (avverbio: il chante mieux).</li><li>L'aggettivo si accorda: elle est plus grand<b>e</b>, ils sont plus grand<b>s</b>.</li><li>Con i nomi: <b>plus de / moins de / autant de</b> + nome: plus de touristes, autant d'amis.</li></ul>",
            examples: [
              { fr: "Le Louvre est plus grand que le musée d'Orsay.", it: "Il Louvre è più grande del museo d'Orsay." },
              { fr: "En été, il fait moins chaud en Bretagne qu'en Provence.", it: "In estate fa meno caldo in Bretagna che in Provenza." },
              { fr: "Ta pizza est meilleure que la mienne !", it: "La tua pizza è migliore della mia!" },
              { fr: "Elle parle français mieux que son professeur.", it: "Parla francese meglio della sua insegnante." },
              { fr: "C'est le meilleur café de tout Montmartre.", it: "È il miglior caffè di tutta Montmartre." }
            ]
          },
          practice: [
            { t: "mcq", q: "Completa: «Paris est ___ grand que Lyon.»", opts: ["plus", "plus de", "très", "beaucoup"], a: 0, why: "Plus + aggettivo + que." },
            { t: "mcq", q: "Come si dice «migliore»?", opts: ["meilleur", "plus bon", "mieux", "plus bien"], a: 0, why: "Bon → meilleur." },
            { t: "listen", say: "Le TGV est beaucoup plus rapide que la voiture pour aller à Marseille.", q: "Cosa è più veloce?", opts: ["Il TGV", "La macchina", "L'aereo", "L'autobus"], a: 0, why: "Plus rapide que = più veloce di." },
            { t: "match", q: "Abbina", pairs: [["plus… que", "più… di"], ["moins… que", "meno… di"], ["aussi… que", "tanto… quanto"], ["meilleur", "migliore"]] },
            { t: "order", q: "Riordina: «Mio fratello è alto quanto mio padre.»", words: ["Mon", "frère", "est", "aussi", "grand", "que", "mon", "père."], why: "Aussi + aggettivo + que." }
          ],
          test: [
            { t: "mcq", q: "Completa: «Elle chante ___ que moi.» (meglio)", opts: ["mieux", "meilleur", "plus bien", "meilleure"], a: 0, why: "Avverbio: bien → mieux." },
            { t: "mcq", q: "Completa: «Cette tarte est ___ que l'autre.» (migliore)", opts: ["meilleure", "mieux", "plus bonne", "meilleur"], a: 0, why: "Aggettivo femminile: meilleure." },
            { t: "mcq", q: "Come si dice «il monumento più visitato»?", opts: ["le monument le plus visité", "le plus monument visité", "le monument plus visité que", "le monument très visité"], a: 0, why: "Le / la + nome + le / la plus + aggettivo." },
            { t: "mcq", q: "«Beaucoup moins cher» significa…", opts: ["molto meno caro", "molto più caro", "caro allo stesso modo", "carissimo"], a: 0, why: "Beaucoup + moins." },
            { t: "listen", say: "La vie à la campagne est moins chère et moins stressante qu'en ville.", q: "Com'è la vita in campagna?", opts: ["Meno cara e meno stressante che in città", "Più cara e più stressante", "Uguale a quella in città", "Più noiosa che in città"], a: 0, why: "Moins chère, moins stressante." },
            { t: "listen", say: "Gigi parle français beaucoup mieux qu'il y a trois mois.", q: "Cosa è cambiato per Gigi?", opts: ["Parla francese molto meglio di tre mesi fa.", "Parla francese peggio di prima.", "Parla italiano meglio del francese.", "Ha cominciato il francese tre mesi fa."], a: 0, why: "Beaucoup mieux = molto meglio." },
            { t: "listen", say: "Léa et moi avons le même âge et les mêmes goûts.", q: "Cosa hanno in comune?", opts: ["La stessa età e gli stessi gusti", "Lo stesso lavoro", "La stessa famiglia", "La stessa casa"], a: 0, why: "Le même âge, les mêmes goûts." },
            { t: "type", q: "Completa: «Le métro est ___ cher que le taxi.» (meno)", a: ["moins"], why: "Moins + aggettivo + que." },
            { t: "type", q: "Completa: «C'est le ___ café de Paris !» (migliore)", a: ["meilleur"], why: "Le meilleur." },
            { t: "type", say: "J'aime le pain croustillant à l'extérieur et moelleux à l'intérieur.", q: "Ascolta e completa: «J'aime le pain ___ à l'extérieur.» (croccante)", a: ["croustillant"], why: "Croustillant = croccante." },
            { t: "order", q: "Riordina: «Questo croissant è migliore di quello di fronte.»", words: ["Ce", "croissant", "est", "meilleur", "que", "celui", "d'en", "face."], why: "Meilleur que." },
            { t: "match", q: "Abbina", pairs: [["bon", "meilleur"], ["bien", "mieux"], ["le plus", "il più"], ["le même", "lo stesso"]] }
          ],
          recap: {
            can: ["Confrontare con plus, moins, aussi… que", "Usare meilleur (bon) e mieux (bien)", "Formare il superlativo: le plus, le moins", "Rinforzare con beaucoup plus / beaucoup moins"],
            phrases: [{ fr: "Paris est plus grand que Naples, mais moins calme.", it: "Parigi è più grande di Napoli, ma meno tranquilla." }, { fr: "Ta pizza est meilleure que la mienne.", it: "La tua pizza è migliore della mia." }, { fr: "C'est le meilleur café de tout le quartier.", it: "È il miglior caffè di tutto il quartiere." }],
            trap: "Mai «plus bon»: si dice MEILLEUR. E MEILLEUR è un aggettivo (un meilleur gâteau), MIEUX un avverbio (il cuisine mieux)."
          }
        },
        /* ---------------- LEZIONE 10-4 ---------------- */
        {
          id: "10-4", street: "Rue de la Lettre", title: "Scrivere un messaggio e una lettera",
          goal: "Scrivere un messaggio o una lettera in francese, formale o informale, con le formule giuste di apertura e di chiusura.",
          episode: {
            title: "La lettera di Gigi",
            intro: "È sera. Gli ultimi invitati sono andati via, le sedie sono sui tavoli, l'insegna blu brilla nella strada vuota. Gigi si siede al bancone con un foglio, una penna e il quaderno di Zizì. Vuole scrivere ai suoi genitori a Napoli. In francese, per dimostrare quanto ha imparato. Léa lo aiuta. Croissant detta.",
            lines: [
              { who: "Gigi", fr: "Comment je commence ? « Chers papa et maman », c'est correct en français ?", it: "Come comincio? «Cari papà e mamma», è corretto in francese?" },
              { who: "Léa", fr: "Oui, c'est parfait pour la famille. Pour une lettre officielle, on écrit « Madame, Monsieur ».", it: "Sì, è perfetto per la famiglia. Per una lettera ufficiale si scrive «Madame, Monsieur»." },
              { who: "Gigi", fr: "« Je vous écris pour vous raconter une belle nouvelle : aujourd'hui, nous avons ouvert le Petit Bonheur. »", it: "«Vi scrivo per raccontarvi una bella notizia: oggi abbiamo aperto il Petit Bonheur.»" },
              { who: "Gigi", fr: "« Quand je suis arrivé à Paris, je ne parlais pas français et je ne connaissais personne. »", it: "«Quando sono arrivato a Parigi non parlavo francese e non conoscevo nessuno.»" },
              { who: "Gigi", fr: "« Maintenant, j'ai une cousine, des amis, un café… et un chat très bavard. »", it: "«Adesso ho una cugina, degli amici, un caffè… e un gatto molto chiacchierone.»" },
              { who: "Croissant", fr: "Écris aussi : « Le chat est le vrai patron du café. » C'est important pour l'histoire.", it: "Scrivi anche: «Il gatto è il vero padrone del caffè.» È importante per la storia." },
              { who: "Léa", fr: "Et pour finir ? Avec la famille, on écrit « Je vous embrasse » ou « Grosses bises ».", it: "E per finire? Con la famiglia si scrive «Vi abbraccio» o «Bacioni»." },
              { who: "Gigi", fr: "« Venez nous voir bientôt. Je vous embrasse très fort. Votre fils, Gigi. »", it: "«Venite a trovarci presto. Vi abbraccio fortissimo. Vostro figlio, Gigi.»" }
            ],
            outro: "Gigi piega la lettera e la mette in una busta, accanto a una sfogliatella e a un calisson incartati con il nastro blu. Spegne le luci. Croissant si arrotola sulla sua poltrona preferita, quella vicino alla vetrina, dove un tempo dormiva accanto a Zizì. Fuori, Montmartre si addormenta. Fin de la première saison.",
            you: "«{nome}, ce l'hai fatta: hai attraversato tutti i dieci arrondissement! Adesso tocca a te scrivere. Usa la tua frase qui sotto come inizio di una vera lettera a qualcuno. Il B1 ti aspetta, e io, naturalmente, resto qui: il vero padrone del caffè sono io.»",
            mine: { fr: "Chère Camille, je m'appelle {nome}, j'ai {eta} ans et je t'écris en français pour la première fois. Grosses bises !", it: "Cara Camille, mi chiamo {nome}, ho {eta} anni e ti scrivo in francese per la prima volta. Bacioni!" }
          },
          words: [
            { fr: "Cher / Chère…", it: "Caro / Cara…", say: "shèr", hook: "CHER (maschile) e CHÈRE (femminile) si pronunciano uguali: «shèr». Chers amis (plurale). Lo stesso «cher» di «caro» (prezzo)!",
              ex: { fr: "Chère Françoise, merci pour cette journée inoubliable.", it: "Cara Françoise, grazie per questa giornata indimenticabile." } },
            { fr: "Madame, Monsieur", it: "Gentile signora, egregio signore", say: "madam, məsjö", hook: "Per una lettera formale a una persona sconosciuta: «Madame, Monsieur,». Senza «cher» e senza nome!",
              ex: { fr: "Madame, Monsieur, je vous écris pour réserver une chambre du 3 au 5 mai.", it: "Gentili signori, vi scrivo per prenotare una camera dal 3 al 5 maggio." } },
            { fr: "Je vous écris pour…", it: "Vi / Le scrivo per…", say: "jə vu zekrì pur", hook: "La frase d'apertura di ogni lettera: JE VOUS ÉCRIS POUR + infinito. Je t'écris pour (informale).",
              ex: { fr: "Je vous écris pour vous demander des informations sur vos cours de français.", it: "Le scrivo per chiederle informazioni sui suoi corsi di francese." } },
            { fr: "la nouvelle", it: "la notizia", say: "la nuvèl", hook: "LA NOUVELLE = la notizia (una cosa «nuova»). Les nouvelles = le notizie, il telegiornale. Une bonne nouvelle!",
              ex: { fr: "J'ai une bonne nouvelle : j'ai réussi mon examen de français !", it: "Ho una bella notizia: ho superato il mio esame di francese!" } },
            { fr: "connaître", it: "conoscere", say: "konètr", hook: "CONNAÎTRE = conoscere (persone, luoghi): je connais Paris. Il cappellino sulla Î ricorda la S di «conoscere».",
              ex: { fr: "Quand je suis arrivé, je ne connaissais personne dans le quartier.", it: "Quando sono arrivato non conoscevo nessuno nel quartiere." } },
            { fr: "Je vous embrasse", it: "Vi abbraccio", say: "jə vu zãbras", hook: "EMBRASSER = abbracciare / baciare. In una lettera ai familiari: «Je vous embrasse» = vi abbraccio forte.",
              ex: { fr: "Merci pour tout. Je vous embrasse très fort, à bientôt !", it: "Grazie di tutto. Vi abbraccio fortissimo, a presto!" } },
            { fr: "Bises / Grosses bises", it: "Baci / Bacioni", say: "bìz / gròs bìz", hook: "LA BISE è il bacio sulla guancia dei francesi (uno, due, tre o quattro, dipende dalla regione!). In un messaggio: Bises!",
              ex: { fr: "On se voit samedi pour le cinéma ? Grosses bises, Léa.", it: "Ci vediamo sabato per il cinema? Bacioni, Léa." } },
            { fr: "Cordialement", it: "Cordiali saluti", say: "kòrdjalmã", hook: "CORDIALEMENT: la chiusura standard delle email formali. Più formale ancora: «Je vous prie d'agréer mes salutations distinguées».",
              ex: { fr: "Merci d'avance pour votre réponse. Cordialement, Marco Rossi.", it: "Grazie in anticipo per la sua risposta. Cordiali saluti, Marco Rossi." } },
            { fr: "À bientôt / Amitiés", it: "A presto / Un caro saluto", say: "a bjẽtò / amitjé", hook: "À BIENTÔT lo conosci dalla lezione 2! AMITIÉS = «amicizie», un saluto caldo ma non troppo intimo.",
              ex: { fr: "J'espère te voir cet été à Paris. Amitiés, Gigi.", it: "Spero di vederti quest'estate a Parigi. Un caro saluto, Gigi." } },
            { fr: "la lettre / le message", it: "la lettera / il messaggio", say: "la lètr / lə mesaj", hook: "LA LETTRE: la lettera (anche dell'alfabeto). LE MESSAGE: il messaggio (un SMS, un message vocal).",
              ex: { fr: "Aujourd'hui on écrit des messages, mais une vraie lettre fait toujours plaisir.", it: "Oggi si scrivono messaggi, ma una vera lettera fa sempre piacere." } }
          ],
          tip: {
            title: "Scrivere come un francese: formale e informale",
            body: "<div class='tbl'><table><thead><tr><th></th><th>Informale (amici, famiglia)</th><th>Formale (ufficio, albergo, sconosciuti)</th></tr></thead><tbody><tr><td>Apertura</td><td>Cher Paul, / Chère Léa, / Salut !</td><td>Madame, Monsieur, / Madame Dupont,</td></tr><tr><td>Prima frase</td><td>Je t'écris pour te dire que…</td><td>Je vous écris pour vous demander…</td></tr><tr><td>Ringraziare</td><td>Merci pour tout !</td><td>Je vous remercie de votre réponse.</td></tr><tr><td>Chiusura</td><td>Bises / Grosses bises / Je t'embrasse</td><td>Cordialement / Bien cordialement</td></tr><tr><td>Firma</td><td>Ton ami(e), Marco</td><td>Marco Rossi</td></tr></tbody></table></div><ul><li>Dopo l'apertura si mette la <b>virgola</b> e si va a capo: «Chère Léa,».</li><li>Nelle lettere formali usa sempre <b>vous</b>; con amici e famiglia <b>tu</b> (o vous al plurale).</li><li>All'esame B1 c'è sempre una prova scritta: <b>messaggio, email o lettera</b> di circa 160 parole. Le formule di questa pagina valgono già molti punti!</li></ul>",
            examples: [
              { fr: "Cher Paul, je t'écris pour t'inviter à ma fête d'anniversaire.", it: "Caro Paul, ti scrivo per invitarti alla mia festa di compleanno." },
              { fr: "Madame, Monsieur, je souhaite réserver une table pour quatre personnes.", it: "Gentili signori, desidero prenotare un tavolo per quattro persone." },
              { fr: "Merci beaucoup pour ton cadeau, il est magnifique !", it: "Grazie mille per il tuo regalo, è magnifico!" },
              { fr: "Je vous remercie par avance de votre aide. Cordialement.", it: "La ringrazio in anticipo per il suo aiuto. Cordiali saluti." },
              { fr: "J'ai hâte de te revoir. Grosses bises, Léa.", it: "Non vedo l'ora di rivederti. Bacioni, Léa." }
            ]
          },
          practice: [
            { t: "mcq", q: "Come inizi una lettera formale a uno sconosciuto?", opts: ["Madame, Monsieur,", "Cher Monsieur Inconnu,", "Salut Madame,", "Bonjour toi,"], a: 0, why: "Madame, Monsieur, è la formula standard." },
            { t: "mcq", q: "Quale chiusura è adatta a un'email di lavoro?", opts: ["Cordialement", "Grosses bises", "Je t'embrasse", "Bisous"], a: 0, why: "Cordialement = cordiali saluti." },
            { t: "listen", say: "Merci pour tout. Je vous embrasse très fort, à bientôt !", q: "A chi probabilmente scrive?", opts: ["Ai familiari o ad amici stretti", "A un albergo", "A un ufficio pubblico", "Al suo capo"], a: 0, why: "Je vous embrasse è affettuoso." },
            { t: "match", q: "Abbina", pairs: [["Cher Paul,", "informale"], ["Madame, Monsieur,", "formale"], ["Grosses bises", "informale"], ["Cordialement", "formale"]] },
            { t: "order", q: "Riordina: «Le scrivo per chiederle informazioni.»", words: ["Je", "vous", "écris", "pour", "vous", "demander", "des", "informations."], why: "Je vous écris pour + infinito." }
          ],
          test: [
            { t: "mcq", q: "Come si scrive «Cara Léa,»?", opts: ["Chère Léa,", "Cher Léa,", "Chèrie Léa,", "Chers Léa,"], a: 0, why: "Femminile: chère." },
            { t: "mcq", q: "«La nouvelle» in una lettera è…", opts: ["la notizia", "la novella (racconto)", "la nuova arrivata", "la novità di moda"], a: 0, why: "Une bonne nouvelle = una bella notizia." },
            { t: "mcq", q: "Scrivi a un albergo per prenotare. Quale frase usi?", opts: ["Je vous écris pour réserver une chambre.", "Je t'écris pour réserver une chambre.", "Salut, je veux une chambre.", "Coucou, une chambre stp."], a: 0, why: "Formale: vous." },
            { t: "mcq", q: "Completa: «Quand je suis arrivé, je ne ___ personne.» (conoscevo)", opts: ["connaissais", "connais", "ai connu", "connaîtrai"], a: 0, why: "Situazione nel passato: imparfait." },
            { t: "listen", say: "Madame, Monsieur, je vous écris pour réserver une chambre du 3 au 5 mai.", q: "Perché scrive?", opts: ["Per prenotare una camera dal 3 al 5 maggio.", "Per annullare una prenotazione.", "Per lamentarsi della camera.", "Per chiedere un lavoro."], a: 0, why: "Réserver une chambre." },
            { t: "listen", say: "J'ai une bonne nouvelle : j'ai réussi mon examen de français !", q: "Qual è la bella notizia?", opts: ["Ha superato l'esame di francese.", "Ha trovato lavoro a Parigi.", "Si sposa.", "Ha vinto un viaggio."], a: 0, why: "J'ai réussi mon examen." },
            { t: "listen", say: "Merci d'avance pour votre réponse. Cordialement, Marco Rossi.", q: "Che tipo di messaggio è?", opts: ["Un messaggio formale", "Un messaggio tra amici", "Un messaggio d'amore", "Un messaggio ai genitori"], a: 0, why: "Cordialement = formale." },
            { t: "type", q: "Completa: «Je vous ___ pour vous remercier.» (scrivo)", a: ["écris", "ecris"], why: "Je vous écris." },
            { t: "type", q: "Completa la chiusura informale: «Grosses ___, Léa.»", a: ["bises"], why: "Grosses bises = bacioni." },
            { t: "type", say: "Quand je suis arrivé, je ne connaissais personne dans le quartier.", q: "Ascolta e completa: «Je ne ___ personne dans le quartier.»", a: ["connaissais"], why: "Connaître all'imparfait." },
            { t: "order", q: "Riordina: «Caro Paul, ti scrivo per invitarti alla mia festa.»", words: ["Cher", "Paul,", "je", "t'écris", "pour", "t'inviter", "à", "ma", "fête."], why: "Informale: je t'écris pour…" },
            { t: "match", q: "Abbina", pairs: [["la lettre", "la lettera"], ["la nouvelle", "la notizia"], ["connaître", "conoscere"], ["Je vous embrasse", "Vi abbraccio"]] }
          ],
          recap: {
            can: ["Scrivere un messaggio informale ad amici e familiari", "Scrivere una lettera o email formale", "Usare le formule giuste di apertura e chiusura", "Raccontare per scritto una notizia mescolando passato e presente"],
            phrases: [{ fr: "Chère Léa, je t'écris pour te dire une bonne nouvelle.", it: "Cara Léa, ti scrivo per darti una bella notizia." }, { fr: "Madame, Monsieur, je vous écris pour réserver une chambre.", it: "Gentili signori, vi scrivo per prenotare una camera." }, { fr: "Merci pour tout. Je vous embrasse. Grosses bises !", it: "Grazie di tutto. Vi abbraccio. Bacioni!" }],
            trap: "Con gli sconosciuti: «Madame, Monsieur,» e «Cordialement». Mai «Cher Monsieur» con chi non conosci, e mai «bises» al tuo capo!"
          }
        }
      ]
    }
  ]
};
