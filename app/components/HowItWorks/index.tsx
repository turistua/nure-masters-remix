import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ClockFill, Map, Postcard, Scissors} from "react-bootstrap-icons";
import styles from './styles.module.css';

export default function HowItWorks() {
  const iconSize = 80;
  
  return (
    <Container className={styles.wrapper}>
      <Row>
        <p className="display-4">Як це працює?</p>
      </Row>
      <Row>
        <Col>
          <Map size={iconSize} />
          <p className="display-6">1. Обери місто</p>
        </Col>
        <Col>
          <Scissors size={iconSize} />
          <p className="display-6">2. Обери послугу</p>
        </Col>
        <Col>
          <ClockFill size={iconSize} />
          <p className="display-6">3. Заплануй візит</p>
        </Col>
        <Col>
          <Postcard size={iconSize} />
          <p className="display-6">4. Залиш відгук</p>
        </Col>
      </Row>
    </Container>
  )
}