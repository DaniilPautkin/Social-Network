import { compose } from "redux";

function HOC1 = ()

const f1 = (a: number): any => '1'
const f2 = (a: string): any => 12


let result = compose(
    f2,
    f1
)(18) // 18 goes to f1 than f1 result goes to f2
