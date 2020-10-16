const baseAPIUrl = "https://3000-fa00c828-35ac-4b3a-877c-cc9d5126ddd6.ws-us02.gitpod.io/";
//const baseAPIUrl = "https://3000-e2cdfb92-1e98-40e4-b573-9dfae6e651c6.ws-us02.gitpod.io"; // a mi me salía esta

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			productos: [],
			categorias: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			fetchCargarCategorias: async () => {
				let response = await fetch(`${baseAPIUrl}/categorias`);
				if (response.ok) {
					let categorias = await response.json();
					setStore({
						categorias: categorias
					});
					console.log(categorias);
					return true;
				} else {
					console.log(`get response failure: ${response.status}`);
					setStore({
						categorias: []
					});
					return false;
				}
			},
			fetchCrearCategoria: async nuevaCategoria => {
				try {
					let response = await fetch(`${baseAPIUrl}/categorias`, {
						method: "POST",
						body: JSON.stringify(nuevaCategoria),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						// hacer fetch! porque se creo una nueva
						// categoria y hay que refrescar la lista
						alert("nueva categoria agregada");
						return getActions().fetchCargarCategorias();
					} else {
						setStore({
							categorias: []
						});
						console.log(`post response failure: ${response.status}`);
						return false;
					}
				} catch (error) {
					console.log(`pasó esto: ${error}`);
					return false;
				}
			},

			fetchEditarCategoria: (categoria, categoria_id) => {
				fetch(`${baseAPIUrl}/categorias/${categoria_id}`, {
					method: "PUT",
					body: JSON.stringify(categoria),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						alert("se ha editado la categoria", JSON.stringify(data));
						getActions().fetchCargarCategorias();
					})
					.catch(error => console.log("Error:", error));
			},

			fetchEliminarCategoria: categoria_id => {
				fetch(`${baseAPIUrl}/categorias/${categoria_id}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						console.log("delete", data);
						getActions().fetchCargarCategorias();
						alert("categoría eliminada");
					})
					.catch(error => console.error("Error:", error));
			},

			// Fetch para traer los productos asociados a una categoria
			//fetchProductosenCategoria: async () => {
			//    let response = await fetch(`${baseAPIUrl}/productos/categoria/${categoria_id}`);
			//	if (response.ok) {
			//		let productos = await response.json();
			//		setStore({
			//			productos: productos
			//		});
			//		console.log(productos);
			//		return true;
			//	} else {
			//		console.log(`get response failure: ${response.status}`);
			//		setStore({
			//			productos: []
			//		});
			//		return false;
			//	}
			//},

			// Para productos

			fetchCargarProductos: async () => {
				let response = await fetch(`${baseAPIUrl}/productos`);
				if (response.ok) {
					let productos = await response.json();
					setStore({
						productos: productos
					});
					console.log(productos);
					return true;
				} else {
					console.log(`get response failure: ${response.status}`);
					setStore({
						productos: []
					});
					return false;
				}
			},

			fetchCrearProducto: async nuevoProducto => {
				try {
					let response = await fetch(`${baseAPIUrl}/productos`, {
						method: "POST",
						body: JSON.stringify(nuevoProducto),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						// hacer fetch! porque se creo un nuevo
						// producto y hay que refrescar la lista
						alert("nuevo producto agregado");
						return getActions().fetchCargarProductos();
					} else {
						setStore({
							productos: []
						});
						console.log(`post response failure: ${response.status}`);
						return false;
					}
				} catch (error) {
					console.log(`pasó esto: ${error}`);
					return false;
				}
			},

			fetchEditarProducto: (producto, producto_id) => {
				fetch(`${baseAPIUrl}/productos/${producto_id}`, {
					method: "PUT",
					body: JSON.stringify(producto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						alert("se ha modificado el producto", JSON.stringify(data));
						getActions().fetchCargarProductos();
					})
					.catch(error => console.log("Error:", error));
			},

			fetchEliminarProducto: producto_id => {
				fetch(`${baseAPIUrl}/productos/${producto_id}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						console.log("delete", data);
						getActions().fetchCargarProductos();
						alert("producto eliminado");
					})
					.catch(error => console.error("Error:", error));
			},

			//Login

			fetchLogin: async dataAccess => {
				try {
					let response = await fetch(`${baseAPIUrl}/login`, {
						method: "POST",
						body: JSON.stringify(dataAccess),
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`
						}
					});
					if (response.ok) {
						let acceso = await response.json();
						setStore({
							token: acceso.token
						});
						return true;
					} else {
						console.log(`get response failure: ${response.status}`);
						setStore({
							token: ""
						});
						return false;
					}
				} catch (error) {
					console.log(`pasó esto: ${error}`);
					return false;
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
