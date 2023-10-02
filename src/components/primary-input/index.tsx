import "./style.css";

interface PrimaryInputProps {
    label: string,
    value: string,
    onChange: (value: string) => void
}

export function PrimaryInput({ label, value, onChange } : PrimaryInputProps){
    console.log(label, value)
    return(
        <div className="input-wrapper">
            <input 
                className="primary-input" 
                value={value} type="text" 
                onChange={e => onChange(e?.target?.value)}
                placeholder={label}
            >
            </input>
        </div>
    )
}