export interface IGenre {
	id: string
	name: string
	slug: string
	description: string
	icon: string
}

export interface IGenreEditInput extends Omit<IGenre, 'id'> {}
