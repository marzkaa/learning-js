import React from 'react';

// Import Style
import styles from './Navigation.css';

const Navigation = props => (
    <div className={styles['navigation']}>
        <a href="/home">Home</a>
        <a href="/">Posts</a>
        <a href="/about">About</a>
    </div>
);

export default Navigation;