function Company(props) {
    const {company_name,} = props;
    const {num_of_employees} = props;
    const {company_address} = props;
  
      return (
        <div className="App">
          <h2>Company Name:{company_name}</h2>
          <h2>Numbers of employees is: {num_of_employees}</h2>
          <h2>Company Address: {company_address}</h2>
  
        </div>
      );
    }
    
    export default Company;
    
  