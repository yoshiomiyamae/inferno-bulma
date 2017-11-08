import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder} from '../common';
import {Colors, Sizes} from '../modifiers';

export enum TagTypes {
  Anchor,
  Span,
}

interface TagsProps {
  children?: any;
  hasAdons?: boolean;

  [x: string]: any;
}

interface TagProps {
  children?: any;
  color?: Colors;
  size?: Sizes;
  rounded?: boolean;
  delete?: boolean;
  type?: TagTypes;

  [x: string]: any;
}

export class Tags extends Component<TagsProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['tags',
                                        (this.props.hasAdons ? 'has-addons' : ''),
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class Tag extends Component<TagProps, {}> {
  render () {
    var className = classNameBuilder(['tag',
                                      this.props.color,
                                      this.props.size,
                                      (this.props.rounded ? 'is-rounded' : ''),
                                      (this.props.delete ? 'is-delete' : ''),
                                    ]);
    switch(this.props.type){
      case TagTypes.Anchor:
        return (
          <a className={className}>
            {this.props.children}
          </a>
        );
      case TagTypes.Span:
      default:
        return (
          <span className={className}>
            {this.props.children}
          </span>
        );
    }
  }
}
