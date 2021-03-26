import Select from '../UI/Input/Input';

const Dropdown = props => {
    console.log(props.elementConfig);
    return <Select elementConfig={props.elementSort} changed={props.onSort} />
}

export default Dropdown;