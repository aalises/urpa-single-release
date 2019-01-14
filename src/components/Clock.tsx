import * as React from 'react';
import { releaseDate} from "../utils/data"
import { dateDiff } from "../utils/dateDiff"

interface ClockState {
    time: string
}

interface ClockProps {
    date: Date,
    updateInterval?: number
}

export default class Clock extends React.Component<ClockProps, ClockState> {

    public static defaultProps: Partial<ClockProps> = { 
        updateInterval: 1000 //Updates each second
    }

    state = {
        time: dateDiff(releaseDate)
    }

    componentDidMount(){
        setInterval(() => this.setTime(),this.props.updateInterval);
    }

    setTime(){ 
        this.setState({time: dateDiff(releaseDate)}); 
    }

    render() {
      const { days, minutes, hours, seconds } = this.state.time;

      return <div className="columns" style={{paddingTop: '1.3rem'}}>
        <div className="box column">
            <div className="title is-4">{`${days}d`}</div>
        </div>
        <div className="box column">
            <div className="title is-4">{`${hours}h`}</div>
        </div>
        <div className="box column">
            <div className="title is-4">{`${minutes}m`}</div>
        </div>
        <div className="box column" style={{marginBottom: '1.5rem'}}>
            <div className="title is-4">{`${seconds}s`}</div>
        </div>
      </div> 
    }
  }
