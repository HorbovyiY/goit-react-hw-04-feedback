import PropTypes from 'prop-types';

import { Option } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <Option>Good: {good}</Option>
            <Option>Neutral: {neutral}</Option>
            <Option>Bad: {bad}</Option>
            <Option>Total: {total}</Option>
            <Option>Positive feedback: {positivePercentage}%</Option>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}