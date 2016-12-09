import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    visited: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  };

  state: {
    display: 'static' | 'hover' | 'active';
  };

  static defaultProps = { visited: false };

  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseDown: () => void;

  constructor(props: Props) {
    super(props);
    this.state = {
      display: 'static',
    };

    const setDisplay = display => this.setState({display});

    this.onMouseEnter = () => setDisplay('hover');
    this.onMouseLeave = () => setDisplay('static');
    this.onMouseDown = () => setDisplay('active');
  }

  render() {
    let className = 'button ' + this.state.display;
    if (this.props.visited) {
      className += ' visited';
    }

    return (
      <div className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onClick={this.props.onClick}>
        {this.props.title}
      </div>
    );
  }
}

function renderButton(container: HTMLElement, visited?: boolean) {
  const element = (
    <Button
      title="Click me!"
      visited={visited}
      onClick={() => {
        renderButton(container, true);
      }}
    />
  );
  ReactDOM.render(element, container);
}

export default renderButton;
