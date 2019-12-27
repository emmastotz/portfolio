import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import projects from "../../projects.json";

const slider = (
  <AwesomeSlider>
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
);

export default class Test extends React.Component {
  
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
    
    setTimeout(() => {
      this.setState({
        children: this.createChildren(),
      })
    }, 100);
  }
  
  createChildren = () => projects.map(project => 
    <div key={project.id} style={{ height: 600}}>
      <div> {project.title} </div>
      <img height="200" src={project.image} alt={project.title} />
      <div> {project.description} </div>
    </div>);
  
  changeActiveItem = (activeItemIndex) => this.setState({ 
  activeItemIndex });
  
  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
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
        leftChevron={slider}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
}