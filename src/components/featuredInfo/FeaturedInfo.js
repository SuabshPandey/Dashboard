import React from 'react';
import './featuredInfo.css';

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Users</span>
                <div className="featuredTitleContainer">
                    <span className="userCounts">400</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Services</span>
                <div className="featuredTitleContainer">
                    <span className="userCounts">100</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Services Types</span>
                <div className="featuredTitleContainer">
                    <span className="userCounts">50</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedInfo
