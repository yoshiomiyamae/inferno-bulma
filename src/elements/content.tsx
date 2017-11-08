import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Sizes} from '../modifiers';


interface ContentProps {
  children?: any;
  size?: Sizes;

  [x: string]: any;
}

export class Content extends Component<ContentProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['content',
                                        this.props.size,
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}
