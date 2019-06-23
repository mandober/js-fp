// Lambda Calculus with JS

var ƒTRUE  = Symbol("Tr: 𝛌xy.x");
var ƒFALSE = Symbol("Fa: λxy.y");

var ƒT = a => b => a;
var ƒF = a => b => b;

var ƒmkop = frozen => pred=> bn => (pred(bn))(frozen);

var ƒand = ƒmkop(ƒFALSE);
var ƒAND = ƒmkop(ƒF);



// λ λ ᴧ 𝚲 𝛌 𝛬 𝜆 𝜦 𝝀 𝝠 𝝺 𝞚 𝞴 ƛ
// ƒ Ω ℓ Å ㎏ π ƌ ƍ ƒ ƕƙ ƚ ª º ƻ ǀ ǁ ǂ ǃ 𐎍
// abcdefghijklmnopqrstuvwxyz µ ß ø
// àáâãäåæçèéêëìíîïðñòóôõöùúûüýþÿāăąćĉċčďđēĕėęěĝğġģĥ
// ħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżžſƀƃƅƈ
// ƌƍƒƕƙƚƛƞơƣƥƨƪƫƭưƴƶƹƺƽƾƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃ
// ȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳȴȵȶȷȸȹȼȿɀɂɇɉɋɍɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳ
// ɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭ
// ʮʯͱͳͷͻͼͽΐάέήίΰ ϣϥϧϩϫϭϯϰϱϲϳϵϸϻϼаб
// αβγδεζηθικλμνξοπρςστυφχψω ϊϋόύώ ϐ ϑ ϕ ϖ ϗ ϙ ϛ ϝ ϟ ϡ
// вгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџѡѣѥѧѩѫѭ
// ѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋ
// ԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯաբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆևᏸᏹᏺᏻᏼᏽ
// ᴀᴁᴂᴃᴄᴅᴆᴇᴈᴉᴊᴋᴌᴍᴎᴏᴐᴑᴒᴓᴔᴕᴖᴗᴘᴙᴚᴛᴜᴝᴞᴟᴠᴡᴢᴣᴤᴥᴦᴧᴨᴩᴪᴫᵫᵬᵭᵮᵯᵰᵱᵲᵳᵴᵵᵶᵷᵹᵺᵻᵼᵽᵾᵿᶀ