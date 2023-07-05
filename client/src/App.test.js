import {render,screen} from '@testing-library/react';

import App from './App';
test('Header renders correctly',()=>{
    render(<App />);
    const headerEl=screen.getByPlaceholderText('Ara')
   expect(headerEl).toBeInDocument();
})