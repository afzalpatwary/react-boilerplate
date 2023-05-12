import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"


const useGlobalState = ()=> {
  return useContext(GlobalContext);
}

export default useGlobalState;