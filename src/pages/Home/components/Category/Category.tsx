import arrow from '../../../../assets/images/arrow.png'
import './Category.css'

function Category(){
    return(
        <button className="category-container">
            <p className="category-id"><span className='span'>/</span>01</p>
            <h3 className="category-name">BattleRoyale</h3>
            <img className='arrow-img' src={arrow}></img>
        </button>
    );
}

export default Category;