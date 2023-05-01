import React from 'react';
import '../styles/ModelsCompStyles.css';
import {model1,model2,model3,model4,model5,model6} from '../assets/index';
import {FaStar,FaCarSide} from 'react-icons/fa'

const ModelsComp = () => {

    const carModels = [
        {
            "id":1,
            modelImg:model1,
            modelName:'Audi A1',
            modelComp:'Audi',
            modelTrans:'Manual',
            modelP:'$42',
            modelD:'per day',
            modelDoor:'4/5',
            modelFuel:'Diesel',


        },
        {
            "id":2,
            modelImg:model2,
            modelName:'Golf 6',
            modelComp:'  VW',
            modelTrans:'Manual',
            modelP:'$39',
            modelD:'per day',
            modelDoor:'4/5',
            modelFuel:'Diesel',


        },

        {
            "id":3,
            modelImg:model3,
            modelName:'Toyota',
            modelComp:'Camry',
            modelTrans:'Manual',
            modelP:'$50',
            modelD:'per day',
            modelDoor:'4/5',
            modelFuel:'Diesel',


        },
        {
            "id":4,
            modelImg:model4,
            modelName:'BMW 320',
            modelComp:'ModernLine',
            modelTrans:'Manual',
            modelP:'$43',
            modelD:'per day',
            modelDoor:'4/5',
            modelFuel:'Diesel',


        },
        {
            "id":5,
            modelImg:model5,
            modelName:'Mercedes',
            modelComp:'Benz GLK',
            modelTrans:'Manual',
            modelP:'$62',
            modelD:'per day',
            modelDoor:'4/5',
            modelFuel:'Diesel',


        },
        {
            "id":6,
            modelImg:model6,
            modelName:'VW Passat',
            modelComp:'CC',
            modelTrans:'Manual',
            modelP:'$23',
            modelD:'per day',
            modelDoor:'4/5',
            modelFuel:'Diesel',


        },
    ]

  return (
    <div className='models-sec'>
        <div className='models-con'>

            {carModels.map((carModel) => 

<div className='model-box'>
<img src={carModel.modelImg}/>
<div className='model-btm'>
    <div className='mdl-left'>
        <h3>{carModel.modelName}</h3>
        <span className='stars'>
            <FaStar style={{color:"orange"}}/>
            <FaStar style={{color:"orange"}}/>
            <FaStar style={{color:"orange"}}/>
            <FaStar style={{color:"orange"}}/>
            <FaStar style={{color:"orange"}}/>

        </span>

        <span className='type'>
            <FaCarSide size={23}/>
            <p>{carModel.modelComp}</p>

        </span>

        <span className='transM'>
            <FaCarSide size={23}/>
            <p>{carModel.modelTrans}</p>

        </span>

    </div>

    <div className='mdl-right'>

    <h3>{carModel.modelP}</h3>
        <p className='perDay'>{carModel.modelD}</p>
        <span className='type'>
           
            <p>{carModel.modelDoor}</p>
            <FaCarSide size={23}/>

        </span>

        <span className='transM'>
           
            <p>{carModel.modelFuel}</p>
            <FaCarSide size={23}/>

        </span>

    </div>

</div>


<button className='mbr-btn'>Book Ride</button>

</div>
            
            )};

           


        </div>

    </div>
  )
}

export default ModelsComp