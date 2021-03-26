import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = props => (
    <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
        className={classes.modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
    >
        {props.children}
    </div>
    </>
)
// Per i functional component si può usare React.memo al posto di shouldComponentUpdate
// Questo ci permette di evitare il Re-render del componente quando non c'è variazione nelle props
// React memo accetta una funzione che ritorna un booleano per forzare il re-render del componente
export default React.memo(
    Modal, 
    (prevProps, nextProps) => 
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);