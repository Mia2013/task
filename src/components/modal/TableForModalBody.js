import { useId } from "react";

export default function TableForModalBody({ data }) {
  const id = useId();
  return (
    <table id="modal-table">
      <tbody>
        {data.map((row) => (
          <tr key={id + row.title}>
            <td className="pe-2 py-2 align-top">{row.title}</td>
            <td>{row.data}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
