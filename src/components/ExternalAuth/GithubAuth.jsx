import styles from './ExternalAuth.module.css';
import GithubIcon from '../../assets/github-icon.svg';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export let pendingCred

export const GithubAuth = () => {
  
  const navigate = useNavigate();
  return (
    <button
        className={styles.googleLogin}
        onClick = {() => navigate("#")}>
        <img src={GithubIcon} alt='Google-icon' />
        <p>Sign in with Github</p>
    </button>
  );
};
