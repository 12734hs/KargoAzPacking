import $ from 'jquery';
import _ from 'lodash';
import './style.css';
import logo from './assets/logo.png';
 
const shipments = [
  { id: 'KRG-1001', city: 'Baku',    status: 'delivered',  weight: 2.4 },
  { id: 'KRG-1002', city: 'Ganja',   status: 'in_transit', weight: 8.1 },
  { id: 'KRG-1003', city: 'Baku',    status: 'in_transit', weight: 1.2 },
  { id: 'KRG-1004', city: 'Sumgait', status: 'delivered',  weight: 5.0 },
  { id: 'KRG-1005', city: 'Baku',    status: 'pending',    weight: 3.3 },
];
 
const renderHeader = () => {
  const img = $('<img>').attr('src', logo).attr('id', 'logo');
  const title = $('<h1>').text('KargoAZ — Shipment Dashboard');
  $('#app').append(img, title);
};
 
const renderStats = () => {
  const byCity = _.countBy(shipments, 'city');
  const totalWeight = _.sumBy(shipments, 'weight');
  const list = $('<ul>').addClass('stats');
  _.forEach(byCity, (count, city) => {
    list.append($('<li>').text(`${city}: ${count} parcels`));
  });
  list.append($('<li>').addClass('total')
    .text(`Total weight: ${totalWeight.toFixed(1)} kg`));
  $('#app').append(list);
};
 
const renderCounter = () => {
  let clicks = 0;
  const out = $('<p>').addClass('counter').text('Refreshes: 0');
  const btn = $('<button>').text('Refresh dashboard').on('click', () => {
    clicks += 1;
    out.text(`Refreshes: ${clicks}`);
  });
  $('#app').append(btn, out);
};
 
$(document).ready(() => {
  $('body').append($('<div>').attr('id', 'app'));
  renderHeader();
  renderStats();
  renderCounter();
});