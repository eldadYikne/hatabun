import tabunLogo from "../assets/tabun-logo.png";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import SwipeableTextMobileStepper from "./carousel";
import { useRef, useState } from "react";

export const HomePage = () => {
  const ref = useRef(null);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleClick = () => {
    setIsMenuShown(true);
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <div className="home-page">
      <div className="logo-container">
        <img src={tabunLogo} alt="logo" />
      </div>
      <div className="first-content">
        <h1> (: הגעתם עד אלינו איזה כיף </h1>
        <p dir="rtl">
          טאבון טראק מציע לכם חוויה איטלקית עם אלמנטים ארצישראלי החל מהטעמים ועד
          הנופים. בעגלה אנו מכינים פיצות נפוליטניות בטאבון 450, בצקים בהטפחה של
          72 שעות, רוטב עגבניות בייצור ביתי וגבינות ישראליות היישר ממחלבת עברי.
          הערכים שלנו מחייבים אותנו לא להתפשר על איכות המוצרים, טריות חומרי הגלם
          ושירות בלתי מתפשר.
        </p>
        <button className="menu-button" onClick={handleClick}>
          {" "}
          התפריט שלנו{" "}
        </button>
        <SwipeableTextMobileStepper />
        {isMenuShown && (
          <div ref={ref} className="menu-container">
            <img src={menu1} alt="menu" />
            <img src={menu2} alt="menu" />
          </div>
        )}
        <p>כשרות מהדרין – חלב ישראל</p>
        <p>ימים ושעות פתיחה ימי חמישי 20:00-00:00 ימי שישי 10:00-16:00</p>
      </div>
    </div>
  );
};
