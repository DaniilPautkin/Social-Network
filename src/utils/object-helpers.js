export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {           //return array if it
        if (u[objPropName] === itemId) {    //see identity of name of 'u' and iteId
            return { ...u, ...newObjProps } //replace old properties with new newObjProps
        }
        return u;
    })
}