export function escape(
    target: any,
    propertyKey: String,
    descriptor: PropertyDescriptor)
    {
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: any[]){

            let retorno = this.metodoOriginal.apply(this, args)
            if(typeof retorno === 'string'){ 
               retorno.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno
        }
        return descriptor
    }