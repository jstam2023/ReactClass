// import Viteintro from "./pages/Viteintro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";


import Layout from "./components/Layout.tsx";
// import OnLineStatus from "./components/OnLineStatus.tsx";
// import Timer from "./components/Timer/Timer.tsx";
// import UseEffect1 from "./components/ToDoMine/UseEffect1.tsx";
// import TodoAppMine1 from "./components/ToDoMine/todoAppMine1.tsx";
// import CounterUseEffect from "./components/CounterUseEffect.tsx";
// import TodoAppMine1 from "./components/ToDoMine/todoAppMine1.tsx";
// import CounterUseReducer from "./components/CounterUseReducer.tsx";
// import NameChanger from "./components/NameChanger.tsx";
import Todo from "./components/ToDoNew/Todo.tsx"
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterMine from "./components/CounterMine.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import TodoAppMine1 from "./components/ToDoMine/todoAppMine1.tsx";

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
            {/*<FunctionalComponentWithState/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterMine/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            {/*<CounterWithReducer/>*/}
            <Todo/>
            {/*<NameChanger/>*/}
            {/*<CounterUseEffect/>*/}
            {/*<TodoAppMine1/>*/}
            {/*<CounterUseReducer/>*/}
            {/*<Timer/>*/}
            {/*<OnLineStatus/>*/}
            {/*<UseEffect1/>*/}

        </Layout>

    </>






  )
}

export default App;
