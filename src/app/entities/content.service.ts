export class Content {
    private readonly content: string;

    get value():string{
        return this.content;
    }

    private validateContentLength(content:string):boolean{
        return content.length >=5 && content.length <= 256;
    }

    constructor(content:string){

        const isContentLengthValid = this.validateContentLength(content)

        if(!isContentLengthValid){
            throw new Error("erro pois o Tamanho do contendo e invalido")
        }

        this.content = content;
    }
}