import { useSelector } from "react-redux";
import { TypedUseSelectorHook,useDispatch } from "react-redux";
import { AppDispatch, RootSttate } from "./store";





export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootSttate> = useSelector;
