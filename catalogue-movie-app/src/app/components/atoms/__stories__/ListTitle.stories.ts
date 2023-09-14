import type { Meta, StoryObj } from '@storybook/react';
import ListTitle from '../list-title';

const meta: Meta<typeof ListTitle> = {
  title: 'atoms/List Title',
  component: ListTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ListTitle>;

export const Title: Story = {
  args: {
    id: '1',
    title: 'List Title',
    onClick: (id) => console.log(`Clicked ${id}`),
  },
};