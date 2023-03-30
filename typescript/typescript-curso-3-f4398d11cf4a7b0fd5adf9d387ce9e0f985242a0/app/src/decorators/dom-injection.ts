export function domInjector (seletor:string){
    return function(target:any, propertyKey:string){

        let elemento = new HTMLElement;
        const getter = function(){
            if(!elemento){
                elemento =<HTMLElement>document.querySelector(seletor)
            }
            // const elemento = document.querySelector(seletor)
            // return elemento
        }

        Object.defineProperty(target, propertyKey,{
            get: getter
        })
    }
}