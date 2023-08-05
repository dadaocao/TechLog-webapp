import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {
    render() {
        return (
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
            />
        )
    }
}
// import React from 'react';
// import { render } from 'react-dom';
// import { SelectableGroup, createSelectable } from 'react-selectable';
// import SomeComponent from './SomeComponent';
//
// const SelectableComponent = createSelectable(SomeComponent);
//
// class DemoApp extends React.Component {
//
//     constructor (props) {
//         super(props);
//         this.state = {
//             selectedKeys: []
//         };
//     }
//
//     handleSelection (selectedKeys) {
//         this.setState({ selectedKeys });
//     }
//
//     render () {
//         return (
//             <SelectableGroup onSelection={this.handleSelection}>
//                 {this.props.items.map((item, i) => {
//                     let selected = this.state.selectedKeys.indexOf(item.id) > -1;
//                     return (
//                         <SelectableComponent key={i} selected={selected} selectableKey={item.id}>
//                             {item.title}
//                         </SelectableComponent>
//                     );
//                 })}
//             </SelectableGroup>
//         );
//     }
//
// }
// export default DemoApp;