import './App.css';
import UseReducer from './components/CounterReducer';
import { Provider } from 'react-redux';
import Store from './components/UseRedux/Store';
import CounterRedux from './components/UseRedux/CounterRedux';
import store from './components/UseReduxToolkit/store';
import CounterReduxToolkit from './components/UseReduxToolkit/Counter';
import store1 from './components/Counter/store';
import Counter from './components/Counter/Counter';
import store2 from './components/Todo/store';
import TodoList from './components/Todo/TodoList';
import store3 from './components/Theme/store';
import ThemeToggler from './components/Theme/ThemeToggler';
import store4 from './components/Cart/store';
import Cart from './components/Cart/Cart';

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
      <hr />
      <h1 className="demo-title">CÂU 2:  To-do List</h1>
      <Provider store={store2}>
        <div className="App">
          <h1>To-Do List App</h1>
          <TodoList />
        </div>
      </Provider>
      <hr />
      <h1 className="demo-title">CÂU 3:  Toggle Theme (Dark/Light mode)</h1>
      <Provider store={store3}>
        <div className="App">
          <h1>Toggle Theme App</h1>
          <ThemeToggler />
        </div>
      </Provider>
      <hr />
      <h1 className="demo-title">CÂU 4:  Giỏ hàng (Shopping Cart)</h1>
      <Provider store={store4}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <Cart />
      </div>
    </Provider>

    </div>
  );
}

export default App;
