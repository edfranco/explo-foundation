import React from 'react';

import {VISITPODS, EXPLOREPODS, EDUCATIONPODS} from '../../constants/visitPods/visitPods';

class Pods extends React.Component{
    state = {
        pods: []
    };

    componentDidMount(){
        console.log('I am mounted')
        if(this.props.type === 'visit'){
            this.setState({pods:VISITPODS});
        } else if (this.props.type === 'explore'){
            this.setState({pods:EXPLOREPODS});
        } else if (this.props.type === 'education'){
            this.setState({pods:EDUCATIONPODS})
        }
    }
    
    displayPods = () => {
        const pods = [];
        this.state.pods.forEach((pod, i)=>{
            i++
            pods.push(
                <div className="pod" key={i}>
                    <img className="pod-img" src={pod.image} alt=""/>
                    <p>{pod.header}</p>
                    <p>{pod.content}</p>
                </div>
            );
        });
        return pods;
    }
    
    render(){
        console.log(`I am the pod inside this container and I am rendered, these are my props`, this.props);
        return(
            <div className="pod-container">
                <div className="pods">
                    {this.displayPods()}
                </div>
            </div>
        );
    };
};

export default Pods;
