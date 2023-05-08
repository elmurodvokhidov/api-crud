import { useContext } from "react";
import { ContextData } from "./context/Context";
import './css/Main.css';
import Modal from "./utilities/Modal";
import Spinner from "./utilities/Spinner";
import { AiOutlinePlus } from "react-icons/ai";

function App() {

  const { info, add, deleteFunc, edit, spinner } = useContext(ContextData);

  return (
    <div className="App">
      {/* Modal window */}
      <Modal />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Region</th>
            <th>Boshqa</th>
          </tr>
        </thead>
        <tbody>
          {
            spinner ? <Spinner /> :
              info.length > 0 ?
                info.map((a, b) => (
                  <tr key={b}>
                    <td>{b + 1}</td>
                    <td>{a.name}</td>
                    <td>
                      <button onClick={() => edit(a)} className="btn btn-primary">edit</button>
                      <button onClick={() => deleteFunc(a)} className="btn btn-danger">delete</button>
                    </td>
                  </tr>
                )) : <td colSpan={10} id="notFound">Ma'lumot topilmadi!</td>
          }
        </tbody>
      </table>

      <button onClick={(e) => add(e)} id="addBtn" className="btn btn-dark"><span><AiOutlinePlus /></span></button>
    </div>
  );
}

export default App;
