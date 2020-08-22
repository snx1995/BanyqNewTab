import { Button, ButtonGroup } from './button';
import { Modal } from './modal';
import { Icon } from './icon';

const components = {
    Button,
    ButtonGroup,
    Icon,
    Modal
}

function install(vue, options) {
    Object.keys(components).forEach(name => {
        vue.component(name, components[name])
    })
}

export default {
    install
}