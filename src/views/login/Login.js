import React from 'react';
import './login.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Login = (props) => {

    const [userID, setUserID] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showError, setShowError] = React.useState("");
    const [onHover, setOnHover] = React.useState(false);

    const onLogin = () => {
        if (userID === "Userid123" && password === "password") {
            props.setLogin(true)
        } else if (userID === "" && password === "") {
            setShowError("Enter the credentials");
            setTimeout(() => setShowError(""), 5000);
        } else if (userID === "") {
            setShowError("Enter User ID");
            setTimeout(() => setShowError(""), 5000);
        } else if (password === "") {
            setShowError("Enter Password");
            setTimeout(() => setShowError(""), 5000);
        } else {
            setShowError("Invalid Credentials!");
            setTimeout(() => setShowError(""), 5000);
        }
    }

    return (
        <div className="login-root">

            <div className='login-container'>
                <div className='header-login'>
                    <h1 style={{height:"1.5em"}}>Login</h1>
                    <InfoOutlinedIcon
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setOnHover(true)}
                        onMouseLeave={() => setOnHover(false)}
                        fontSize='small' />
                    {onHover ?
                        <div style={{
                            background: "black",
                            opacity: "0.5", color: "white", padding: "0.6em",
                            fontSize: "0.75em", borderRadius: "0.25em",
                            position: "relative", right:"0.2em", zIndex:"2"
                        }}>
                            User Name="Userid123"
                            <br />Password="password"
                        </div> : null}
                </div>
                <div className='login-details'>

                    <input type="text" placeholder='User Name'
                        value={userID} className='login-credentials'
                        onChange={(event) => setUserID(event.target.value)} />
                    <input type="password" placeholder='Password'
                        value={password} className='login-credentials'
                        onChange={(event) => setPassword(event.target.value)} />
                    
                        <div><div className='error-msg'>{showError}</div></div>
                    <input type="submit" value="Login" className='login-btn' onClick={onLogin} />
                </div>
            </div>
        </div>
    )
}

export default Login
