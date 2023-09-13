import type { Meta, StoryObj } from '@storybook/react';
import MoviePoster from '../movie-poster';

const meta: Meta<typeof MoviePoster> = {
  title: 'atoms/Movie Poster',
  component: MoviePoster,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MoviePoster>;

export const Poster: Story = {
     args: {
        movieTitle: 'Kungfu Panda',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'
  },
}