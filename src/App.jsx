import { useEffect, useState } from 'react';
import { Skor } from './components/Skor';
import { Teams } from './components/Teams';
import { ResetButton } from './components/Buttons/ResetButton';
import Timer from './components/Timer';
import './App.css';

function App({ teams }) {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  // const [reset, setReset] = useState(0);

  return (
    <>
      <h1>Skor Tablosu</h1>
      <h2><Timer /></h2>
      <Skor teamA={teamA} teamB={teamB} />
      <Teams
        teamA={teamA}
        setTeamA={setTeamA}
        teamB={teamB}
        setTeamB={setTeamB}
      />
      <ResetButton
        teamA={teamA}
        setTeamA={setTeamA}
        teamB={teamB}
        setTeamB={setTeamB}
      />
    </>
  );
}

export default App;
