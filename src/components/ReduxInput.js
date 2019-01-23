import React from 'react';
import { Field } from 'redux-form';
import { Col, FormGroup, Label, Input, FormFeedback, FormText, Tooltip } from 'reactstrap';

class ReduxInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showHelp: false
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.tooltipToggle = this.tooltipToggle.bind(this);
  }

  static defaultProps = {
    handleBlur: () => {},
    onKeyUp: () => {},
    handleFocus: () => {}
  }

  tooltipToggle() {
   this.setState({
     tooltipOpen: !this.state.tooltipOpen
   });
 }

  handleHelp (status) {
    if (this.props.help) {
      this.setState({ showHelp: status });
    }
  }

  handleBlur (e) {
    this.handleHelp(false);
    this.props.handleBlur(e.target.value);
  }

  handleFocus (e) {
    this.handleHelp(true);
    this.props.handleFocus(e.target.value);
  }

  handleKeyUp (e) {
    this.props.onKeyUp(e.target.value);
  }

  render () {
    const {
      size = '4',
      type = 'input',
      invalid = false,
      component = 'input',
      placement = 'top'
    } = this.props;

    const showLabel = !this.props.hideLabel;
    const placeholder = this.props.placeholder || this.props.label;
    const styles = { paddingRight: 5, paddingLeft: 5, ...this.props.styles };
    const errorMessage = this.props.errorMessage || `${this.props.label} is required.`;
    const fieldName = this.props.id || this.props.name.replace(/\./g,'_');

    if (this.props.hideLabel) {
      styles.paddingTop = 15;
    }

    return (
          <Col md={size}
            style={styles}>
            <FormGroup>
              {showLabel && <Label
                              htmlFor={this.props.name}>
                              {this.props.label}{' '}
                              {this.props.tooltip && <i
                                                      className="fa fa-info-circle text-primary"
                                                      id={fieldName}
                                                      />
                              }
                            </Label>
              }
              {this.props.tooltip && <Tooltip
                                      placement={placement}
                                      isOpen={this.state.tooltipOpen}
                                      target={fieldName}
                                      toggle={this.tooltipToggle}>
                                      {this.props.tooltip}
                                    </Tooltip>
              }
              <Input
                type={type}
                tag={Field}
                invalid={invalid}
                component={component}
                placeholder={placeholder}
                validate={this.props.validate}
                name={this.props.name}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                onKeyUp={this.handleKeyUp}
                autoComplete={`new-${this.props.name}`}
              />
              {this.state.showHelp && <FormText>{this.props.help}</FormText>}
              <FormFeedback tooltip>{errorMessage}</FormFeedback>
            </FormGroup>
          </Col>)
  }
}
export default ReduxInput
