import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: number): Promise<Movie> {
    return this.movieRepository.findOne({ where: { id } });
  }

  async rateMovie(id: number, rating: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    movie.ratingCount += 1;
    movie.rating =
      (movie.rating * (movie.ratingCount - 1) + rating) / movie.ratingCount;

    return this.movieRepository.save(movie);
  }

  async sortByRating(): Promise<Movie[]> {
    return this.movieRepository.find({
      order: {
        rating: 'DESC',
      },
    });
  }
}
