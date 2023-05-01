import React from 'react';
import '../styles/OurTeamStyles.css';
import {team1,team2,team3,team4,team5,team6} from '../assets/index'

const OurTeam = () => {

    const teamwrks = [
        {
            "id":1,
            'teamImg':team4,
            'teamName':'Julian Alvarez',
            'teamRole':'Business Owner',

        },

        {
            "id":2,
            'teamImg':team2,
            'teamName':'Bremo Ogbon ',
            'teamRole':'Manager',

        },

        {
            "id":3,
            'teamImg':team1,
            'teamName':'Presior scarlet',
            'teamRole':'Ass.Manager',

        },
        {
            "id":4,
            'teamImg':team3,
            'teamName':'Anabel SR.',
            'teamRole':'Customer Service',

        },
        {
            "id":5,
            'teamImg':team5,
            'teamName':'Heug yung',
            'teamRole':'Analyst',

        },

        {
            "id":6,
            'teamImg':team6,
            'teamName':'Odukoye Flixin',
            'teamRole':'Software Engineer',

        },
    ];

  return (
    <div className='team-section'>
        <div className='team-con'>

            {teamwrks.map((teamwrk)=>

              <div className='team-box drop-shadow-xl'>
                <div className='team-img'>
                    <img src={teamwrk.teamImg}/>
                </div>

                <h3>{teamwrk.teamName}</h3>
                <p>{teamwrk.teamRole}</p>

            </div>


            )};

          

        </div>
    </div>
  )
}

export default OurTeam