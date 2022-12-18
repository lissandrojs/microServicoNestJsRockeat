
import { Content } from "./content.service"
import { Notification } from "./notification.service"

const neWContentTeste = new Content("nova baga de emprego")

describe('Notification',()=>{
    it('deve ser posssivel criar uma notificação', ()=>{
        const notification = new Notification({
            recipienteId: "recienpente-id",
            content: new Content("nova vaga aberta"),
            category:"emprego",
            
        })
        expect(notification).toBeTruthy()
    })
    
})