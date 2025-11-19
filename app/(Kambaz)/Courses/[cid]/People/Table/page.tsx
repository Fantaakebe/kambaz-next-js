import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td>001234561S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-10-01</td>
            <td>10:21:32</td>
          </tr>

          {/* Amina */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Amina</span>{" "}
              <span className="wd-last-name">Aitnouri</span>
            </td>
            <td>001234562A</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-11-02</td>
            <td>12:44:10</td>
          </tr>

          {/* Sarah */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Sarah</span>{" "}
              <span className="wd-last-name">Abouchleilh</span>
            </td>
            <td>001234563S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-11-03</td>
            <td>15:22:48</td>
          </tr>

          {/* Hafsa */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Hafsa</span>{" "}
              <span className="wd-last-name">Rehman</span>
            </td>
            <td>001234564H</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-11-05</td>
            <td>09:18:21</td>
          </tr>

          {/* Noora */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Noora</span>{" "}
              <span className="wd-last-name">Hameeduddin</span>
            </td>
            <td>001234565N</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-11-07</td>
            <td>13:55:50</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}