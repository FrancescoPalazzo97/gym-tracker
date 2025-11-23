import { ThemeToggle } from '@/components'

export const Header = () => {
    return (
        <header>
            <nav className='relative my-4 flex items-center justify-center px-4'>
                <div>
                    <h1 className='text-3xl font-bold text-center'>
                        Gym Tracker
                    </h1>
                </div>
                <div className='absolute right-2 md:right-5 top-0'>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
