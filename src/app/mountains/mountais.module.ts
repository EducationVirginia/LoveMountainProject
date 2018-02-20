export class MountainsList {
	public title: string;
	public description: string;
	public imagePath: string;
	public country: string;
	public city: string;

	constructor(title: string, desc: string, imagePath: string, count: string, city: string) {
		this.title = title;
		this.description = desc;
		this.imagePath = imagePath;
		this.country = count;
		this.city = city;
	}


}