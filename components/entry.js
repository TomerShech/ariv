import { transliterate } from "../utils/transliteration";

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
