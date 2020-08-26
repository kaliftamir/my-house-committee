import React, { } from 'react';
import { Modal,Button,Row,Col } from 'react-bootstrap';

function MyModal(props) {

    const {showNewRecipeModal,handleModalClose,titleInput,handleInputChange,detailsInput,imgInput}


    return(
        <div className="c-my-modal">
            <Modal show={showNewRecipeModal} onHide={handleModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>New Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="name">
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    {/* the value and name needs to be the same if you want to use a single function for onchange for all inputs */}
                                    <Form.Control type="text" value={titleInput} name="nameInput" onChange={handleInputChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="desc">
                                <Form.Label column sm={2}>
                                    Description
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" value={detailsInput} name="descInput" onChange={handleInputChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="img">
                                <Form.Label column sm={2}>
                                    Image URL
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" value={imgInput} name="imgInput" onChange={handleInputChange}  />
                                </Col>
                            </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCreateRecipe}>
                            Create Recipe
                        </Button>
                    </Modal.Footer>
                </Modal>

        </div>
    )


}

                
export default MyModal;