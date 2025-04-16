import './App.css';
import UseReducer from './components/CounterReducer';
import { Provider } from 'react-redux';
import Store from './components/UseRedux/Store';
import CounterRedux from './components/UseRedux/CounterRedux';
import store from './components/UseReduxToolkit/store'; 
import CounterReduxToolkit from './components/UseReduxToolkit/Counter';

function App() {
  return (
    <div className="App">
      <h1 className="demo-title">TEST COUNTER</h1>

      {/* Section for UseReducer */}
      <section className="section">
        <h2>UseReducer Example</h2>
        <UseReducer />
      </section>                        
      
      <hr />

      {/* Section for Redux */}
      <section className="section">
        <h2>Counter with Redux</h2>
        <Provider store={Store}>
          <CounterRedux />
        </Provider>
      </section>
      
      <hr />
      
      {/* Section for Redux Toolkit */}
      <section className="section">
        <h2>Counter with Redux Toolkit</h2>
        <Provider store={store}>
          <CounterReduxToolkit />
        </Provider>
      </section>
    </div>
  );
}

export default App;
