import styles from './transfer.module.css'
import { useNavigate } from 'react-router-dom'
export function Transfer() {

    const navigate = useNavigate()
    const onTransfer = (e) => {
        e.preventDefault()

        const srcId = e.target.srcId.value
        const destId = e.target.destId.value
        const amount = e.target.amount.value

        console.log(`Source ${srcId} Destination ${destId} Amount ${amount}`)
        alert(`Amount ${amount} transfered from Source id=${srcId}  to Destination id=${destId} `)
        fetch('http://localhost:3000/transfer', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ srcId, destId, amount })
        }).then(res => res.json())
            .then(json => console.log(json))
    }


    return (
        <>
            <div className={styles.trnCont}>
                <button><div onClick={() => navigate('/')} title="dashboard">
                    🏠Dashboard
                </div></button>
                <h1> <u>Transfer Amount </u></h1>
                <form onSubmit={onTransfer} className={styles.xyz}>
                    <label> Source Id:</label><br></br>
                    <input type='number' placeholder='Source Id' name='srcId' required className={styles.name} />
                    <label> Destination Id:</label><br></br>
                    <input type='number' placeholder='Destination Id' name='destId' className={styles.name} required />
                    <label> Amount:</label><br></br>
                    <input type='number' placeholder='Amount' name='amount' className={styles.name} required />
                    <center><input type='submit' value='Transfer' className={styles.create} /></center>
                </form>
            </div>
        </>
    )
}