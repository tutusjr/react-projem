import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
    function Boostrap() { 

    }
 
    export default Boostrap 

*/ //!BOYLE DE CIKARILABILIR.

/*  



    export default function Boostrap() {

    }

*/ //! BOYLE DE CIKARABILIRDIM.

/*

    const Bootstrap = () => {
 
    }

    export default Bootstrap

*/ //! BOYLE DE CIKARABILIRDIM.

//Todo en usttekini tercih ederek devam edecegim

function Boostrap(){
    return(
        <div>
            <h3>Bootstrap companents</h3>
            <Button>Button</Button>
            <Button variant="success">Button</Button>
            <Button variant="warning">Button</Button>
            <Button variant="secondary">Button</Button>
        </div>
    )
}

export default Boostrap