import React, { useState } from 'react';
import { Modal,Button,Row,Col,Form,InputGroup } from 'react-bootstrap';

function Options() {
   

    const blankOption = { name: '' };
    const [optionsState, setOptionsState] = useState([{ ...blankOption },]);
    console.log(optionsState[0])

    function addOption() {
        setOptionsState([...optionsState, { ...blankOption }]);
    };

    // controlled component
    function handleOptiontChange(e) {
        const updatedOptions = [...optionsState];
        updatedOptions[e.target.dataset.idx][e.target.className] = e.target.value;
        setOptionsState(updatedOptions);
    };

    return (
        <div>
            
            {
                optionsState.map((val, idx) => {
                    const optionId = `name-${idx}`;
                    
                    return (
                        
                        <Row key={`option-${idx}`}>
                            <Col sm={10}>
                            <Form.Group>    
                                <Form.Label htmlFor={optionId}>{`Option #${idx + 1}:`}</Form.Label>
                                
                                    <Form.Control
                                        type="text"
                                        name={optionId}
                                        data-idx={idx}
                                        id={optionId}
                                        className="name"
                                        onChange={handleOptiontChange}
                                    />
                            </Form.Group>
                            </Col>
                            
                                                      
                        </Row>
                    );
                })
            }
            <input id="add-input" type="button"  value="+ Add option" onClick={addOption} />
            
        </div>
    );
};

export default Options;