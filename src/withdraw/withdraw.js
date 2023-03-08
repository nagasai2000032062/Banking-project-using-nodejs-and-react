import styles from './withdraw.module.css'
import { useNavigate } from 'react-router-dom'
export function Withdraw() {

    const navigate = useNavigate()
    const onWithdraw = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value
        const amount = e.target.amount.value

        console.log(`Id ${acId} Amount ${amount}`)
        alert(`IN Id ${acId} Amount ${amount} withdrawed successfully..`)
        fetch('http://localhost:3000/withdraw', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ acId, amount })
        }).then(res => res.json())
            .then(json => console.log(json))
    }

    return (
        <>
            <div className={styles.wthCont}>
                <button><div onClick={() => navigate('/')} title="dashboard">
                    🏠Dashboard
                </div></button>
                <h1> <u>Withdraw Amount </u></h1>
                <form onSubmit={onWithdraw} className={styles.xyz}>
                    <label> Account Id:</label><br></br>
                    <input type='number' placeholder='Account Id' name='acId' className={styles.name} required />
                    <label> Ammount:</label><br></br>
                    <input type='number' placeholder='Amount' name='amount' required className={styles.name} />
                    <center><input type='submit' value='Withdraw' className={styles.create} /></center>
                </form>
            </div>
        </>
    )
}