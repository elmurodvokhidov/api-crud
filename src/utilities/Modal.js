import React, { useContext } from 'react';
import { ContextData } from '../context/Context';

function Modal() {

    const { setModal, modal, collectHandle, sendFunction, input, } = useContext(ContextData);

    return (
        <div className={modal ? 'modal' : 'unModal'}>
            <span className='closeModal' onClick={() => { setModal(!modal) }}>x</span>
            <form>
                <div className="form-group">
                    <label form="nomi">Region nomi</label>
                    <input onInput={(e) => { collectHandle(e) }} value={input.name} name='name' type="text" className="form-control" id="nomi" />
                </div>
                <button onClick={sendFunction} type="button" id='sendBtn' className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Modal;