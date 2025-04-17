import { Provider } from 'react-redux';
// import * as React from 'react';
import './App.css';
import SwitchThem from './components/SwitchThem';
import store from './components/store';
// import { useEffect } from 'react';

function App() {

  // console.log(localStorage.getItem('theme'));
  
  // const initialState = localStorage.getItem('theme') || 'темную';
  return (
    
    <div id='infinity' data-theme='light-theme' className="main__container ">
      <Provider store={store}>
        <SwitchThem />
      </Provider>
    </div>
  );
}

// // localStorage.clear()
export default App;

// 