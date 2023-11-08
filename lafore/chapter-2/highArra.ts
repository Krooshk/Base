class HighArray {
	a : string[];
	nElems: number;
	constructor(max: number){
		this.a = new Array(max);
		this.nElems = 0;
	}

	public find(searchKey: string): Boolean {
		for (var j = 0; j < this.nElems; j ++){
			if (this.a[j] === searchKey){
				break;
			}
		}
		if (j === this.nElems){
			return false;
		} else {
			return true;
		}
	}

	public insert(value: string): void {
		this.a[this.nElems] = value;
		this.nElems++;
	}

	public delete(value: string) : Boolean {
		for (var j = 0; j < this.nElems; j++) {
			if (value === this.a[j]){
				break;
			}
		}

		if (j == this.nElems){
			return false;
		}

		else {
			for (var k = j; k < this.nElems; k++){
				this.a[k] = this.a[k+1];
			}
			this.nElems--;
			return true;
		}
	}

	public display(): void {
		for (let  i = 0; i < this.nElems; i++){
			console.log(this.a[i]+' \n');
		}
	}

}

class HighArrayApp {
	public static main(args: string[]): void {
	
	}
}