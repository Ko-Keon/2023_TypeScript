
interface CounterProps {
    startNumber : number;
}

// 화살표 함수의 컴포넌트는 함수형 컴포넌트와 동일하게 매개변수에서
// interfave 자료형을 설정하여 사용할 수도 있고
// 클래스형 컴포넌트와 비슷하게 리액트에서 제공하는 React.FC<Props> 이용하여 작성 가능
const TypeArrowFuncComp: React.FC<CounterProps> = (props:CounterProps) => {
    return <div>
        <h3>{props.startNumber}</h3>
    </div>
}

export default TypeArrowFuncComp