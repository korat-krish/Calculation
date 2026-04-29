import { useState } from "react";
import axios from 'axios'
const Operations = (req, res) => {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [result, setResult] = useState(null)

    const handleCalculation = async (e) => {
        e.preventDefault();
        try {

            let response = await axios.post('http://localhost:5001/api/add', {
                value1: Number(value1),
                value2: Number(value2)
            })
            setResult(response.data.sum);
        } catch (error) {
            console.log("error is :", error);
        }
    };


    const handleSubtraction = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/sub', {
                value1: Number(value1),
                value2: Number(value2)
            });


            setResult(response.data.sub);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
            <h2>
                Enter Values
            </h2>

            <form action="">
                <label htmlFor="">Enter Your Value1 : </label>
                <input type="text" name="value1" onChange={(e) => setValue1(e.target.value)} />
                <label htmlFor="">Enter Your Value2 : </label>
                <input type="text" name="value2" onChange={(e) => setValue2(e.target.value)} />
                <button onClick={handleCalculation}>add </button>
                <button onClick={handleSubtraction}>sub </button>
            </form>

            <h2>Sub is {result}</h2>
        </>
    )
}

export default Operations;