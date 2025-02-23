import { useState } from 'react';
import { calcAge } from '../utils';

export default function AgeCalculator() {
    // Nějaké reaktivní proměnné? Možná věk? možná rok narození?
    const [birthYear, setBirthYear] = useState(0)
    const [age, setAge] = useState(0)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = Number(value);


        setBirthYear(numericValue);
        if (value && !isNaN(numericValue)) {
            setAge(calcAge(parseInt(value, 10)));
        } else {
            setAge(0);
        }
    };

    return (
        <div>
            <h3>Age calculator</h3>
            <label>
                Zadej rok narození:
                <input type="number" value={birthYear} onChange={handleChange} />
            </label>
            {age !== null && <p>Tvůj věk je: {age}</p>}
        </div>
    );
}