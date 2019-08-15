import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { addBike } from "../actions/bikeActions";

//import propTypes from "prop-types";

class BikeModal extends React.Component {
  state = {
    modalOpen: false,
    bikeInput: []
  };
  toggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };
  onChange = e => {
    this.setState({ [e.target.bikeInput]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newBike = {
      bikeInput: this.state.bikeInput
    };
    // add bike via addBike action using Redux
    this.props.addBike(newBike);
    //close the modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Bike
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Bikes List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="bike">Bike</Label>
                <Input
                  type="text"
                  name="bikeInput"
                  id="bike"
                  placeholder="Add a bike"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Bike
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ bike: state.bike });

export default connect(
  mapStateToProps,
  { addBike }
)(BikeModal);
