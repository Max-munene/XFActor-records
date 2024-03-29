import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

function Create() {
  const [firstname, setfirstname] = useState('');
  const [secondname, setsecondname] = useState('');
  const [idno, setidno] = useState('');
  const [age, setage] = useState('');
  const [empType, setemptype] = useState('');
  const [department, setdepartment] = useState('');
  const [salary, setsalary] = useState('');

  // let history = useNavigate();

  //Post entry
  const handelSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uni = ids.slice(0, 8);
    let a = firstname,
      b = secondname,
      c = idno,
      d = age,
      f = empType,
      g = department,
      h = salary;
    array.push({
      id: uni,
      FirstName: a,
      SecondName: b,
      IdNo: c,
      Age: d,
      EmpType: f,
      Department: g,
      Salary: h,
    });
    alert('Created Successfully', 'success');

    // history('/');
  };

  return (
    <div>
      <Form className=' gap-2' style={{ margin: '10rem' }}>
        <h2>
          XFActor LTD <br></br> Employee Data
        </h2>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Control
            onChange={(e) => setfirstname(e.target.value)}
            type='text'
            placeholder='Enter First Name'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Control
            onChange={(e) => setsecondname(e.target.value)}
            type='text'
            placeholder='Enter Second Name'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicAge'>
          <Form.Control
            onChange={(e) => setidno(e.target.value)}
            type='number'
            placeholder='ID No.'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicAge'>
          <Form.Control
            onChange={(e) => setage(e.target.value)}
            type='number'
            placeholder='Age'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicAge'>
          <Form.Control
            onChange={(e) => setemptype(e.target.value)}
            type='text'
            placeholder='Employee Type'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicAge'>
          <Form.Control
            onChange={(e) => setdepartment(e.target.value)}
            type='text'
            placeholder='Department'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicAge'>
          <Form.Control
            onChange={(e) => setsalary(e.target.value)}
            type='number'
            placeholder='Salary'
            required
          />
        </Form.Group>

        {/* onClick */}
        <Button
          onClick={(e) => handelSubmit(e)}
          variant='primary'
          type='submit'
        >
          Submit
        </Button>

        <Link className=' gap-2' to='/'>
          <Button variant='light' size='lg'>
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;
