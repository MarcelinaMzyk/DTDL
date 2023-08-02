import React from 'react'
import './DailyTask.css'

function DailyTask() {
    return (
        <div className='daily-container'>
            <h2 className='heading-2 h2-style-daily'>Daily Task</h2>

            <div className='daiylist-callender-container'>
                <div className='callender'>
                    Callender
                </div>

                <div className='dailylist'>
                    CheckList
                </div>

            </div>
        </div>
    )
}

export default DailyTask