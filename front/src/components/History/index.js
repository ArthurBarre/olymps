import React from 'react';
import Data from '../../data.json';
import DateScroll from '../DateScroll';
import Circle from '../Circle/Circle';
import Infos from '../Infos';

class History extends React.Component {

  // const [data, setData] = useState(Data);

  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = { date: 1960 };
  }

  handleDateChange(date) {
    this.setState({ date });
  }

  render() {
    const date = this.state.date;
    return (
      <div className="History">
        <div className="Logo"/>
        <div className="blackLayer">
          <div>
            <DateScroll onDateChange={this.handleDateChange} />
          </div>
          <div>
            <Circle date={date} />
          </div>
          <div>
            <Infos date />
          </div>
        </div>
      </div>
    )
  }
}

export default History;
