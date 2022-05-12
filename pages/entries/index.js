import Head from "next/head";
import Entry from "../../components/entry";
import { getAllEntries } from "../../prisma/entry";
import { transliterate } from "../../utils/transliteration";

export const getServerSideProps = async ({ req }) => {
    const entries = await getAllEntries();
    const updatedEntries = entries.map((entry) => ({
        ...entry,
        updatedAt: entry.updatedAt.toString(),
        createdAt: entry.createdAt.toString(),
    }));

    return { props: { entries: updatedEntries } };
};

export default function Entries({ entries }) {
    return (
        <>
            <Head>
                <title>מילון עריב - ערכים</title>
            </Head>
            <h1>ערכים</h1>
            {entries.map((entry) => (
                <div key={entry.id}>
                    <h2>{entry.word}</h2>
                    <h1>{entry.translation}</h1>
                    <h2>{}</h2>
                    <p>הערך נוסף לעריב ב־{new Date(entry.createdAt).toLocaleDateString()}</p>
                </div>
            ))}
            <Entry
                word="למה"
                translation="ليش"
                definitions={["לשם מה, מחמת מה", "מילת שאלה לסיבה או לתכלית", "מדוע"]}
            />
        </>
    );
}
