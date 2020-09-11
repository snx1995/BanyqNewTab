import { Button, ButtonGroup } from './button';
import { Modal } from './modal';
import { Icon } from './icon';
import { Input } from './input';
import { Dropdown } from './dropdown';
import { Select, Option } from './select';

const components = {
    Button,
    ButtonGroup,
    Icon,
    Input,
    Modal,
    Dropdown,
    Select,
    Option
}

function install(vue, options) {
    Object.keys(components).forEach(name => {
        vue.component(name, components[name])
    })
}

export default {
    install
}