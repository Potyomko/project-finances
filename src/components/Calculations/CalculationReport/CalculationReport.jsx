import { Calculation } from "../Calculation/Calculation";
import { CalculationList } from "../CalculationList/CalculationList";
import { CalculationChart } from "../CalculationСhart/CalculationСhart";

export default function CalculationReport() {
    return (
        <>
            <Calculation />
            <CalculationList />
            <CalculationChart/>
        </>
    )
}