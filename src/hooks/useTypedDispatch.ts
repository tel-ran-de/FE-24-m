import { useDispatch } from 'react-redux'
import { RootState } from '../store/reducers'

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';


type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
