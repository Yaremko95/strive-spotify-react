import React from 'react';
import InputField from "./InputField";
function ModalForm(props) {

    const [credentials, setCredentials] = React.useState()

    return (
        React.Children.map(props.children, (input) =>
            React.cloneElement(input, {
                value: props.checkedValues.includes(checkbox.props.value),
                onChange: handleCheckboxChange
            })
        );
    );
}

export default ModalForm;