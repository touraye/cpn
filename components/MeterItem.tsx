import { Meter } from "@/types/Meter";

const MeterItem = ({meter}: {meter: Meter}) => {
    return (<li>
        <h3>{meter.meterName}</h3>
        <p>{meter.meterNumber}</p>       
    </li> );
}
 
export default MeterItem;