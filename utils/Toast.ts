import { ToastAndroid } from "react-native";

function shortToast(msg:string){
    return ToastAndroid.show(msg,ToastAndroid.SHORT)
}
export default shortToast;