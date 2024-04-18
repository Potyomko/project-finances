import { Calculation } from "../Calculation/Calculation";
import { CalculationList } from "../CalculationList/CalculationList";
import { CalculationChart } from "../CalculationСhart/CalculationСhart";

export const CalculationReport = () => {
    return (
        <>
            <Calculation />
            <CalculationList />
            <CalculationChart/>
        </>
    )
}