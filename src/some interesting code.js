// const MyComponent = ({h1Text, h2Text}) =>
// <>
//     <h1>
//         {h1Text}
//     </h1>
//     <h2>
//         {h2Text}
//     </h2>
// </>


// const Copy = (props) =>
// <MyComponent {...props} h1Text="AAAAAA" />

// const propsBind = defaultProps => component =>
//     props => {
//         const C = component;
//         return (
//             <C {...defaultProps} {...props}/>
//         )
//     }

// const h1TextBind = propsBind({h1Text: 'OTHER COPY'})

// const OtherCopy = h1TextBind(MyComponent)