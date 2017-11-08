const flatten = (array: any[]): any[] => array.reduce((a: any, b: any) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
export const classNameBuilder = (className: any[]) => flatten(className).join(' ');
export const getEventHandlerFromProps = (props: any): any => {
    var output = {};
    if(typeof props === 'object'){
        for (var key in props){
            if (typeof props[key] === 'function'){
                output[key] = props[key];
            }
        }
    }
    return output;
}
export const getChildren = (props: any): any[] => {
    if(typeof props === 'object'){
        if('children' in props){
            return props.children;
        }else{
            return [];
        }
    }else{
        return [];
    }
}
