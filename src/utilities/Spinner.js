import React from 'react';

function Spinner(props) {
    return (
        <td colSpan='10' className="spinner">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </td>
    );
}

export default Spinner;