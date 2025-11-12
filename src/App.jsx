import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
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
    const allOptionId = String(allOption.id);
    const selectedOptions = [...e.target.selectedOptions]
    const newSelectedDriverIds = selectedOptions.map(option => option.value)
    const allWasChoosen = selectedDriverIds.includes(allOptionId);
    const allChoosenNow = newSelectedDriverIds.includes(allOptionId);

    if (allWasChoosen) {
      if (!allChoosenNow) {
        setSelectedDriverIds([])
      } else {
        setSelectedDriverIds(newSelectedDriverIds.filter(id => id !== allOptionId))
      }
    } else if (allChoosenNow) {
      setSelectedDriverIds(driversFinalList.map(driver => String(driver.id)))
    } else {
      setSelectedDriverIds(newSelectedDriverIds)
    }
  }

  const selectedDrivers = driversFinalList.filter(driver => selectedDriverIds.includes(String(driver.id)))
  const selectedDriverLabels = selectedDrivers.map(driver => driver.label)

  console.log('window.visualViewport', window.visualViewport)
  const top_indent = getComputedStyle(document.documentElement).getPropertyValue("--top-indent");

  useEffect(() => {
    document.body.style.height = `${window.visualViewport?.height}px`;
  }, []);


  return (
    <div className='App'>
      <div className='qwe qwe1'></div>
      <div className='qwe qwe2'></div>
      <div className='qwe qwe3' style={{ height: top_indent }}></div>
      <div className='qwe qwe4' style={{ height: window.visualViewport?.height }}></div>
      <div>
        <span >Откуда:</span> <input value={fromRoute} onChange={updateFromRoute} /> <span>*</span>
      </div>
      <div>top_indent {top_indent}</div>
      <div>visualViewport</div>
      <div>height: {window.visualViewport?.height}</div>
      <div>height: {window.visualViewport?.offsetLeft}</div>
      <div>height: {window.visualViewport?.offsetTop}</div>
      <div>height: {window.visualViewport?.onresize}</div>
      <div>height: {window.visualViewport?.onscroll}</div>
      <div>height: {window.visualViewport?.onscrollend}</div>
      <div>height: {window.visualViewport?.pageLeft}</div>
      <div>height: {window.visualViewport?.pageTop}</div>
      <div>height: {window.visualViewport?.scale}</div>
      <div>height: {window.visualViewport?.width}</div>
      <div>
        <span>Авто:</span>
        <select name="drivers" id="CallPage-drivers" multiple value={selectedDriverIds} onChange={updateSelectedDrivers}>
          {driversFinalList.map(driver => <option value={driver.id} key={driver.id}>{driver.label}</option>)}
        </select>
      </div>
      <div>
        <div>From route: <span>{fromRoute}</span></div>
        <div>Driver ids: <span>{selectedDriverIds}</span></div>
        <div>Driver: {selectedDriverLabels.map((label, index) => <div key={index}>{label}</div>)}</div>
      </div>
    </div>
  )
}

export default App
