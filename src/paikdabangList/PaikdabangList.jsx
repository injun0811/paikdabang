import PaikdabangItem from '../paikdabangItem/paikdabangItem';
import { ContentItemContainer } from './style';

const PaikdabangList = ({ data, photoListClick }) => {
    return (
        <ContentItemContainer>
            {data.map((item) => (
                <PaikdabangItem key={item.id} item={item} photoListClick={photoListClick} />
            ))}
        </ContentItemContainer>
    );
};

export default PaikdabangList;
