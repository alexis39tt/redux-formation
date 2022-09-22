import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addAmount } from '../redux/counter';
  
function CounterComp() {
    const num = useRef(null);
    const { count } = useSelector(state => state.counter) 
    const dispatch = useDispatch();

    return (
        <div className="countercomp">
            <div>
                <button onClick={()=> dispatch(increment()) }>Aumenta</button>
            </div>
            <div>
                <button onClick={()=> dispatch(decrement())}>Diminuisci</button>
            </div>
            <div>
                <button onClick={()=> dispatch(addAmount(Number(num.current.value)))}>Aumenta di</button>
                <input ref={num} type="number" name="num" id="num" min="0" />
            </div>
            <div className="res">
                <h1>{count}</h1>
            </div>
        </div>
    );
}

export default CounterComp;