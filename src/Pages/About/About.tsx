import React from "react";
import classes from "./About.module.scss";
import about from "../../Assets/Images/about.png";

export const About = () => {
  return (
    <div className={`${classes.page} ${classes.about}`}>
      <h2 className={classes.heading}>Боен Легион</h2>
      <div className={classes.body}>
        <div className={classes.row}>
          <div className={classes.block}>
            <img src={about} alt="about" className={classes.picture} />
          </div>

          <div className={classes.block}>
            <h3>Кои са Боен Легион?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              incididunt ut labore et dolore magna aliqua.
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
                  <li>
                    Легата ръководи Легиона в мирно и военно време и
                    представлява 'Боен Легион' в международни конференции и др.
                  </li>
                  <li>Легата приема/отхвърля нови членове.</li>
                  <li>
                    Легата може да създава, променя и премахва постове в Боен
                    Легион по свое усмотрение.
                  </li>
                  <li>
                    Легата може да взима еднолични решения.
                    <ol>
                      <li>
                        Решенията могат да бъдат подложени на ВОТ за Вето от
                        клана при събрани писма за искане на ВОТ за ВЕТО от 50%
                        от клана.
                      </li>
                      <li>
                        Решението за ВЕТО се одобрява при 51% събрани гласове.
                      </li>
                    </ol>
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
                    Той ръководи Легиона в отсъствието на Легата. Ролята му
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
                  <li>Претора ръководи клан на Легиона.</li>
                  <li>Претора приема/отхвърля нови членове.</li>
                  <li>Претора разпределя постовете в клана.</li>
                  <li>
                    Претора може да взима еднолични решения за клана стига да не
                    са в разрез с политиката на Легиона и заповедите на Легата.{" "}
                  </li>
                </ol>
              </li>
              <li>
                <h6>Praefectus</h6>
                <ol>
                  <li>Префекта е дясната ръка на Претора.</li>
                  <li>
                    Той ръководи клана в отсъствието на Претора. Ролята му
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
                <span>Подкланове</span>
                <span>3</span>
              </li>
              <li>
                <span>Членове</span>
                <span>70</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
