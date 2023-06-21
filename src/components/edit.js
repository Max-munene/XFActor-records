import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Edit() {
  const [firstname, setfirstname] = useState('');
  const [secondname, setsecondname] = useState('');
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
    a.FirstName = firstname;
    a.SecondName = secondname;
    // a.Id = id;
    a.Idno = idno;
    a.Age = age;
    a.Emptype = emptype;
    a.Department = department;
    a.Salary = salary;

    // history('/');
  };

  useEffect(() => {
    setfirstname(localStorage.getItem('FirstName'));
    setsecondname(localStorage.getItem('SecondName'));
    setidno(localStorage.getItem('Idno'));
    setage(localStorage.getItem('Age'));
    setemptype(localStorage.getItem('Emptype'));
    setdepartment(localStorage.getItem('Department'));
    setsalary(localStorage.getItem('Salary'));
    setid(localStorage.getItem('id'));
  }, []);

  return (
    <div>
      <Form className=' gap-2 ' style={{ margin: '15rem' }}>
        {}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            type='text'
            placeholder='Enter First Name'
          />
        </Form.Group>

        <Form className=' gap-2' style={{ margin: '15rem' }}>
          {}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              value={secondname}
              onChange={(e) => setsecondname(e.target.value)}
              type='text'
              placeholder='Enter Second Name'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              value={idno}
              onChange={(e) => setidno(e.target.value)}
              type='text'
              placeholder='ID No.'
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

          <Link className=' gap-2' to='/'>
            <Button variant='light' size='lg'>
              Home
            </Button>
          </Link>
        </Form>
      </Form>
    </div>
  );
}

export default Edit;
