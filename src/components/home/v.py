const Leadership = ({message}) => {
return (
    <div
    id="leadership"
    className="jumbotron jumbotron-fluid m-0"
    style={{ backgroundColor: "white" }}
    >
    <div className="container container-fluid">
    <div className="row">
    <div className="col d-lg-inline align-self-center">
    <h1 className="display-4 mb-3 text-center">Background</h1>
    <br/>
    <div className="row">
    <div className="col d-lg-inline align-self-center">
    <p className="lead text-left">{message}</p>
    </div>

    <div className="col d-lg-inline align-self-center">


    <Carousel>
    <Carousel.Item>
    <img
    className="rounded"
    src={ai.jpg}
    alt="ai.jpg"
    width={1350}
    height={849}
    />
    </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
);

};

export default Leadership;