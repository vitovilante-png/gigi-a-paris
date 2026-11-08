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
    { n: 7, arr: "7e", name: "Raconter", it: "Raccontare", level: "A2", soon: "Passé composé con avoir ed être · Il weekend · Le date" },
    { n: 8, arr: "8e", name: "Faire les courses", it: "Fare la spesa", level: "A2", soon: "Negozi e quantità · Partitivo · Taglie · Pronomi" },
    { n: 9, arr: "9e", name: "Santé", it: "Salute", level: "A2", soon: "In farmacia · Dal medico · Il corpo · Il faut" },
    { n: 10, arr: "10e", name: "Vers le B1", it: "Verso il B1", level: "A2", soon: "Imparfait · Opinioni · Comparativi · Scrivere un messaggio" }
  ]
};
