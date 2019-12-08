import React, { Component } from 'react';

import { PropTypes} from 'prop-types';
import { connect }  from 'react-redux';
import CarouselHomepage from './CarouselHomepage';


class Landing extends Component {
  
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
      
    }
  }

  render() {
    return (
      //landing
      <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div className="row">
              <div class="col-md-12 text-center">
                <h1 class="display-3 mb-4">Connecting Developers
                </h1>

                         
                
                

                <CarouselHomepage/>
              
              </div>
              
            </div>
          </div>
          
        </div>
        
      </div>
    );
  }
}
Landing.propTypes ={

  auth: PropTypes.object.isRequired

}


const mapStateToProps = (state) => ({
 auth: state.auth
});


export default connect(mapStateToProps)(Landing);
