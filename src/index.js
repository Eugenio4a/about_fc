import React from 'react';
import ReactDOM from 'react-dom';
import AboutClub from './AboutClub';
import symbol from './images/symbol.png'
import symbolShakhtar from "./images/shakhtar.jpg"
import MagicBall from "./magicBall"



ReactDOM.render(
  <React.StrictMode>
    <AboutClub clubsName='Dynamo' country='Kiev' symbol={symbol} alt="dynamo-symbol"aboutClubClass="aboutClubDynamo" stars="2" wins="500" composition={['Бущан','Рамирес','Сирота','Миколенко']}/>
    <AboutClub clubsName='Shakhtar' country='Doneck' symbol={symbolShakhtar} alt="shakhtar-symbol" aboutClubClass="aboutClubShakhtar" stars="3" wins="600"composition={['Шевченко','Пузанов','Пятов','Трубин']}/>
    <MagicBall/>
  </React.StrictMode>,
  document.getElementById('root')
);
