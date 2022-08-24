import { BrowserRouter} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import RouterList from './views/RouterList'


function App() {
  return(
    <BrowserRouter>
        <Header />

        <RouterList />
        
        <Footer/>
    </BrowserRouter>
  )
}

export default App
