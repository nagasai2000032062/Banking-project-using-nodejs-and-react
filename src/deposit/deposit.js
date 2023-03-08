import styles from './deposit.module.css'
import { useNavigate } from 'react-router-dom'
export function Deposit() {
    const navigate = useNavigate()
    const onDeposit = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value
        const amount = e.target.amount.value

        console.log(`Id ${acId} Amount ${amount}`)
        alert(`IN Id ${acId} Amount ${amount} deposited successfully..`)
        fetch('http://localhost:3000/deposit', {
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
        <div className={styles.depCont}>
            <button><div onClick={() => navigate('/')} >
                🏠Dashboard
            </div></button>
            <h1> <u>Deposit Amount</u> </h1>
            <form onSubmit={onDeposit} className={styles.xyz}>
                <label> Account Id:</label><br></br>
                <input type='number' placeholder='Account Id' name='acId' title='person AcId' className={styles.name} required />
                <label> Amount:</label><br></br>
                <input type='number' placeholder='Amount' name='amount' title='how much amount u want to withdraw' className={styles.name} required />
                <center><input type='submit' value='Deposit' className={styles.create} /></center>
            </form>
        </div>
    )
}