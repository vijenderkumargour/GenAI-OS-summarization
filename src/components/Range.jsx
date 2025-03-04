import React from 'react'

const Range = ({ setsummaryLength }) => {
    const handleRange = (e) => {
        setsummaryLength(e.target.value == 0 ? 'short' : e.target.value == 1 ? 'medium' : 'long')

    }
    return (
        <div className='d-flex justify-content-end'>
            <label htmlFor="customRange3" className="form-label">Shorter</label>
            <input
                type="range"
                className="form-range mx-1"
                min={0} max={2} step="1"
                id="customRange3"
                onChange={handleRange}
            />
            <label htmlFor="customRange3" className="form-label">Longer</label>
        </div>

    )
}

export default Range