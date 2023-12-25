function Hello() {
    let myName = 'Maruf';
    let number = 456;
    let fullName = () => {
        return 'Maruf Hasan';

    }
  
    return <p>
        Message No - {number}. I am {fullName()}.
      </p>
    
  }
  
  export default Hello;