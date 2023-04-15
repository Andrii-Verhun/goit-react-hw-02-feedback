import PropTypes from "prop-types";

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onClick}) => {
    return (
        <div>
            {Object.keys(options).map((el) => (
                <button
                    onClick={onClick}
                    className={css.button}
                    id={el}
                    type="button"
                    key={el}>
                    {el}
                </button>)
            )}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
};