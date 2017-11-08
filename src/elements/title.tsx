import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';

export enum TitleSizes {
  One = 'is-1',
  Two = 'is-2',
  Three = 'is-3',
  Four = 'is-4',
  Five = 'is-5',
  Six = 'is-6',
}

interface TitleProps {
  children?: any;
  size?: TitleSizes;

  [x: string]: any;
}

export class Title extends Component<TitleProps, {}> {
  render () {
    return (
      <p className={classNameBuilder(['title',
                                      this.props.size,
                                    ])}>
        {this.props.children}
      </p>
    );
  }
}

export class Subtitle extends Component<TitleProps, {}> {
  render () {
    return (
      <p className={classNameBuilder(['subtitle',
                                      this.props.size,
                                    ])}>
        {this.props.children}
      </p>
    );
  }
}
