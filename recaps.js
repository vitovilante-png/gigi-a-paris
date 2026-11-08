/* ===== RIEPILOGHI =====
   Per ogni lezione: can (cosa sai fare ora), phrases (frasi chiave da ricordare), trap (l'errore da evitare).
   Il riepilogo di modulo è composto automaticamente da quelli delle lezioni. */
const RECAPS = {
  "1-1": {
    can: ["Leggere le parole francesi senza farti ingannare dalla scrittura", "Pronunciare le vocali tipiche: la U a bacio, la EU, le nasali AN, ON, IN", "Riconoscere le lettere mute in fondo alle parole", "Distinguere parole che cambiano per una sola vocale (rue / roue)"],
    phrases: [{ fr: "Bonjour, je m'appelle Croissant.", it: "Buongiorno, mi chiamo Croissant." }, { fr: "Un croissant et un pain, s'il vous plaît.", it: "Un croissant e un pane, per favore." }, { fr: "La rue est près de Paris.", it: "La strada è vicino a Parigi." }],
    trap: "Le consonanti finali di solito non si pronunciano: Paris si dice «parì», croissant «cruasã»."
  },
  "1-2": {
    can: ["Salutare a ogni ora: bonjour, bonsoir, salut", "Ringraziare, scusarti e chiedere per favore", "Chiedere e dire come stai", "Scegliere tra «tu» e «vous» secondo la persona"],
    phrases: [{ fr: "Bonjour madame, comment allez-vous ?", it: "Buongiorno signora, come sta?" }, { fr: "Salut ! Ça va ? — Très bien, merci, et toi ?", it: "Ciao! Come va? — Benissimo, grazie, e tu?" }, { fr: "Pardon, merci beaucoup et à bientôt !", it: "Scusi, grazie mille e a presto!" }],
    trap: "Con sconosciuti, negozianti e persone più grandi usa sempre «vous». «Salut» solo con gli amici."
  },
  "1-3": {
    can: ["Dire come ti chiami, da dove vieni e dove abiti", "Dire cosa fai e cosa ti piace", "Fare le stesse domande agli altri", "Collegare le frasi con «et» e «mais»"],
    phrases: [{ fr: "Je m'appelle Gigi, je suis italien et j'habite à Paris.", it: "Mi chiamo Gigi, sono italiano e abito a Parigi." }, { fr: "Je viens de Naples, mais j'aime beaucoup la France.", it: "Vengo da Napoli, ma mi piace molto la Francia." }, { fr: "Comment tu t'appelles ? Et toi, tu viens d'où ?", it: "Come ti chiami? E tu, da dove vieni?" }],
    trap: "In francese il soggetto non si omette mai: «sono italiano» è «JE suis italien», non «suis italien»."
  },
  "1-4": {
    can: ["Contare da 0 a 20", "Capire e dire prezzi semplici", "Chiedere «quanti?» e «quanto?» con combien", "Usare i numeri per età, orari e quantità"],
    phrases: [{ fr: "Combien de croissants ? — Trois, s'il vous plaît.", it: "Quanti croissant? — Tre, per favore." }, { fr: "Le café coûte deux euros.", it: "Il caffè costa due euro." }, { fr: "J'ai vingt ans et j'habite au numéro douze.", it: "Ho vent'anni e abito al numero dodici." }],
    trap: "Six e dix cambiano suono: «sis / dis» da soli, «si / di» davanti a consonante, «siz / diz» davanti a vocale."
  },
  "2-1": {
    can: ["Coniugare «être» ed «avoir» al presente", "Descriverti: sei, hai, ti senti", "Dire fame, sete, anni con «avoir»", "Fare frasi negative con ne… pas"],
    phrases: [{ fr: "Je suis italien et j'ai trente ans.", it: "Sono italiano e ho trent'anni." }, { fr: "Nous sommes fatigués, mais nous avons faim.", it: "Siamo stanchi, ma abbiamo fame." }, { fr: "Je ne suis pas gentil. Je suis élégant.", it: "Non sono gentile. Sono elegante." }],
    trap: "L'età si dice con «avoir»: j'ai vingt ans (ho vent'anni), mai «je suis vingt ans»."
  },
  "2-2": {
    can: ["Usare gli articoli le, la, l', les", "Usare un, une, des per le cose nuove", "Descrivere cosa c'è in un posto con «il y a»", "Indovinare il genere delle parole dalle loro terminazioni"],
    phrases: [{ fr: "Il y a une valise rouge dans la cave.", it: "C'è una valigia rossa in cantina." }, { fr: "Dans la valise, il y a des photos et une clé.", it: "Nella valigia ci sono delle foto e una chiave." }, { fr: "L'album et les lettres sont à Zizì.", it: "L'album e le lettere sono di Zizì." }],
    trap: "Il plurale «des» non si può omettere: «ci sono foto» → il y a DES photos."
  },
  "2-3": {
    can: ["Dire da quale paese vieni e la tua nazionalità", "Dire quali lingue parli, e quanto bene", "Usare en, au, aux davanti ai paesi", "Fare domande ai turisti"],
    phrases: [{ fr: "Je suis italien, mais j'habite en France.", it: "Sono italiano, ma abito in Francia." }, { fr: "Yuki vient du Japon et elle parle un peu français.", it: "Yuki viene dal Giappone e parla un po' di francese." }, { fr: "Tom habite aux États-Unis, à New York.", it: "Tom abita negli Stati Uniti, a New York." }],
    trap: "Paesi femminili (in -e) → EN France; maschili → AU Japon; plurali → AUX États-Unis. Le città → À Paris."
  },
  "2-4": {
    can: ["Presentare i membri della tua famiglia", "Usare i possessivi mon, ma, mes, ton, ta, tes, son, sa, ses", "Raccontare chi è chi in una foto", "Evitare le trappole parents / parenti e cousin / coussin"],
    phrases: [{ fr: "Mon père et ma mère habitent en Italie.", it: "Mio padre e mia madre abitano in Italia." }, { fr: "Mes parents ont deux enfants : mon frère et moi.", it: "I miei genitori hanno due figli: mio fratello e io." }, { fr: "Françoise est ma cousine.", it: "Françoise è mia cugina." }],
    trap: "Niente articolo davanti al possessivo: «la mia mamma» → ma mère. E davanti a vocale: mon amie."
  },
  "3-1": {
    can: ["Ordinare al bar con «je voudrais… s'il vous plaît»", "Rispondere a «Et avec ça ?» e «sur place ou à emporter ?»", "Chiedere il conto e dire come paghi", "Sapere cosa ordinare: café, café crème, thé, carafe d'eau"],
    phrases: [{ fr: "Je voudrais un café crème et un croissant, s'il vous plaît.", it: "Vorrei un caffè crème e un croissant, per favore." }, { fr: "C'est tout, merci. L'addition, s'il vous plaît.", it: "È tutto, grazie. Il conto, per favore." }, { fr: "Je paie par carte. — Sur place ou à emporter ?", it: "Pago con la carta. — Qui o da portare via?" }],
    trap: "Al bar non dire «je veux» (troppo brusco) né «garçon!» (maleducato): «je voudrais» e «s'il vous plaît»."
  },
  "3-2": {
    can: ["Coniugare al presente i verbi in -er", "Raccontare cosa fai: parler, habiter, travailler, aimer", "Dire cosa cerchi e cosa trovi", "Dire da quanto tempo con «depuis»"],
    phrases: [{ fr: "J'habite et je travaille dans cette rue depuis vingt ans.", it: "Abito e lavoro in questa strada da vent'anni." }, { fr: "Nous cherchons une porte verte, mais nous ne trouvons pas la rue.", it: "Cerchiamo una porta verde, ma non troviamo la strada." }, { fr: "Ils parlent français et ils aiment le quartier.", it: "Parlano francese e amano il quartiere." }],
    trap: "La desinenza -ENT di «ils parlent» è muta: si dice «il parl». Si sentono solo -ONS (nous) ed -EZ (vous)."
  },
  "3-3": {
    can: ["Contare fino a 100", "Capire 70, 80 e 90 alla francese", "Capire e dire un prezzo con euro e centesimi", "Chiedere quanto costa e comprare al mercato"],
    phrases: [{ fr: "Combien coûtent ces pommes ? — Trois euros quarante le kilo.", it: "Quanto costano queste mele? — Tre euro e quaranta al chilo." }, { fr: "Je voudrais un kilo de pommes et six œufs.", it: "Vorrei un chilo di mele e sei uova." }, { fr: "Ça fait douze euros cinquante. Ce n'est pas cher !", it: "Sono dodici euro e cinquanta. Non è caro!" }],
    trap: "70 = soixante-dix (60 + 10), 80 = quatre-vingts (4 × 20), 90 = quatre-vingt-dix (4 × 20 + 10): aspetta la fine del numero!"
  },
  "3-4": {
    can: ["Dire cosa adori, ami, preferisci e detesti", "Graduare i gusti, da «j'adore» a «je déteste»", "Rispondere «moi aussi» e «moi non plus»", "Descrivere un sapore: sucré, salé, délicieux, trop…"],
    phrases: [{ fr: "J'adore le fromage, mais je préfère la mozzarella.", it: "Adoro il formaggio, ma preferisco la mozzarella." }, { fr: "Je n'aime pas le roquefort. — Moi non plus !", it: "Non mi piace il roquefort. — Neanche a me!" }, { fr: "C'est délicieux, pas trop sucré.", it: "È delizioso, non troppo dolce." }],
    trap: "Dopo i verbi di gusto ci vuole sempre l'articolo: j'aime LE café. E «j'aime bien» è più debole di «j'aime»!"
  }
};
