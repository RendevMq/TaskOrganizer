import styles from './Login.module.css';
import myDashboardIcon from '../../assets/my-dashboard-icon-gradient.png';
import CloseIcon from '../../assets/close-icon.svg';
import NextIcon from '../../assets/next-icon.svg';
import ErrorIcon from '../../assets/error-icon.svg';
import { GoogleAuth } from '../../components/ExternalAuth/GoogleAuth.jsx'
import { GithubAuth } from '../../components/ExternalAuth/GithubAuth.jsx'; 
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
	const initialValue = {
		username: '',
		password: '',
	};

	const [user, setUser] = useState(initialValue);
	const [showUsernameInput, setShowUsernameInput] = useState(true);
	const [errors, setErrors] = useState({});
	const [apiErrors, setApiErrors] = useState(null);
	const navigate = useNavigate();

	const handleData = e => {
		const { name, value } = e.target;
		setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
		setApiErrors(null);
		setUser({ ...user, [name]: value });
	};

	const handleNextButton = e => {
		e.preventDefault();
		if (!user.username) {
			setErrors({ username: 'Username is required.' });
		} else {
			setErrors({});
			setShowUsernameInput(false);
		}
	};

	const goToRedicrect = () => {
		navigate("/redirect")
	}

	return (
		
		<div className={styles.loginPage}>

			<Link to={'/'}>
				<img
					src={CloseIcon}
					alt='Close-icon'
					className={styles.closeIcon}
				/>
			</Link>

			<form className={styles.form}>
				<div className={styles.title}>
					<img src={myDashboardIcon} alt='MyDashboard-icon' />
					<h1>Login to TaskOrganizer</h1>
				</div>
				<button type = "button" onClick={goToRedicrect} className={styles.navigatee}>Access Without Logging In</button>

				{showUsernameInput ? (
					<div className={styles.userLogin}>
						<span className={styles.input}>
							<input
								type='text'
								autoComplete='off'
								placeholder='username'
								name='username'
								value={user.username}
								onChange={handleData}
							/>
							<button
								className={styles.nextIcon}
								onClick={handleNextButton}>
								<img src={NextIcon} alt='Next-icon' />
							</button>
						</span>

						<GoogleAuth/>
						<GithubAuth/>
					</div>
				) : (
					<div className={styles.userLogin}>
						<span className={styles.input}>
							<input
								type='password'
								autoComplete='off'
								placeholder='password'
								name='password'
								value={user.password}
								onChange={handleData}
							/>
							<button
								className={styles.nextIcon}
								onClick={saveData}>
								<img src={NextIcon} alt='Next-icon' />
							</button>
						</span>
						<span className={styles.externalAuth}>
						<GoogleAuth/>
						<GithubAuth/>
						</span>
					</div>
				)}
			</form>


            {errors.username && (
                <p className={styles.error}>
                    <img src={ErrorIcon} alt="Error-icon" />
                    {errors.username}
                </p>
            )};

            {errors.password && (
                <p className={styles.error}>
                    <img src={ErrorIcon} alt="Error-icon" />
                    {errors.password}
                </p>
            )};

            {apiErrors && (
                <p className={styles.error}>
                    <img src={ErrorIcon} alt="Error-icon" />
                    {apiErrors}
                </p>
            )}

			<div className={styles.signin}>
				<span />
				<p>
					No account yet?{' '}
					<Link to={'/signup'} className={styles.link}>
						Sign up.
					</Link>
				</p>
			</div>
		</div>
	);
};
