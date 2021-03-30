import React from "react";
import { GoogleLogin } from "react-google-login";

const SignIn = () => {
	const responseGoogle = response => {
		console.log(response); // me da el token de inicio de sesion
		console.log(response.profileObj); // datos del perfil de usuario
	};

	return (
		<React.Fragment>
			<main className="form-signin">
				<form>
					<img
						className="mb-4"
						src="https://chilemiel.cl/wp-content/uploads/2020/04/logo-chilemiel-black-300x144.png"
						alt="Chile Miel"
						// width="200"
						// height="75"
					/>
					<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

					<div className="form-floating">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating">
						<input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
						<label htmlFor="floatingPassword">Password</label>
					</div>

					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<button className="w-100 btn btn-lg btn-primary" type="submit">
						Sign in
					</button>
					<GoogleLogin
						clientId="131177827227-d2g0ek74b25sodlppijjs5oo4434h247.apps.googleusercontent.com"
						buttonText="Iniciar Sesión"
						// render={renderProps => (
						// 	<button onClick={renderProps.onClick} disabled={renderProps.disabled}>
						// 		This is my custom Google button
						// 	</button>
						// )} *** Esto es para poder personalizar el boton en css
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
					/>
				</form>
			</main>
		</React.Fragment>
	);
};

export default SignIn;
