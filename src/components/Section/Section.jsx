import React from "react";
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section className={styles.feedbackSection}>
            <h2 className={styles.feedbackTitle}>
                {title}
            </h2>
            {children}
        </section>

    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
export default Section;