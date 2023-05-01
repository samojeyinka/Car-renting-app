import React, { Component } from 'react';
import '../styles/HeroImageStyles.css';
import { Link } from 'react-router-dom';

class HeroImage extends Component{

    render(){
        return (
            <div className='heroimage-sec'>
                <div className='heroimage-con'>
                    <div className='breadcrumb'>

                   <h2>{this.props.heading}</h2>
                    <h4> <Link to={this.props.linkTo}>{this.props.hometext}</Link>/<Link to={this.props.linkToCur}>{this.props.current}</Link></h4>

                    </div>

                </div>

            </div>
          )
    };
  
};

export default HeroImage