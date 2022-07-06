import { CHANGE_HEADER } from "./actions";

const changeHeader = (value) => {
    return {
        type: CHANGE_HEADER,
        value,
    }
}

export { changeHeader };