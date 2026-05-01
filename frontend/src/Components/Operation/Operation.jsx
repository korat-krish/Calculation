import { useState } from "react";
import axios from 'axios';

const Operations = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(null);
    const [data, setData] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCalculation = async (type) => {
        setLoading(true);
        try {
            const endpoint = type === 'add' ? 'add' : 'sub';
            const response = await axios.post(`http://localhost:5001/api/${endpoint}`, {
                value1: Number(value1),
                value2: Number(value2)
            });
            setResult(response.data.sum || response.data.sub);
        } catch (error) {
            console.log("error is :", error);
        } finally {
            setLoading(false);
        }
    };

    const showdata = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5001/api/getallhistory');
            setData(response.data);
            setShowHistory(true);
        } catch (error) {
            console.log("error is :", error);
        }
    };

    return (
        <div className="calculator-form">
            <div className="input-group">
                <label>Value 1:</label>
                <input 
                    type="number" 
                    value={value1} 
                    onChange={(e) => setValue1(e.target.value)}
                    placeholder="Enter first value"
                />
            </div>
            <div className="input-group">
                <label>Value 2:</label>
                <input 
                    type="number" 
                    value={value2} 
                    onChange={(e) => setValue2(e.target.value)}
                    placeholder="Enter second value"
                />
            </div>

            <div className="button-group">
                <button 
                    className="add-btn" 
                    onClick={() => handleCalculation('add')}
                    disabled={loading}
                >
                    Add
                </button>
                <button 
                    className="sub-btn" 
                    onClick={() => handleCalculation('sub')}
                    disabled={loading}
                >
                    Subtract
                </button>
            </div>

            {result !== null && (
                <div className="result-display">
                    <h3>{result}</h3>
                    <p>Result</p>
                </div>
            )}

            <button className="show-data-btn" onClick={showdata}>
                Show History
            </button>

            {showHistory && data.length > 0 && (
                <div className="history-list">
                    <h4>Calculation History</h4>
                    {data.map((item, index) => (
                        <div key={item._id || index} className="history-item">
                            <span className="values">
                                {item.value1} + {item.value2}
                            </span>
                            <span className="result-value">
                                = {item.result}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Operations;
