import { useState } from "react"
import "./Ranger.css";

export default function Ranger({ maxPrice, minPrice, setRange }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);

    const currentPriceMin = minPrice + Math.floor((Math.abs(maxPrice - minPrice) / 100) * Math.min(max, min));
    const currentPriceMax = minPrice + Math.floor((Math.abs(maxPrice - minPrice) / 100) * Math.max(max, min));
    

    return (<div className="left-menu__ranger">
        <div className="left-menu__ranger-header">
            <div>Prices</div>
            <div> Ranger:
                ${currentPriceMin} - ${currentPriceMax}</div>
        </div>

        <div className="left-menu__ranger-controller">
            <input type="range" className="controller-left" value={min} onChange={(e) => { setMin(e.target.value); setRange({ max: minPrice + Math.floor((Math.abs(maxPrice - minPrice) / 100) * Math.max(max, min)), min: minPrice + Math.floor((Math.abs(maxPrice - minPrice) / 100) * Math.min(max, min)) }) }} />
            <input type="range" className="controller-right" value={max} onChange={(e) => { setMax(e.target.value); setRange({ max: minPrice + Math.floor((Math.abs(maxPrice - minPrice) / 100) * Math.max(max, min)), min: minPrice + Math.floor((Math.abs(maxPrice - minPrice) / 100) * Math.min(max, min)) }) }} />
            <div className="left-menu__ranger-controller-back" style={{
                marginLeft: `${Math.min(max, min)}%`,
                width: `${Math.abs(max - min)}%`
            }}></div>
            <div className="left-menu__ranger-controller-border"></div>
        </div>
    </div>)
}
Ranger.defaultProps = {
    maxPrice: 1000,
    minPrice: 200
}