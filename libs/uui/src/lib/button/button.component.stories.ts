import { moduleMetadata, Meta, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Button',
} as Meta;

const Template: Story = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
	label: 'Default',
	style: 'default'
};

export const Success = Template.bind({});
Success.args = {
	label: 'Success',
	style: 'success'
};


export const Error = Template.bind({});
Error.args = {
	label: 'Error',
	style: 'error'
};

export const Rounded = Template.bind({});
Rounded.args = {
	label: 'Success',
	style: 'success',
	rounded: true
};
