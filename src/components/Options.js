import React, { useState } from 'react';
import { Modal,Button,Row,Col,Form,InputGroup } from 'react-bootstrap';

const Options = () => {
   

    const blankOption = { name: '' };
    const [optionState, setOptionState] = useState([
        { ...blankOption },
    ]);

    const addOption = () => {
        setOptionState([...optionState, { ...blankOption }]);
    };

    return (
        <form>

            
            {
                optionState.map((val, idx) => {
                    const optionId = `name-${idx}`;
                    
                    return (
                        
                        <Row key={`option-${idx}`}>
                            <Col sm={10}>
                            <Form.Label htmlFor={optionId}>{`Option #${idx + 1}:`}</Form.Label>
                            
                                <Form.Control
                                    type="text"
                                    name={optionId}
                                    data-idx={idx}
                                    id={optionId}
                                    className="name"
                                />
                            </Col>
                                                      
                        </Row>
                    );
                })
            }
            <input id="add-input"
                type="button"
                value="+ Add option"
                onClick={addOption}
            />
            {/* <input type="submit" value="Submit" /> */}
        </form>
    );
};

export default Options;