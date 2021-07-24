import logo from './explo-logo-white.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Colors, Sizes, Accordion, AccordionContent, AccordionTitle, AccordionItem } from 'react-foundation';
import React from 'react';


class App extends React.Component {
  state = {
    isAccordionActive: Boolean,
  }
  dropAccordion = () => {
    console.log("click");
    this.setState({isAccordionActive: !this.state.isAccordionActive});
  }

  render(){
    console.log(Colors)
    return (
      <Router>
      <div className="App">
         <div className="nav">
          <img class="explo-logo" alt="Exploratorium" src={logo} height="5px"/>   
          <div className="search">
            search
          </div>
         </div>
         <div className="button-basics-example">
          <h2>Buttons</h2>
          <Button>Regular Degular Schmegular</Button>
          <Button color={Colors.SUCCESS}>Success</Button>
          <Button color={Colors.ALERT}>Alert</Button>
          <Button>Explo Default</Button>
        </div>
        <div className="buttons-sizes">
          <h2>Sizing</h2>
          <Button style={{marginRight:"1em"}} size={Sizes.TINY}>So Tiny</Button>
          <Button style={{marginRight:"1em"}} size={Sizes.SMALL}>So Small</Button>
          <Button style={{marginRight:"1em"}}>So Basic</Button>
          <Button style={{marginRight:"1em"}} size={Sizes.LARGE}>So Large</Button>
          <Button style={{marginRight:"1em"}} isExpanded>Such Expand</Button>
          <Button style={{marginRight:"1em"}} size={Sizes.TINY} isExpanded>Wow, Small Expand</Button>
        </div>
        <div className="button-colors-example">
          <h2>Button Colors</h2>
          <Button color={Colors.PRIMARY}>Primary Color</Button>
          <Button color={Colors.SECONDARY}>Secondary Color</Button>
          <Button color={Colors.SUCCESS}>Success Color</Button>
          <Button color={Colors.ALERT}>Alert Color</Button>
          <Button color={Colors.WARNING}>Warning Color</Button>
          <Button isDisabled>Disabled Button</Button>
        </div>
        <div className="button-hollow-example">
          <h2>Hollow Button Colors</h2>
          <Button color={Colors.PRIMARY} isHollow>Primary Color</Button>
          <Button color={Colors.SECONDARY} isHollow>Secondary Color</Button>
          <Button color={Colors.SUCCESS} isHollow>Success Color</Button>
          <Button color={Colors.ALERT} isHollow>Alert Color</Button>
          <Button color={Colors.WARNING} isHollow>Warning Color</Button>
        </div>
        <div className="accordions-example">
          <h2>Accordions</h2>
          <p>Require state</p>
          <Accordion>
            <AccordionItem onClick={this.dropAccordion}>
              <AccordionTitle>Accordion 1</AccordionTitle>
              <AccordionContent style={this.state.isAccordionActive ? {display:"block"} : null}>
                <p>
                  First accordion contents
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle>Accordion 2</AccordionTitle>
              <AccordionContent>
                <p>
                  Second accordion contents
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle>Accordion 3</AccordionTitle>
              <AccordionContent>
                <p>
                  Third accordion contents
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
