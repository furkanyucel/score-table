import { Button } from './Buttons/Button';
import './Teams.css';

export const Teams = ({ teamA, setTeamA, teamB, setTeamB }) => {
  const clickHandlerA = () => {
    setTeamA(teamA + 1);
  };

  const clickHandlerB = () => {
    setTeamB(teamB + 1);
  };

  return (
    <div className="teams">
      <div className="team teamA">
        <label>A Takımı</label>
        <Button onClick={clickHandlerA}>Skor Ekle</Button>
      </div>
      <div className="team teamB">
        <label>B Takımı</label>
        <Button onClick={clickHandlerB}>Skor Ekle</Button>
      </div>
    </div>
  );
};
