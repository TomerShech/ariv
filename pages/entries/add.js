import Head from "next/head";

export default function Add() {
    return (
        <>
            <Head>
                <title>מילון עריב - הוספת ערך</title>
            </Head>
            <h1>הוספת ערך</h1>
            <p>
                כמילון קהילתי, עריב מאפשר למשתמשיו ומשתמשותיו להוסיף ערכים חדשים ולערוך ולבקר ערכים קיימים. כל תרומה
                מתקבלת בברכה וכל ערך נבדק לפני כניסתו הסופית למילון.
            </p>
            <p>כדי לשמור על דיוק ועקביות, שימו לב למספר דגשים בעת הצעת ערך חדש לעריב:</p>
            <ol>
                <li>כתבו בשפה מוקפדת, תקנית ונטולת שגיאות</li>
                <li>הגדירו בצורה אובייקטיבית, ממוקדת ותמציתית</li>
                <li>עקבו אחר הניקוד המקובל של התעתיק</li>
            </ol>
            <p>תודה על רצונכם לקחת חלק, אין זה מובן מאליו!</p>
            <form action="/entries" method="POST">
                <label for="word">
                    מילה
                    <input type="text" id="word" name="word" placeholder="הערך בעברית" required />
                </label>
                <label for="translation">
                    תרגום
                    <input
                        type="text"
                        id="translation"
                        name="translation"
                        placeholder="התרגום בערבית"
                        lang="ar"
                        required
                    />
                </label>
                <label for="definition">הגדרות</label>
                <textarea
                    id="definition"
                    name="definition"
                    rows="5"
                    placeholder="יש להפריד מספר הגדרות באמצעות שורה חדשה"
                    required
                ></textarea>
                <button type="submit">הוספה</button>
            </form>
        </>
    );
}
