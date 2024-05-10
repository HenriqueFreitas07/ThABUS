import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



function AlertError(Message: string, title = "Oops...") {
    MySwal.fire({
        icon: 'error',
        title: title,
        text: Message,
        heightAuto: false
    })
}
function AlertInfo(Message: string, title = "Info") {
    MySwal.fire({
        icon: 'info',
        title: title,
        text: Message,
        heightAuto: false
    })
}
function AlertSuccess(Message: string, title = "Yay!") {
    MySwal.fire({
        icon: 'success',
        title: title,
        text: Message,
        heightAuto: false
    })
}

export { AlertError, AlertInfo, AlertSuccess }