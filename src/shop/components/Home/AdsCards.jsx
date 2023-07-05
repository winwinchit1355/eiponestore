import Card from "react-bootstrap/Card";

function AdsCards() {
  return (
    <div className="row m-5 px-5">
      <div className="col-md-4">
        <Card>
          <Card.Body className="text-center">
            <Card.Text>Best Quality</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <Card.Body className="text-center">
            <Card.Text>Best Service</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <Card.Body className="text-center">
            <Card.Text>Best Trustworthy</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AdsCards;
