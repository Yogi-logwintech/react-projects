import React, {useState, useEffect} from 'react'

export default function UsdToInr() {
    const value = 77
    const [usd, setUsd] = useState(1)
    const [inr, setInr] = useState(77)

    useEffect(() => {
        setInr( usd * value)
    }, [usd]);
    useEffect(() => {
        setUsd( inr / value)
    }, [inr]);


  return (
    <div>
        <h2>USD to INR Converter</h2>
        <input className='my-1' value={usd} onChange={(e)=> setUsd(e.target.value)} type="text" name='usd' /> USD <br />
        <input className='my-1' value={inr} onChange={(e)=> setInr(e.target.value)} type="text" name='inr' /> INR
    </div>
  )
}
