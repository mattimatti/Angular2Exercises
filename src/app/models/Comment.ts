
// importintg the faker lib
declare var faker: any;


let seed = 1;

function generateSeed ():number{
	return seed++;
}


/**
 * 
 */
export class Comment {

	id:number;
	
	text:string;
	
	active:boolean;


	constructor(){
		this.active = true;
	}


	/**
	 * [toggle description]
	 */
	toggle(){
		console.log('toggle', this.active );
		this.active = !this.active;
	}


	static createNew() {
		const c = new Comment();
		c.id = generateSeed();
		c.text = faker.lorem.paragraphs(1);
		return c;
	}


}