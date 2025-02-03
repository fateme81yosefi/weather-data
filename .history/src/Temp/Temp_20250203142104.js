import React, { useState, useEffect } from 'react';
import useStore from '../useStore';

const Temp = () => {

    const [error, setError] = useState(null);


    const { dataLocation, setDataTemp } = useStore();
 if(dataLocation)



};

export default Temp;
