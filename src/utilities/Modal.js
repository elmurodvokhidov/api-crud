import React, { useContext } from 'react';
import { ContextData } from '../context/Context';

function Modal() {

    const { setModal, modal, collectHandle, sendFunction, input, closeModal, } = useContext(ContextData);

    return (
        <div className={modal ? 'modal' : 'unModal'}>
            <span className='closeModal' onClick={() => { closeModal() }}>x</span>
            <form>
                <div className="form-group">
                    <label form="nomi">Region nomi</label>
                    <input onInput={(e) => { collectHandle(e) }} value={input.name} name='name' type="text" className="form-control" id="nomi" />
                </div>
                <button onClick={sendFunction} type="button" id='sendBtn' className="btn btn-primary">{input.id === '' ? 'Submit' : 'Edit'}</button>
            </form>
        </div>
    );
}

export default Modal;