
import Input from './components/Input'
import Button from './components/Button'
function App() {

  return (
    <>
    <div className='p-8 grid gap-3'>
      <Input id="username" label="Username" />
      <div className='flex gap-4'>
        <Button size={'md'}  variant={'primary'} >primary</Button>
        <Button size={'md'}  variant={'default'} >default</Button>
        <Button size={'md'}  variant={'outlined'} >outline</Button>
        <Button size={'sm'} variant={'primary'} >small</Button>
      </div>
    </div>
    </>
  )
}

export default App
