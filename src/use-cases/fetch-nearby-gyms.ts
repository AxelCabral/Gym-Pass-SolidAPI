import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface FetchByNearbyUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchByNearbyUseCaseResponse {
  gyms: Gym[]
}

export class FetchByNearbyUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchByNearbyUseCaseRequest): Promise<FetchByNearbyUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return {
      gyms,
    }
  }
}
