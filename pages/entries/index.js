import Head from "next/head";
import Entry from "../../components/entry";

export default function Entries() {
    return (
        <>
            <Head>
                <title>מילון עריב - ערכים</title>
            </Head>
            <h1>ערכים</h1>
            <Entry
                word="למה"
                translation="ليش"
                definitions={["לשם מה, מחמת מה", "מילת שאלה לסיבה או לתכלית", "מדוע"]}
            />
        </>
    );
}
