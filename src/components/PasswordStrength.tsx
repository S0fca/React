import React from "react";

interface PasswordStrengthProps {
    password: string;
}


const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const validLength = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[!@#$%^&*]/.test(password);
    const strengthNum = Number(validLength) + Number(uppercase) + Number(number) + Number(specialChar);
    const strength = (() => {
        switch (strengthNum) {
            case 4:
                return "Silné";
            case 3:
                return "Střední";
            case 2:
                return "Slabé";
            default:
                return "Velmi slabé";
        }
    })();
    const color = (() => {
        switch (strengthNum) {
            case 4:
                return "Green";
            case 3:
                return "Orange";
            case 2:
                return "Red";
            default:
                return "Darkred";
        }
    })();
    //Používá vizuální indikátor síly (např. barevný pruh).

    return (

        <>
            <div style={{
                width: "402px",
                height: "10px",
                background: "black",
                overflow: "hidden"
            }}>
                <div style={{
                    width: strengthNum * 100+2,
                    height: "100%",
                    background: color,
                }}></div>
            </div>
            <div>
                <p>Síla: {strength}</p>
                <ul>
                    <li style={validLength ? {color: "green"} : {color: "Red"}}>Délka hesla (minimálně 8
                        znaků)
                    </li>
                    <li style={uppercase ? {color: "green"} : {color: "Red"}}>Obsahuje alespoň jedno velké
                        písmeno
                    </li>
                    <li style={number ? {color: "green"} : {color: "Red"}}>Obsahuje alespoň jedno číslo</li>
                    <li style={specialChar ? {color: "green"} : {color: "Red"}}>Obsahuje alespoň jeden
                        speciální
                        znak (!@#$%^&*)
                    </li>
                </ul>
            </div>
        </>

    );
};

export default PasswordStrength;