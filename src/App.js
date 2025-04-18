import { Provider } from 'react-redux';
import './App.css';
import SwitchThem from './components/SwitchThem';
import store from './components/store';

function App() {

  return (

    <div id='infinity' data-theme='light-theme' className="main__container ">
      <Provider store={store}>
        <SwitchThem />
      </Provider>
    </div>
  );
}

export default App;