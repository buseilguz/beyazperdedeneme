import {googleLogout,GoogleOAuthProvider} from '@react-oauth/google';

const clientId="730786986543-r0o4f13rg4d53orkufvoq4hk2eah16u7.apps.googleusercontent.com";


function Logout(){
    const onSuccess=()=>{
        console.log("Logout Successful")
    }
    
    return(
        <div id="signoutButton">
            <GoogleOAuthProvider clientId={clientId}>
       <googleLogout
           
            buttonText="Logout"
            onSuccess={onSuccess}
            
        ></googleLogout></GoogleOAuthProvider>
        </div>
    )




}
export default Logout;