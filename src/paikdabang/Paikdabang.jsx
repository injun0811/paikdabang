import PaikdabangForm from '../paikdabangForm/paikdabangForm';
import drinkList from '../assets/api/paikdabang';
import { useState } from 'react';

const Paikdabang = () => {
    const [data, setData] = useState(drinkList);
    const [nowDrink, setNowDrink] = useState(data[0]);

    const photoListClick = (item) => {
        setNowDrink(item);
    };

    const likeBtn = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, likeFlag: !item.likeFlag } : item)));
        setNowDrink((item) => (item.id === id ? { ...item, likeFlag: !item.likeFlag } : item));
    };

    return (
        <div>
            <PaikdabangForm data={data} nowDrink={nowDrink} photoListClick={photoListClick} likeBtn={likeBtn} />
        </div>
    );
};

export default Paikdabang;

/*

likeBtn 함수를 통한 동적인 반응형 동작 설명

likeBtn 함수를 통해 상태가 즉시 업데이트되고,
이로 인해 컴포넌트가 다시 렌더링되어 스타일 변경이 즉시 반영됩니다.

1. 상태 업데이트 : likeBtn 함수가 호출되면 setData와 setNowDrink를 사용하여 상태를 업데이트합니다.
2. 리렌더링 트리거 : React는 상태 변경을 감지하고 컴포넌트의 리렌더링을 트리거합니다.
3. 컴포넌트 재평가 : 리렌더링 과정에서 PaikdabangForm 컴포넌트가 새로운 props로 다시 실행됩니다.
4. 조건부 렌더링 : 업데이트된 likeFlag 값에 따라 HiHeart 또는 HiOutlineHeart 컴포넌트가 렌더링됩니다.
5. DOM 업데이트 : React는 가상 DOM을 사용하여 변경된 부분만 실제 DOM에 반영합니다.

이 과정은 React의 선언적 UI 패러다임 덕분에 자동으로 이루어집니다.
개발자가 직접 DOM을 조작할 필요 없이, 상태 변경만으로 UI 업데이트가 이루어집니다.

*/
