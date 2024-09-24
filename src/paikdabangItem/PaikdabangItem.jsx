import { ContentItemContainer } from './style';
const PaikdabangItem = ({ item, photoListClick }) => {
    const { id, name, imgUrl } = item;
    return (
        <ContentItemContainer>
            <div onClick={() => photoListClick(item)} className="backColor">
                <img src={imgUrl} alt={name} />
            </div>
        </ContentItemContainer>
    );
};

export default PaikdabangItem;
