import styles from './dashboard.module.css'
import { useNavigate } from 'react-router-dom'

export function Dashboard() {

    const navigate = useNavigate()

    return (

        <div className={styles.dashCont}>
            <h1> <u>Banking Application</u> </h1>
            <div onClick={() => navigate('/new')} title="create new account">
                New Customer
            </div>
            <div onClick={() => navigate('/deposit')} title="deposit amount">
                Deposit
            </div>
            <div onClick={() => navigate('/withdraw')} title="withdraw amount">
                Withdraw
            </div>
            <div onClick={() => navigate('/transfer')} title="transfer amount">
                Transfer

            </div>
            <div onClick={() => navigate('/balance')} title="checkbalance">
                Balance
            </div>
            <div onClick={() => navigate('/visit')} title="visit">
                Visit
            </div>
        </div>
    )
}