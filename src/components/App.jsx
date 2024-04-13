import { Calculation } from "./Calculations/Calcultion/Calculation";
import { Balance } from "./Balance/Balance/Balance";

export const App = () => {
  return (
    <>
      <Calculation/>
      <Balance/>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    
    </>
  );
};
