import React, { Component } from "react";
import { createPortal } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Button} from "react-bootstrap"
import "./Modal.css"

const modalStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.2)",
  color: "##FFF",
  fontSize: "40px",
  height: "100vh",
  display: "flex",
  alignItems: "center"
};

export default class Modal extends Component {
  render() {
    return createPortal(
      <div style={modalStyle}>
          <Container>
            <Card>
              <Card.Header>
                <div className="header-container">
                  <div className="header-container__wrapper">
                    <span className="modalTitle">{this.props.title}</span>
                  </div>
                  <div className="header-container__close-wrapper">
                    <span className="d-none d-sm-flex align-self-center btn btn-primary" onClick={this.props.onClick}>X</span>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                {this.props.children}
              </Card.Body>
              <Card.Footer className="text-muted d-flex justify-content-center d-sm-none">
                <Button variant="primary" onClick={this.props.onClick}>Close</Button>
              </Card.Footer>
            </Card>
          </Container>
      </div>
      ,
      document.getElementById("modal_root")
    );
  }
}