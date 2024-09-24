import PaikdabangList from '../paikdabangList/paikdabangList';
import { ContentItemContainer } from './style';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

const PaikdabangForm = ({ data, nowDrink, photoListClick, likeBtn }) => {
    const { id, name, desc, subdesc, ingredient, imgUrl, likeFlag } = nowDrink;

    return (
        <ContentItemContainer>
            <div className="rightSide">
                <img className="mainImg" src={imgUrl} alt={name} />
                <div className="photoList">
                    <PaikdabangList data={data} photoListClick={photoListClick} />
                </div>
            </div>
            <div className="leftSide">
                <h2>{name}</h2>
                <h3>{desc}</h3>
                <h4>제품 영양 정보</h4>
                <p>{subdesc}</p>
                <div className="infoTable">
                    <div className="infoR">
                        <ul>
                            <li>카페인 (mg) : {ingredient.caffeine}</li>
                            <li>칼로리 (kcal) : {ingredient.calorie}</li>
                            <li>나트륨 (mg) : {ingredient.sodium}</li>
                        </ul>
                    </div>
                    <div className="infoL">
                        <ul>
                            <li>당류 (g) : {ingredient.sugar}</li>
                            <li>포화지방 (g) : {ingredient.satfat}</li>
                            <li>단백질 (g) : {ingredient.protein}</li>
                        </ul>
                    </div>
                </div>
                <div className="like" onClick={() => likeBtn(id)}>
                    나만의 음료 등록 {likeFlag ? <HiHeart style={{ color: 'red' }} /> : <HiOutlineHeart />}
                </div>
            </div>
        </ContentItemContainer>
    );
};

export default PaikdabangForm;
