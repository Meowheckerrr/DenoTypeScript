# Deno Web develop

###### tags: `web` `deno`

> [TOC]


## Project 

[Deno crash course](https://hackmd.io/@meowhecker/B1Mus3ZGo)

[Deno & PostgreSQL](/dhFLqdE7SpS25rV1KD88BQ)




# Environment Configuration

[Install Link](https://deno.land/#installation)


## Run code command
```
deno run <fileName>
```


# Type script

- Add type to JS
- Catch error before execution

Practice 

```typescript=

//explicit type 

    // let money = 1000
    // money ="meowhecker"
    // console.log(money)

//implicit type 

    // let money:number
    // money =1000
    // console.log(money)

//function 
    // explicit
    function add(a, b){  //a:any , b:any
        return a+b;
    }

    console.log(add("1","2"));

// null and undefind 

    function mod1(a:number){
        if(a%2===0){
            return "meow"
        }
        return "null"
    }

    const value = mod1(4)

    console.log(value.substring(0))



// Array 
    let  meow = ["meow", "hecker", 'test', 12, true]
    meow.push(123)
    for (let i =0;i<meow.length;i++){
        console.log(meow[i])
    }
```

## Interface 

Type scribe allow types to be defined separately from the variable that use them 

Interface allows types to be easily shared between different variable/object 

### practice 


```typescript=

// without interface 
    // let rootUser:{
    //     name: string,
    //     age: number,
    //     [key: string]: any
    // };


    // rootUser ={
    //     name: 'meowhecker',
    //     age :18,
    //     meowmeow:"meow"
    // }

    // console.log(rootUser)


// --------------------------------------------------------------------------------------------------

// use interface 

interface rootUser{
    name: string,
    age: 20,
    [key:string]: any, //use key:string, you could type key names whatever you want 
    hello(): string
}

let rootUser = {
    name: 'meowhecker',
    readonly: 18,
    meowmeow: "meow",
    hello(){
        return `hello ${this.name}`
    }
}

console.group(rootUser)
```

## Class 


### Member types

The member of the class are types using type annotations

```typescript
class User {
    name:string
    password:number
}

const root = new User()
root.name="meowhecker"
root.password=123
console.log(root.name); 
console.log(root.password); 

```
### Member visibility

public : (default) allows access to the class member from anywhere
private : only access to the class from whine class 
protect : allows access to class member from itself and any class inherit it  

```typescript=
// Member Visibility
    class User {
    
        private userName:string
        public constructor(name:string){
            this.userName = name

        }
        public showUserName():string{
            return this.userName
        }
    }
    const user1 = new User("meowhecker")
    console.log(user1.showUserName())

```

The `this` keyword in the class usually refer to the instance of the class 

### Parameter property

Define the class member in constructor, by adding a visibility modifier to the parameter.



```typescript=
// Parameter property 
    class User{
        
        public constructor(private name:string){
            this.name = name
        }
        public showUserName():string{
            return this.name
        }
    }
    const user2 = new User("meow")
    console.log(user2.showUserName())
```

## Arrow function 

Arrow function allow us to write shortest function syntax. 

```typescript
//Arrow function 


const greeting = () =>{
    console.log("Hello")
}

const add = (a:number,b:number) => {
    console.log(a+b)
}


greeting()

add(10,15)
```

![](https://i.imgur.com/oCGdHQ1.png)



# Course links 

[Deno Course](https://www.youtube.com/watch?v=TQUy8ENesGY&t=1500s)


Cloud host 

linode 


Domain name Register 
https://admin.gandi.net/
