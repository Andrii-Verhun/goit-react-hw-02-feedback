import css from './FeedbackOptions.module.css';

export const FeedbackOptions = () => {
    return (
        <div className={css.buttons}>
            <button type="button">Good</button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
        </div>
    );
};