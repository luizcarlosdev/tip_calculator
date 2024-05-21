/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import Styles from '../assets/styles/Calculator.module.css';
import money_icon from '../images/icon-dollar.svg';
import user_icon from '../images/icon-person.svg';

export default function Calculator() {
    let a = 0;
    const [bill, setBill] = useState<number>(0);
    const [percentage, setPercentage] = useState<number>(0);
    const [tip_amount, setTipAmount] = useState<number>(a);
    const [numberPeople, SetNumberPeople] = useState<number>(0);
    const [erro, setErro] = useState<boolean>(false);


    function calculatePercentageOfValue(): void {

        if (bill != 0 && percentage != 0 && numberPeople != 0 || numberPeople != null) {
            a = bill * percentage / 100;
            console.log("Valor de a: " + a);
        }
    }

    function valuePerPerson() {
        if (numberPeople === 0 || numberPeople === null) {
            setErro(true)
        } else {
            setErro(false);
        }
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.set_values_calc}>
                <div className={Styles.set_values_calc_header}>
                    <label htmlFor="bill">bill</label>
                    <div className={Styles.input}>
                        <span><img src={money_icon} alt="" /></span>
                        <input type="number" name="" id="bill" onChange={(event) => setBill(event.target.valueAsNumber)} />
                    </div>
                </div>
                <div className={Styles.set_values_btn_group}>
                    <h3>select tip</h3>
                    <div className={Styles.buttons}>
                        <button className={Styles.button} onClick={() => setPercentage(5)}>5%</button>
                        <button className={Styles.button} onClick={() => setPercentage(10)}>10%</button>
                        <button className={Styles.button} onClick={() => setPercentage(15)}>15%</button>
                        <button className={Styles.button} onClick={() => setPercentage(25)}>25%</button>
                        <button className={Styles.button} onClick={() => setPercentage(50)}>50%</button>
                        <input type="number" placeholder='custom' className={Styles.custom} onChange={(e) => setPercentage(e.target.valueAsNumber)} />
                    </div>
                </div>
                <div className={Styles.number_people}>
                    <div className={Styles.number_people_header}>
                        <label htmlFor="people">number of people</label>
                        <span style={{ display: (erro ? 'block' : 'none') }}>Can´t be zero.</span>
                    </div>
                    <div className={Styles.input}>
                        <span><img src={user_icon} alt="" /></span>
                        <input type="number" id="people" onChange={(event) => SetNumberPeople(event.target.valueAsNumber)} />
                    </div>
                </div>
            </div>
            <div className={Styles.values_calculated}>
                <div className={Styles.calculated_display}>
                    <div className={Styles.tip_amount}>
                        <div className={Styles.tip_amount_title}>
                            <h4>Tip Amount</h4>
                            <span>/ person</span>
                        </div>
                        <div className={Styles.tip_amount_value}>$0.00</div>
                    </div>
                    <div className={Styles.total}>
                        <div className={Styles.total_title}>
                            <h4>total</h4>
                            <span>/ person</span>
                        </div>
                        <div className={Styles.total_value}>${tip_amount.toFixed(2)}</div>
                    </div>
                </div>
                <div className={Styles.calculate}>
                    <button onClick={() => {
                        calculatePercentageOfValue()
                        setTipAmount(a);
                        console.log(tip_amount);
                        valuePerPerson()
                    }}>reset</button>
                </div>
            </div>
        </div>
    )
}