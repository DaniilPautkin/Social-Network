import React from 'react'
// import { compose } from 'redux'
// import { ComponentType } from 'react'

// function A<T extends { name: string }>(entity: T) {}

// function HOC1<WP extends { brakedance: number }>(
//     WrappedComponent: ComponentType<WP>
// ) {
//     let ContainerComponent: React.FC<Omit<WP, 'brakedance'>> = (props) => {
//         return <WrappedComponent {...props} brakedance={10} />
//     }
//     return ContainerComponent
// }

// type C1PT = {
//     name: string
//     brakedance: number
// }

// const C1: React.FC<C1PT> = (props) => {
//     return <div>{props.name}</div>
// }

// const C1Container = HOC1(C1)

// const App = () => {
//     return <C1Container name={'1'} />
// }

// // const f1 = (a: number): any => '1'
// // const f2 = (a: string): any => 12

// // let result = compose(
// //     f2,
// //     f1
// // )(18) // 18 goes to f1 than f1 result goes to f2
