  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Col,
  Row,
  
} from 'reactstrap';


const styles = {
  sliderContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color:'white'
  }
}

const items = [
  {
    src:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 1',
    caption: 'Slide 1',
    title: 'Connect To Developers ',
    subtitle:'Connect to developers from different fields'
  
   
  },
  {
    src:'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
   altText: 'Slide 2',
    caption: 'Slide 2',
    title: "Share Posts",
    subtitle: 'Comment,like the posts'
    
  
  },
  {
    src:'https://images.unsplash.com/photo-1569323112699-e222ee4916e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 3',
    caption: 'Slide 3',
    title: 'Create A Developer portfolio',
    subtitle: 'View Profile and edit credentials'
  }
    
];

class CarouselHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(x => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={x.src}
        >
          <Row  style={{backgroundColor: '#0000CD'}}>
            <Col md="6">
              <img src={x.src} alt={x.altText} style={{width: '100%', maxHeight: '500px'}}/>
            </Col>
            <Col md="6" style={styles.sliderContent}>
              <h2>{x.title}</h2>
              <p>{x.subtitle}</p>
              <Link to="/register" className="btn btn-lg btn-primary mr-2">
                  Sign Up
                </Link>
                <hr/>
                <Link to="/login" className="btn btn-lg btn-success">
                  Login
                </Link>
            
            </Col>
          </Row>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselHomepage;