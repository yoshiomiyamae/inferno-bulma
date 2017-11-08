import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

interface FooterProps {
  children?: any;
}

export class Footer extends Component<FooterProps, {}> {
  render () {
    return (
      <footer className={classNameBuilder(['footer'])}>
        {this.props.children}
      </footer>
    );
  }
}
