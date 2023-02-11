export const NotesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="z-0 table w-full shadow-2xl shadow-black">
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Status</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody>
          {/* notes.map(note => {
            return (
                <tr className="hover">
                <th>1</th>
                <td>{note.date}</td>
                <td>COMPLETED</td>
                <td>SEE</td>
              </tr>
            )
          }}) */}
          <tr className="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr className="hover">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
