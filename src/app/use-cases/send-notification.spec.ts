import {  SendNotification } from "./send-notification";

describe('Enviar notificação',()=>{
    it('verificar se a notificação esta sendo enviada', async () =>{
        const sendNotification = new SendNotification()

        const {notification} = await sendNotification.execute({
            content:"notificação de novo emprego",
            category:"emprego",
            recipienteId:"novo emprego , na empresa que preocupa com o nosso bem estar"
        })

        expect(notification).toBeTruthy();
    })
})