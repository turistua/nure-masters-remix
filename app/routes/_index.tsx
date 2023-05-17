import type { V2_MetaFunction } from "@remix-run/cloudflare";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CityCard from "~/components/CityCard";
import HowItWorks from "~/components/HowItWorks";
import Footer from "~/components/Footer";

export const meta: V2_MetaFunction = () => {
  return [{ title: "NURE Masters" }];
};

export default function Index() {
  const cities = [{
    id: 'dnipro',
    name: 'Дніпро',
    photo: '',
    description: ''
  },{
    id: 'kyiv',
    name: 'Київ',
    photo: '',
    description: ''
  },{
    id: 'lviv',
    name: 'Львів',
    photo: '',
    description: ''
  }]

  return (
    <>
      <Container>
        <Row>
          <p className="display-3">
            Привіт!
          </p>
          <p className="display-5">Я - сервіс NURE Masters</p>
          <p className="lead">Я розумію, що переїхавши в інше місто часто важко знайти потрібного майстра - перукаря, барбера чи майстра манікюру</p>
        </Row>
      </Container>
      <HowItWorks />
      <Container>
        <Row>
          {cities.map(city => <Col><CityCard data={city} key={city.id} /></Col>)}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
