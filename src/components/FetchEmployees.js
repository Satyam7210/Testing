import { useEffect, useState } from 'react';
function FetchEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('/employees');
      const fetchedEmployees = await response.json(response);
      setEmployees(fetchedEmployees);
    }
    fetchEmployees();
  }, []);
  return (
    <div>
      {employees.map((name) => {
          return(
          <div>{name}</div>
          );
          })}
    </div>
  );
}

export default FetchEmployees;