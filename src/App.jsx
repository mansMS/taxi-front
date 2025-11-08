import { useState } from 'react'
import viteLogo from '/icon-192x192.png'
import './App.css'

function App() {
  const [fromRoute, setFromRoute] = useState('')
  const [selectedDriverIds, setSelectedDriverIds] = useState([])

  const drivers = [
    { id: 1, name: 'Паша', car: 'Merkedek', carNumber: '980', carColor: 'Белый' },
    { id: 2, name: 'Мого', car: 'Самолет', carNumber: 'О634ЕА', carColor: 'Черный' },
    { id: 3, name: 'Марат', car: 'Самокат', carNumber: 'У980ОТ', carColor: 'Серый' },
    { id: 4, name: 'Челобай', car: 'Гьоко', carNumber: '123', carColor: 'Белый' },
    { id: 5, name: 'Паша', car: 'Merkedek', carNumber: '980', carColor: 'Белый' },
    { id: 6, name: 'Мого', car: 'Самолет', carNumber: 'О634ЕА', carColor: 'Черный' },
    { id: 7, name: 'Марат', car: 'Самокат', carNumber: 'У980ОТ', carColor: 'Серый' },
    { id: 8, name: 'Челобай', car: 'Гьоко', carNumber: '123', carColor: 'Белый' },
    { id: 9, name: 'Паша', car: 'Merkedek', carNumber: '980', carColor: 'Белый' },
    { id: 10, name: 'Мого', car: 'Самолет', carNumber: 'О634ЕА', carColor: 'Черный' },
    { id: 11, name: 'Марат', car: 'Самокат', carNumber: 'У980ОТ', carColor: 'Серый' },
    { id: 12, name: 'Челобай', car: 'Гьоко', carNumber: '123', carColor: 'Белый' },
  ]

  const driversWithLabels = drivers.map(({ id, name, car, carNumber, carColor }) => {
    return { id: id, label: name + ', ' + carColor + ' ' + car + ' ' + carNumber }
  })

  const allOption = { id: 0, label: 'Любое' };

  const driversWithAllOption = [allOption, ...driversWithLabels];

  const driversFinalList = driversWithAllOption;

  const updateFromRoute = (e) => {
    setFromRoute(e.target.value)
  }

  const updateSelectedDrivers = (e) => {
    const options = [...e.target.selectedOptions]
    const driverIds = options.map(option => option.value)
    // if (driverIds.length > 1) debugger;
    // debugger;
    // if (driverIds.includes(String(allOption.id))) {
    //   setSelectedDriverIds(driversFinalList.map(driver => String(driver.id)))
    // } else {
    setSelectedDriverIds(driverIds)
    // }

  }

  const selectedDrivers = driversFinalList.filter(driver => selectedDriverIds.includes(String(driver.id)))
  const selectedDriverLabels = selectedDrivers.map(driver => driver.label)


  return (
    <div>
      <div>
        <span >Откуда:</span> <input value={fromRoute} onChange={updateFromRoute} /> <span>*</span>
      </div>
      <div>
        <span>Авто:</span>
        <select name="drivers" id="CallPage-drivers" multiple value={selectedDriverIds} onChange={updateSelectedDrivers}>
          {driversFinalList.map(driver => <option value={driver.id} key={driver.id}>{driver.label}</option>)}
        </select>
      </div>
      <div>
        <div>From route: <span>{fromRoute}</span></div>
        <div>Driver ids: <span>{selectedDriverIds}</span></div>
        <div>Driver: {selectedDriverLabels.map(label => <div>{label}</div>)}</div>
      </div>
    </div>
  )
}

export default App
