import Header from "../app-header/app-header";
import About from "../app-about/app-about";
import Best from "../app-best/app-best";
import Footer from "../app-footer/app-footer";

const App = () => {
    return (
        <div className = 'app'>
            <Header/>
            <About/>
            <Best/>
            <Footer/>
        </div>
    );
}

export default App;