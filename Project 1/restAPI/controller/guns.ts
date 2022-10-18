import {v4} from "https://deno.land/std/uuid/mod.ts"
import {Guns} from "../type.ts"


let guns:Guns[] = [
    {
        id:"1",
        name: "ak47",
        description:"Refle",
        price:2500
    }
    ,
    {
        id:"2",
        name: "Kar-98",
        description:"Sniper Refle",
        price:4500
    }
    ,
    {
        id:"3",
        name: "MP5",
        description:"summachine gun",
        price:1500
    }
]

//Controller function 

// GET Guns 

    const getGuns = ({response}:{response:any}) =>{
        response.body={
            success:true,
            data:guns
        }

    }


//Get single Gun 

    const getGun = ({response, params}:{response:any, params:{id:string}}) =>{
        const gun:Guns | undefined = guns.find(p => p.id === params.id)


        //if gun was found
            if(gun){
                response.status = 200
                response.body = {
                    success: true,
                    data: gun
                }
            } else{
                response.status =404,
                response.body = {
                    success: false,
                    msg: "no message found"
                }
            }
    }

//Add a Gun 

    const  addGun = async({response, request}:{response:any, request:any}) =>{
        // response.body="Post request"
        const body = await request.body()   //body method() which returns a promis we need to use await 
        
         if(!request.hasBody){
            response.status=400
            response.body={
                success: false,
                msg: "No data"
            }

        }else{
            const gun: Guns = body.value // the value we're going to assign to this variable(json)
            //create the ID, because you don't create the ID from the client, it get added by the database 
                // gun.id=v4.generate()
            //so once we have the gun constructed, we'll go ahead and take the product array and push on to it,
                guns.push(gun)

                response.status= 201 //201 means everything went okay and something got create 
                response.body ={
                    success: true,
                    data: gun 
                }
        }

    }

//Update a Gun 

    const updateGun = async({params, request, response}:{params:{id:string}, request:any, response:any}) =>{
        const gun:Guns | undefined = guns.find(p => p.id === params.id) //getting the gun by params ID

          //if gun was found
          if(gun){
                const body = await request.body()
                
                const updateData : {name?:string; description?:string; price?:number} =body.value

                // using map to updata 
                guns = guns.map(p=> p.id === params.id ? {...p,...updateData}:p )

                response.status = 200
                response.body={
                    success:true,
                    data: guns
                }
                
        } else{
            response.status =404
            response.body = {
                success: false,
                msg: "no message found"
            }
        }

        

    }

//Delete a Gun 

    const deleteGun = ({params,response}:{params:{id:string},response:any}) =>{
        guns = guns.filter(p => p.id !== params.id)
        response.body = {
            success: true,
            msg:"guns removed"
        }
    }



    export {getGuns,getGun,addGun,updateGun,deleteGun}

