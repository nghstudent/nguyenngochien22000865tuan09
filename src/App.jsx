import './App.css'
import UseReducer from './components/CounterReducer'
import { Provider } from 'react-redux';
import Store from './components/UseRedux/Store';
import CounterRedux from './components/UseRedux/CounterRedux';

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
    </>
  )
}

export default App
