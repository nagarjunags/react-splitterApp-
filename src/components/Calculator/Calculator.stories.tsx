import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Calculator } from './Calculator';


const meta: Meta<typeof Calculator > = {
  title: 'App/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
  },
   tags: ['autodocs'],

};

export default meta;


type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
};

