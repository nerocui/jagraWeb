import React, { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import { Register } from '../../utils/AuthService';
import { Link, withRouter } from 'react-router-dom';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import useStyles from '../../style/login';

const SignupPage = (props: any) => {
	const [username, SetUsername] = useState('');
	const [password, SetPassword] = useState('');
	const OnChangeUsername = (e: any) => {
		SetUsername(e.target.value);
	};
	const OnChangePassword = (e: any) => {
		SetPassword(e.target.value);
	};
	const OnSubmit = (e: any) => {
		e.preventDefault();

		Register(username, password);
		SetUsername('');
        SetPassword('');
        props.history.push('/');
	};
	const classes = useStyles();
	return (
		<Fabric className={classes.root}>
			<div className={classes.formBox}>
				<form onSubmit={OnSubmit}>
					<Label>User name</Label>
					<TextField value={username} onChange={OnChangeUsername} />
					<Label>Password</Label>
					<TextField value={password} onChange={OnChangePassword} type="password"/>
					<PrimaryButton className={classes.gap} type="submit">Register</PrimaryButton>
				</form>
				<Link to="/">Login</Link>
			</div>
		</Fabric>
	);
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
		token: state.AuthState.token,
	};
}

const SignupPageWithRouter = withRouter(SignupPage);

export default connect(MapStateToProps)(SignupPageWithRouter);
