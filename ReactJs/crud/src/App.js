import React from 'react';
import './App.css';

import Modal from 'react-modal'; //mengambil module react-modal

import Header from './header';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}; // untukk styling pada modal

Modal.setAppElement('#root'); // membuat agar modal terhubung ke id root atau app

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			modalIsOpened: false,
			index: [],
			data: [],
		};

		this.openModal = this.openModal.bind(this); // untuk menghubungkan fungsi  ke class App
		this.afterOpenModal = this.afterOpenModal.bind(this); // untuk menghubungkan  fungsi ke class App
		this.closeModal = this.closeModal.bind(this); // untuk menghubungkan fungsi ke class App
	}

	openModal(data, i) {
		this.setState({ modalIsOpened: true, data: data, index: i }); // Parameter data dan i disimpan didalam state
	}

	afterOpenModal() {
		// tempat mengaksess references (id, name, dll) di dalam modal

		this.subtitle.style.color = '#00ff00';

		this.refs.editjam.value = this.state.data.jam; // mengisi value editjam dengan isi dari state data
		this.refs.editaktivitas.value = this.state.data.aktivitas;
	}
	closeModal() {
		this.setState({ modalIsOpened: false }); // mengembalikan state ke false agar modal bisa dibuka lagi
	}

	editTodo = a => {
		a.preventDefault(); // preventDefault untuk mencegah data yg belum diproses

		let ba = this.refs.editjam.value; // mengambil value dari input modal
		let ca = this.refs.editaktivitas.value; // mengambil value dari input modal
		let key = this.state.index; // mengambil value dari state

		this.state.todos.splice(key, 1, { jam: ba, aktivitas: ca }); // menghapus 1 baris data pada state todos dimulai dari index `key` dan mengganti baris yang dihapus dengan variabel `ba` dan `ca`

		this.setState({ todos: this.state.todos, data: [] }); // mengatur ulang data yang telah terubah dan menghapus value pada state `data`

		this.closeModal(); //memanggil fungsi `closeModal`
	};

	addTodo = e => {
		e.preventDefault(); // preventDefault untuk mencegah data yg belum diproses

		let jam = this.refs.jam.value; // mengambil value dari input jam
		let aktivitas = this.refs.aktivitas.value; // mengambil value dari input aktivitas

		this.state.todos.push({ jam, aktivitas }); // menambahkan data baru pada state todos
		this.setState({ todos: this.state.todos }); // mengatur ulang data yang telah terubah

		this.refs.formulir.reset(); // menghapus semua inputan dari form `formulir`
		this.refs.jam.focus(); // memfokuskan input pada input `jam`
	};

	removeTodo = i => {
		this.state.todos.splice(i, 1); // menghapus data dimulai dari index `i` sebanyak 1 baris
		this.setState({ todos: this.state.todos }); // mengatur ulang data yang telah terubah
	};
	render() {
		return (
			<div>
				<br />
				<div className="App">
					{/* memanggil import header */}
					<Header />
				</div>
				<form ref="formulir" className="form-inline">
					<div className="form-group mx-sm-3 mb-2">
						<input type="time" className="form-control" ref="jam" />
						<input type="text" className="form-control" ref="aktivitas" placeholder="jenis aktivitas" />
					</div>
					<div className="form-group mb-2">
						<button onClick={this.addTodo} className="btn btn-info">
							simpan
						</button>
					</div>
				</form>
				<hr />
				<div>
					<ul className="list-group">
						{this.state.todos.map((data, i) => ( // memanggil semua element pada array todos
							<li className="list-group-item" key={i}>
								<div>
									{data.jam} : {data.aktivitas}
									<button onClick={() => this.openModal(data, i)} className="btn btn-outline-primary mx-sm-3 mb-2">
										Edit
									</button>
									<button onClick={() => this.removeTodo(i)} className="btn btn-outline-danger mx-sm-3 mb-2">
										Hapus
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
				<Modal
					isOpen={this.state.modalIsOpened} // akan terbuka berdasarkan state modalIsOpened
					onAfterOpen={this.afterOpenModal} // akan tereksekusi setelah modal terbuka (untuk mengakses item di dalam modal)
					onRequestClose={this.closeModal} // akan tereksekusi saat modal akan ditutup
					style={customStyles} // mengatur style pada modal
				>
					<div>
						<h2 ref={subtitle => (this.subtitle = subtitle)}>Edit</h2>
						<form ref={editform => (this.editform = editform)}>
							<div className="form-group">
								<input type="time" ref="editjam" className="form-control" />
							</div>
							<div className="form-group">
								<input type="text" ref="editaktivitas" className="form-control" />
							</div>
							<div className="form-group mb-2 float-right">
								<button onClick={this.editTodo} className="btn btn-info">
									Simpan
								</button>
							</div>
							<div className="form-group mb-2 float-left">
								<button onClick={this.closeModal} className="btn btn-outline-danger">
									Batal
								</button>
							</div>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}
