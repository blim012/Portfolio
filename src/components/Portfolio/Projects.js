import React from "react";
import Project from "./Project";
import CrelloImage from '../../static/crello.png';
import MarketMogImage from '../../static/marketmog.png';
import BattleShipImage from '../../static/battleship.png';
import RubyChessImage from '../../static/ruby-chess.png';

const Projects = (props) => {
  return (
    <section id="projects">
      <Project imageSrc={CrelloImage} />
      <Project imageSrc={MarketMogImage} />
      <Project imageSrc={BattleShipImage} />
      <Project imageSrc={RubyChessImage} />
    </section>
  );
};

export default Projects;
