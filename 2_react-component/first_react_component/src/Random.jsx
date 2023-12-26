function Random(){
    let number = Math.random()*10;

    return <h2 style={{backgroundColor:'#776695'}}>
        Generate Random Number = {Math.round(number)}
        </h2>
}

export default Random;