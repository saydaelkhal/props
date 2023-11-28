// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    //adding props to Player component
  return (
    <Card style={{ width: '20rem', margin: '70px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title style={{fontFamily: 'Russo One', color:'#36454F'}}>{name}</Card.Title>
        {/* using instyle css */}
        <Card.Text style={{color:'#708090'}}>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
