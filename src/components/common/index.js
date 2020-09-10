import { Button, ButtonGroup } from './button';
import { Modal } from './modal';
import { Icon } from './icon';
import { Input } from './input';
import { Dropdown } from './dropdown';

const components = {
    Button,
    ButtonGroup,
    Icon,
    Input,
    Modal,
    Dropdown
}

function install(vue, options) {
    Object.keys(components).forEach(name => {
        vue.component(name, components[name])
    })
}

export default {
    install
}