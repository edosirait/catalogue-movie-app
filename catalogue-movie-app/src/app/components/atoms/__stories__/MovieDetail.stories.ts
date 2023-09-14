import type { Meta, StoryObj } from '@storybook/react';
import MovieDetail from '../movie-detail';

const meta: Meta<typeof MovieDetail> = {
  title: 'atoms/Movie Detail',
  component: MovieDetail,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MovieDetail>;

export const MovieDetails: Story = {
    args: {
        label: 'Test Label',
        value: 'Test Value'
  },
}