import React from "react";
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={styles.buttons}>
        {options.map((option) => {
            return (
                <button
                    type="button"
                    key={option}
                    className={styles.buttonOption}
                    onClick={() => onLeaveFeedback(option)}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
            )
        })}
</div>
);
 
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;