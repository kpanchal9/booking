import { Featured } from '../../componets/featured/Featured';
import Header from '../../componets/header/Header';
import Navbar from '../../componets/navbar/Navbar';
import './Home.css';

export default function Home(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
            </div>
        </div>
    );
}