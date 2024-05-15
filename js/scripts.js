* {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
  }
  
  body {
    text-align: center;
    padding: 2rem;
    min-height: 100vh;
    background: linear-gradient(180deg, #db4444 0%, #3f24dd 98%);
    color: #fff;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  
  #multiplication-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 300px;
    background-color: #fff;
    border-radius: 1rem;
    color: #333;
  }
  
  .form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    margin: 0 1rem;
  }
  
  .form-control label {
    margin-bottom: 0.6rem;
    font-size: 0.8rem;
    font-weight: bold;
  }
  
  .form-control input {
    margin-bottom: 1rem;
    flex: 1;
    padding: 0.6rem 0.4rem;
    border: none;
    width: 50px;
    border: 1px solid #333;
    border-radius: 5px;
    text-align: center;
  }
  
  #multiplication-form input[type="submit"] {
    max-height: 50px;
    padding: 0.6rem 1.2rem;
    width: 200px;
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  #multiplication-operations {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    margin: 1rem auto;
    padding: 2rem 1rem;
    background-color: #fff;
    border-radius: 1rem;
    color: #333;
  }
  
  #multiplication-operations .row {
    display: flex;
    justify-content: center;
    border: 1px solid #ccc;
    border-bottom: none;
    padding: 0.5rem;
    width: 150px;
    text-align: center;
  }
  
  #multiplication-operations .row:last-child {
    border-bottom: 1px solid #ccc;
  }
  
  #multiplication-operations .result {
    margin-left: 0.4rem;
  }