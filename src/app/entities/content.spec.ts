import { Content } from "./content.service"

describe('Notification content',()=>{
    it('deve ser posssivel criar o conteudo da notificação', ()=>{
        const content = new Content('Voce recebeu uma solicitação de amizade')
        expect(content).toBeTruthy()
    })
    
    it('nao e possivel cria conteudo de notificação menor que 5 caracteres',()=>{
        expect(()=> new Content("oi")).toThrow()
    })
    
    it('nao e possivel cria conteudo de notificação maior que 256 caracteres',()=>{
        expect(()=> new Content("o".repeat(257))).toThrow()
    })
})