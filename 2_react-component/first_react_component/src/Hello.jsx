function Hello() {
    let myName = 'Maruf';
    let number = 456;
    let fullName = () => {
        return 'Maruf Hasan';

    }
  
    return <h3>
        Message No - {number}: I am {fullName()}.
      </h3>
    
  }
  
  export default Hello;