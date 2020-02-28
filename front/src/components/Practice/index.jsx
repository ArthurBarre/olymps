import React from 'react';
import './Practice.scss';
import VideoPractice from './PracticeVideo';

export default function Practice() {
  return (
    <div className="general">
      <div className="videoheader">
        <VideoPractice />
      </div>
      <ul className="sports_list">
        <li className="sports_list_li">Athletics</li>
        <li className="sports_list_li">Rowing</li>
        <li className="sports_list_li">basketball armchair</li>
        <li className="sports_list_li">Badminton</li>
        <li className="sports_list_li">Boccia</li>
        <li className="sports_list_li">Canoe</li>
        <li className="sports_list_li">Cycling</li>
        <li className="sports_list_li">Horse riding</li>
        <li className="sports_list_li">Chair fencing</li>
        <li className="sports_list_li">Five-a-side football</li>
        <li className="sports_list_li">Goalball</li>
        <li className="sports_list_li">weight lifting</li>
        <li className="sports_list_li">Judo</li>
        <li className="sports_list_li">Swimming</li>
        <li className="sports_list_li">Paratriathlon</li>
        <li className="sports_list_li">Wheelchair rugby</li>
        <li className="sports_list_li">Taekwondo</li>
        <li className="sports_list_li">Wheelchair tennis</li>
        <li className="sports_list_li">Table tennis</li>
        <li className="sports_list_li">Archery</li>
        <li className="sports_list_li">Sportive shoot</li>
        <li className="sports_list_li">Sitting volleyball</li>
      </ul>
      <h1 className="title">Where can you practice <br /> in paris ?</h1>
      <div className="test_map_button"></div>
      <button className="map_button"></button>
    </div>
  )
}