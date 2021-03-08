import { BrowserRouter,Switch, Route} from "react-router-dom";

// public Css for style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/common.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components
import Home from './pages/Home';
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:categoryName" exact component={Shop} />

            <Route path="/product-details/:productId" exact component={ProductDetails} />
           <Route path="/cart" exact component={Cart} />

            
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
