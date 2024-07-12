import { Button } from '../Buttons/Button';
import './ResetButton.css';

export const ResetButton = ({ setTeamA, setTeamB }) => {
  const resetClick = () => {
    setTeamA(0), setTeamB(0);
  };

  return <Button onClick={resetClick} >Skoru Sıfırla</Button>;
};
