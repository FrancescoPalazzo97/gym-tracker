import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Label
} from '@/components'
import { createId } from '@/lib';
import { RoutineSchema } from '@/schemas';
import { store } from '@/store';
import type { Routine } from '@/types';
import { PlusIcon } from 'lucide-react';
import { type FormEvent, useRef } from 'react';

const AddRoutineModal = () => {

    const addRoutine = store((s) => s.addRoutine);

    const inputRef = useRef<HTMLInputElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name: string = inputRef.current?.value || '';
        const newRoutine: Routine = {
            id: createId(),
            name,
            exercisesIds: [],
            createdAt: new Date(),
            updatedAt: new Date()
        };
        const validation = RoutineSchema.safeParse(newRoutine);
        if (!validation.success) {
            console.error('Errore nella validazione della nuova routine!');
            return;
        };
        addRoutine(validation.data);
        closeRef.current?.click();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="my-4 "
                    size="lg"
                >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Aggiungi Routine
                </Button>
            </DialogTrigger>
            <DialogContent>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col space-y-4'
                >
                    <DialogHeader>
                        <DialogTitle>Aggiungi una nuova routine</DialogTitle>
                        <DialogDescription>
                            Usa questa modale per creare nuove routine
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-3">
                        <Label htmlFor="routine-name">Titolo routine</Label>
                        <Input id="routine-name" name="name" ref={inputRef} />
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                            >
                                Chiudi
                            </Button>
                        </DialogClose>
                        <Button type='submit'>Salva2</Button>
                        <DialogClose ref={closeRef} />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddRoutineModal
