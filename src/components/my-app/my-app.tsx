import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  shadow: true
})
export class MyApp {

  render() {
    return (
      <div>
        <h4>item-start</h4>
        <slot name="item-start">item-start fallback</slot>
        <hr />
        <h4>slot</h4>
        <slot>slot fallback</slot>
        <hr />
        <h4>item-end</h4>
        <slot name="item-end">item-end fallback</slot>
        <hr />
      </div>
    );
  }
}
