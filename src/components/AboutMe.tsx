import Image from "next/image";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <Image className={styles.image} src="/sapir-4.jpg" alt="ספירלה" width={300} height={400} />
            {/* תמונה של ספיר - אפשר להחליף ל-Next/Image */}
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>קצת עליי</h2>

          <div className={styles.intro}>
            <h3>אני ספיר ג׳רבי</h3>
            <ul className={styles.qualifications}>
              <li>מדריכת התפתחות תינוקות בגילאי 0-2</li>
              <li>יועצת שינה בגישה הוליסטית המשלבת הסתכלות על שינה, התפתחות וסביבה</li>
            </ul>
          </div>

          <p className={styles.belief}>
             <strong>מאמינה</strong> שהתפתחות מיטבית מתחילה דרך משחק, תנועה וקשר בין הורה ותינוק
          </p>

          <div className={styles.philosophy}>
            <h3>מה זה ספירלה?</h3>
            <p>
              אני באה מתוך האמונה שכל ילד הוא עולם. הוא לא רק הדרך בה מחנכים אותו, רק האופן שבו הוא מתפתח או ישן, רק מערכת היחסים שלו עם הוריו.
            </p>
            <p>
              אני שואפת לראות כל ילד, כל תינוק - כמכלול. להתבונן עליו כך תוך הענקת חשיבות לכל המעגלים הסובבים אותו, כיוון שלהם חלק אינטגרלי ומשפיע בחייו.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
