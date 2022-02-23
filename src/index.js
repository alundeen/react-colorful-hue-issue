import './style';
import { useState } from "preact/hooks";
import { HexColorPicker } from "react-colorful";

export default function App() {
    const [color, setColor] = useState("#aabbcc");

    return (
        <div>
            <HexColorPicker color={color} onChange={setColor} />
            <div className="value" style={{ borderColor: color }}>
                {color}
            </div>
        </div>
    );
}
