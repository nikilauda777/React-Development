import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {   // такая конструкция позволяет передавать другие параметры через компонент button
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};
export default MyButton;