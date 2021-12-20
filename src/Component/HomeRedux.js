import React from 'react';
import { increment, decrement, change } from '../StoreRedux/action';
import { connect } from 'react-redux';

function Home(props) {
    const { counter, pertambahan, decrement, change } = props;
    return (
        <div className='App'>
            <div>{counter}</div>
            <div>
                <button onClick={() => pertambahan()}>INCREMENT BY 1</button>
            </div>
            <div>
                <button onClick={() => decrement()}>DECREMENT BY 1</button>
            </div>
            <button onClick={() => change(Math.random())}>CHANGE</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.num,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        pertambahan: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        change: (newValue) => dispatch(change(newValue)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
