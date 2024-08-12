import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectTip } from './SelectTip';


const meta: Meta<typeof SelectTip > = {
  title: 'App/SelectTip',
  component: SelectTip,
  parameters: {
    layout: 'centered',
  },
   tags: ['autodocs'],

};

export default meta;


type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
};

