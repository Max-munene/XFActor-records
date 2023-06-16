import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [firstName, setfirstname] = useState('');
  const [secondName, setsecondname] = useState('');
  const [id, setid] = useState('');
  const [idno, setidno] = useState('');
  const [age, setage] = useState('');
  const [emptype, setemptype] = useState('');
  const [department, setdepartment] = useState('');
  const [salary, setsalary] = useState('');

  //   let history = useNavigate();

  var index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handelSubmit = (e) => {
    e.preventDefault();

    let a = array[index];

    a.FirstName = firstName;
    a.SecondName = secondName;
    a.Id = id;
    a.Idno = idno;
    a.Age = age;
    a.Emptype = emptype;
    a.Department = department;
    a.Salary = salary;

    // history('/');
  };

  useEffect(() => {
    setfirstname(localStorage.getItem('First Name'));
    setsecondname(localStorage.getItem('Second Name'));
    setsecondname(localStorage.getItem('ID No.'));
    setage(localStorage.getItem('Age'));
    setsecondname(localStorage.getItem('Employee Type'));
    setid(localStorage.getItem('id'));
    setdepartment(localStorage.getItem('Department'));
    setdepartment(localStorage.getItem('Salary'));
  }, []);

  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
        {}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            value={firstName}
            onChange={(e) => setfirstname(e.target.value)}
            type='text'
            placeholder='Enter First Name'
          />
        </Form.Group>

        <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
          {}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              value={secondName}
              onChange={(e) => setsecondname(e.target.value)}
              type='text'
              placeholder='Enter First Name'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              value={idno}
              onChange={(e) => setidno(e.target.value)}
              type='text'
              placeholder='ID Number'
            />
          </Form.Group>

          {/* SetAge */}
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              value={age}
              onChange={(e) => setage(e.target.value)}
              type='text'
              placeholder='Age'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              value={emptype}
              onChange={(e) => setemptype(e.target.value)}
              type='text'
              placeholder='Employee Type'
            />
          </Form.Group>

          {/* setdepartment */}
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              value={department}
              onChange={(e) => setdepartment(e.target.value)}
              type='text'
              placeholder='Department'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
              type='text'
              placeholder='Salary'
            />
          </Form.Group>

          {/* Handle onClick} */}
          <Button
            onClick={(e) => handelSubmit(e)}
            variant='primary'
            type='submit'
            size='lg'
          >
            Update
          </Button>

          <Link className='d-grid gap-2' to='/'>
            <Button variant='warning' size='lg'>
              Home
            </Button>
          </Link>
        </Form>
      </Form>
    </div>
  );
}

export default Edit;
