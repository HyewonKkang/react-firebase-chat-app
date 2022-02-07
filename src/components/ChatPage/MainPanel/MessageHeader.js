import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Col,
  Image,
  Accordion,
  useAccordionButton,
  Card,
  Button,
} from "react-bootstrap";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

function MessageHeader({ handleSearchChange }) {
  const chatRoom = useSelector((state) => state.chatRoom.currentChatRoom);
  const isPrivateChatRoom = useSelector(
    (state) => state.chatRoom.isPrivateChatRoom
  );
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <Button
        style={{
          backgroundColor: "transparent",
          color: "#0E61E2",
          border: "none",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        height: "170px",
        border: ".2rem solid #ececec",
        borderRadius: "4px",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h2>
              {isPrivateChatRoom ? (
                <FaLock style={{ marginBottom: "10px" }} />
              ) : (
                <FaLockOpen style={{ marginBottom: "10px" }} />
              )}{" "}
              {chatRoom && chatRoom.name} <MdFavorite />
            </h2>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <AiOutlineSearch />
              </InputGroup.Text>
              <FormControl
                onChange={handleSearchChange}
                placeholder="Search Messages"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p>
            <Image /> user name
          </p>
        </div>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Card.Header style={{ padding: "0 1rem" }}>
                  <CustomToggle eventKey="0">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Card>
                <Card.Header style={{ padding: "0 1rem" }}>
                  <CustomToggle eventKey="0">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MessageHeader;
