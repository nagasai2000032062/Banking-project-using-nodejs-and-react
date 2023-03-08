import React, { useState, useEffect } from 'react';
import styles from './visit.module.css'
import { useNavigate } from 'react-router-dom'

export function Visit() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/visit')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // log the data to the console for debugging
                setData(data)
            })
            .catch(error => console.log(error));
    }, []);



    /*<ul>
                {data.map((item) => (
                    <li>{item.acId}, {item.acNm}, {item.balance}</li>
                ))}
            </ul>*/
    return (
        <div className={styles.DataCont}>
            <h1><u>VIEW ALL ACCOUNTS</u></h1>
            <button><div onClick={() => navigate('/')}>
                🏠Dashboard
            </div></button><br></br>
            <table className={styles.tabl} >
                <tr>
                    <th>ACID</th>
                    <th>Name</th>
                    <th>Balance</th>
                </tr>

                {data.map((item) => (
                    <tr >
                        <td>{item.acId}</td>
                        <td> {item.acNm}</td>
                        <td>{item.balance}</td>
                    </tr>
                ))}
            </table>

        </div>
    )
}
