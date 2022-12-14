import React, { useState } from "react";
import "../style/toggleSwitch.css";

function ToggleSwitch() {
    const [isToggled, setIsToggled] = useState(true);
    const onToggle = () => setIsToggled(!isToggled);
    return (
        <label className="toggle-switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
        </label>
    );
}
export default ToggleSwitch;