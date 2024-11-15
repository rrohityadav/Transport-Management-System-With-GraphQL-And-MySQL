import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTripInput, QueryTripArgs } from './dto/create-trip.input';
import { UpdateTripInput } from './dto/update-trip.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '../vehicles/entities/vehicle.entity';
import { Repository } from 'typeorm';
import { Trip } from './entities/trip.entity';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(Trip)
    private tripsRepository: Repository<Trip>,
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
  ) {}
  async create(createTripInput: CreateTripInput) {
    const { vehicleId, ...tripData } = createTripInput;
    const trip = this.tripsRepository.create(tripData);
    if (vehicleId) {
      trip.vehicle = await this.vehiclesRepository.findOne({
        where: { id: vehicleId },
      });
    }
    return this.tripsRepository.save(trip);
  }

  async findAll() {
    const result = await this.tripsRepository.find({
      relations: ['vehicle'],
    });
    if (result) return result;
    throw new BadRequestException('Trip is not found');
  }

  async findOne(payload: QueryTripArgs) {
    const result = await this.tripsRepository.findOne({
      where: { id: payload.id },
      relations: ['vehicle'],
    });
    if (result) return result;
    throw new BadRequestException('Trip is not found');
  }

  async update(updateTripInput: UpdateTripInput): Promise<number> {
    const { id, vehicleId, ...updateData } = updateTripInput;
    if (vehicleId) {
      const vehicle = await this.vehiclesRepository.findOne({
        where: { id: vehicleId },
      });
      const result = await this.tripsRepository.update(id, {
        ...updateData,
        vehicle: vehicle,
      });
      if (result) return result.affected;
      throw new BadRequestException('Trip is not updated');
    }
    const result = await this.tripsRepository.update(id, updateData);
    if (result) return result.affected;
    throw new BadRequestException('Trip is not updated');
  }

  async remove(id: number): Promise<number> {
    const result = await this.tripsRepository.delete(id);
    if (result) return result.affected;
    throw new BadRequestException('Trip is not found');
  }
}
