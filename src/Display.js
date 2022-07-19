import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

function Display() {
  const [data, setdata] = useState([])
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    const fetchdata = () => {
      fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json').then(response => response.json()).then(json => {
        setdata(json)
      })
    }
    fetchdata();
  }, [])
const style={
  backgroundImage:"url('https://img.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg?w=2000')",
  opacity:'0.9'

}
  return (
    <div className='App' style={style}>
      <h1 style={{color:'orange',textAlign:'center'}}>ALL GAMES</h1>
      <div className="container">
        <div className="row">
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />

          {
            data.map((item) => {
              return (


                <div className="col-4">

                  <div className="card" style={{ width: "18rem", color: 'white', backgroundColor: 'black', margin: '5px'}}>
                    <div className="card-body">
                      <h5 className="card-title"  style={{color:'yellow'}}>Title : {item.title}</h5>
                      <h5 className="card-title">Platform : {item.platform}</h5>
                      <h5 className="card-title"  style={{color:'green'}}>Score : {item.score}</h5>
                      <h5 className="card-text">Genre : {item.genre}</h5>
                      <h5 className="card-text" style={{color:'blue'}}>Editors-choice : {item.editors_choice}</h5>
                    </div>
                  </div>

                </div>
              );
            })


          }


        </div>
      </div>
  
    </div>
  )
}

export default Display;