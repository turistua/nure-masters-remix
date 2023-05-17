import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "@remix-run/react";
import styles from './styles.module.css';

export default function Index({data}) {
  const {name, description} = data;

  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" href="/city/{data.id}">Подивитись</Button>
      </Card.Body>
    </Card>
  )
}