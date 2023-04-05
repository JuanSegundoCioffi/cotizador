import React, { useEffect, useState } from "react";

function Historial() {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const handleDelete = (e) => {
    let find = history.find((el) => el.dateTime === e.target.id);
    let position = history.indexOf(find);

    history.splice(position, position + 1);

    setHistory(history);

    localStorage.setItem("history", JSON.stringify(history));

    location.reload();
  };


  const showTable = () => {
    if (history.length > 0) {
      return history.map((el, index) => (
        <tr key={index}>
          <th scope="row">{el.dateTime}</th>
          <td>{el.property}</td>
          <td>{el.ubication}</td>
          <td>{el.meters}</td>
          <td>{el.price}</td>
          <td>
            <button
              id={el.dateTime}
              onClick={handleDelete}
              className="btn btn-danger"
            >
              X
            </button>
          </td>
        </tr>
      ));
    } else {
      return(
        <tr>
        <th scope="row">-</th>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
    )
    }
  };
  return (
    <main className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha y hora</th>
            <th scope="col">Propiedad</th>
            <th scope="col">Ubication</th>
            <th scope="col">Metros Cuadrados</th>
            <th scope="col">Cotizacion</th>
          </tr>
        </thead>
        <tbody>{showTable()}</tbody>
      </table>
    </main>
  );
}

export default Historial;
