const DATA = [
    // NAME                  , namecode              , platforms          , type     ,"story"
    ["Consul Pazen"          , "consulpazen"         , [["youtube", 71.8, 74.5]], "comment",],
    ["Zio Clo"               , "zioclo"              , [["youtube", 13.9, 14.5]], "podcast",],
    ["Je suis pas content"   , "jesuispascontent"    , [["youtube", 322, 340]], "comment",],
    ["Juste milieu"          , "justemilieu"         , [["youtube", 279, 296]], "comment",],
    ["Le raptor"             , "leraptor"            , [["youtube", 736, 735]], "essay",],
    ["Sud Radio"             , "sudradio"            , [["youtube", 674, 706]], "podcast",],
    ["Bertille"              , "bertille"            , [["youtube", 8.72, 8.72]], "essay",],
    ["Livre noir"            , "livrenoir"           , [["youtube", 297, 313]], "podcast",],
    ["France inter"          , "franceinter"         , [["youtube", 869, 898]], "podcast",],
    ["Le percepteur"         , "lepercepteur"        , [["youtube", 622, 663]], "essay",],
    ["Absol"                 , "absol"               , [["youtube", 391, 390]], "podcast",],
    ["Tronche en biais"      , "troncheenbiais"      , [["youtube", 281, 285]], "essay",],
    ["Monsieur Phi"          , "monsieurphi"         , [["youtube", 285, 289]], "essay",],
    ["Cyrus North"           , "cyrusnorth"          , [["youtube", 703, 712]], "essay",],
    ["Kriss Papillon"        , "krisspapillon"       , [["youtube", 645, 644]], "essay",],
    ["Psyhodelik"            , "psyhodelik"          , [["youtube", 193, 195]], "comment",],
    ["Canard Refractaire"    , "canardrefractaire"   , [["youtube", 165, 189]], "essay",],
    ["AJ+"                   , "aj"                  , [["youtube", 374, 384]], "essay",],
    ["Cemil"                 , "cemil"               , [["youtube", 75.8, 75.4]], "essay",],
    ["ManonBrill"            , "manonbrill"          , [["youtube", 680, 680]], "essay",],
    ["Idriss Aberkane"       , "idrissaberkane"      , [["youtube", 616, 673]], "essay",],
    ["La Cartouche"          , "lacartouche"         , [["youtube", 58.6, 60.4]], "essay",],
    ["Stephane Edouard"      , "stephaneedouard"     , [["youtube", 340, 349]], "essay",],
    ["Greg Toussaint"        , "gregtoussaint"       , [["youtube", 327, 328]], "essay",],
    ["Le crayon"             , "lecrayon"            , [["youtube", 74.5, 94]], "podcast",],
    ["Konbini"               , "konbini"             , [["youtube", 1610, 1650]], "essay",],
    ["Lapin du futur"        , "lapindufutur"        , [["youtube", 101, 102]], "essay",],
    ["Mos Majorum"           , "mosmajorum"          , [["youtube", 42.2, 42.9]], "essay",],
    ["Trouble Fait"          , "troublefait"         , [["youtube", 197, 210]], "essay",],
    ["Loic Chaigneau"        , "loicchaigneau"       , [["youtube", 23.7, 26.2]], "essay",],
    ["Thinkerview"           , "thinkerview"         , [["youtube", 1020, 1050]], "podcast",],
    ["Elucid"                , "elucid"              , [["youtube", 90.8, 110]], "podcast",],
    ["Les incorrectibles"    , "incorrectibles"      , [["youtube", 142, 149]], "podcast",],
    ["Tatiana Ventose"       , "tatiana"             , [["youtube", 295, 300]], "essay",],
    ["Francois Boulo"        , "praxis"              , [["youtube", 73.2, 77.1]], "essay",],
    ["Hugo Decrypte"         , "hugodecrypte"        , [["youtube", 1650, 1690]], "essay",],
    ["Dany et raz"           , "danyraz"             , [["youtube", 7.47, 10.4]], "essay",],
    ["Mediapart"             , "mediapart"           , [["youtube", 597, 614]], "essay",],
    ["Le Média"              , "lemedia"             , [["youtube", 774, 807]], "essay",],
    ["Draw Economy"          , "drawmyeconomy"       , [["youtube", 330]], "essay",],
    ["TVL"                   , "tvl"                 , [["youtube", 602]], "essay",],
    ["Alexis Poulain"        , "alexispoulain"       , [["youtube", 80.2]], "essay",],
    ["Croc blanc"            , "crocblanc"           , [["youtube", 23]], "comment",],
    ["Blast"                 , "blast"               , [["youtube", 606]], "essay",],
    ["Ben Nevert"            , "bennevert"           , [["youtube", 514]], "podcast",],
    ["Antoine Goya"          , "antoinegoya"         , [["youtube", 89]], "essay",],
    ["Pas Duhring"           , "pasduhring"          , [["youtube", 12.2]], "essay",],
    ["Media for all"         , "lemediapourtous"     , [["youtube", 254]], "essay",],
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

