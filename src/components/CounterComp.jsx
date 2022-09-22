import { useFormik } from "formik";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addAmount } from '../redux/counter';

function CounterComp() {
    const validate = values => {
        const errors = {};
        values.num < 1 && (errors.num = 'Il numero non può essere minore di 1');
        !values.num && (errors.num = 'Il campo non può essere vuoto o nullo');
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            num: 0
        },
        validate,
        onSubmit: values => {
            let number = values.num
            console.clear()
            number && console.table({number, count})
        }
    })

    const num = useRef(null);
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="countercomp">
            <div>
                <button onClick={() => dispatch(increment())}>Aumenta</button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>Diminuisci</button>
            </div>
            <div>
                <button type="submit" onClick={() => {
                    dispatch(addAmount(Number(num.current.value)));
                    formik.handleSubmit()
                }}>Aumenta di</button>
                <input ref={num} type="number" name="num" id="num" min="0" onChange={formik.handleChange} value={formik.values.num} />
                {formik.errors.num && <p className="error">{formik.errors.num}</p>}
            </div>
            <div className="res">
                <h1>{count}</h1>
            </div>
        </div>
    );
}

export default CounterComp;