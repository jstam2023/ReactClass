// import Viteintro from "./pages/Viteintro.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import NameChangerPage from "./pages/NameChangerPage.tsx";
// import Layout from "./components/Layout.tsx";
// import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import Product from "@/pages/Product.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import NameChangerPage from "./pages/NameChangerPage.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
// import UserPage from "./pages/UserPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
// import UncontrolledInput from "./components/UncontrolledInput.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
// import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook.tsx";
// import ProductList from "@/pages/ProductList.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import OnLineStatus from "./components/OnLineStatus.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProductList from "@/pages/ProductList.tsx";
import {AuthProvider} from "@/context/AuthProvider.tsx";
import LoginPage from "@/pages/LoginPage.tsx";

// import FocusInput from "./components/FocusInput.tsx";


// import Layout from "./components/Layout.tsx";
// import OnLineStatus from "./components/OnLineStatus.tsx";
// import Timer from "./components/Timer/Timer.tsx";
// import UseEffect1 from "./components/ToDoMine/UseEffect1.tsx";
// import TodoAppMine1 from "./components/ToDoMine/todoAppMine1.tsx";
// import CounterUseEffect from "./components/CounterUseEffect.tsx";
// import TodoAppMine1 from "./components/ToDoMine/todoAppMine1.tsx";
// import CounterUseReducer from "./components/CounterUseReducer.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import Todo from "./components/ToDoNew/Todo.tsx"
// import ControlledInput from "./components/ControlledInput.tsx";
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
        {/*<Layout>*/}
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
            {/*<Todo/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterUseEffect/>*/}
            {/*<TodoAppMine1/>*/}
            {/*<CounterUseReducer/>*/}
            {/*<Timer/>*/}
            {/*<OnLineStatus/>*/}
            {/*<UseEffect1/>*/}
            {/*<Todo/>*/}
            {/*<ControlledInput/>*/}

        {/*</Layout>*/}
        <AuthProvider>


        <BrowserRouter>
                <Routes>

                    <Route path="products" element={<RouterLayout/>} >
                        <Route path="login" element={<LoginPage/>}/>
                        <Route index element={<ProductList/>} />
                        <Route path="product" element={<Product/>} />

                        {/*<Route path="new" element={<Product/>}/>*/}
                        {/*<Route path=":productId" element={<Product/>}/>*/}
        {/*            <Route element={<RouterLayout />}>*/}
        {/*                /!*<Route index element={<HomePage />}/>*!/*/}
        {/*                /!*<Route index element={<FocusInput />}/>*!/*/}
        {/*                /!*<Route index element={<UncontrolledInput />}/>*!/*/}
        {/*                <Route index element={<ProductList />}/>*/}


        {/*                /!**!/*/}
        {/*            </Route>*/}
        {/*/!**!/*/}
        {/*            <Route path="examples" element={<RouterExamplesLayout/>}>*/}
        {/*            /!*<Route path="examples?" element={<RouterExamplesLayout/>}>*!/*/}
        {/*                <Route index element={<ExamplesPage />}/>*/}
        {/*                <Route path="name-changer" element={<NameChangerPage/>}/>*/}
        {/*                <Route path="auto-redirect" element={<AutoRedirectPage/>}/>*/}
        {/*            </Route>*/}
        {/*            <Route path="users/:userId" element={<UserPage/>}/>*/}
        {/*            <Route path="users" element={<UserPage/>}/>*/}
                    <Route path="*" element={<NotFoundPage/>}/>
        {/*/!**!/*/}
        {/**/}
                    </Route>
                </Routes>
        {/**/}
        </BrowserRouter>

        </AuthProvider>


    </>






  )
}

export default App;
