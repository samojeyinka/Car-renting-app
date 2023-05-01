 import React,{useState} from 'react';
import '../styles/VehicleTabStyles.css';
import {audi,bmw,golf,Mercedes,Toyota, vw,} from '../assets/index'

  const VehicleTab = () => {

    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    }


    // ===============using ARRAY for the vehicle details to make the code more clean==========

    const  btnRays = [
      {
        id:1,
        ClassName:toggleState === 1? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(1),
        BtnText:'BMW 5 Series',
      },

      {
        id:2,
        ClassName:toggleState === 2? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(2),
        BtnText:'Mercedes-Benz CLA',
      },

      {
        id:3,
        ClassName:toggleState === 3? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(3),
        BtnText:'VW Passat CC',
      },
      {
        id:4,
        ClassName:toggleState === 4? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(4),
        BtnText:'VW Golf 6',
      },
      {
        id:5,
        ClassName:toggleState === 5? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(5),
        BtnText:'Mercedes-Benz GLK',
      },
      {
        id:6,
        ClassName:toggleState === 6? 'tablink active-tablink':'tablink',
        OnClick:() => toggleTab(6),
        BtnText:'Toyota Camry',
      },
    ];

    const VehicleRays = [

      {
        id:1,
        ClassName:toggleState === 1? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:audi,
        TabPrice:'$65',
        Model:'Audi',
        Mark:'A1',
        Year:'2013',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Manual',
        Fuel:'Gasoline',


      },

      {
        id:2,
        ClassName:toggleState === 2? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:bmw,
        TabPrice:'$65',
        Model:'320  ',
        Mark:'BMW',
        Year:'2012',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Manual',
        Fuel:'Diesel',


      },


      {
        id:3,
        ClassName:toggleState === 3? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:vw,
        TabPrice:'$42',
        Model:'Passat CC',
        Mark:'VW',
        Year:'2008',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Manual',
        Fuel:'Gasoline',


      },

      {
        id:4,
        ClassName:toggleState === 4? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:golf,
        TabPrice:'$25',
        Model:'Golf 6',
        Mark:'VW',
        Year:'2008',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Manual',
        Fuel:'Diesel',


      },


      {
        id:5,
        ClassName:toggleState === 5? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Mercedes,
        TabPrice:'$70',
        Model:'Benz GLK',
        Mark:'Mercedes',
        Year:'2006',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Manual',
        Fuel:'Diesel',


      },

      

      {
        id:6,
        ClassName:toggleState === 6? 'tabcontent active-tabcontent':'tabcontent',
        TabImage:Toyota,
        TabPrice:'$20',
        Model:'Camry',
        Mark:'Toyota',
        Year:'2006',
        Doors:'4/5',
        AC:'Yes',
        Transmission:'Automatic',
        Fuel:'Hybrid',


      },

    ];

    return (
     <div className='tab-section max-w-[1920px]'>
        <h4>Vehicle Models</h4>
        <h1>Our rental fleet</h1>
        <p>Choose from a variety of our amazing vehicles
       to rent for your next adventure or business trip.
       </p>

       <div className='tab-flex'>
       <div className='tab-btns'>

        {btnRays.map((btnRay) => 
        

         <button className={btnRay.ClassName} onClick={btnRay.OnClick}>{btnRay.BtnText}</button>
        //   <button className={btnRay.ClassName} onClick={btnRay.OnClick}>{btnRay.BtnText}</button> 
        //   <button  className={toggleState === 3? 'tablink active-tablink':'tablink'} onClick={() => toggleTab(3)}>Toyota GR Supra</button>
        //  <button  className={toggleState === 4? 'tablink active-tablink':'tablink'} onClick={() => toggleTab(4)}>Ford Mustang</button>
        //  <button  className={toggleState === 5? 'tablink active-tablink':'tablink'} onClick={() => toggleTab(5)}>Lexus 2018</button>  
        //  <button  className={toggleState === 6? 'tablink active-tablink':'tablink'} onClick={() => toggleTab(6)}>Toyota giraffe</button> 

   

        ) }

</div>
        
        


         <div className='tab-contents'>

          {VehicleRays.map((VehicleRay) =>

            <div className={VehicleRay.ClassName}>

                <div className='tabcontent-flex'>
                  <div className='car-image'>
                    <img src={VehicleRay.TabImage}/>
                    </div>
                       <div className='car-details'>
                         <table>
                          <thead> <td><span className='tabprice'>{VehicleRay.TabPrice}</span> / <span>rent per day</span></td> </thead>
                      
                               <tr> <td><span>Model</span> <span className='slash'>|</span> <span>{VehicleRay.Model}</span></td> </tr>
                               <tr> <td><span>Mark</span> <span className='slash'>|</span> <span>{VehicleRay.Mark}</span></td></tr>
                              <tr> <td><span>Year</span> <span className='slash'>|</span> <span>{VehicleRay.Year}</span></td> </tr>
                              <tr> <td><span>Doors</span> <span className='slash'>|</span> <span>{VehicleRay.Doors}</span></td></tr>
                               <tr> <td><span>AC</span> <span className='slash'>|</span> <span>{VehicleRay.AC}</span></td></tr>
                               <tr> <td><span>Transmission</span> <span className='slash'>|</span> <span>{VehicleRay.Transmission}</span></td> </tr>
                             <tr> <td><span>Fuel</span> <span className='slash'>|</span> <span>{VehicleRay.Fuel}</span></td></tr>

                  </table>

                  <button className='rn-btn'>RESERVE NOW</button>
                  </div>

                  </div>

          </div>
          )};

    

            </div>
          </div>


         </div>

        
  )
 }




export default VehicleTab