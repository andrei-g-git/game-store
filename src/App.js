import Main from './components/Main';
import { Provider } from 'react-redux';
import { makeStore } from './js/redux/MakeStore';
import { BrowserRouter } from 'react-router-dom';

const store = makeStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
