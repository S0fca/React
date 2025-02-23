import React, {useState} from "react";

interface PasswordInputProps {
    setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ setPassword }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <h3>Zadejte své heslo</h3>
            <label htmlFor="password">Zadejte heslo: </label>
            <input
                id="password"
                type={isVisible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                style={{
                    background: "#333",
                    cursor: "pointer",
                    border: "1px solid #fff",
                    margin: "0 0 20px 20px"
                }}
            >
                {isVisible ? "hide" : "show"}
            </button>
        </div>
    );
};

export default PasswordInput;
