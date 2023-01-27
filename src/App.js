
import './App.css';
import AddToCard from './components/ProductInfo/AddToCard';
import ProductFetch from './components/ProductInfo/ProductFetch';
import { Provider } from 'react-redux';
import stote from './components/REDUX/Store'

function App() {
  return (
    <div className="App">

      <Provider store={stote}>


        <ProductFetch></ProductFetch>

        <br /><br />

        <AddToCard></AddToCard>

      </Provider>




    </div>
  );
}

export default App;
