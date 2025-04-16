import './App.css'
import UseReducer from './components/CounterReducer'
import { Provider } from 'react-redux';
import Store from './components/UseRedux/Store';
import CounterRedux from './components/UseRedux/CounterRedux';
import store from './components/UseReduxToolkit/store';
import CounterReduxToolkit from './components/UseReduxToolkit/Counter';

function App() {

  return (
    <>
      <h1>Câu 1</h1>
      <UseReducer />
      <hr />
      <h1>Câu 2</h1>
      <Provider store={Store}>
        <CounterRedux />
      </Provider>
      <h1>Câu 3</h1>
      <Provider store={store}>
        <CounterReduxToolkit />
      </Provider>
    </>
  )
}

export default App
