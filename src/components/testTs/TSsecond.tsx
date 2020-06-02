// import { compose } from 'redux'
import React, { ComponentType } from 'react'
// import { connect } from 'react-redux'
// import { withRouter, RouteComponentProps } from 'react-router-dom'

// // type PropsType = {
// //     hiphop: number
// // }

// function HipHopHOC<WP extends { hiphop: number }>( //HHHOC ожидает получить компоненту которая экстендит "хипхоп"
//     WrappedComponent: ComponentType<WP> // и получает компоненту типа  ComponentType<WP>
// ) {
//     return (props: Omit<WP, 'hiphop'>) => {
//         //  в пропсах мы забираем хипхоп так как они не должны быть получены, а присвоены HHHOC
//         return <WrappedComponent {...(props as WP)} hiphop={99} /> //  возвращаем компоненту с вставленным "хипхоп" ом
//     }
// }

// function DanceHOC<WP extends { dance: number }>(
//     WrappedComponent: ComponentType<WP>
// ) {
//     return (props: Omit<WP, 'dance'>) => {
//         return <WrappedComponent {...(props as WP)} hiphop={99} />
//     }
// }

// type C1PropsType = {
//     title: string
//     hiphop: number
//     dance: number
// }

// type PropsMapType = {
//     hiphop: number
//     dance: number
// }

// type C1ParamsType = {
//     match: string
// }

// type C1Type = React.FC<
//     C1PropsType & PropsMapType & RouteComponentProps<C1ParamsType>
// >

// const C1: React.FC<C1PropsType & RouteComponentProps<C1ParamsType>> = (
//     props
// ) => {
//     return <div>{props.title}</div>
// }

// const C1Container = HipHopHOC(C1)
// const C2Container = DanceHOC(C1Container)

// type FromHiphopHOCPropsType = Omit<C1PropsType, 'hiphop'>
// type FromHiphopHOCType = ComponentType<FromHiphopHOCPropsType>
// type FromDanceHOCType = ComponentType<Omit<FromHiphopHOCPropsType, 'dance'>>

// const SuperHoc = compose<
//     FromHiphopHOCType,
//     ComponentType<C1PropsType>,
//     FromDanceHOCType
// >(DanceHOC, HipHopHOC)

// const C1Container2 = SuperHoc(C1)

// // const App1 = () => {
// //     return <C2Container title="" />
// // }

// const mstp = (state: any) => {
//     return {
//         title: '1',
//         hiphop: '1',
//         dance: 1,
//     }
// }

// const C1_connect = connect(mstp)(C1)
// const ConnectedWithRouterC1 = withRouter(C1_connect)

// const ConnectedWithRouter = compose<ComponentType<C1PropsType>>(
//     withRouter,
//     connect(mstp),
//     HipHopHOC
// )(C1)

// const App2 = () => {
//     return (
//         <div>
//             {/* <C1_connect title="" match={1} /> */}
//             <ConnectedWithRouter title="" />
//         </div>
//     )
// }

// const f1 = (a: number) => 12
// const f2 = (b: number) => 21

// compose(f2, f1)(18)
