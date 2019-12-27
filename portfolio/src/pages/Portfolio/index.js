import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import ItemsCarousel from 'react-items-carousel';
import 'react-awesome-slider/dist/styles.css';
import projects from "../../projects.json";
import "./style.css";

class Portfolio extends Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
    
    setTimeout(() => {
      this.setState({
        children: this.createChildren(),
      })
    }, 50);
  }
  
  createChildren = () => projects.map(project => 
    <div key={project.id} style={{ height: 350}}>
      <h4> {project.title} </h4>
      <img height="200" src={project.image} alt={project.title} />
      <h6> {project.description} </h6>
      <button className="btn btn-secondary">  
        <a href={project.link}>
          View Project
        </a>
      </button>
    </div>);
  
  changeActiveItem = (activeItemIndex) => this.setState({ 
  activeItemIndex });
  
  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
    return (
      <Jumbotron>
        <h4>featured projects</h4>
        <hr></hr>
        <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder={false}
        numberOfPlaceholderItems={3}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 200, background: '#fff' }}>Placeholder</div>}
        // Carousel configurations
        numberOfCards={3}
        gutter={12}
        showSlither={false}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={48}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
        >
          {children}
        </ItemsCarousel>
        <hr></hr>
      </Jumbotron>
      
    );  
  }
}

export default Portfolio;
