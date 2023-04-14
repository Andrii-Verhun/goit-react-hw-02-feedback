import { Component } from "react";



class Feedback extends Component {


    render() {
        return (
        <div className={css.feedback}>
            <h2 className={css.feedback__caption}>Please leave feedback</h2>
            <div className={css.feedback__buttons}>
                <button type="button">Good</button>
                <button type="button">Neutral</button>
                <button type="button">Bad</button>
            </div>
            <h2>Statistics</h2>
                <p>Good: <span>{this.state.good}</span></p>

        </div>);
    };
};

export default Feedback;