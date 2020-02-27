import React from 'react';
import './Practice.scss';
import VideoHeader from '../Videos/Video';

export default function Practice() {
  return (
    <div className="general">
      <div className="videoheader">
        <VideoHeader />
      </div>
      <ul className="sports_list">
        <li className="sports_list_li">Armchair basket</li>
        <li className="sports_list_li">Boccia</li>
        <li className="sports_list_li">Blind Football</li>
        <li className="sports_list_li">Goalball</li>
        <li className="sports_list_li">Para athletics</li>
        <li className="sports_list_li">Para rowing</li>
        <li className="sports_list_li">Para badminton</li>
        <li className="sports_list_li">Para canoe</li>
        <li className="sports_list_li">Para cycling</li>
        <li className="sports_list_li">Para horse riding</li>
        <li className="sports_list_li">Para fencing</li>
        <li className="sports_list_li">Para weightlifting</li>
        <li className="sports_list_li">Para judo</li>
        <li className="sports_list_li">Para swimming</li>
        <li className="sports_list_li">Para taekwondo</li>
        <li className="sports_list_li">Para table tennis</li>
        <li className="sports_list_li">Para archery</li>
        <li className="sports_list_li">Para shooting sport</li>
        <li className="sports_list_li">Para triathlon</li>
        <li className="sports_list_li">Armchair rugby</li>
        <li className="sports_list_li">Chair tennis</li>
        <li className="sports_list_li">Sitting volleyball</li>
      </ul>
      <h1 className="title">Where can you practice in paris ?</h1>
      <div className="test_map_button"></div>
      <button className="map_button"></button>
    </div>
  )
}