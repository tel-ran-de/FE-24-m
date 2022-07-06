import { INC, DEC } from "./actions";

const increment = () => {
    return {
        type: INC
    }
}

const decrement = () => {
    return {
        type: DEC
    }
}

export { increment, decrement };