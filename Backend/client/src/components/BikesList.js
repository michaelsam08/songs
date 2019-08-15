import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getBikes, deleteBike, addBike } from "../actions/bikeActions";
import propTypes from "prop-types";

class BikesList extends React.Component {
  componentDidMount() {
    this.props.getBikes();
  }
  onDeleteClick = _id => {
    this.props.deleteBike(_id);
  };

  render() {
    const { bikes, wheelSize, frame, color } = this.props.bike;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="BikesList">
            {bikes.map(({ _id, name, wheelSize, frame, color }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name + "          "}
                  {"Frame: " + frame + "      "}
                  {"Color: " + color + "       "}
                  {"Wheel-size: " + wheelSize + "  "}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

BikesList.propTypes = {
  getBikes: propTypes.func.isRequired,
  bike: propTypes.object.isRequired
};

const mapStateTProps = state => ({
  bike: state.bike
});

export default connect(
  mapStateTProps,
  { getBikes, deleteBike, addBike }
)(BikesList);
