const symbols = Object.freeze({
    ا: "א",
    ب: "בּ",
    ت: "ת",
    ث: "ת'",
    ج: "ז'",
    ح: "ח",
    خ: "ח'",
    د: "ד",
    ذ: "ד'",
    ر: "ר",
    ز: "ז",
    س: "ס",
    ش: "ש",
    ص: "צ",
    ض: "צ'",
    ط: "ט",
    ظ: "ט'",
    ع: "ע",
    غ: "ע'",
    ف: "פ",
    ق: "ק",
    ك: "כּ",
    ل: "ל",
    م: "מ",
    ن: "נ",
    ه: "ה",
    و: "ו",
    ي: "י",
    ة: "ה'",
    ء: "א",
    أ: "א",
    إ: "א",
    "\u064e": "\u05b7", // fathah: patah
    "\u0650": "\u05b4", // kasra: hirik
    "\u064f": "\u05bb", // damma: kubuts
    "\u0652": "\u05b0", // sukun: shva
    "\u0651": "\u05bc", // shadda: dagesh
});

function transliterate(word) {
    const result = [];
    word.split("").forEach((char) => {
        if (symbols.hasOwnProperty(char)) {
            const hebrewLetter = symbols[char];
            result.push(hebrewLetter);
        }
    });
    if (["מ", "נ", "צ", "פ", "כ"].includes(result.at(-1))) {
        result[result.length - 1] = String.fromCodePoint(result[result.length - 1].codePointAt(0) - 1);
    }
    return result.join("");
}

export default function Entry({ word, translation, definitions }) {
    return (
        <div>
            <h1>{word}</h1>
            <h1 lang="ar">{translation}</h1>
            <h2>{transliterate(translation)}</h2>
            <ul>
                {definitions.map((definition, key) => (
                    <li key={key}>{definition}</li>
                ))}
            </ul>
        </div>
    );
}
