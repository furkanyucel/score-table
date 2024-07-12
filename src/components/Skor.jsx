import './Skor.css';

export const Skor = ({teamA, teamB}) => {
  return (
    <div className="skor">
      <span>{teamA}</span>
      <span>{teamB}</span>
    </div>
  );
};
