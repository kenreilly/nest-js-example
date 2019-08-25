import { IsNotEmpty } from 'class-validator';

export class CreateItemDto {

	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	readonly description: string;

	@IsNotEmpty()
	readonly price: number;
}