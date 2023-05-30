import classes from "./Alliance.module.scss";

export const Alliance = () => {
  return (
    <>
      <div className={classes.background}></div>
      <div className={`${classes.page} ${classes.alliance}`}>
        <h2 className={classes.heading}>Част от AEGIS</h2>
        <div className={classes.body}>
          <div className={classes.head}>
            <img src="Images/flags/aegis.png" alt="" className={classes.flag} />
            <p>
              Свободните народи на Европа, желаейки да създадат постоянна основа
              за мирно съжителство и развитие на нормални и добри отношения
              помежду си, като се стремят към мир и укрепване на сигурността
              помежду си, решиха да сключат този договор.
            </p>
          </div>

          <ul className={classes.clans}>
            <li>
              <img src="Images/logo.png" alt="" className={classes.flag} />
              <span>Battle Legion</span>
            </li>
            <li>
              <img
                src="Images/flags/saruhan.png"
                alt=""
                className={classes.flag}
              />
              <span>Saruhanlı Ailesi</span>
            </li>
            <li>
              <img
                src="Images/flags/trze.png"
                alt=""
                className={classes.flag}
              />
              <span>Trzebiatowscy</span>
            </li>
            <li>
              <img
                src="Images/flags/szyman.png"
                alt=""
                className={classes.flag}
              />
              <span>Szymanowicz</span>
            </li>
            <li>
              <img src="Images/flags/ron.png" alt="" className={classes.flag} />
              <span>Riders of the Night</span>
            </li>
            <li>
              <img
                src="Images/flags/lubomir.png"
                alt=""
                className={classes.flag}
              />
              <span>Lubomirscy</span>
            </li>
          </ul>

          <ul className={classes.organization}>
            <li>
              <span>
                <span className={classes.bold}>Член I.</span> Декларация за мир
              </span>
              <span>
                {" "}
                1. Всички кланове и държави (наричани още "Членове на Aegis") си
                предлагат мир и искрено приятелство и ще направят всичко по
                силите си, за да се защитават взаимно.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Член II.</span> Декларация за
                сътрудничество
              </span>
              <span>
                {" "}
                1. Членовете на Aegis са единодушни, че е в техен общ интерес да
                разширят икономическите и военните си отношения.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Член III.</span> Декларация за
                комуникация
              </span>
              <span>
                {" "}
                1. Членовете на Aegis се съгласяват да обменят информация за
                движението на подозрителни лица или армии.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Член IV.</span> Дипломация
              </span>
              <span>
                {" "}
                1. За целите на дипломацията, контактите и търговията всички
                членове на Aegis ще приемат пратеници на други членове на съюза.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Член V.</span> Пакт за защита
              </span>
              <span>
                {" "}
                1. Членовете на Aegis обещават да помагат и защитават своята
                територия и области на интерес, когато са нападнати от външни
                или вътрешни враждебни сили.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Член VI.</span> Заключителни
                разпоредби
              </span>
              <span>
                {" "}
                1. Всички кланове и държави, които вярват в доброто, са поканени
                да се присъединят към Aegis.
              </span>

              <span>
                2. Договорът на Алианса Aegis може да бъде анулиран само по
                взаимно съгласие на членовете на Алианса Aegis. Едностранното
                денонсиране на Алианса без знанието на страните по него ще се
                счита за враждебен акт.
              </span>

              <span>
                3. Промените, направени в договора, трябва да се извършват само
                с обсъждането и одобрението на всички подписали го страни.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
