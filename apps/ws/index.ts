import {prisma} from "db/client"

Bun.serve({
    port:8081,
    fetch(req,server){
        if(server.upgrade(req)){
            return;
        }
        return new Response("Upgrade failed",{status:500})
    },
    websocket:{
        async message(ws,message){
            await prisma.user.create({
                data:{
                    username: Math.random().toString(36).substring(2, 15),
                    password: Math.random().toString(36).substring(2, 15)
                }
            })
            ws.send(message);
        }
    }
})