import styles from './ExternalAuth.module.css';
import GoogleIcon from '../../assets/google-icon.svg';
import { pendingCred } from '../../components/ExternalAuth/GithubAuth.jsx'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const GoogleAuth = () => {
  const navigate = useNavigate();
  return (
    <button
        className={styles.googleLogin}
        onClick>
        <img src={GoogleIcon} alt='Google-icon' />
        <p>Sign in with Google</p>
    </button>
  );
};

