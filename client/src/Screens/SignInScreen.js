import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../axios";
import toast from "react-hot-toast";
import resim1 from "../images/Ekran Alıntısı.png";
import { gapi } from "gapi-script";
import { GoogleLogout} from 'react-google-login';
import { GoogleLogin} from "react-google-login";

const clientId =
  "730786986543-r0o4f13rg4d53orkufvoq4hk2eah16u7.apps.googleusercontent.com";

const SignInScreen = ({ setUser }) => {

  
   
        const [user2, setUser2] = useState(null);
      
        const onSuccess = (response) => {
          console.log('Login Successful', response.profileObj);
          setUser(response.profileObj);
        };
      
        const onFailure = (response) => {
          console.log('Login Failed', response);
          setUser(null);
        };
      
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleClick=async e=>{
    e.preventDefault()
    try {
        
        navigate("/news/getall")
    } catch (err) {
        console.log(err)
    }
}
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          {" "}
          <div className="text-white " href="#home">
            {" "}
            <div class="logo">
              <img
                class="header-main-logo-img"
                src={resim1}
                width="700"
                height="1000"
                alt="beyazperde"
                style={{ position: "relative", left: -355, top: -18 }}
              />
            </div>
          </div>
        </Col>

        <Col xs={12} md={5}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(formData)
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res.data.user));
                  setUser(res.data.user);
                  navigate("/userscreen");
                })
                .catch((err) => {
                  toast.error(err.response.data.message);
                });
            }}
            style={{ position: "relative", left: -155, top: 250 }}
          >
            <Form.Group className="mb-3">
              <span border="secondary" style={{ fontSize: 30, fontWeight: 15 }}>
                Oturum Aç
              </span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Eposta Adresiniz</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Eposta Adresinizi Giriniz"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Şifreniz</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Şifrenizi Giriniz"
              />
            </Form.Group>
            <Form.Group className="d-grid">
              <Button
                disabled={formData.email === "" || formData.password === ""}
                type="submit"
                variant="primary"
                size="lg"
              >
                Giriş Yap
              </Button>
              <div>
                <br/>
      {user2 ? (
        <div >
          
          <Button onClick={() => setUser2(null)}>Logout</Button>
        </div>
      ) : (
        <span  >
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          size="lg"
          onClick={handleClick}
          style={{ position: "relative", right: "-30px !important" }}

        />
        </span>
      )}
    </div>
              <Form.Text className="text-center mt-2">
                Bir hesabınız yok mu?
                <Link to="/signup">Üye ol</Link>
              </Form.Text>
            </Form.Group>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInScreen;
