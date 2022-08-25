class Calculator{
    constructor(op1, op2){
        this.op1= op1;
        this.op2= op2;
    }

    add(op1, op2){
        return this.op1 + this.op2;
    }

    sub(op1, op2){
        return this.op1 - this.op2;
    }

    mult(op1, op2){
        return this.op1 * this.op2;
    }

    div(op1, op2){

        try{
            if(op2 === 0){
                throw ('division by zeno is illigal');
            } 
            else{
                return (op1 / op2).toFixed(2);
            }
        }catch(err){
            return err;
        }
        
    }
}

module.exports=Calculator;