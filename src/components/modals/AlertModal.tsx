import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components"
import type { RefObject } from "react"

type Props = {
    alertTitle?: string,
    alertDescription?: string
    alertTriggerRef: RefObject<HTMLButtonElement | null>
}

const AlertModal = ({
    alertTitle = 'Default Title',
    alertDescription = 'Default Description',
    alertTriggerRef
}: Props) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger ref={alertTriggerRef} />
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {alertTitle}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {alertDescription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Ok</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertModal
