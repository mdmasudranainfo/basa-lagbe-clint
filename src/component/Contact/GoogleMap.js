import React from 'react';

const GoogleMap = () => {
    return (
        <div>


            <iframe src="https://maps.google.com/maps?q=Green road, 152/2k,Dhaka&t=k&z=10&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            style={{border:"0", width:"100%", height:"400px"}}
            allowFullScreen
            
            ></iframe>
        </div>
    );
};

export default GoogleMap;