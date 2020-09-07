import React, { useState } from 'react';
import { Row,Col,Form } from 'react-bootstrap';

function Options(props) {
   
    const { optionsValues } = props

    const blankOption = { name: '' };
    const [optionsState, setOptionsState] = useState([{ ...blankOption },]);
   

    function addOption() {
        setOptionsState([...optionsState, { ...blankOption }]);
    };

    // controlled component
    function handleOptionsChange(e) {
        const updatedOptions = [...optionsState];
        updatedOptions[e.target.dataset.idx][e.target.className] = e.target.value;
        setOptionsState(updatedOptions);
        //console.log(optionsState[0]['name form-control'])
        optionsValues(optionsState) //sending values - callback function
    };

    return (
        <div>
            
            {
                optionsState.map((val, idx) => {
                    const optionId = `name-${idx}`;
                    
                    return (
                        
                        <Row>
                            <Col sm={10}>
                            <Form.Group  key={`option-${idx}`}>    
                                <Form.Label htmlFor={optionId}>{`Option #${idx + 1}:`}</Form.Label>
                                
                                    <Form.Control
                                        type="text"
                                        name={optionId}
                                        data-idx={idx}
                                        id={optionId}
                                        className="name"
                                        //value={optionsState[idx].name}                                    
                                        onChange={handleOptionsChange}
                                    />
                            </Form.Group>
                            </Col>                     
                                                      
                        </Row>

                        // <div key={`option-${idx}`}>
                        //         <label htmlFor={optionId}>{`Option #${idx + 1}`}</label>
                        //         <input
                        //         type="text"
                        //         name={optionId}
                        //         data-idx={idx}
                        //         id={optionId}
                        //         className="name" 
                        //         //value={optionsState[idx].name}
                        //         onChange={handleOptionsChange}
                        //         />
                        // </div>
                                                
                    );
                })
            }
            <input id="add-input" type="button"  value="+ Add option" onClick={addOption} />
            
        </div>
    );
};

export default Options;