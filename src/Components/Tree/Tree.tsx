import React, { useState } from "react";
import classes from "./Tree.module.scss";
import { icons } from "../../Assets/Icons/Icons";
// import { ModalTree } from "../ModalTree/ModalTree";

// type Props = {
//   teamData: TeamType;
// };

export const Tree = () => {
  // const [openTree, setOpenTree] = useState(false);

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

  // const open = () => {
  //   setOpenTree(true);
  // };

  // const close = () => {
  //   setOpenTree(false);
  // };

  return (
    <>
      {/* {openTree && (
        <ModalTree onClose={close}>
          <div className={classes.tree}>
            <ul>
              <li className={classes.team}>
                <div className={classes.element}>
                  <span>{teamData.name}</span>
                </div>
                <ul>
                  {specialties &&
                    specialties.map((specialty) => (
                      <li key={specialty} className={classes.subTeam}>
                        <div className={classes.element}>{specialty} Team</div>
                        <ul>
                          {teamData.mentors.filter((mentor) => mentor.specialty === specialty)
                            .length > 0 && (
                            <li className={classes.mentor}>
                              <div className={classes.element}>Mentors</div>
                              <ul className={classes.vertical}>
                                {teamData &&
                                  teamData.mentors
                                    .filter((mentor) => mentor.specialty === specialty)
                                    .map((mentor) => (
                                      <li key={mentor.firstName} className={classes.mentors}>
                                        <div className={classes.element}>{mentor.firstName}</div>
                                      </li>
                                    ))}
                              </ul>
                            </li>
                          )}
                          {teamData.interns.filter((intern) => intern.specialty === specialty)
                            .length > 0 && (
                            <li className={classes.intern}>
                              <div className={classes.element}>Interns</div>
                              <ul className={classes.vertical}>
                                {teamData.interns
                                  .filter((intern) => intern.specialty === specialty)
                                  .map((intern) => (
                                    <li key={intern.firstName} className={classes.interns}>
                                      <div className={classes.element}>{intern.firstName}</div>
                                    </li>
                                  ))}
                              </ul>
                            </li>
                          )}
                        </ul>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>
        </ModalTree>
      )} */}

      <span className={classes.treeWrapper}>
        <icons.MdAccountTree data-testid="openTree" className={classes.icon} />
      </span>
    </>
  );
};
