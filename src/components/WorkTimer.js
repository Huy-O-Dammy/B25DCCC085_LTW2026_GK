import React from 'react';

class WorkTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(function(prevState) {
        return {
          seconds: prevState.seconds + 1
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="timer-box">
        Đã xem: {this.state.seconds} giây
      </div>
    );
  }
}

export default WorkTimer;
