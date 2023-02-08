import classes from "./Tree.module.scss";

type Props = {
  legionaries: {
    name: string;
    rank: string;
    legion: string;
    reportsTo?: string;
  }[];
};

export const Tree = ({ legionaries }: Props) => {
  const legions = ["OG", "First", "Second", "Third"];

  return (
    <>
      <div className={classes.tree}>
        <ul>
          <li className={classes.legatus}>
            <div className={classes.element}>
              <img
                src="Images/border-small.png"
                alt=""
                className={classes.border}
              />
              <span>Faraonqbg</span>
            </div>
            <ul>
              <li className={classes.tribunus}>
                <div className={classes.element}>
                  <img
                    src="Images/border-small.png"
                    alt=""
                    className={classes.border}
                  />
                  <span>Dudie</span>
                </div>
                <ul>
                  {legions &&
                    legions.map(
                      (legion) =>
                        legionaries &&
                        legionaries
                          .filter(
                            (preator) =>
                              preator.legion === legion &&
                              preator.rank === "Praetor"
                          )
                          .map((preator) => (
                            <li className={classes.praetor} key={legion}>
                              <div className={classes.element}>
                                <img
                                  src="Images/border-small.png"
                                  alt=""
                                  className={classes.border}
                                />
                                {preator.name === "Mis_ok" ? (
                                  <span className={classes.misok}>
                                    Mis_ok / Leora
                                  </span>
                                ) : (
                                  <span className={classes.misok}>
                                    {preator.name}
                                  </span>
                                )}
                              </div>
                              <ul>
                                {legionaries
                                  .filter(
                                    (praefectus) =>
                                      praefectus.legion === legion &&
                                      praefectus.rank === "Praefectus"
                                  )
                                  .map((praefectus) => (
                                    <li className={classes.praefectus}>
                                      {preator.name === "Mis_ok" ||
                                      praefectus.name === "VACANT" ? (
                                        ""
                                      ) : (
                                        <div className={classes.element}>
                                          <img
                                            src="Images/border-small.png"
                                            alt=""
                                            className={classes.border}
                                          />
                                          {praefectus.name}
                                        </div>
                                      )}

                                      <ul className={classes.cent}>
                                        {legionaries
                                          .filter(
                                            (centurio) =>
                                              centurio.legion === legion &&
                                              centurio.rank === "Centurio"
                                          )
                                          .map((centurio) => (
                                            <li className={classes.centurio}>
                                              <div className={classes.element}>
                                                <img
                                                  src="Images/border-small.png"
                                                  alt=""
                                                  className={classes.border}
                                                />
                                                {centurio.name}
                                              </div>
                                              <ul className={classes.vertical}>
                                                {legionaries
                                                  .filter(
                                                    (legionary) =>
                                                      legionary.legion ===
                                                        legion &&
                                                      legionary.rank ===
                                                        "Legionarius" &&
                                                      legionary.reportsTo ===
                                                        centurio.name
                                                  )
                                                  .map((legionary) => (
                                                    <li
                                                      className={
                                                        classes.legionarius
                                                      }
                                                    >
                                                      <div
                                                        className={
                                                          classes.element
                                                        }
                                                      >
                                                        <img
                                                          src="Images/border-small.png"
                                                          alt=""
                                                          className={
                                                            classes.border
                                                          }
                                                        />
                                                        {legionary.name}
                                                      </div>
                                                    </li>
                                                  ))}
                                              </ul>
                                            </li>
                                          ))}
                                      </ul>
                                    </li>
                                  ))}
                              </ul>
                            </li>
                          ))
                    )}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
