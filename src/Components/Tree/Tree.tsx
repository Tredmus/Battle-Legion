import { useState } from "react";
import classes from "./Tree.module.scss";
import { icons } from "../../Assets/Icons/Icons";
// import { ModalTree } from "../ModalTree/ModalTree";

type Props = {
  legionaries: { name: string; rank: string; legion: string }[];
};

export const Tree = ({ legionaries }: Props) => {
  const [openTree, setOpenTree] = useState(true);

  // const specialtiesInternTeamData =
  //   teamData.interns &&
  //   teamData.interns.length > 0 &&
  //   teamData.interns.map((interns) => interns.specialty);
  // const specialtiesMentorTeamData =
  //   teamData.mentors && teamData.mentors.map((mentors) => mentors.specialty);
  // const specialtiesTeamData = specialtiesInternTeamData &&
  //   specialtiesMentorTeamData && [
  //     ...specialtiesInternTeamData,
  //     ...specialtiesMentorTeamData,
  //   ];
  // const specialties = specialtiesTeamData && [...new Set(specialtiesTeamData)];

  const open = () => {
    setOpenTree(true);
  };

  const close = () => {
    setOpenTree(false);
  };
  const og =
    legionaries && legionaries.filter((legionary) => legionary.legion === "OG");
  const first =
    legionaries &&
    legionaries.filter((legionary) => legionary.legion === "First");
  const second =
    legionaries &&
    legionaries.filter((legionary) => legionary.legion === "Second");

  const legions = ["OG", "First", "Second"];

  return (
    <>
      {openTree && (
        <div className={classes.modal}>
          <div className={classes.tree}>
            <ul>
              <li className={classes.legatus}>
                <div className={classes.element}>
                  <span>Faraonqbg</span>
                </div>
                <ul>
                  <li className={classes.trubunus}>
                    <div className={classes.element}>
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
                                    {preator.name}
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
                                          <div className={classes.element}>
                                            {praefectus.name}
                                          </div>
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
        </div>
      )}

      <span className={classes.treeWrapper}>
        <icons.MdAccountTree data-testid="openTree" className={classes.icon} />
      </span>
    </>
  );
};
