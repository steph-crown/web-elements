import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class WebButton {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Prop() disabled: boolean = false;

  @Prop() text: string;

  render() {
    return (
      <button type={this.type} disabled={this.disabled}>
        {this.text}
      </button>
    );
  }
}
