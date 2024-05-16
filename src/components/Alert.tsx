import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



function AlertError(Message: string, title = "Oops...",callBack?:()=>void) {
    MySwal.fire({
        icon: 'error',
        title: title,
        text: Message,
        heightAuto: false,
        didClose:callBack
    })
}
function AlertInfo(Message: string, title = "Info",callBack?:()=>void) {
    MySwal.fire({
        icon: 'info',
        title: title,
        text: Message,
        heightAuto: false,
        didClose:callBack
    })
}
function AlertSuccess(Message: string, title = "Yay!",callBack?:()=>void) {
    MySwal.fire({
        icon: 'success',
        title: title,
        text: Message,
        heightAuto: false,
        didClose:callBack
    })
}
function ToastError(Message: string, title = "Oops...") {
    MySwal.fire({
        icon: 'error',
        title: title,
        text: Message,
        heightAuto: false,
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
}
function ToastInfo(Message: string, title = "Info") {
    MySwal.fire({
        icon: 'info',
        title: title,
        text: Message,
        heightAuto: false,
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
}
function ToastSuccess(Message: string, title = "Yay!") {
    MySwal.fire({
        icon: 'success',
        title: title,
        text: Message,
        heightAuto: false,
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
}

export { AlertError, AlertInfo, AlertSuccess, ToastError, ToastInfo, ToastSuccess }