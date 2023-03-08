import styles from './new-customer.module.css'
import { useNavigate } from 'react-router-dom'
export function NewCustomer() {
    const navigate = useNavigate()
    const onNewCustomer = e => {
        e.preventDefault()

        const acId = e.target.acId.value
        const acNm = e.target.acNm.value
        const balance = e.target.balance.value

        console.log(`Id ${acId} Name ${acNm} Bal ${balance}`)
        alert("created successfully..")
        fetch('http://localhost:3000/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ acId, acNm, balance })
        }).then(res => res.json())
            .then(json => console.log(json))

    }

    return (
        <div className={styles.custCont} >
            <button><div onClick={() => navigate('/')} title="dashboard">
                🏠Dashboard
            </div></button>
            <h1> <u>Create New Customer </u></h1>
            <form onSubmit={onNewCustomer} className={styles.xyz}>
                <label> Account Id:</label><br></br>
                <input type='number' placeholder='Account Id' name='acId' className={styles.name} required />
                <label>First Name :</label><br></br>
                <input type='text' placeholder='Account Name' name='acNm' required className={styles.name} />
                <label>Balance :</label><br></br>
                <input type='number' placeholder='Balance' name='balance' required className={styles.name} />
                <center><input type='submit' value='Create' className={styles.create} /></center>
            </form>
        </div>
    )
}