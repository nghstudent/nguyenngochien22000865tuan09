import './App.css';
import UseReducer from './components/CounterReducer';
import { Provider } from 'react-redux';
import Store from './components/UseRedux/Store';
import CounterRedux from './components/UseRedux/CounterRedux';
import store from './components/UseReduxToolkit/store';
import CounterReduxToolkit from './components/UseReduxToolkit/Counter';
import store1 from './components/Counter/store';
import Counter from './components/Counter/Counter';

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
        <h2>Counter Redux</h2>
        <Provider store={Store}>
          <CounterRedux />
        </Provider>
      </section>

      <hr />

      {/* Section for Redux Toolkit */}
      <section className="section">
        <h2>Counter Redux Toolkit</h2>
        <Provider store={store}>
          <CounterReduxToolkit />
        </Provider>
      </section>
      <hr />
      <h1 className="demo-title">CÂU 1: Counter App (Đếm số đơn giản)</h1>
      <Provider store={store1}>
        <Counter />
      </Provider>

    </div>
  );
}

export default App;
