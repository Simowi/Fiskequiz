// All 30 Norwegian fish species with full info
const FISH_DATA = [
  {
    id: "torsk",
    folder: "Torsk",
    nameNo: "Torsk",
    nameEn: "Atlantic Cod",
    nameLa: "Gadus morhua",
    trait: "Kjennetegn: Tre ryggfinner, to gattefinner og ett skjegg under haken",
    info: "Torsken er Norges viktigste matfisk og har formet norsk kultur i hundrevis av år. Den er den eneste fisken med et synlig skjegg (en følertråd) under haken, og kan bli over 1,5 meter lang og veie opptil 96 kg."
  },
  {
    id: "laks",
    folder: "Atlantisk_laks",
    nameNo: "Atlantisk laks",
    nameEn: "Atlantic Salmon",
    nameLa: "Salmo salar",
    trait: "Kjennetegn: Sølvfarget med svarte prikker, liten fettfinne bak ryggfinnen",
    info: "Laksen er kjent for sin imponerende vandring – den svømmer fra havet tilbake til elven der den ble klekket for å gyte. Under sjøoppholdet skifter den farge fra brunspraglete til blank sølv."
  },
  {
    id: "sild",
    folder: "Sild",
    nameNo: "Sild",
    nameEn: "Atlantic Herring",
    nameLa: "Clupea harengus",
    trait: "Kjennetegn: Sølvblank, strømlinjeformet, ingen sidelinje",
    info: "Silda er en av verdens mest fangede fisker og danner grunnlaget for store marine næringskjeder. Den er kjent for å svømme i enorme stimer som kan telle milliarder av individer."
  },
  {
    id: "makrell",
    folder: "Makrell",
    nameNo: "Makrell",
    nameEn: "Atlantic Mackerel",
    nameLa: "Scomber scombrus",
    trait: "Kjennetegn: Tydelige blågrønne bølgestriper på ryggen, slank og strømlinjeformet",
    info: "Makrellen er en av de raskeste fiskene i norske farvann og kan svømme i opptil 20 km/t. Den har ikke svømmeblære, noe som betyr at den må svømme kontinuerlig for å holde seg flytende."
  },
  {
    id: "sei",
    folder: "Sei",
    nameNo: "Sei",
    nameEn: "Saithe / Pollock",
    nameLa: "Pollachius virens",
    trait: "Kjennetegn: Mørk grønngrå rygg, hvit buklinje, liten eller ingen skjegg",
    info: "Seien er lett å forveksle med torsk, men skilles på at den har en veldig liten eller ingen skjegg under haken og en tydelig rett sidelinje. Den er en av de viktigste kommersielle artene i Nordøst-Atlanteren."
  },
  {
    id: "hyse",
    folder: "Hyse",
    nameNo: "Hyse",
    nameEn: "Haddock",
    nameLa: "Melanogrammus aeglefinus",
    trait: "Kjennetegn: Karakteristisk svart 'tommelfingerplett' bak brystfinnen",
    info: "Hysa er unik blant torskefiskene på grunn av sin svarte skulderflekk, som ifølge legenden er merket etter at St. Peter tok fisken ut av havet. Den foretrekker sandig bunn og spiser ofte sjøpinnsvin."
  },
  {
    id: "rodspette",
    folder: "Rødspette",
    nameNo: "Rødspette",
    nameEn: "European Plaice",
    nameLa: "Pleuronectes platessa",
    trait: "Kjennetegn: Oransje/røde prikker på brungrå overside, begge øyne på høyre side",
    info: "Rødspetten er en flatfisk der begge øynene befinner seg på høyre side av kroppen. Som ung svømmer den normalt, men etter metamorfose legger den seg på siden og bunn­tilpasser seg helt."
  },
  {
    id: "kveite",
    folder: "Kveite",
    nameNo: "Kveite",
    nameEn: "Atlantic Halibut",
    nameLa: "Hippoglossus hippoglossus",
    trait: "Kjennetegn: Verdens største flatfisk, kan bli over 3 meter lang",
    info: "Kveiten er den absolutt største flatfisken og kan veie over 300 kg. Den er en aktiv jeger som tar både fisk og blekksprut, noe som er uvanlig for en flatfisk. Stor kveite er sjelden og regnes som en delikatesse."
  },
  {
    id: "lysing",
    folder: "Lysing",
    nameNo: "Lysing",
    nameEn: "European Hake",
    nameLa: "Merluccius merluccius",
    trait: "Kjennetegn: Lang slank kropp, stort hode med kraftige tenner, to ryggfinner",
    info: "Lysingen er en nattjeger som følger byttedyr opp fra dypet om natten. Den er svært vanlig i sørlige norske farvann og er en viktig matfisk i Sør-Europa, men undervurdert i Norge."
  },
  {
    id: "oyepal",
    folder: "Øyepål",
    nameNo: "Øyepål",
    nameEn: "Norway Pout",
    nameLa: "Trisopterus esmarkii",
    trait: "Kjennetegn: Store øyne, kort skjegg, mørk flekk ved brystfinnen",
    info: "Øyepålen er en liten torskefisk med uforholdsmessig store øyne tilpasset livet i dypere og mørkere vann. Den er en nøkkelart i Nordsjøen og utgjør en stor del av dietten til større rovfisk og sjøfugl."
  },
  {
    id: "brisling",
    folder: "Brisling",
    nameNo: "Brisling",
    nameEn: "European Sprat",
    nameLa: "Sprattus sprattus",
    trait: "Kjennetegn: Ligner sild men mindre, skarpe skjell langs buken danner en sagkant",
    info: "Brislingen er best kjent som «sardiner» på boks, særlig fra Stavanger-regionen som var verdensberømt for hermetisert brisling. Den skilles fra sild ved sin sagformede bukkjøl."
  },
  {
    id: "al",
    folder: "Ål",
    nameNo: "Ål",
    nameEn: "European Eel",
    nameLa: "Anguilla anguilla",
    trait: "Kjennetegn: Slangelignende kropp, liten brystfinne, ingen bukfinner",
    info: "Ålen foretar en av naturens mest mystiske vandringer – den gyter i Sargassohavet i Atlanteren og larvene driver med havstrømmene til Europa. Hele livssyklusen ble ikke kjent for vitenskapen før på 1900-tallet."
  },
  {
    id: "gjedde",
    folder: "Gjedde",
    nameNo: "Gjedde",
    nameEn: "Northern Pike",
    nameLa: "Esox lucius",
    trait: "Kjennetegn: Lang kropp, anda-lignende snute, grønnspraglete mønster",
    info: "Gjedden er ferskvannskongens topprovdyr og kan ta bytte nesten like stor som seg selv. Den har et utrolig raskt angrep og kan akselerere fra stillestående til full fart på millisekunder takket være sin bakoverplasserte ryggfinne."
  },
  {
    id: "abbor",
    folder: "Abbor",
    nameNo: "Abbor",
    nameEn: "European Perch",
    nameLa: "Perca fluviatilis",
    trait: "Kjennetegn: Tydelige mørke tverrbånd, rødoransje bukfinner, pigget ryggfinne",
    info: "Abboren er en av Norges vanligste ferskvannsfisker og kjennetegnes lett på sine mørke tverrbånd og rødoransje finner. Den er svært tilpasningsdyktig og trives i nesten alle typer innsjøer og elver."
  },
  {
    id: "gjors",
    folder: "Gjørs",
    nameNo: "Gjørs",
    nameEn: "Zander / Pike-perch",
    nameLa: "Sander lucioperca",
    trait: "Kjennetegn: Ligner abbor men uten tydelige bånd, store glassaktige øyne",
    info: "Gjørsen har ekstremt lysfølsomme øyne som gir den et fortrinn i grumsete eller mørkt vann. Den er Europas største abborfisk og ble introdusert til mange norske vann der den nå er et viktig sportsfisketarget."
  },
  {
    id: "orret",
    folder: "Ørret",
    nameNo: "Ørret",
    nameEn: "Brown Trout",
    nameLa: "Salmo trutta",
    trait: "Kjennetegn: Røde og svarte prikker med lysere halo, fettfinne bak ryggfinnen",
    info: "Ørreten finnes i tre former: bekkeørret, innsjøørret og sjøørret – alle er samme art. Sjøørreten vandrer til havet for å vokse raskt og blir blank som laks, mens bekkevarianten forblir i ferskvann hele livet."
  },
  {
    id: "harr",
    folder: "Harr",
    nameNo: "Harr",
    nameEn: "Grayling",
    nameLa: "Thymallus thymallus",
    trait: "Kjennetegn: Stor, seilformet ryggfinne med fargerike prikker – unik blant norske fisker",
    info: "Harren er lett gjenkjennelig på sin uforholdsmessig store og vakre ryggfinne. Den kalles gjerne «fjellenes dronning» og trives best i kaldt, rent og oksygenrikt vann – et tegn på ren vannkvalitet."
  },
  {
    id: "sik",
    folder: "Sik",
    nameNo: "Sik",
    nameEn: "Common Whitefish",
    nameLa: "Coregonus lavaretus",
    trait: "Kjennetegn: Sølvblank, liten munn peker nedover, liten fettfinne",
    info: "Siken er en laksefisk men ligner mer på sild utseendemessig. Det finnes mange lokale varianter tilpasset ulike innsjøer, og norsk sik er genetisk sett svært variert. Rognen er en norsk delikatesse."
  },
  {
    id: "krokle",
    folder: "Krøkle",
    nameNo: "Krøkle",
    nameEn: "European Smelt",
    nameLa: "Osmerus eperlanus",
    trait: "Kjennetegn: Transparent kropp, lukter sterkt av agurk når fersk",
    info: "Krøklen er berømt for sin karakteristiske agurklignende lukt, som skyldes en forbindelse kalt 2,6-nonadienal. Denne halvgjennomsiktige, lille fisken er et viktig byttedyr for større fisk i norske fjorder og innsjøer."
  },
  {
    id: "piggskate",
    folder: "Piggskate",
    nameNo: "Piggskate",
    nameEn: "Thornback Ray",
    nameLa: "Raja clavata",
    trait: "Kjennetegn: Rombeformet kropp, pigger på ryggen og halen, bølgete mønster",
    info: "Piggskaten er den vanligste skatearten i norske farvann. Den er en bruskfisk i slekt med haien og legger egg i karakteristiske, lærlike kapsler kalt 'havfruas pung' som man kan finne på stranden."
  },
  {
    id: "smaflekket-rodhai",
    folder: "Småflekket_rødhai",
    nameNo: "Småflekket rødhai",
    nameEn: "Small-spotted Catshark",
    nameLa: "Scyliorhinus canicula",
    trait: "Kjennetegn: Kattliknende øyne, mange små mørke prikker på beige bunn",
    info: "Den småflekkete rødhaien er Norges vanligste haiart og er helt ufarlig for mennesker. Den legger egg i gjennomsiktige kapsler med spiralformede tendriler som fester seg til alger – disse kalles 'havkatter'."
  },
  {
    id: "piggha",
    folder: "Pigghå",
    nameNo: "Pigghå",
    nameEn: "Spiny Dogfish",
    nameLa: "Squalus acanthias",
    trait: "Kjennetegn: To ryggfinner hver med en giftig pigg foran, ingen gatefinne",
    info: "Pigghåen er verdens mest tallrike haiart og har giftige pigger foran hver ryggfinne. Den er remarkabel langlivet – den kan bli over 100 år gammel – og føder levende unger etter en drektighetsperiode på to år, den lengste kjente hos noen virveldyr."
  },
  {
    id: "uer",
    folder: "Uer",
    nameNo: "Uer",
    nameEn: "Golden Redfish",
    nameLa: "Sebastes norvegicus",
    trait: "Kjennetegn: Knallrød/oransje farge, store øyne, kraftige pigger i ryggfinnen",
    info: "Ueren er en ekstremt langlivet fisk som kan bli over 200 år gammel. Den er ovovivipar – eggene klekkes inne i hunnen og hun føder levende unger. En stor uer kan ha en alder som slår de fleste trær."
  },
  {
    id: "steinbit",
    folder: "Steinbit",
    nameNo: "Steinbit",
    nameEn: "Atlantic Wolffish",
    nameLa: "Anarhichas lupus",
    trait: "Kjennetegn: Fryktinngytende tenner, lang åleformet kropp, ingen bukfinner",
    info: "Steinbiten har et av dyrerikets mest skremmende tannsett, designet for å knuse hardskallede byttedyr som krabber og sjøpinnsvin. Merkelig nok produserer den sin egen biologiske frostvæske som hindrer blodet fra å fryse i iskaldt vann."
  },
  {
    id: "breiflabb",
    folder: "Breiflabb",
    nameNo: "Breiflabb",
    nameEn: "Anglerfish",
    nameLa: "Lophius piscatorius",
    trait: "Kjennetegn: Enormt hode og gap, flattrykt kropp, fiskeagn på pannen",
    info: "Breiflabben bruker en innebygd «fiskestang» på pannen med et lysende agn for å lokke bytte inn i sitt enorme gap. Den kan svelge fisk nesten like stor som seg selv. Halen selges som 'sjøkreps' i mange restauranter."
  },
  {
    id: "lange",
    folder: "Lange",
    nameNo: "Lange",
    nameEn: "Ling",
    nameLa: "Molva molva",
    trait: "Kjennetegn: Lang slank kropp, en lang ryggfinne, liten skjegg",
    info: "Langen er en av de lengste torskefiskene og kan bli over 2 meter lang. Den lever dypt og er en aktiv nattjeger. Tørrfisk av lange har lange tradisjoner i Portugal, der den er like populær som torsk."
  },
  {
    id: "brosme",
    folder: "Brosme",
    nameNo: "Brosme",
    nameEn: "Cusk / Tusk",
    nameLa: "Brosme brosme",
    trait: "Kjennetegn: Én lang ryggfinne som løper sammen med halefinnen, enkel skjegg",
    info: "Brosmen er unik ved at rygg-, hale- og gatefinnen henger sammen i én sammenhengende finnekant. Den lever på hardt substrat i dypere vann og er en svært god matfisk som dessverre er lite kjent utenfor fiskerimiljøer."
  },
  {
    id: "lyr",
    folder: "Lyr",
    nameNo: "Lyr",
    nameEn: "Pollack",
    nameLa: "Pollachius pollachius",
    trait: "Kjennetegn: Underbitt (underkjeven stikker frem), bøyd sidelinje over brystfinnen",
    info: "Lyren ligner sei men skilles på sitt tydelige underbitt og den bøyde sidelinjen over brystfinnen. Den er en populær sportsfisk langs kysten og er lett å fiske fra land. Kjøttet er hvitt og smakfullt."
  },
  {
    id: "hvitting",
    folder: "Hvitting",
    nameNo: "Hvitting",
    nameEn: "Whiting",
    nameLa: "Merlangius merlangus",
    trait: "Kjennetegn: Mørk flekk ved brystfinnen, ingen eller svært liten skjegg",
    info: "Hvittingen er en liten torskefisk uten skjegg (eller med en svært liten en). Unge hvittinger søker beskyttelse under manetene til brennmaneten – en uvanlig strategi for å unngå rovdyr, ettersom de er immune mot brenncelletråder."
  },
  {
    id: "tobis",
    folder: "Tobis",
    nameNo: "Tobis",
    nameEn: "Sand Eel",
    nameLa: "Ammodytes tobianus",
    trait: "Kjennetegn: Lang og smal som en nål, graver seg ned i sand",
    info: "Tobisen er ikke en ål men en liten langstrakt fisk som graver seg ned i sandbunnen for å gjemme seg. Den er en nøkkelart i norske kystøkosystemer og en kritisk matkilde for laks, torsk, sjøfugl og hvaler."
  }
];

// Build a lookup map for quick access
const FISH_BY_ID = {};
FISH_DATA.forEach(f => { FISH_BY_ID[f.id] = f; });
