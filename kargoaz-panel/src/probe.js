import _ from 'lodash';
 
const services = ['Standard', 'Express', 'Express', 'Overnight', 'Standard'];
const info = document.createElement('p');
info.textContent = `Unique service types: ${_.uniq(services).join(', ')}`;
document.body.appendChild(info);