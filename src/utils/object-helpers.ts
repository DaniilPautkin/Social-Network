export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    return items.map((u: any) => {           //return array if it
        if (u[objPropName] === itemId) {    //see identity of name of 'u' and iteId
            return { ...u, ...newObjProps } //replace old properties with new newObjProps
        }
        return u;
    })
}