// import Viteintro from "./pages/Viteintro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";


import Layout from "./components/Layout.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {
    // const name  = "John"

  return (
    <>
        {/*<div className="text-center font-bold bg-cyan-600">{name}</div>*/}
        {/*/!*<Viteintro />*!/*/}
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Is a component with Props" description="This is its description"/>*/}
        {/*<ArrowFunctionalComponentWithPropsType title="Is an Interface Component with Props" description="This is the description"/>*/}
        <Layout>
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ClassComponentWithState/>*/}
            <FunctionalComponentWithState/>

        </Layout>

    </>






  )
}

export default App;
