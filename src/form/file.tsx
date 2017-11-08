import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States, Alignments} from '../modifiers';
import {Icon} from '../elements';

interface FileUploadProps {
  color?: Colors;
  size?: Sizes;
  state?: States;
  name?: string;
  icon?: any;
  hasName?: boolean;
  alignment?: Alignments;
  fullwidth?: boolean;
  boxed?: boolean;

  [x: string]: any;
}

export class FileUpload extends Component<FileUploadProps, {}> {
  render () {
    return (
      <div className={classNameBuilder(['file',
                                        (this.props.hasName ? 'has-name' : ''),
                                        this.props.alignment,
                                        (this.props.fullwidth ? 'is-fullwidth' : ''),
                                        (this.props.boxed ? 'is-boxed' : ''),
                                        this.props.color,
                                        this.props.size,
                                        this.props.state,
                                      ])}>
        <label className={classNameBuilder(['file-label'])}>
          <input className={classNameBuilder(['file-input'])}
                 type="file"
                 name={this.props.name}
                 {...getEventHandlerFromProps(this.props)}
                 />
          {(() => {
            if (this.props.icon){
              return (
                <span className={classNameBuilder(['file-cta'])}>
                  <Icon>
                    {this.props.icon}
                  </Icon>
                </span>
              );
            }
          })()}
          <span className={classNameBuilder(['file-label'])}>
            {this.props.children}
          </span>
        </label>
      </div>
    );
  }
}
