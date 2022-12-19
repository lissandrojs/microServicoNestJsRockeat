import { InMemoryNotificationsRepository } from "@test/in-memory-notification-repositories";
import {  SendNotification } from "./send-notification";


describe('Enviar notificação',()=>{
    it('verificar se a notificação esta sendo enviada', async () =>{
       
        const notificationRepositories = new InMemoryNotificationsRepository()
        const sendNotification = new SendNotification(notificationRepositories)

        const {notification} = await sendNotification.execute({
            content:"notificação de novo emprego",
            category:"emprego",
            recipienteId:"novo emprego , na empresa que preocupa com o nosso bem estar"
        })

        expect(notificationRepositories.notifications).toHaveLength(1);
        expect(notificationRepositories.notifications[0]).toEqual(notification)
    })
})