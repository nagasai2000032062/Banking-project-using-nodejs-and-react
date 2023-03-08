import { useState } from "react"
import styles from './balance.module.css'
import { useNavigate } from 'react-router-dom'
export function Balance() {

    const navigate = useNavigate()
    const [bal, setBal] = useState(0)

    const onBalance = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value

        console.log(`Id ${acId} `)
        alert("balance displayed")
        fetch(`http://localhost:3000/balance/${acId}`)
            .then(res => res.json())
            .then(json => setBal(json.bal))
    }

    return (

        <div className={styles.balCont}>
            <button><div onClick={() => navigate('/')} >
                🏠Dashboard
            </div></button>
            <h1> Balance Is : INR. {bal} </h1>
            <form onSubmit={onBalance}>
                <label> Account Id:</label><br></br>
                <input type='number' placeholder='Account Id' name='acId' className={styles.name} required />
                <center><input type='submit' value='Balance' className={styles.create} /></center>
            </form>
        </div>
    )
}