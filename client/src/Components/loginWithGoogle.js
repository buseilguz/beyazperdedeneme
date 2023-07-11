import {GoogleLogin,GoogleOAuthProvider} from 'react-google-login';

const clientId="730786986543-r0o4f13rg4d53orkufvoq4hk2eah16u7.apps.googleusercontent.com";

function LoginWithGoogle(){
    const onSuccess=(res)=>{
        console.log("Login Successful",res.profileObj)
    }
    const onFailure=(res)=>{
        console.log("login failed",res)
    }

    return(
        <div id="signInButton">
          <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
           
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        ></GoogleLogin></GoogleOAuthProvider>
        </div>
    )




}
export default LoginWithGoogle;