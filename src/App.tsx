import Alert from "./components/ui/Alert/Alert"
import { AlertTriangle, BellRing, CheckCheck, Info } from 'lucide-react';
import { Ban } from 'lucide-react';
import './App.css'
const App = () => {
  return (
    <div className="app">
      <Alert title="Upgrade your plan" type="default" icon = {<BellRing/>}>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate numquam provident quasi consectetur, voluptas, magni ratione omnis cumque cum iusto rem, assumenda deserunt expedita. <a href="/">Doloribus quia</a> dolorum similique commodi?
        </p>
      </Alert>
      <Alert title="Something went worng" type="danger" icon = {<Ban size={20}/>}  discription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus error totam nesciunt incidunt omnis, suscipit culpa inventore molestias? Beatae, neque."}/>
      <Alert title="Note" type="info" icon = {<Info size={20} />}  discription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus error totam nesciunt incidunt omnis, suscipit culpa inventore molestias? Beatae, neque."}/>
      <Alert title="Tios and Tricks" type="warning" icon = {<CheckCheck size={20} />}  discription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus error totam nesciunt incidunt omnis, suscipit culpa inventore molestias? Beatae, neque."}/>
      <Alert title="Product Added" type="success" icon = {<AlertTriangle size={20} />}  discription={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus error totam nesciunt incidunt omnis, suscipit culpa inventore molestias? Beatae, neque."}/>
    </div>
  )
}
export default App