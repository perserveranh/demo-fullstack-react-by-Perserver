import React, { Fragment } from 'react';

const Second = ({ seconds }) => (
    <Fragment>

        <button className="btn">
            <span>{seconds < 10 && '0'}{seconds}</span> <span className="badge badge-primary|secondary|success|danger|warning|info|light|dark"></span>
        </button>

    </Fragment>
)
export default Second;
