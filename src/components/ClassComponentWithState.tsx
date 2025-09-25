import {Component} from "react";

type State = {
    count:number;
}

class ClassComponentWithState extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        }
    }


        increase = () => {
            this.setState({count: this.state.count + 1});
        }

        decrease = () => {
            if (this.state.count > 0) {
                this.setState({count: this.state.count - 1});
            }
        }
        reset = () => {
            this.setState({count: 0});
        }


        render()
        {
            return (
                <>
                    <div className="space-y-4 pt-12">
                        <h1 className="text-center py-2 font-bold text-xl">Count is {this.state.count}</h1>
                        <div className="text-center">
                            <button onClick={this.increase}
                                    className="hover:text-green-500 bg-black text-white rounded-xl py-2 px-4 mx-2">Increase
                            </button>
                            <button onClick={this.decrease}
                                    className="hover:text-red-500 bg-black text-white rounded-xl py-2 px-4 mx-2">Decrease
                            </button>
                            <button onClick={this.reset}
                                    className="hover:text-blue-500 bg-black text-white rounded-xl py-2 px-4 mx-2">Reset
                            </button>
                        </div>
                    </div>

                </>
            )

        }

    }


export default ClassComponentWithState;