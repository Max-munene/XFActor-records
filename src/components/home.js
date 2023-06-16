// Filename - Home.js
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';

function Home() {
  //   let history = useNavigate();

  function setID(
    id,
    firstname,
    secondname,
    idno,
    age,
    emptype,
    department,
    salary,
  ) {
    localStorage.setItem('id', id);
    localStorage.setItem('FirstName', firstname);
    localStorage.setItem('SecondName', secondname);
    localStorage.setItem('Idno', idno);
    localStorage.setItem('Age', age);
    localStorage.setItem('EmpType', emptype);
    localStorage.setItem('Department', department);
    localStorage.setItem('Salary', salary);
  }

  //   Delete
  function deleted(id) {
    var index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    // history('/');
  }

  return (
    <div style={{ margin: '10rem' }}>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>ID No.</th>
            <th>Age</th>
            <th>Employee Type</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr>
                <td>{item.FirstName}</td>
                <td>{item.SecondName}</td>
                <td>{item.Idno}</td>
                <td>{item.Age}</td>
                <td>{item.EmpType}</td>
                <td>{item.Department}</td>
                <td>{item.Salary}</td>

                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) => setID(item.id, item.Name, item.Age)}
                      variant='info'
                    >
                      Update
                    </Button>
                  </Link>
                </td>

                <td>
                  <Button onClick={(e) => deleted(item.id)} variant='danger'>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Link className='d-grid gap-2' to='/create'>
        <Button variant='warning' size='lg'>
          Create
        </Button>
      </Link>
    </div>
  );
}

export default Home;
