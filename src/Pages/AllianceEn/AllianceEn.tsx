import classes from "./Alliance.module.scss";

export const AllianceEn = () => {
  return (
    <>
      <div className={classes.background}></div>
      <div className={`${classes.page} ${classes.alliance}`}>
        <h2 className={classes.heading}>Part of AEGIS</h2>
        <div className={classes.body}>
          <div className={classes.head}>
            <img src="Images/flags/aegis.png" alt="" className={classes.flag} />
            <p>
              Free People of Europe desiring to create a permanent basis for
              peaceful coexistence and development of normal and good relations
              between them, aiming at peace and strengthening the security of
              each other decided to conclude this treaty.
            </p>
          </div>

          <ul className={classes.clans}>
            <li>
              <img
                src="Images/flags/bl-0.png"
                alt=""
                className={classes.flag}
              />
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
                <span className={classes.bold}>Article I.</span> Declaration of
                Peace
              </span>
              <span>
                {" "}
                1. All Clans and States (called also "Aegis Members") offer each
                other peace and sincere friendship and will do everything in
                their power to protect ech other.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Article II.</span> Declaration of
                Cooperation
              </span>
              <span>
                {" "}
                1. Aegis Members are unanimous that it is in their common
                interest to widen their economic and military relations.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Article III.</span> Covenant
                Communicatory
              </span>
              <span>
                {" "}
                1. Aegis Members agree to exchange information considering the
                movement of suspicious persons or armies.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Article IV.</span> Diplomacy
              </span>
              <span>
                {" "}
                1. For the sake of diplomacy, contacts and trading, all Aegis
                Members will accept envoys of each other.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Article V.</span> Defense Pact
              </span>
              <span>
                {" "}
                1. Aegis Members promise to help and defend their territory and
                areas of interest, when they are attacked by external or
                internal hostile forces.
              </span>
            </li>
            <li>
              <span>
                <span className={classes.bold}>Article VI.</span> Final
                Provisions
              </span>
              <span>
                {" "}
                1. All Clans and States of good are invited to join Aegis
                Alliance.
              </span>

              <span>
                2. The treaty of the Aegis Alliance can only be annulled by
                mutual agreement of the Aegis Members. Unilateral denunciation
                of the Alliance without knowledge of their parties will be
                thoughtas a hostile act.
              </span>

              <span>
                3. Changes made to the treaty should only be done with
                theconsideration and approval of all signatories.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
