import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States, Styles} from '../modifiers';

export enum DeleteTypes {
  Anchor,
  Button,
}

interface DeleteProps {
  children?: any;
  size?: Sizes;
  type: DeleteTypes;

  [x: string]: any;
}

export class Delete extends Component<DeleteProps, {}> {
  render () {
    var className = classNameBuilder(['delete',
                                      this.props.size,
                                    ])
    switch(this.props.type){
      case DeleteTypes.Anchor:
        return (
          <a className={className}
             {...getEventHandlerFromProps(this.props)}>
            {this.props.children}
          </a>
        );
      case DeleteTypes.Button:
      default:
        return (
          <button className={className}
                  {...getEventHandlerFromProps(this.props)}
                  >
            {this.props.children}
          </button>
        );
    }
  }
}
