import type { Meta, StoryObj } from '@storybook/react';
import SimpleHeader from '../simple-header';

const meta: Meta<typeof SimpleHeader> = {
  title: 'atoms/Simple Header',
  component: SimpleHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SimpleHeader>;

export const Title: Story = {
  args: {
    headerTitle: 'Kungfu Panda'
  },
};