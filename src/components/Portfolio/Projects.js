import React from "react";
import Project from "./Project";
import CrelloImage from '../../static/crello.png';
import MarketMogImage from '../../static/marketmog.png';
import BattleShipImage from '../../static/battleship.png';
import RubyChessImage from '../../static/ruby-chess.png';

const Projects = (props) => {
  const crelloDesc = 
    "A full-stack recreation of Trello, a Kanban-based workflow management tool. " +
    "Provides real-time board updates between users, and has fully draggable " +
    "tickets and columns.";

  const rubyChessDesc = 
    "A game of Chess written in Ruby. Utilizes bitboards for representation of the gameboard. " + 
    'Testing of the game logic was done using RSpec.';

  const battleshipDesc =
    "A browser-based version of battleship against an AI, written in Javascript. " +
    "Utilizes bitboards for representation of the gameboard";

  const marketMogDesc = 
    "A sales data visualizer for the popular MMORPG Final Fantasy XIV. " +
    "Provides visualizations of the sales data within the past week for in-game items, " +
    "and displays the prices for items in a given world on the in-game marketboard.";

  return (
    <section id="projects">
      <Project 
        imageSrc={CrelloImage}
        projectName="Crello"
        description={crelloDesc}
        demoLink="https://crello-kanban.herokuapp.com/"
        githubLink="https://github.com/blim012/Crello"
      />
      <Project 
        imageSrc={MarketMogImage}
        projectName="Market Mog"
        description={marketMogDesc}
        demoLink="https://blim012.github.io/market-mog/"
        githubLink="https://github.com/blim012/market-mog"
      />
      <Project 
        imageSrc={BattleShipImage}
        projectName="Battleship"
        description={battleshipDesc}
        demoLink="https://blim012.github.io/battleship-js/"
        githubLink="https://github.com/blim012/battleship-js"
      />
      <Project 
        imageSrc={RubyChessImage}
        projectName="Ruby Chess"
        description={rubyChessDesc}
        demoLink="https://replit.com/@blim012/Ruby-Chess#.replit"
        githubLink="https://github.com/blim012/Ruby-Chess"
      />
    </section>
  );
};

export default Projects;
