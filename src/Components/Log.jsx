const Log = ({ turne }) => {
  return (
    <ol id="log">
      {turne.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} SELECTES {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
