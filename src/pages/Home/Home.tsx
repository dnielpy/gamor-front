import './Home.css'
import Header from './components/Navbar';
import Board from './components/Board/';
import Category from './components/Category';


function Home() {   
    return (
        <div className='home'>
            <Header></Header>
            <main>
                <Board></Board>
                <h2 className='categories-tittle'>Trending Categories</h2>
                <div className='categories-container'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Category key={index}></Category>
                    ))}

                </div>
            </main>
        </div>
    );
}

export default Home;