import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../features/employeesSlice';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error fetching employees.</p>;

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {list.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
