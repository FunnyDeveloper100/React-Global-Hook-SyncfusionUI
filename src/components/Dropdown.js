import GenericDropDown from './GenericDropDown';
import React, { useState } from 'react'
import GenericComboBox from './GenericComboBox';
import GenericListBox from './GenericListBox';
import GerericMultiSelectCombo from './GerericMultiSelectCombo';



function App(props) {
  const [sportsData] = useState([
    { Country: { Name: 'Australia' }, Code: { Id: 'AU' } },
    { Country: { Name: 'Bermuda' }, Code: { Id: 'BM' } },
    { Country: { Name: 'Canada' }, Code: { Id: 'CA' } },
    { Country: { Name: 'Cameroon' }, Code: { Id: 'CM' } },
    { Country: { Name: 'Denmark' }, Code: { Id: 'DK' } },
    { Country: { Name: 'France' }, Code: { Id: 'FR' } }
  ]);
  const [fields] = useState({ text: 'Country.Name', value: 'Code.Id' })

  async function Test() {
    return await sportsData;
  }

  async function BindData() {
    await Test().then((res) => {
      console.log(res);
    });
  }
  React.useEffect(() => {
    BindData();
});

  const dataA = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
  ];

  const dataB = [
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ]

  const toolbarSettings = { items: ['moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom'] };

  return (
    <div>
      <button onClick={BindData}>Test useEffects</button>
      <GenericDropDown id="ddlelement" items={sportsData} fields={fields}
        placeholder="select a country" />
      <hr />
      <GenericComboBox id="ddlelementCombo" items={sportsData} fields={fields}
        placeholder="select a country" />

      <hr />
      <GerericMultiSelectCombo id="multi" fields={fields} items={sportsData} mode={"CheckBox"
      } showSelectAll="true" showDropDownIcon="true"></GerericMultiSelectCombo>
      <hr />

      <div className="dual-list-wrapper">
        <div className="dual-list-groupa">
          <h4>Group A</h4>
          <GenericListBox items={dataA} fields={'text'}
            height="330px" scope="#combined-listbox" allowDragAndDrop={true}
            toolbarSettings={toolbarSettings} />
        </div>
        <div className="dual-list-groupb">
          <h4>Group B</h4>
          <GenericListBox id="combined-listbox" items={dataB} allowDragAndDrop={true}
            height="330px" fields={'text'} />
        </div>
      </div>
      <hr />
    </div>

  );
}

export default App;



