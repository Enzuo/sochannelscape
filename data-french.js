const DATA = [
    // NAME                  , namecode              , platforms          , type     ,"story"
    ["Consul Pazen"          , "consulpazen"         , [["youtube", 71.8, 74.5, 77.6]], "comment",],
    ["Zio Clo"               , "zioclo"              , [["youtube", 13.9, 14.5, 15.6]], "podcast",],
    ["Je suis pas content"   , "jesuispascontent"    , [["youtube", 322, 340, 346]], "comment",],
    ["Juste milieu"          , "justemilieu"         , [["youtube", 279, 296, 310]], "comment",],
    ["Le raptor"             , "leraptor"            , [["youtube", 736, 735, 732]], "essay",],
    ["Sud Radio"             , "sudradio"            , [["youtube", 674, 706, 722]], "podcast",],
    ["Bertille"              , "bertille"            , [["youtube", 8.72, 8.72, 8.68]], "essay",],
    ["Livre noir"            , "livrenoir"           , [["youtube", 297, 313, 317]], "podcast",],
    ["France inter"          , "franceinter"         , [["youtube", 869, 898, 925]], "podcast",],
    ["Le percepteur"         , "lepercepteur"        , [["youtube", 622, 663, 696]], "essay",],
    ["Absol"                 , "absol"               , [["youtube", 391, 390, 388]], "podcast",],
    ["Tronche en biais"      , "troncheenbiais"      , [["youtube", 281, 285, 288]], "essay",],
    ["Monsieur Phi"          , "monsieurphi"         , [["youtube", 285, 289, 293]], "essay",],
    ["Cyrus North"           , "cyrusnorth"          , [["youtube", 703, 712, 730]], "essay",],
    ["Kriss Papillon"        , "krisspapillon"       , [["youtube", 645, 644, 642]], "essay",],
    ["Psyhodelik"            , "psyhodelik"          , [["youtube", 193, 195, 199]], "comment",],
    ["Canard Refractaire"    , "canardrefractaire"   , [["youtube", 165, 189, 193]], "essay",],
    ["AJ+"                   , "aj"                  , [["youtube", 374, 384, 394]], "essay",],
    ["Cemil"                 , "cemil"               , [["youtube", 75.8, 75.4, 75]], "essay",],
    ["ManonBrill"            , "manonbrill"          , [["youtube", 680, 680, 683]], "essay",],
    ["Idriss Aberkane"       , "idrissaberkane"      , [["youtube", 616, 673, 725]], "essay",],
    ["La Cartouche"          , "lacartouche"         , [["youtube", 58.6, 60.4, 62.1]], "essay",],
    ["Stephane Edouard"      , "stephaneedouard"     , [["youtube", 340, 349, 354]], "essay",],
    ["Greg Toussaint"        , "gregtoussaint"       , [["youtube", 327, 328, 336]], "essay",],
    ["Le crayon"             , "lecrayon"            , [["youtube", 74.5, 94, 110]], "podcast",],
    ["Konbini"               , "konbini"             , [["youtube", 1610, 1650, 1700]], "essay",],
    ["Lapin du futur"        , "lapindufutur"        , [["youtube", 101, 102, 104]], "essay",],
    ["Mos Majorum"           , "mosmajorum"          , [["youtube", 42.2, 42.9, 42.9]], "essay",],
    ["Trouble Fait"          , "troublefait"         , [["youtube", 197, 210, 218]], "essay",],
    ["Loic Chaigneau"        , "loicchaigneau"       , [["youtube", 23.7, 26.2, 26.4]], "essay",],
    ["Thinkerview"           , "thinkerview"         , [["youtube", 1020, 1050, 1070]], "podcast",],
    ["Elucid"                , "elucid"              , [["youtube", 90.8, 110, 125]], "podcast",],
    ["Les incorrectibles"    , "incorrectibles"      , [["youtube", 142, 149, 164]], "podcast",],
    ["Tatiana Ventose"       , "tatiana"             , [["youtube", 295, 300, 302]], "essay",],
    ["Francois Boulo"        , "praxis"              , [["youtube", 73.2, 77.1, 82.2]], "essay",],
    ["Hugo Decrypte"         , "hugodecrypte"        , [["youtube", 1650, 1690, 1750]], "essay",],
    ["Dany et raz"           , "danyraz"             , [["youtube", 7.47, 10.4, 11.6]], "essay",],
    ["Mediapart"             , "mediapart"           , [["youtube", 597, 614, 633]], "essay",],
    ["Le Média"              , "lemedia"             , [["youtube", 774, 807, 833]], "essay",],
    ["Draw Economy"          , "drawmyeconomy"       , [["youtube", 330, 343]], "essay",],
    ["TVL"                   , "tvl"                 , [["youtube", 602, 626]], "essay",],
    ["Alexis Poulain"        , "alexispoulain"       , [["youtube", 80.2, 86.3]], "essay",],
    ["croc blanc"            , "crocblanc"           , [["youtube", 23, 32.1]], "comment",],
    ["Blast"                 , "blast"               , [["youtube", 606, 648]], "essay",],
    ["Ben Nevert"            , "bennevert"           , [["youtube", 514, 522]], "podcast",],
    ["Antoine Goya"          , "antoinegoya"         , [["youtube", 89, 90.2]], "essay",],
    ["Pas Duhring"           , "pasduhring"          , [["youtube", 12.2, 14.3]], "essay",],
    ["Media for all"         , "lemediapourtous"     , [["youtube", 254, 262]], "essay",],
]

const DATAFAV = ["justemilieu", "bertille", "livrenoir", "lepercepteur", "mosmajorum", "elucid", "canardrefractaire", "lemedia"]


const DATAXY = [
  [930, 362],
  [502, 437],
  [706, 178],
  [642, 233],
  [849, 8],
  [844, 102],
  [653, 453],
  [766, 236],
  [296, 12],
  [594, 151],
  [475, 210],
  [358, 262],
  [266, 249],
  [247, 99],
  [712, 108],
  [808, 352],
  [272, 337],
  [188, 249],
  [198, 362],
  [205, 173],
  [777, 137],
  [867, 403],
  [915, 220],
  [997, 231],
  [556, 369],
  [143, -5],
  [1021, 368],
  [812, 448],
  [828, 259],
  [743, 487],
  [452, 18],
  [585, 292],
  [737, 356],
  [768, 303],
  [634, 370],
  [369, 0],
  [215, 452],
  [134, 213],
  [321, 88],
  [715, 261],
  [825, 194],
  [660, 316],
  [959, 463],
  [270, 183],
  [402, 168],
  [371, 354],
  [362, 441],
  [886, 291]
]


// Nota Bene 2110

