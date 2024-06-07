import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Movie> {
    const movie = await this.movieService.findOne(id);
    if (!movie) {
      throw new NotFoundException('Movie does not exists');
    }
    return movie;
  }

  @Patch(':id/rate')
  async rateMovie(
    @Param('id') id: number,
    @Body('rating') rating: number,
  ): Promise<Movie> {
    return this.movieService.rateMovie(id, rating);
  }

  @Get('/sorted/rating')
  async movieSortedByRating(): Promise<Movie[]> {
    return this.movieService.sortByRating();
  }

  @Get('genre/:genre')
  async findByGenre(@Param('genre') genre: string): Promise<Movie[]> {
    return this.movieService.filterByGenre(genre);
  }
}
