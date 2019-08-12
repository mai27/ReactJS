import React, { Component } from 'react';
import Moment from 'moment'; // import module moment

export default class header extends Component {
	state = {
		waktu: Moment().format('dddd'), // mengubah format waktu
		time: Moment().format('LLL'), // mengubah format waktu
	};
	render() {
		let plus62 = require('moment/locale/id'); // mengambil dari file moment/locale/id
		Moment.updateLocale('id', plus62); // mengambil waktu dan bahasa yang dipilih
		return (
			<div>
				<h3>Aplikasi Aktivitas harianku</h3>
				<p>
					{this.state.waktu} {this.state.time}
				</p>
			</div>
		);
	}
}
