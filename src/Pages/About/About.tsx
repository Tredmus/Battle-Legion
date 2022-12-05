import React from "react";
import classes from "./About.module.scss";
import about from "../../Assets/Images/about.png";
import { legionariesCount } from "../People/legionaries";

export const About = () => {
  return (
    <div className={`${classes.page} ${classes.about}`}>
      <h2 className={classes.heading}>За Боен Легион</h2>
      <div className={classes.body}>
        <div className={classes.row}>
          <div className={classes.block}>
            <img src={about} alt="about" className={classes.picture} />
          </div>

          <div className={classes.block}>
            <h3>За нас</h3>
            <p>
              Боен Легион е военна организация, целяща създаването на
              професионална армия, способна да се справи с всяка заплаха над
              Царство България. Състои се от 4 легиона под ръководството на
              Легат Faraonqbg, като всеки легион бива воден от Претор.
            </p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.block}>
            <h3 className={`${classes.heading} ${classes.subheading}`}>
              Устав
            </h3>
            <ul className={classes.organization}>
              <li>
                <h6>Legatus Legionis</h6>
                <ol>
                  <li>Легата ръководи Боен Легион.</li>
                  <li>Легата приема/отхвърля нови членове.</li>
                  <li>
                    Легата може да взима еднолични решения и има пълна еднолична
                    власт да добававя, променя и премахва постове и структури в
                    Боен Легион по свое усмотрение.
                  </li>
                </ol>
              </li>
              <li>
                <h6>Tribunis Laticlavius</h6>
                <ol>
                  <li>Трибуна е дясната ръка на Легата.</li>
                  <li>
                    Трибуна поема повечето административни дейности , касаещи
                    ежедневните действия на легионерите и легиона.
                  </li>
                  <li>
                    Той ръководи Боен Легион в отсъствието на Легата. Ролята му
                    покрива всички функции на Легата.
                    <ol>
                      <li>
                        Титлата се дава само от Легата за време по негово
                        усмотрение.
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <h6>Praetor</h6>
                <ol>
                  <li>Претора ръководи легион.</li>
                  <li>Претора приема/отхвърля нови членове.</li>
                  <li>Претора разпределя постовете в легиона.</li>
                  <li>
                    Претора може да взима еднолични решения за легиона си стига
                    да не са в разрез с политиката на Боен Легион и заповедите
                    на Легата.{" "}
                  </li>
                </ol>
              </li>
              <li>
                <h6>Praefectus</h6>
                <ol>
                  <li>Префекта е дясната ръка на Претора.</li>
                  <li>
                    Той ръководи легиона си в отсъствието на Претора. Ролята му
                    покрива всички функции на Претора.
                  </li>
                </ol>
              </li>
              <li>
                <h6>Primus Pilus</h6>
                <ol>
                  <li>
                    Генерал на армията на клана и ръководител на центурионите.
                  </li>
                </ol>
              </li>
              <li>
                <h6>Centurio</h6>
                <ol>
                  <li>Центуриона ръководи група от 8 човека със него.</li>
                  <li>
                    Центуриона комуникира с хората в групата му и отговоря за
                    тяхната информираност (кога да следват, дали имат пакет,
                    оръжие и храна).
                  </li>
                  <li>
                    Хората в групата докладват събитията си и нуждите си първо
                    на Центуриона.
                  </li>
                </ol>
              </li>
              <li>
                <h6>Optio</h6>
                <ol>
                  <li>
                    Временен заместник на Центуриона при невъзможност да
                    изпълнява задълженията си.
                  </li>
                </ol>
              </li>
              <li>
                <h6>Legionarius</h6>
                <ol>
                  <li>Легионер е всеки член на Боен Легион.</li>
                  <li>Легионера следва указанията на Центуриона си.</li>
                  <li>
                    Всеки Легионер представлява Боен Легион и трябва да се държи
                    на съответното ниво за ранга си.
                  </li>
                </ol>
              </li>
              <li>
                <h6>Tiro</h6>
                <ol>
                  <li>
                    Младши Легионер, който няма месец служба и не е участвал в
                    битка.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
          <div className={classes.block}>
            <h3 className={`${classes.heading} ${classes.subheading}`}>
              Статистика
            </h3>
            <ul className={classes.stats}>
              <li>
                <span>Легиони</span>
                <span>4</span>
              </li>
              <li>
                <span>Членове</span>
                <span>{legionariesCount}</span>
              </li>
              <li>
                <span>Влияние</span>
                <span>9000+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
