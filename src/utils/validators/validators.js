export const required = value => {
    if(value)return undefined
    return 'field is required';

}


const maxLength = (maxLength) => value => {
    if(value) {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    }
    return undefined;

}
export const maxLength10 = maxLength(10);
export const maxLength50 = maxLength(50);
export const maxLength500 = maxLength(500);
