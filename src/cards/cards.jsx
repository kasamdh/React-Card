import React, {Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/A330-200-Hifly-Nepal-Airlines-landing.jpg';
import img2 from '../assets/Etihad-1.jpg';
import img3 from '../assets/virigin_atlantic_dreamliner_cropped_1.jpg';
// import img3 from '../assets/A330-200-Hifly-Nepal-Airlines-landing.jpg';
import img4 from '../assets/United_Airlines_Boeing_787-10_Dreamliner_N14001_approaching_Newark_Liberty_International_Airport-1024x768.jpg';



class Cards extends Component {
  
    render() { 
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className = "col-md-3">
                        <Card imgsrc= {img1} title = "Nepal Airlines"
                        paragraph = "Currently Nepal Airlines is running 2 Airbus A330-200 viz: Airbus A330-200 -9N ALY known as Annapurna and Airbus A330-200 -9N ALZ known as Makalu. It is a 274 seated aircraft with 256 Economy class and 18 Business class."
                        
                        />
                    </div>
                    <div className = "col-md-3">
                        <Card imgsrc= {img2} title = "Etihad"
                        paragraph="Welcome to Etihad Airways. From our home in Abu Dhabi, we fly to passenger and cargo destinations in the Middle East, Africa, Europe, Asia, Australia and North America. Together with our codeshare partners, our network offers access to hundreds of international destinations in just one booking.

"
                        
                        />
                    </div>
                    <div className = "col-md-3">
                        <Card imgsrc= {img3} title = "Virgin Atlantic"
                        paragraph= "We launched our first Boeing 787 Dreamliner, 'Birthday Girl', in October 2014. We're very proud of these aircraft, which fly from London Heathrow to New York, Newark, Boston, Los Angeles, Delhi, Hong Kong and Shanghai."
                        
                        />
                    </div>
                    <div className = "col-md-3">
                        <Card imgsrc= {img4} title = "United Airlines"
                        paragraph ="Choose United Airlines to fly to more than 210 destinations in the U.S. and more than 120 destinations internationally — every day we operate more than 4,500 flights across five continents. Our comprehensive route network means you can book a direct or connecting flight to and from airports all over the world. "
                        
                        />
                    </div>
                    
                    
                </div>
                
            </div>
          );
    }
}
 
export default Cards;