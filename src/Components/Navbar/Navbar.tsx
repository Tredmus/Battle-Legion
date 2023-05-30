import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { icons } from "../../Assets/Icons/Icons";
import { Dispatch, SetStateAction, useState, useRef } from "react";
import audio from "../../Assets/sons-of-mars.mp3";

type Props = {
  isActive: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({ isActive, setNav }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audio));
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <nav className={`${classes.nav} ${isActive && classes.active}`}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.AiFillHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.BsInfoCircleFill />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.BiBook />
            <span>History</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/people"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.BsPeopleFill />
            <span>People</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/structure"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.MdAccountTree className={classes.treeIcon} />
            <span>Structure</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/alliance"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.GiWingedShield />
            <span>Alliance</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/media"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.FiFilm />
            <span>Media</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/invite"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.MdPersonAdd />
            <span>Invite</span>
          </NavLink>
        </li>
      </ul>

      <div className={classes.overflow}>
        <div className={classes.song} onClick={playSong}>
          <audio src={audio} />
          <icons.AiOutlineSound />
        </div>
        <img
          src="Images/banner-bottom.png"
          alt="gasgasg asg asg"
          className={classes.bottom}
        />
      </div>
    </nav>
  );
};
