import {render,screen} from '@testing-library/react';
import SignInScreen from './Screens/SignInScreen';



test("username input should be rendered",()=>{
    render(<SignInScreen/>);
    const userInputEl=screen.getAllByPlaceholderText(/Eposta Adresinizi Giriniz/i)
})