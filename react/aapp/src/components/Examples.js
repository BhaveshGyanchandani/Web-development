import {useState} from 'react';
import { EXAMPLES } from '../data';
import { TabButton } from './TabButton';
import '../index.css';
import { Section } from './Section';
import Tabs from './Tabs';

// always note that JS are just values provided to props/property to a function....

export function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  
  function handleSelect(SelectedButton) {
    console.log("hello world - selected " + SelectedButton);
    setSelectedTopic(SelectedButton);
  }

  let tabContent = "please select a topic";
  if (selectedTopic) { // if selectedTopic is true then
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
  <Section title="Examples" id="examples" >
    <Tabs 
    ButtonsContainer="menu" // uses menu tag as a value
    // the value of ButtonsContainer can be a string ( using "" ) which is indirectly refering to HTML tag or we can select a custom componnet using { }
    // custom component as value of ButtonsContainer as ButtonsContainer={Section} as wrapper of {buttons}
    buttons={
      <> 
      {/* we need a wraper here since all the <TabButton> </TabButton> are individauals and we can only return 1 tag not multiple..
      so we will use a wrapper here  
      // always note that JS code are just values provided to props/property to a function in react
      this whole TabButton code below is a value to the prop buttons which will then execute this value as a code
      we can se mutliple props too......*/}
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton></>
    }> 
    {tabContent}
    </Tabs>
            
        </Section>
  );
        
}