const SESSION_LENGTH = 20;

const personMeta = {
  ja_m: {
    person: "ja",
    label: "ja — męski",
    number: "singular",
    gender: "masculine",
    explanationPrefix: "Ja → rodzaj męski, liczba pojedyncza",
    statsLabel: "ja — męski",
  },
  ja_f: {
    person: "ja",
    label: "ja — żeński",
    number: "singular",
    gender: "feminine",
    explanationPrefix: "Ja → rodzaj żeński, liczba pojedyncza",
    statsLabel: "ja — żeński",
  },
  ty_m: {
    person: "ty",
    label: "ty — męski",
    number: "singular",
    gender: "masculine",
    explanationPrefix: "Ty → rodzaj męski, liczba pojedyncza",
    statsLabel: "ty — męski",
  },
  ty_f: {
    person: "ty",
    label: "ty — żeński",
    number: "singular",
    gender: "feminine",
    explanationPrefix: "Ty → rodzaj żeński, liczba pojedyncza",
    statsLabel: "ty — żeński",
  },
  on: {
    person: "on",
    label: "on",
    number: "singular",
    gender: "masculine",
    explanationPrefix: "On → rodzaj męski, liczba pojedyncza",
    statsLabel: "on",
  },
  ona: {
    person: "ona",
    label: "ona",
    number: "singular",
    gender: "feminine",
    explanationPrefix: "Ona → rodzaj żeński, liczba pojedyncza",
    statsLabel: "ona",
  },
  ono: {
    person: "ono",
    label: "ono",
    number: "singular",
    gender: "neuter",
    explanationPrefix: "Ono → rodzaj nijaki, liczba pojedyncza",
    statsLabel: "ono",
  },
  my_mo: {
    person: "my",
    label: "my — męskoosobowy",
    number: "plural",
    gender: "masculine-personal",
    explanationPrefix: "My → grupa męskoosobowa, liczba mnoga",
    statsLabel: "my — męskoosobowy",
  },
  my_nmo: {
    person: "my",
    label: "my — niemęskoosobowy",
    number: "plural",
    gender: "non-masculine-personal",
    explanationPrefix: "My → grupa niemęskoosobowa, liczba mnoga",
    statsLabel: "my — niemęskoosobowy",
  },
  wy_mo: {
    person: "wy",
    label: "wy — męskoosobowy",
    number: "plural",
    gender: "masculine-personal",
    explanationPrefix: "Wy → grupa męskoosobowa, liczba mnoga",
    statsLabel: "wy — męskoosobowy",
  },
  wy_nmo: {
    person: "wy",
    label: "wy — niemęskoosobowy",
    number: "plural",
    gender: "non-masculine-personal",
    explanationPrefix: "Wy → grupa niemęskoosobowa, liczba mnoga",
    statsLabel: "wy — niemęskoosobowy",
  },
  oni: {
    person: "oni",
    label: "oni",
    number: "plural",
    gender: "masculine-personal",
    explanationPrefix: "Oni → rodzaj męskoosobowy, liczba mnoga",
    statsLabel: "oni",
  },
  one: {
    person: "one",
    label: "one",
    number: "plural",
    gender: "non-masculine-personal",
    explanationPrefix: "One → rodzaj niemęskoosobowy, liczba mnoga",
    statsLabel: "one",
  },
};

function createRegularVerb(infinitive, stem, suffix = "") {
  const join = (ending) => `${stem}${ending}${suffix}`;

  return {
    infinitive,
    forms: {
      ja_m: join("łem"),
      ja_f: join("łam"),
      ty_m: join("łeś"),
      ty_f: join("łaś"),
      on: join("ł"),
      ona: join("ła"),
      ono: join("ło"),
      my_mo: join("liśmy"),
      my_nmo: join("łyśmy"),
      wy_mo: join("liście"),
      wy_nmo: join("łyście"),
      oni: join("li"),
      one: join("ły"),
    },
  };
}

const verbs = {
  być: {
    infinitive: "być",
    forms: {
      ja_m: "byłem",
      ja_f: "byłam",
      ty_m: "byłeś",
      ty_f: "byłaś",
      on: "był",
      ona: "była",
      ono: "było",
      my_mo: "byliśmy",
      my_nmo: "byłyśmy",
      wy_mo: "byliście",
      wy_nmo: "byłyście",
      oni: "byli",
      one: "były",
    },
  },
  mieć: {
    infinitive: "mieć",
    forms: {
      ja_m: "miałem",
      ja_f: "miałam",
      ty_m: "miałeś",
      ty_f: "miałaś",
      on: "miał",
      ona: "miała",
      ono: "miało",
      my_mo: "mieliśmy",
      my_nmo: "miałyśmy",
      wy_mo: "mieliście",
      wy_nmo: "miałyście",
      oni: "mieli",
      one: "miały",
    },
  },
  robić: createRegularVerb("robić", "robi"),
  iść: {
    infinitive: "iść",
    forms: {
      ja_m: "szedłem",
      ja_f: "szłam",
      ty_m: "szedłeś",
      ty_f: "szłaś",
      on: "szedł",
      ona: "szła",
      ono: "szło",
      my_mo: "szliśmy",
      my_nmo: "szłyśmy",
      wy_mo: "szliście",
      wy_nmo: "szłyście",
      oni: "szli",
      one: "szły",
    },
  },
  jechać: createRegularVerb("jechać", "jecha"),
  wracać: createRegularVerb("wracać", "wraca"),
  kupować: createRegularVerb("kupować", "kupowa"),
  gotować: createRegularVerb("gotować", "gotowa"),
  jeść: {
    infinitive: "jeść",
    forms: {
      ja_m: "jadłem",
      ja_f: "jadłam",
      ty_m: "jadłeś",
      ty_f: "jadłaś",
      on: "jadł",
      ona: "jadła",
      ono: "jadło",
      my_mo: "jedliśmy",
      my_nmo: "jadłyśmy",
      wy_mo: "jedliście",
      wy_nmo: "jadłyście",
      oni: "jedli",
      one: "jadły",
    },
  },
  pić: {
    infinitive: "pić",
    forms: {
      ja_m: "piłem",
      ja_f: "piłam",
      ty_m: "piłeś",
      ty_f: "piłaś",
      on: "pił",
      ona: "piła",
      ono: "piło",
      my_mo: "piliśmy",
      my_nmo: "piłyśmy",
      wy_mo: "piliście",
      wy_nmo: "piłyście",
      oni: "pili",
      one: "piły",
    },
  },
  czytać: createRegularVerb("czytać", "czyta"),
  pisać: createRegularVerb("pisać", "pisa"),
  oglądać: createRegularVerb("oglądać", "ogląda"),
  słuchać: createRegularVerb("słuchać", "słucha"),
  "uczyć się": createRegularVerb("uczyć się", "uczy", " się"),
  pracować: createRegularVerb("pracować", "pracowa"),
  mieszkać: createRegularVerb("mieszkać", "mieszka"),
  czekać: createRegularVerb("czekać", "czeka"),
  rozmawiać: createRegularVerb("rozmawiać", "rozmawia"),
  "spotykać się": createRegularVerb("spotykać się", "spotyka", " się"),
  odpoczywać: createRegularVerb("odpoczywać", "odpoczywa"),
  spacerować: createRegularVerb("spacerować", "spacerowa"),
  grać: createRegularVerb("grać", "gra"),
  dzwonić: createRegularVerb("dzwonić", "dzwoni"),
  sprzątać: createRegularVerb("sprzątać", "sprząta"),
  pomagać: createRegularVerb("pomagać", "pomaga"),
  brać: {
    infinitive: "brać",
    forms: {
      ja_m: "brałem",
      ja_f: "brałam",
      ty_m: "brałeś",
      ty_f: "brałaś",
      on: "brał",
      ona: "brała",
      ono: "brało",
      my_mo: "braliśmy",
      my_nmo: "brałyśmy",
      wy_mo: "braliście",
      wy_nmo: "brałyście",
      oni: "brali",
      one: "brały",
    },
  },
  dawać: createRegularVerb("dawać", "dawa"),
  widzieć: {
    infinitive: "widzieć",
    forms: {
      ja_m: "widziałem",
      ja_f: "widziałam",
      ty_m: "widziałeś",
      ty_f: "widziałaś",
      on: "widział",
      ona: "widziała",
      ono: "widziało",
      my_mo: "widzieliśmy",
      my_nmo: "widziałyśmy",
      wy_mo: "widzieliście",
      wy_nmo: "widziałyście",
      oni: "widzieli",
      one: "widziały",
    },
  },
  chcieć: {
    infinitive: "chcieć",
    forms: {
      ja_m: "chciałem",
      ja_f: "chciałam",
      ty_m: "chciałeś",
      ty_f: "chciałaś",
      on: "chciał",
      ona: "chciała",
      ono: "chciało",
      my_mo: "chcieliśmy",
      my_nmo: "chciałyśmy",
      wy_mo: "chcieliście",
      wy_nmo: "chciałyście",
      oni: "chcieli",
      one: "chciały",
    },
  },
  musieć: {
    infinitive: "musieć",
    forms: {
      ja_m: "musiałem",
      ja_f: "musiałam",
      ty_m: "musiałeś",
      ty_f: "musiałaś",
      on: "musiał",
      ona: "musiała",
      ono: "musiało",
      my_mo: "musieliśmy",
      my_nmo: "musiałyśmy",
      wy_mo: "musieliście",
      wy_nmo: "musiałyście",
      oni: "musieli",
      one: "musiały",
    },
  },
  móc: {
    infinitive: "móc",
    forms: {
      ja_m: "mogłem",
      ja_f: "mogłam",
      ty_m: "mogłeś",
      ty_f: "mogłaś",
      on: "mógł",
      ona: "mogła",
      ono: "mogło",
      my_mo: "mogliśmy",
      my_nmo: "mogłyśmy",
      wy_mo: "mogliście",
      wy_nmo: "mogłyście",
      oni: "mogli",
      one: "mogły",
    },
  },
};

function blueprint(sentence, translation, verbKey, personKey) {
  return { sentence, translation, verbKey, personKey };
}

const blueprints = [
  blueprint("Wczoraj rano ______ kawę.", "Вчера утром я пил кофе.", "pić", "ja_m"),
  blueprint(
    "Po pracy ______ do domu autobusem.",
    "После работы я ехал домой на автобусе.",
    "jechać",
    "ja_m",
  ),
  blueprint("Wieczorem ______ film z bratem.", "Вечером я смотрел фильм с братом.", "oglądać", "ja_m"),
  blueprint(
    "W sobotę ______ pokój przed wizytą gości.",
    "В субботу я убирал комнату перед приходом гостей.",
    "sprzątać",
    "ja_m",
  ),
  blueprint("W zeszłym tygodniu ______ u lekarza.", "На прошлой неделе я был у врача.", "być", "ja_m"),
  blueprint("Wczoraj ______ zakupy na bazarze.", "Вчера я делал покупки на рынке.", "robić", "ja_m"),
  blueprint("Po obiedzie ______ gazetę na balkonie.", "После обеда я читал газету на балконе.", "czytać", "ja_m"),
  blueprint("Rano ______ do kolegi z pracy.", "Утром я звонил коллеге с работы.", "dzwonić", "ja_m"),
  blueprint("Latem ______ nad morze z rodziną.", "Летом я ездил к морю с семьёй.", "jechać", "ja_m"),
  blueprint("Wczoraj długo ______ na tramwaj.", "Вчера я долго ждал трамвай.", "czekać", "ja_m"),
  blueprint(
    "Po szkole ______ babci nieść torby.",
    "После школы я помогал бабушке нести сумки.",
    "pomagać",
    "ja_m",
  ),
  blueprint("W niedzielę ______ na długi spacer po lesie.", "В воскресенье я пошёл на долгую прогулку по лесу.", "iść", "ja_m"),

  blueprint("Rano ______ herbatę z cytryną.", "Утром я пила чай с лимоном.", "pić", "ja_f"),
  blueprint("Wczoraj ______ mamie długi list.", "Вчера я писала маме длинное письмо.", "pisać", "ja_f"),
  blueprint("Po pracy ______ kolację dla dzieci.", "После работы я готовила ужин для детей.", "gotować", "ja_f"),
  blueprint("W sobotę ______ nowe buty w galerii.", "В субботу я покупала новые туфли в торговом центре.", "kupować", "ja_f"),
  blueprint("Wczoraj ______ bardzo zmęczona po treningu.", "Вчера я была очень уставшей после тренировки.", "być", "ja_f"),
  blueprint("Wieczorem ______ spokojnej muzyki w pokoju.", "Вечером я слушала спокойную музыку в комнате.", "słuchać", "ja_f"),
  blueprint("Po lekcji ______ się polskiego w domu.", "После урока я училась польскому дома.", "uczyć się", "ja_f"),
  blueprint("W niedzielę ______ w domu po całym tygodniu.", "В воскресенье я отдыхала дома после всей недели.", "odpoczywać", "ja_f"),
  blueprint("Po południu ______ z siostrą przez telefon.", "После обеда я разговаривала с сестрой по телефону.", "rozmawiać", "ja_f"),
  blueprint("W sobotę ______ z psem w parku.", "В субботу я гуляла с собакой в парке.", "spacerować", "ja_f"),
  blueprint("Wczoraj ______ długo w biurze.", "Вчера я долго работала в офисе.", "pracować", "ja_f"),
  blueprint("Rano ______ śniadanie bardzo szybko.", "Утром я ела завтрак очень быстро.", "jeść", "ja_f"),

  blueprint("Wczoraj ______ nowy film w kinie.", "Вчера ты смотрел новый фильм в кино.", "oglądać", "ty_m"),
  blueprint("Rano ______ do szkoły pieszo.", "Утром ты шёл в школу пешком.", "iść", "ty_m"),
  blueprint("Po pracy ______ obiad z rodziną.", "После работы ты ел обед с семьёй.", "jeść", "ty_m"),
  blueprint("W sobotę ______ komputer do serwisu.", "В субботу ты отдал компьютер в сервис.", "dawać", "ty_m"),
  blueprint("Wczoraj ______ bardzo zajęty w pracy.", "Вчера ты был очень занят на работе.", "być", "ty_m"),
  blueprint("Po południu ______ do banku po dokumenty.", "После обеда ты ехал в банк за документами.", "jechać", "ty_m"),
  blueprint("Wieczorem ______ książkę o podróżach.", "Вечером ты читал книгу о путешествиях.", "czytać", "ty_m"),
  blueprint(
    "Wczoraj ______ pokój przed przyjazdem rodziców.",
    "Вчера ты убирал комнату перед приездом родителей.",
    "sprzątać",
    "ty_m",
  ),
  blueprint("Po lekcjach ______ się do testu z historii.", "После уроков ты готовился к тесту по истории.", "uczyć się", "ty_m"),
  blueprint("W sobotę ______ koleżance z zadaniem.", "В субботу ты помогал подруге с заданием.", "pomagać", "ty_m"),
  blueprint("Wczoraj ______ długo na pociąg.", "Вчера ты долго ждал поезд.", "czekać", "ty_m"),
  blueprint("Rano ______ do mnie bardzo wcześnie.", "Утром ты звонил мне очень рано.", "dzwonić", "ty_m"),

  blueprint("Wczoraj ______ zakupy po pracy.", "Вчера ты делала покупки после работы.", "robić", "ty_f"),
  blueprint("Rano ______ kawę bez cukru.", "Утром ты пила кофе без сахара.", "pić", "ty_f"),
  blueprint("Wieczorem ______ z mamą o studiach.", "Вечером ты разговаривала с мамой об учёбе.", "rozmawiać", "ty_f"),
  blueprint("W sobotę ______ obiad dla znajomych.", "В субботу ты готовила обед для друзей.", "gotować", "ty_f"),
  blueprint("Wczoraj ______ bardzo zmęczona po dyżurze.", "Вчера ты была очень уставшей после смены.", "być", "ty_f"),
  blueprint("Po pracy ______ nową sukienkę.", "После работы ты покупала новое платье.", "kupować", "ty_f"),
  blueprint("Wczoraj ______ z psem blisko jeziora.", "Вчера ты гуляла с собакой возле озера.", "spacerować", "ty_f"),
  blueprint("Po południu ______ muzyki w autobusie.", "После обеда ты слушала музыку в автобусе.", "słuchać", "ty_f"),
  blueprint("Wczoraj ______ się z Anią w centrum.", "Вчера ты встречалась с Аней в центре.", "spotykać się", "ty_f"),
  blueprint("Rano ______ do szkoły rowerem.", "Утром ты ехала в школу на велосипеде.", "jechać", "ty_f"),
  blueprint("W sobotę ______ pokój z siostrą.", "В субботу ты убирала комнату с сестрой.", "sprzątać", "ty_f"),
  blueprint("Wczoraj ______ do lekarza po receptę.", "Вчера ты ходила к врачу за рецептом.", "iść", "ty_f"),

  blueprint("Wczoraj Marek ______ kolację dla rodziny.", "Вчера Марек готовил ужин для семьи.", "gotować", "on"),
  blueprint("Po pracy Adam ______ do domu bardzo późno.", "После работы Адам вернулся домой очень поздно.", "wracać", "on"),
  blueprint("W sobotę Piotr ______ mecz w telewizji.", "В субботу Пётр смотрел матч по телевизору.", "oglądać", "on"),
  blueprint("Wczoraj Tomasz ______ nowy telefon.", "Вчера Томаш покупал новый телефон.", "kupować", "on"),
  blueprint("Rano Paweł ______ kawę.", "Утром Павел пил кофе.", "pić", "on"),
  blueprint("W zeszłym tygodniu Krzysztof ______ chory.", "На прошлой неделе Кшиштоф был болен.", "być", "on"),
  blueprint("Wczoraj nauczyciel ______ z uczniami o egzaminie.", "Вчера учитель разговаривал с учениками об экзамене.", "rozmawiać", "on"),
  blueprint("Po południu dziadek ______ w fotelu.", "После обеда дедушка отдыхал в кресле.", "odpoczywać", "on"),
  blueprint("W sobotę brat ______ mi przenieść torbę.", "В субботу брат помогал мне перенести сумку.", "pomagać", "on"),
  blueprint("Wczoraj sąsiad ______ na autobus pod domem.", "Вчера сосед ждал автобус у дома.", "czekać", "on"),
  blueprint("Po kolacji tata ______ gazetę sportową.", "После ужина папа читал спортивную газету.", "czytać", "on"),
  blueprint("W niedzielę Kuba ______ z kolegami w piłkę.", "В воскресенье Куба играл с друзьями в футбол.", "grać", "on"),

  blueprint("Wczoraj Anna ______ obiad dla dzieci.", "Вчера Анна готовила обед для детей.", "gotować", "ona"),
  blueprint("Po pracy Maria ______ do domu metrem.", "После работы Мария возвращалась домой на метро.", "wracać", "ona"),
  blueprint("W sobotę Kasia ______ owoce na rynku.", "В субботу Кася покупала фрукты на рынке.", "kupować", "ona"),
  blueprint("Wczoraj nauczycielka ______ listę obecności.", "Вчера учительница писала список присутствующих.", "pisać", "ona"),
  blueprint("Rano babcia ______ herbatę z miodem.", "Утром бабушка пила чай с мёдом.", "pić", "ona"),
  blueprint("W zeszłym tygodniu Ola ______ przeziębiona.", "На прошлой неделе Оля была простужена.", "być", "ona"),
  blueprint("Po południu ciocia ______ z sąsiadką na ławce.", "После обеда тётя разговаривала с соседкой на лавочке.", "rozmawiać", "ona"),
  blueprint("Wczoraj Ewa ______ się do egzaminu z polskiego.", "Вчера Ева готовилась к экзамену по польскому.", "uczyć się", "ona"),
  blueprint("Wieczorem Marta ______ serial historyczny.", "Вечером Марта смотрела исторический сериал.", "oglądać", "ona"),
  blueprint("W sobotę córka ______ pokój przed gośćmi.", "В субботу дочка убирала комнату перед гостями.", "sprzątać", "ona"),
  blueprint("Wczoraj pani doktor ______ pacjentom.", "Вчера врач помогала пациентам.", "pomagać", "ona"),
  blueprint("Po kolacji Zosia ______ z psem po osiedlu.", "После ужина Зося гуляла с собакой по району.", "spacerować", "ona"),

  blueprint("Wczoraj dziecko ______ sok jabłkowy.", "Вчера ребёнок пил яблочный сок.", "pić", "ono"),
  blueprint("W południe dziecko ______ zupę pomidorową.", "В полдень ребёнок ел томатный суп.", "jeść", "ono"),
  blueprint("Wczoraj niemowlę ______ bardzo spokojne.", "Вчера младенец был очень спокойным.", "być", "ono"),
  blueprint("Po obiedzie dziecko ______ bajkę z tatą.", "После обеда ребёнок смотрел мультик с папой.", "oglądać", "ono"),
  blueprint("W sobotę dziecko ______ się z innymi w przedszkolu.", "В субботу ребёнок встречался с другими в детском саду.", "spotykać się", "ono"),
  blueprint("Wczoraj zwierzę ______ dużo wody.", "Вчера животное пило много воды.", "pić", "ono"),
  blueprint("Po południu dziecko ______ się polskiego z mamą.", "После обеда ребёнок учился польскому с мамой.", "uczyć się", "ono"),
  blueprint("W sobotę dziecko ______ do dziadków z rodzicami.", "В субботу ребёнок ехал к бабушке и дедушке с родителями.", "jechać", "ono"),

  blueprint("Wczoraj ______ w piłkę po pracy.", "Вчера мы играли в футбол после работы.", "grać", "my_mo"),
  blueprint("Po lekcjach ______ do domu razem autobusem.", "После уроков мы возвращались домой вместе на автобусе.", "wracać", "my_mo"),
  blueprint("W sobotę ______ zakupy na cały tydzień.", "В субботу мы делали покупки на всю неделю.", "robić", "my_mo"),
  blueprint("Latem ______ nad jeziorem przez tydzień.", "Летом мы были у озера целую неделю.", "być", "my_mo"),
  blueprint("Wczoraj ______ nowy serial wieczorem.", "Вчера вечером мы смотрели новый сериал.", "oglądać", "my_mo"),
  blueprint("Po pracy ______ w restauracji obiad.", "После работы мы ели обед в ресторане.", "jeść", "my_mo"),
  blueprint("W zeszłym miesiącu ______ w nowym biurze.", "В прошлом месяце мы работали в новом офисе.", "pracować", "my_mo"),
  blueprint("Wczoraj ______ koleżance przenieść meble.", "Вчера мы помогали коллеге перенести мебель.", "pomagać", "my_mo"),

  blueprint("Wczoraj ______ kolację razem w domu.", "Вчера мы готовили ужин вместе дома.", "gotować", "my_nmo"),
  blueprint("Po pracy ______ do domu bardzo szybko.", "После работы мы вернулись домой очень быстро.", "wracać", "my_nmo"),
  blueprint("W sobotę ______ w centrum nowe kurtki.", "В субботу мы покупали в центре новые куртки.", "kupować", "my_nmo"),
  blueprint("Latem ______ nad morzem przez dwa tygodnie.", "Летом мы были на море две недели.", "być", "my_nmo"),
  blueprint("Wczoraj ______ spokojnej muzyki przy herbacie.", "Вчера мы слушали спокойную музыку за чаем.", "słuchać", "my_nmo"),
  blueprint("Po lekcjach ______ się do konkursu.", "После уроков мы готовились к конкурсу.", "uczyć się", "my_nmo"),
  blueprint("W niedzielę ______ po starym mieście.", "В воскресенье мы гуляли по старому городу.", "spacerować", "my_nmo"),
  blueprint("Wczoraj ______ z babcią przez telefon.", "Вчера мы разговаривали с бабушкой по телефону.", "rozmawiać", "my_nmo"),

  blueprint("Wczoraj ______ mecz do końca.", "Вчера вы досмотрели матч до конца.", "oglądać", "wy_mo"),
  blueprint("Po pracy ______ do domu późnym autobusem.", "После работы вы ехали домой поздним автобусом.", "jechać", "wy_mo"),
  blueprint("W sobotę ______ garaż przed zimą.", "В субботу вы убирали гараж перед зимой.", "sprzątać", "wy_mo"),
  blueprint("W zeszłym roku ______ w Krakowie na urlopie.", "В прошлом году вы были в Кракове в отпуске.", "być", "wy_mo"),
  blueprint("Wczoraj ______ obiad u rodziców.", "Вчера вы ели обед у родителей.", "jeść", "wy_mo"),
  blueprint("Po południu ______ do klienta w ważnej sprawie.", "После обеда вы звонили клиенту по важному делу.", "dzwonić", "wy_mo"),
  blueprint("W sobotę ______ sąsiadowi przy remoncie.", "В субботу вы помогали соседу с ремонтом.", "pomagać", "wy_mo"),
  blueprint("Wczoraj ______ na pociąg prawie godzinę.", "Вчера вы ждали поезд почти час.", "czekać", "wy_mo"),

  blueprint("Wczoraj ______ obiad dla całej rodziny.", "Вчера вы готовили обед для всей семьи.", "gotować", "wy_nmo"),
  blueprint("Po pracy ______ do domu pieszo.", "После работы вы вернулись домой пешком.", "wracać", "wy_nmo"),
  blueprint("W sobotę ______ nowe książki do szkoły.", "В субботу вы покупали новые книги для школы.", "kupować", "wy_nmo"),
  blueprint("W zeszłym miesiącu ______ bardzo zajęte.", "В прошлом месяце вы были очень заняты.", "być", "wy_nmo"),
  blueprint("Wieczorem ______ z nauczycielką o kursie.", "Вечером вы разговаривали с преподавательницей о курсе.", "rozmawiać", "wy_nmo"),
  blueprint("Po lekcjach ______ się do egzaminu.", "После уроков вы готовились к экзамену.", "uczyć się", "wy_nmo"),
  blueprint("W niedzielę ______ po parku z dziećmi.", "В воскресенье вы гуляли по парку с детьми.", "spacerować", "wy_nmo"),
  blueprint("Wczoraj ______ pokój przed wizytą gości.", "Вчера вы убирали комнату перед приходом гостей.", "sprzątać", "wy_nmo"),

  blueprint("Wczoraj koledzy ______ mecz w telewizji.", "Вчера друзья смотрели матч по телевизору.", "oglądać", "oni"),
  blueprint("Po pracy panowie ______ do domu rowerami.", "После работы мужчины возвращались домой на велосипедах.", "wracać", "oni"),
  blueprint("W sobotę chłopcy ______ owoce na targu.", "В субботу мальчики покупали фрукты на рынке.", "kupować", "oni"),
  blueprint("W zeszłym tygodniu sąsiedzi ______ bardzo zajęci.", "На прошлой неделе соседи были очень заняты.", "być", "oni"),
  blueprint("Wczoraj studenci ______ się do egzaminu razem.", "Вчера студенты готовились к экзамену вместе.", "uczyć się", "oni"),
  blueprint("Po południu turyści ______ na rynku na przewodnika.", "После обеда туристы ждали гида на рынке.", "czekać", "oni"),
  blueprint("W sobotę ojcowie ______ obiad dla dzieci.", "В субботу отцы готовили обед для детей.", "gotować", "oni"),
  blueprint("Wczoraj bracia ______ z dziadkiem o pracy.", "Вчера братья разговаривали с дедушкой о работе.", "rozmawiać", "oni"),
  blueprint("Po kolacji synowie ______ muzyki w pokoju.", "После ужина сыновья слушали музыку в комнате.", "słuchać", "oni"),
  blueprint("W niedzielę znajomi ______ w piłkę na boisku.", "В воскресенье знакомые играли в футбол на поле.", "grać", "oni"),
  blueprint("Wczoraj lekarze ______ pacjentom do późna.", "Вчера врачи помогали пациентам допоздна.", "pomagać", "oni"),
  blueprint("Po pracy koledzy ______ do mnie bardzo późno.", "После работы друзья звонили мне очень поздно.", "dzwonić", "oni"),
  blueprint("W sobotę mężczyźni ______ stary garaż.", "В субботу мужчины убирали старый гараж.", "sprzątać", "oni"),
  blueprint("Wczoraj panowie ______ do Warszawy służbowo.", "Вчера мужчины ехали в Варшаву по работе.", "jechać", "oni"),
  blueprint("Po pracy sąsiedzi ______ wiadomości w telefonach.", "После работы соседи читали новости в телефонах.", "czytać", "oni"),
  blueprint("W niedzielę chłopcy ______ na spacer z psem.", "В воскресенье мальчики пошли на прогулку с собакой.", "iść", "oni"),

  blueprint("Wczoraj koleżanki ______ zakupy po pracy.", "Вчера подруги делали покупки после работы.", "robić", "one"),
  blueprint("Po południu panie ______ do domu tramwajem.", "После обеда женщины возвращались домой на трамвае.", "wracać", "one"),
  blueprint("W sobotę dziewczyny ______ owoce na rynku.", "В субботу девушки покупали фрукты на рынке.", "kupować", "one"),
  blueprint("W zeszłym tygodniu siostry ______ w domu cały wieczór.", "На прошлой неделе сёстры были дома весь вечер.", "być", "one"),
  blueprint("Wczoraj studentki ______ się do kolokwium razem.", "Вчера студентки готовились к зачёту вместе.", "uczyć się", "one"),
  blueprint("Po pracy mamy ______ obiad dla dzieci.", "После работы мамы готовили обед для детей.", "gotować", "one"),
  blueprint("W sobotę turystki ______ po centrum z mapą.", "В субботу туристки гуляли по центру с картой.", "spacerować", "one"),
  blueprint("Wczoraj sąsiadki ______ z babcią na klatce schodowej.", "Вчера соседки разговаривали с бабушкой в подъезде.", "rozmawiać", "one"),
  blueprint("Po kolacji dziewczyny ______ muzyki w pokoju.", "После ужина девушки слушали музыку в комнате.", "słuchać", "one"),
  blueprint("W niedzielę koleżanki ______ serial komediowy.", "В воскресенье подруги смотрели комедийный сериал.", "oglądać", "one"),
  blueprint("Wczoraj pielęgniarki ______ pacjentom na oddziale.", "Вчера медсёстры помогали пациентам в отделении.", "pomagać", "one"),
  blueprint("Po południu córki ______ do taty z życzeniami.", "После обеда дочери звонили папе с пожеланиями.", "dzwonić", "one"),
  blueprint("W sobotę kobiety ______ pokój przed spotkaniem.", "В субботу женщины убирали комнату перед встречей.", "sprzątać", "one"),
  blueprint("Wczoraj panie ______ do Krakowa pociągiem.", "Вчера женщины ехали в Краков поездом.", "jechać", "one"),
  blueprint("Po pracy koleżanki ______ nowe raporty.", "После работы коллеги писали новые отчёты.", "pisać", "one"),
  blueprint("W niedzielę dziewczyny ______ na spacer nad rzekę.", "В воскресенье девушки пошли на прогулку к реке.", "iść", "one"),
];

function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function makeOptions(verbKey, personKey) {
  const forms = verbs[verbKey].forms;
  const sets = {
    ja_m: ["ja_m", "ja_f", "on", "oni"],
    ja_f: ["ja_f", "ja_m", "ona", "one"],
    ty_m: ["ty_m", "ty_f", "on", "oni"],
    ty_f: ["ty_f", "ty_m", "ona", "one"],
    on: ["on", "ona", "oni", "one"],
    ona: ["ona", "on", "oni", "one"],
    ono: ["ono", "on", "ona", "oni"],
    my_mo: ["my_mo", "my_nmo", "oni", "one"],
    my_nmo: ["my_nmo", "my_mo", "oni", "one"],
    wy_mo: ["wy_mo", "wy_nmo", "oni", "one"],
    wy_nmo: ["wy_nmo", "wy_mo", "oni", "one"],
    oni: ["oni", "one", "on", "ona"],
    one: ["one", "oni", "ona", "on"],
  };

  const base = sets[personKey].map((key) => forms[key]);
  const unique = [...new Set(base)];

  return shuffle(unique);
}

const exercises = blueprints.map((item, index) => {
  const verb = verbs[item.verbKey];
  const meta = personMeta[item.personKey];
  const correctAnswer = verb.forms[item.personKey];

  return {
    id: index + 1,
    sentence: item.sentence,
    translation: item.translation,
    verbInfinitive: verb.infinitive,
    correctAnswer,
    person: meta.person,
    personLabel: meta.label,
    number: meta.number,
    gender: meta.gender,
    explanation: `${meta.explanationPrefix}, dlatego: ${correctAnswer}.`,
    options: makeOptions(item.verbKey, item.personKey),
    statsKey: meta.statsLabel,
  };
});

const coverageRules = {
  ja: 10,
  ty: 10,
  on: 10,
  ona: 10,
  ono: 5,
  my: 15,
  wy: 15,
  oni: 15,
  one: 15,
};

function validateCoverage() {
  const counts = exercises.reduce((acc, exercise) => {
    acc[exercise.person] = (acc[exercise.person] || 0) + 1;
    return acc;
  }, {});

  Object.entries(coverageRules).forEach(([person, minimum]) => {
    if ((counts[person] || 0) < minimum) {
      throw new Error(`Za mało zadań dla "${person}": ${counts[person] || 0}`);
    }
  });
}

validateCoverage();

const elements = {
  modePicker: document.querySelector("#modePicker"),
  startButton: document.querySelector("#startButton"),
  trainerPanel: document.querySelector("#trainerPanel"),
  resultPanel: document.querySelector("#resultPanel"),
  sentenceText: document.querySelector("#sentenceText"),
  answerSlot: document.querySelector("#answerSlot"),
  verbHint: document.querySelector("#verbHint"),
  personHint: document.querySelector("#personHint"),
  personLabel: document.querySelector("#personLabel"),
  modeLabel: document.querySelector("#modeLabel"),
  progressValue: document.querySelector("#progressValue"),
  scoreValue: document.querySelector("#scoreValue"),
  accuracyValue: document.querySelector("#accuracyValue"),
  feedbackBox: document.querySelector("#feedbackBox"),
  selfCheckBox: document.querySelector("#selfCheckBox"),
  markCorrectButton: document.querySelector("#markCorrectButton"),
  markWrongButton: document.querySelector("#markWrongButton"),
  checkButton: document.querySelector("#checkButton"),
  nextButton: document.querySelector("#nextButton"),
  resultSummary: document.querySelector("#resultSummary"),
  resultAccuracy: document.querySelector("#resultAccuracy"),
  resultWeakSpots: document.querySelector("#resultWeakSpots"),
  mistakesList: document.querySelector("#mistakesList"),
  restartButton: document.querySelector("#restartButton"),
};

const state = {
  mode: "show-answer",
  queue: [],
  currentIndex: 0,
  correctCount: 0,
  mistakes: [],
  selectedOption: "",
  phase: "idle",
};

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-card").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
}

function startSession() {
  state.queue = shuffle(exercises).slice(0, SESSION_LENGTH);
  state.currentIndex = 0;
  state.correctCount = 0;
  state.mistakes = [];
  state.selectedOption = "";
  state.phase = "idle";

  elements.resultPanel.classList.add("is-hidden");
  elements.trainerPanel.classList.remove("is-hidden");
  updateStats();
  renderTask();
}

function getCurrentExercise() {
  return state.queue[state.currentIndex];
}

function updateStats() {
  const answered = state.currentIndex + (state.phase === "checked" ? 1 : 0);
  const accuracy = answered === 0 ? 0 : Math.round((state.correctCount / answered) * 100);

  elements.progressValue.textContent = `${Math.min(answered + 1, SESSION_LENGTH)} / ${SESSION_LENGTH}`;
  elements.scoreValue.textContent = String(state.correctCount);
  elements.accuracyValue.textContent = `${accuracy}%`;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderTask() {
  const exercise = getCurrentExercise();

  state.selectedOption = "";
  state.phase = "idle";
  elements.feedbackBox.className = "feedback is-hidden";
  elements.feedbackBox.innerHTML = "";
  elements.selfCheckBox.classList.add("is-hidden");
  elements.nextButton.classList.add("is-hidden");
  elements.checkButton.classList.remove("is-hidden");
  elements.checkButton.disabled = state.mode === "multiple-choice";
  elements.checkButton.textContent = "Sprawdź";

  elements.modeLabel.textContent =
    state.mode === "show-answer" ? "Tryb: pokaż odpowiedź" : "Tryb: wybór z wariantów";
  elements.personLabel.textContent = exercise.personLabel;
  elements.sentenceText.textContent = exercise.sentence;
  elements.verbHint.textContent = exercise.verbInfinitive;
  elements.personHint.textContent = exercise.personLabel;

  if (state.mode === "show-answer") {
    elements.answerSlot.innerHTML =
      '<span class="answer-slot-label">Powiedz poprawną formę na głos, potem kliknij "Sprawdź".</span>';
  } else {
    elements.answerSlot.innerHTML = `
      <span class="answer-slot-label">Wybierz jedną odpowiedź.</span>
      <div class="options-grid">
        ${exercise.options
          .map(
            (option) => `
              <button class="option-button" type="button" data-option="${escapeHtml(option)}">
                ${escapeHtml(option)}
              </button>
            `,
          )
          .join("")}
      </div>
    `;

    elements.answerSlot.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        if (state.phase !== "idle") {
          return;
        }

        state.selectedOption = button.dataset.option;
        elements.checkButton.disabled = false;

        elements.answerSlot.querySelectorAll(".option-button").forEach((item) => {
          item.classList.toggle("is-selected", item.dataset.option === state.selectedOption);
        });
      });
    });
  }

  updateStats();
}

function showFeedback(isCorrect, userAnswer) {
  const exercise = getCurrentExercise();
  const statusText = isCorrect ? "Poprawna odpowiedź" : "Błąd";
  const statusClass = isCorrect ? "good" : "bad";

  elements.feedbackBox.className = `feedback ${statusClass}`;
  elements.feedbackBox.innerHTML = `
    <div class="feedback-title">${statusText}</div>
    <div class="feedback-copy">Poprawna forma: <strong>${escapeHtml(
      exercise.correctAnswer,
    )}</strong></div>
    <div class="feedback-copy">${escapeHtml(exercise.explanation)}</div>
    <div class="feedback-copy">Tłumaczenie: ${escapeHtml(exercise.translation)}</div>
    ${
      userAnswer
        ? `<div class="feedback-copy">Twoja odpowiedź: ${escapeHtml(userAnswer)}</div>`
        : ""
    }
  `;
}

function showRevealInfo() {
  const exercise = getCurrentExercise();

  elements.feedbackBox.className = "feedback";
  elements.feedbackBox.innerHTML = `
    <div class="feedback-title">Poprawna forma</div>
    <div class="feedback-copy">Poprawna forma: <strong>${escapeHtml(
      exercise.correctAnswer,
    )}</strong></div>
    <div class="feedback-copy">${escapeHtml(exercise.explanation)}</div>
    <div class="feedback-copy">Tłumaczenie: ${escapeHtml(exercise.translation)}</div>
  `;
}

function registerResult(isCorrect, userAnswer) {
  const exercise = getCurrentExercise();

  if (isCorrect) {
    state.correctCount += 1;
  } else {
    state.mistakes.push({
      sentence: exercise.sentence,
      userAnswer,
      correctAnswer: exercise.correctAnswer,
      explanation: exercise.explanation,
      statsKey: exercise.statsKey,
    });
  }

  state.phase = "checked";
  elements.checkButton.classList.add("is-hidden");
  elements.nextButton.classList.remove("is-hidden");
  updateStats();
}

function checkAnswer() {
  const exercise = getCurrentExercise();

  if (state.mode === "show-answer") {
    if (state.phase !== "idle") {
      return;
    }

    state.phase = "revealed";
    elements.answerSlot.innerHTML = `
      <span class="answer-slot-label">Poprawna forma</span>
      <div class="answer-display">${escapeHtml(exercise.correctAnswer)}</div>
    `;
    showRevealInfo();
    elements.selfCheckBox.classList.remove("is-hidden");
    return;
  }

  if (state.phase !== "idle" || !state.selectedOption) {
    return;
  }

  const isCorrect = state.selectedOption === exercise.correctAnswer;
  state.phase = "revealed";

  elements.answerSlot.querySelectorAll(".option-button").forEach((button) => {
    const option = button.dataset.option;
    button.disabled = true;
    button.classList.remove("is-selected");

    if (option === exercise.correctAnswer) {
      button.classList.add("is-correct");
    }

    if (option === state.selectedOption && option !== exercise.correctAnswer) {
      button.classList.add("is-wrong");
    }
  });

  showFeedback(isCorrect, state.selectedOption);
  registerResult(isCorrect, state.selectedOption);
}

function markSelfCheck(isCorrect) {
  if (state.mode !== "show-answer" || state.phase !== "revealed") {
    return;
  }

  showFeedback(isCorrect, isCorrect ? "samodzielnie poprawna" : "samodzielnie błędna");
  registerResult(isCorrect, isCorrect ? "samodzielnie poprawna" : "samodzielnie błędna");
  elements.selfCheckBox.classList.add("is-hidden");
}

function nextTask() {
  if (state.phase !== "checked") {
    return;
  }

  state.currentIndex += 1;

  if (state.currentIndex >= state.queue.length) {
    showResults();
    return;
  }

  renderTask();
}

function getWeakSpots() {
  if (state.mistakes.length === 0) {
    return "brak";
  }

  const counts = state.mistakes.reduce((acc, mistake) => {
    acc[mistake.statsKey] = (acc[mistake.statsKey] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([label]) => label)
    .join(", ");
}

function showResults() {
  const accuracy = Math.round((state.correctCount / state.queue.length) * 100);

  elements.trainerPanel.classList.add("is-hidden");
  elements.resultPanel.classList.remove("is-hidden");
  elements.resultSummary.textContent = `${state.correctCount}/${state.queue.length}`;
  elements.resultAccuracy.textContent = `${accuracy}%`;
  elements.resultWeakSpots.textContent = getWeakSpots();

  if (state.mistakes.length === 0) {
    elements.mistakesList.innerHTML = `
      <div class="mistake-card">
        <strong>Brak błędów</strong>
        <p>W tej rundzie wszystkie odpowiedzi były poprawne.</p>
      </div>
    `;
    return;
  }

  elements.mistakesList.innerHTML = state.mistakes
    .map(
      (mistake) => `
        <article class="mistake-card">
          <div>
            <strong>Zdanie</strong>
            <p>${escapeHtml(mistake.sentence)}</p>
          </div>
          <div>
            <strong>Twoja odpowiedź</strong>
            <p>${escapeHtml(mistake.userAnswer)}</p>
          </div>
          <div>
            <strong>Poprawna odpowiedź</strong>
            <p>${escapeHtml(mistake.correctAnswer)}</p>
          </div>
          <div>
            <strong>Wyjaśnienie</strong>
            <p>${escapeHtml(mistake.explanation)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

elements.modePicker.addEventListener("click", (event) => {
  const button = event.target.closest(".mode-card");

  if (!button) {
    return;
  }

  setMode(button.dataset.mode);
});

elements.startButton.addEventListener("click", startSession);
elements.restartButton.addEventListener("click", startSession);
elements.checkButton.addEventListener("click", checkAnswer);
elements.nextButton.addEventListener("click", nextTask);
elements.markCorrectButton.addEventListener("click", () => markSelfCheck(true));
elements.markWrongButton.addEventListener("click", () => markSelfCheck(false));

document.addEventListener("keydown", (event) => {
  const isSelfCheckVisible = !elements.selfCheckBox.classList.contains("is-hidden");

  if (isSelfCheckVisible && state.mode === "show-answer" && state.phase === "revealed") {
    if (event.key.toLowerCase() === "t") {
      event.preventDefault();
      markSelfCheck(true);
      return;
    }

    if (event.key.toLowerCase() === "n") {
      event.preventDefault();
      markSelfCheck(false);
      return;
    }
  }

  if (event.key !== "Enter") {
    return;
  }

  const isTrainerVisible = !elements.trainerPanel.classList.contains("is-hidden");

  if (!isTrainerVisible) {
    return;
  }

  event.preventDefault();

  if (state.phase === "idle") {
    checkAnswer();
    return;
  }

  if (state.phase === "checked") {
    nextTask();
  }
});

setMode(state.mode);
